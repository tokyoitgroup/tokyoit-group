import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const photos = [
  { src: "/images/IMG_6191.WEBP", alt: "勉強会での学習風景" },
  { src: "/images/IMG_6191.WEBP", alt: "みんなで食事" },
  { src: "/images/IMG_6191.WEBP", alt: "みんなで食事" },
  { src: "/images/IMG_6191.WEBP", alt: "みんなで食事" },
  { src: "/images/profile2.webp", alt: "みんなで食事" },
  { src: "/images/profile2.webp", alt: "みんなで食事" },
  { src: "/images/2.jpeg", alt: "みんなで食事" },
  { src: "/images/profile2.webp", alt: "みんなで食事" },
  { src: "/images/IMG_6191.WEBP", alt: "みんなで食事" },
  { src: "/images/IMG_6191.WEBP", alt: "みんなで食事" },
  // 他の写真を追加
];

export default function Photos() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="photos" className="py-16 px-4">
      {/* 제목과 설명 */}
      <div className="text-center flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 bg-customBg py-2 px-4 rounded-lg shadow-lg inline-block">
          勉強会の様子
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 bg-customBg py-2 px-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-4">
          勉強会の後、希望者で昼食を一緒に楽しむこともあります。学びと交流を写真でご覧ください。
        </p>
      </div>

      {/* 사진 갤러리 */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => (
          <div key={index} className="mb-4">
            <motion.img
              src={photo.src}
              alt={photo.alt}
              className="w-full rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}
