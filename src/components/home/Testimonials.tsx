
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Unshakn has completely transformed how we approach data analytics. The AI-powered insights have given us a competitive edge we didn't have before.",
    name: "Sarah Johnson",
    role: "CTO, TechVision",
    avatar: "SJ",
  },
  {
    quote:
      "The platform's scalability is impressive. We've grown from a small startup to over 200 employees, and Unshakn has scaled perfectly with our needs.",
    name: "Michael Chen",
    role: "CEO, GrowthWave",
    avatar: "MC",
  },
  {
    quote:
      "Security was our primary concern when looking for a solution, and Unshakn exceeded all our expectations. Their enterprise-grade protection gives us peace of mind.",
    name: "Emily Rodriguez",
    role: "Security Director, DataShield",
    avatar: "ER",
  },
  {
    quote:
      "The customer support team at Unshakn is phenomenal. They're responsive, knowledgeable, and genuinely care about our success.",
    name: "James Wilson",
    role: "Operations Manager, Global Reach",
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Trusted by <span className="gold-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients have to say about their experience with Unshakn's innovative solutions.
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="glass-card p-8 md:p-10 rounded-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">
                      {testimonial.avatar}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground/60">
            TechVision
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground/60">
            GrowthWave
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground/60">
            DataShield
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground/60">
            Global Reach
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
