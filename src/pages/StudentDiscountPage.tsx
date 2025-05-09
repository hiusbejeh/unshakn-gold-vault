
import MainLayout from "@/layouts/MainLayout";
import VerificationForm from "@/components/student/VerificationForm";
import VerificationSteps from "@/components/student/VerificationSteps";
import { motion } from "framer-motion";

const StudentDiscountPage = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-lg mb-4"
            >
              <span className="gold-text">50% Off</span> For Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              We're proud to support the next generation of athletes.
              Get verified as a student and unlock 50% off all our premium gear.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <VerificationForm />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 h-[400px] relative overflow-hidden rounded-xl"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold via-gold-dark to-black opacity-60"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&h=800&q=80" 
                alt="Students with Unshakn gear" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-5xl md:text-7xl font-bold text-white text-opacity-90"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  50% OFF
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-24">
            <VerificationSteps />
          </div>
          
          <div className="mt-16 bg-muted/30 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Who is eligible?</h3>
                <p className="text-muted-foreground">
                  Any student currently enrolled in an accredited university, college, or high school is eligible for our student discount.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">How long does verification take?</h3>
                <p className="text-muted-foreground">
                  Most verifications are completed within 24-48 hours. You'll receive an email once your status is confirmed.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">How long is the discount valid?</h3>
                <p className="text-muted-foreground">
                  The student discount is valid for one year from the date of verification. You can renew by verifying your status again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default StudentDiscountPage;
