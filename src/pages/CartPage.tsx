
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Trash2, ArrowLeft, PackageCheck } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import PaymentOptions from "@/components/checkout/PaymentOptions";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: paymentMethod === "cod" 
        ? "Your order will be delivered soon. Please prepare cash for delivery." 
        : "Your order has been placed. Thank you for shopping with UNSHAKN!",
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="pt-32 pb-16 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ShoppingCart className="mx-auto h-20 w-20 text-muted-foreground mb-4" />
            <h1 className="heading-lg mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild className="gold-gradient text-black">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="pt-32 pb-16 container mx-auto px-4 md:px-6">
        <Button 
          variant="ghost" 
          className="mb-8"
          asChild
        >
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>

        <h1 className="heading-lg mb-8">
          Your <span className="gold-text">Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                className="flex flex-col sm:flex-row gap-4 mb-6 p-4 border rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-full sm:w-24 h-24 bg-muted rounded-md overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="font-bold gold-text">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <div className="mt-2 text-sm text-muted-foreground">
                    <p>Size: {item.size}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 text-xs"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 text-xs"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="gold-text">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <PaymentOptions 
                onSelect={setPaymentMethod}
                selectedMethod={paymentMethod}
              />
              
              <Button 
                className="w-full mt-6 gold-gradient text-black font-bold"
                size="lg"
                onClick={handleCheckout}
              >
                <PackageCheck className="mr-2 h-5 w-5" /> 
                Place Order
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                By placing your order, you agree to our 
                <Link to="/terms" className="text-primary hover:underline mx-1">
                  Terms of Service
                </Link>
                and
                <Link to="/privacy" className="text-primary hover:underline ml-1">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CartPage;
