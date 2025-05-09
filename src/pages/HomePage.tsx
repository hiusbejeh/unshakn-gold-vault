
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const HomePage = () => {
  return (
    <MainLayout showToast={true}>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
