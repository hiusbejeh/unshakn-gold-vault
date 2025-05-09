
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Complete the Form",
    description: "Fill out our student verification form with your academic details.",
    icon: "📝",
  },
  {
    number: 2,
    title: "Upload Documentation",
    description: "Provide a copy of your student ID or enrollment verification letter.",
    icon: "📤",
  },
  {
    number: 3,
    title: "Verification Review",
    description: "Our team will review your submission within 24-48 hours.",
    icon: "🔍",
  },
  {
    number: 4,
    title: "Get Your Discount",
    description: "Once verified, you'll receive a unique code for 50% off all products.",
    icon: "🎉",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VerificationSteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our student verification process is simple, secure, and quick. Follow these steps to get your discount.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="glass-card p-6 rounded-xl relative"
            >
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-black font-bold mb-4">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationSteps;
