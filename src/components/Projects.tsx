"use client";

import projects from "@/app/data/projects.json";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      {/* 제목 영역 */}
      <div className="text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-600 bg-customBg py-2 px-4 rounded-lg shadow-lg inline-block">
          サイドプロジェクト紹介
        </h2>
        {/* <p className="text-base sm:text-lg md:text-xl text-gray-700 bg-customBg py-2 px-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          私たちのメンバーが 
        </p> */}
      </div>

      {/* 프로젝트 카드 영역 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}