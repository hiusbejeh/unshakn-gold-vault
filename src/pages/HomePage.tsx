
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <MainLayout showToast={true}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading 3D elements...</div>}>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </Suspense>
    </MainLayout>
  );
};

export default HomePage;
