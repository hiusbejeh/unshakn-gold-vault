
import { useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data/products";
import { Check, Pin, Search, Star, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock review data
interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  isPinned: boolean;
}

const generateMockReviews = () => {
  const reviews: Review[] = [];
  const names = ["John Smith", "Maria Garcia", "David Lee", "Sarah Johnson", "Michael Brown", "Emma Wilson", "James Taylor", "Olivia Davis"];
  const comments = [
    "Great quality product, exactly as described!",
    "Fits perfectly and arrived quickly. Very pleased with my purchase.",
    "The material is excellent but sizing runs a bit small.",
    "Amazing product! Will definitely buy more in different colors.",
    "Good value for money, but delivery took longer than expected.",
    "Love the design and comfort. Perfect for my training sessions.",
    "The quality exceeds my expectations. Highly recommended!",
    "Nice product but the color is slightly different from the photos.",
    "Comfortable and stylish. Gets lots of compliments!",
    "Decent quality but not worth the price in my opinion.",
  ];
  
  products.forEach(product => {
    // Generate 1-3 random reviews per product
    const reviewCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < reviewCount; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomComment = comments[Math.floor(Math.random() * comments.length)];
      const randomRating = Math.floor(Math.random() * 3) + 3; // 3-5 stars
      const randomDate = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000); // Random date within last 30 days
      
      reviews.push({
        id: `review-${product.id}-${i}`,
        productId: product.id,
        userName: randomName,
        rating: randomRating,
        comment: randomComment,
        date: randomDate.toISOString().split('T')[0],
        isPinned: false,
      });
    }
  });
  
  return reviews;
};

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(generateMockReviews());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const { toast } = useToast();
  
  const filteredReviews = reviews
    .filter(review => {
      const product = products.find(p => p.id === review.productId);
      return (
        (product?.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         review.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         review.comment.toLowerCase().includes(searchTerm.toLowerCase())) && 
        (filterRating === null || review.rating === filterRating)
      );
    })
    .sort((a, b) => {
      // Sort by pinned first, then by date
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  
  const handleTogglePin = (id: string) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === id ? { ...review, isPinned: !review.isPinned } : review
      )
    );
    
    const review = reviews.find(r => r.id === id);
    const action = review?.isPinned ? "unpinned" : "pinned";
    
    toast({
      title: `Review ${action}`,
      description: `The review has been ${action} successfully.`,
    });
  };
  
  const handleDelete = (id: string) => {
    setReviews(prev => prev.filter(review => review.id !== id));
    
    toast({
      title: "Review deleted",
      description: "The review has been removed successfully.",
    });
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-gold-DEFAULT fill-gold-DEFAULT" : "text-muted-foreground"}`}
      />
    ));
  };

  const getAverageRating = () => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };
  
  const getRatingCount = (rating: number) => {
    return reviews.filter(review => review.rating === rating).length;
  };

  const getTotalReviews = () => reviews.length;

  return (
    <AdminLayout title="Ratings & Reviews">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <p className="text-muted-foreground">
          Manage and respond to customer feedback across your products
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-gold-DEFAULT fill-gold-DEFAULT" />
                Review Stats
              </CardTitle>
              <CardDescription>
                Overview of customer feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <span className="text-4xl font-bold">{getAverageRating()}</span>
                  <div className="flex items-center justify-center my-2">
                    {renderStars(Math.round(parseFloat(getAverageRating())))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Based on {getTotalReviews()} reviews
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center">
                    <div className="w-12 flex-shrink-0 flex items-center">
                      <span className="text-sm font-medium">{rating} star</span>
                    </div>
                    <div className="flex-1 mx-4 h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${(getRatingCount(rating) / getTotalReviews()) * 100}%` }}
                        transition={{ duration: 1, delay: rating * 0.1 }}
                        className={`h-full ${rating >= 4 ? "bg-green-500" : rating === 3 ? "bg-amber-500" : "bg-red-500"}`}
                      ></motion.div>
                    </div>
                    <div className="w-10 flex-shrink-0 text-right">
                      <span className="text-sm font-medium">{getRatingCount(rating)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Filter by Rating</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={filterRating === null ? "default" : "outline"}
                    onClick={() => setFilterRating(null)}
                    className={filterRating === null ? "bg-gold-DEFAULT text-black" : ""}
                  >
                    All
                  </Button>
                  {[5, 4, 3, 2, 1].map(rating => (
                    <Button
                      key={rating}
                      size="sm"
                      variant={filterRating === rating ? "default" : "outline"}
                      onClick={() => setFilterRating(rating)}
                      className={filterRating === rating ? "bg-gold-DEFAULT text-black" : ""}
                    >
                      {rating} Star
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <div className="mb-4">
            <Input
              placeholder="Search reviews by product, user or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-gold-dark/30"
              icon={<Search className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
          
          <div className="space-y-4">
            {filteredReviews.length > 0 ? (
              filteredReviews.map(review => {
                const product = products.find(p => p.id === review.productId);
                
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={`border ${review.isPinned ? "border-gold-DEFAULT/50" : ""}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <img
                              src={product?.image}
                              alt={product?.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">
                                {product?.name}
                                {review.isPinned && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gold-DEFAULT/20 text-gold-DEFAULT">
                                    <Pin className="h-3 w-3 mr-1" />
                                    Pinned
                                  </span>
                                )}
                              </h3>
                              <div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className={`h-8 w-8 ${review.isPinned ? "bg-gold-DEFAULT/10 text-gold-DEFAULT" : ""}`}
                                  onClick={() => handleTogglePin(review.id)}
                                >
                                  <Pin className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 ml-2 text-red-500 hover:bg-red-500/10"
                                  onClick={() => handleDelete(review.id)}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex items-center mt-1">
                              {renderStars(review.rating)}
                              <span className="text-xs text-muted-foreground ml-2">
                                {review.date}
                              </span>
                            </div>
                            
                            <p className="mt-2 text-sm">{review.comment}</p>
                            
                            <div className="mt-3 flex items-center justify-between">
                              <span className="text-sm font-medium">{review.userName}</span>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs border-green-500/30 text-green-500 hover:bg-green-500/10"
                              >
                                <Check className="h-3 w-3 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No reviews found</h3>
                  <p className="text-muted-foreground">
                    No reviews match your current search or filter criteria.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReviews;
