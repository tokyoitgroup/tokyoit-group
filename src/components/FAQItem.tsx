"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 p-4 bg-customBg z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex bg-customBg justify-between items-center focus:outline-none"
      >
        <span className="text-xl text-gray-800">{faq.question}</span>
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </motion.svg>
      </button>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-2 text-gray-700"
        >
          {faq.answer}
        </motion.p>
      )}
    </div>
  );
}
