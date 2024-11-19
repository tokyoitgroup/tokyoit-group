import { FaInstagram } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 Tokyo IT Group. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://x.com" aria-label="X (旧Twitter)">
            <FaXTwitter className="text-2xl hover:text-gray-300" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaMeta className="text-2xl hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}