
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PaymentOptionsProps {
  onSelect: (method: string) => void;
  selectedMethod: string;
}

const PaymentOptions = ({ onSelect, selectedMethod }: PaymentOptionsProps) => {
  const paymentMethods = [
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Pay when you receive your order",
    },
    {
      id: "credit_card",
      name: "Credit Card",
      description: "Pay securely with your card",
    },
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      description: "Pay via bank transfer",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Payment Method</h3>
      
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.02 }}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => onSelect(method.id)}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
              
              {selectedMethod === method.id && (
                <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-black">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedMethod === "cod" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/50 p-4 rounded-lg mt-2"
        >
          <p className="text-sm">
            <strong>Note:</strong> Cash on Delivery is available for all areas. Our delivery driver will accept cash payment when you receive your order.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PaymentOptions;
