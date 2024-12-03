"use client";

import faqs from "@/app/data/faqs.json";
import type { FAQ } from "@/types/types";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 text-center">
      {/* 제목 */}
      <h2 className="text-2xl sm:text-4xl bg-gray-100 inline-block font-bold text-center mb-12 text-blue-600">
        よくある質問
      </h2>

      {/* FAQ 목록 */}
      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {faqs.map((faq: FAQ, index: number) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
