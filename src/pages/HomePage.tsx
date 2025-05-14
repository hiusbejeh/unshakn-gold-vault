
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SocialLinks from "@/components/social/SocialLinks";
import InstagramFeed from "@/components/social/InstagramFeed";

const HomePage = () => {
  return (
    <MainLayout showToast={true}>
      <Hero />
      <FeaturedProducts />
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
      </section>
      
      <SocialLinks />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
