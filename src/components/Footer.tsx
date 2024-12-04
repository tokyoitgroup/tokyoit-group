import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-blue-600 text-white py-6">
    <div className="container mx-auto text-center">
      <p>© 2024 Tokyo IT Group. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="https://x.com" aria-label="X (旧Twitter)">
          <Image
            src="/images/icons/twitter-original.svg"
            alt="X (旧Twitter)"
            width={32}
            height={32}
            className="hover:opacity-80"
          />
        </Link>
        <Link href="https://facebook.com" aria-label="Facebook">
          <Image
            src="/images/icons/facebook-original.svg"
            alt="Facebook"
            width={32}
            height={32}
            className="hover:opacity-80"
          />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram">
          <Image
            src="/images/icons/Instagram-original.svg"
            alt="Instagram"
            width={32}
            height={32}
            className="hover:opacity-80"
          />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
