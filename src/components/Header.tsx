"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 스크롤 아래로: 헤더 숨기기
        setIsVisible(false);
      } else {
        // 스크롤 위로: 헤더 보이기
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed w-full z-50 top-0 left-0 bg-white shadow-md ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="sm:text-3xl font-bold text-blue-600">
          Tokyo IT Group
        </Link>
        <nav>
          <div className="hidden md:flex space-x-6">
            <Link
              to="introduction"
              smooth={true}
              duration={800}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              紹介
            </Link>
            <Link
              to="members"
              smooth={true}
              duration={800}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              メンバー
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              プロジェクト
            </Link>
            <Link
              to="photos"
              smooth={true}
              duration={800}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              写真
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-md"
        >
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              to="introduction"
              smooth={true}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              紹介
            </Link>
            <Link
              to="members"
              smooth={true}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              メンバー
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              プロジェクト
            </Link>
            <Link
              to="photos"
              smooth={true}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              写真
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
