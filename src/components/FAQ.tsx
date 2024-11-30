"use client";

import faqs from "@/app/data/faqs.json";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 text-center">
      <h2 className="text-2xl sm:text-4xl bg-customBg inline-block font-bold text-center mb-12 text-blue-600">
        よくある質問
      </h2>
      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
}
