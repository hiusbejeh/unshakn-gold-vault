
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption: string;
  timestamp: string;
}

// Simulated Instagram posts for demo purposes
const dummyPosts: InstagramPost[] = [
  {
    id: "1",
    mediaUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    permalink: "https://www.instagram.com/p/1",
    caption: "New collection dropping this weekend! #UNSHAKN #AthleticWear",
    timestamp: "2023-10-10T12:00:00Z"
  },
  {
    id: "2",
    mediaUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&h=500&q=80",
    permalink: "https://www.instagram.com/p/2",
    caption: "Training day with UNSHAKN gear #FitnessLife #UNSHAKN",
    timestamp: "2023-10-08T15:30:00Z"
  },
  {
    id: "3",
    mediaUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    permalink: "https://www.instagram.com/p/3",
    caption: "Behind the scenes at our latest photoshoot #ComingSoon #UNSHAKN",
    timestamp: "2023-10-05T09:15:00Z"
  },
  {
    id: "4",
    mediaUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    permalink: "https://www.instagram.com/p/4",
    caption: "Morning workout motivation #UNSHAKN #FitLife",
    timestamp: "2023-10-03T07:45:00Z"
  },
  {
    id: "5",
    mediaUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    permalink: "https://www.instagram.com/p/5",
    caption: "Limited edition collection now available #UNSHAKN #LimitedEdition",
    timestamp: "2023-10-01T18:20:00Z"
  },
  {
    id: "6",
    mediaUrl: "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    permalink: "https://www.instagram.com/p/6",
    caption: "UNSHAKN ambassador showcase #TeamUNSHAKN #Athletes",
    timestamp: "2023-09-28T14:10:00Z"
  },
];

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be replaced with actual Instagram API fetch
    // For now, we'll simulate loading delay and use dummy data
    const fetchPosts = async () => {
      setLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real implementation, we would fetch posts from Instagram API here
        setPosts(dummyPosts);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-square bg-muted animate-pulse rounded-md"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-md group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={post.mediaUrl} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="flex items-center text-white">
                  <Instagram className="h-4 w-4 mr-1" />
                  <span className="text-xs line-clamp-1">
                    {post.caption.length > 30 
                      ? post.caption.substring(0, 30) + '...' 
                      : post.caption}
                  </span>
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-1 bg-black/30 backdrop-blur-sm rounded-full">
                  <ExternalLink className="h-3 w-3 text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
