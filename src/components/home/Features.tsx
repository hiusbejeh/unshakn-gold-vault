
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Analytics",
    description: "Leverage advanced AI algorithms to extract actionable insights from your data.",
    icon: "✨",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows without disruption.",
    icon: "🔄",
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, regardless of location.",
    icon: "👥",
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security protecting your data at every level.",
    icon: "🔒",
  },
  {
    title: "Scalable Architecture",
    description: "Grows with your business, from startup to enterprise without missing a beat.",
    icon: "📈",
  },
  {
    title: "24/7 Support",
    description: "Our expert team is always available to help you succeed.",
    icon: "🌐",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Powerful Features for <span className="gold-text">Modern Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with intuitive design to deliver
            exceptional results for businesses of all sizes.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-8 rounded-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
