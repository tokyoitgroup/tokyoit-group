import { Photo } from "@/types/types";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const photos: Photo[] = [
  { src: "/images/study/1.webp", alt: "Study photo 1" },
  { src: "/images/study/2.webp", alt: "Study photo 2" },
  { src: "/images/study/5.webp", alt: "Study photo 3" },
  { src: "/images/study/3.webp", alt: "Study photo 4" },
  { src: "/images/study/4.webp", alt: "Study photo 5" },
  { src: "/images/study/6.webp", alt: "Study photo 6" },
  { src: "/images/study/7.webp", alt: "Study photo 7" },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const Photos = () => (
  <section id="photos" className="py-16 px-4">
    {/* 제목과 설명 */}
    <div className="text-center flex flex-col items-center mb-12">
      <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 bg-customBg py-2 px-4 rounded-lg shadow-lg inline-block">
        われわれの活動
      </h2>
      {/* <p className="text-base sm:text-lg md:text-xl text-gray-700 bg-customBg py-2 px-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-4">
        </p> */}
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

export default Photos;
