
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import InstagramFeed from "@/components/social/InstagramFeed";
import { Instagram } from "lucide-react";

const HomePage = () => {
  return (
    <MainLayout showToast={true}>
      <Hero />
      <Features />
      <Testimonials />
      
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            Join the <span className="gold-text">#UNSHAKN</span> Community
          </h2>
          <p className="text-muted-foreground">
            Follow us on Instagram for fitness inspiration, new releases, and community highlights.
          </p>
        </div>
        
        <InstagramFeed />
        
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/unshaknwears"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center"
          >
            <Instagram className="h-4 w-4 mr-1" />
            @unshaknwears
          </a>
        </div>
      </section>
      
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
