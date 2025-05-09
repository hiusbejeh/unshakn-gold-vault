
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import LoginForm from "@/components/auth/LoginForm";
import { motion } from "framer-motion";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("unshakn-admin");
    if (auth) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <MainLayout>
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-lg mb-4"
            >
              Admin <span className="gold-text">Login</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {isLoggedIn
                ? "You are currently logged in as an admin."
                : "Log in to access the admin dashboard."}
            </motion.p>
          </div>

          {isLoggedIn ? (
            <div className="text-center">
              <button
                onClick={handleGoToDashboard}
                className="gold-gradient hover:opacity-90 text-black font-medium px-6 py-2 rounded-md"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
