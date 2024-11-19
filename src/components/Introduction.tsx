import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section id="introduction" className="mx-2 my-40 text-center">
      {/* 제목 */}
      <motion.h2
        className="text-5xl font-bold mb-6 bg-customBg text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="block md:inline">Tokyo IT</span>{" "}
        <span className="block md:inline">Group</span>
      </motion.h2>

      {/* 첫 번째 문장 */}
      <motion.p
        className="text-xl mt-12 bg-customBg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="block md:inline">一人では挫けそうなときも、</span>{" "}
        <span className="block md:inline">仲間がいれば乗り越えられる。</span>
      </motion.p>

      {/* 두 번째 문장 */}
      <motion.p
        className="text-xl mb-12 bg-customBg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="block md:inline">私たちは、共に学び合い、</span>{" "}
        <span className="block md:inline">
          成長し続けるエンジニアの集まりです。
        </span>
      </motion.p>

      {/* 세 번째 문장 */}
      <motion.p
        className="text-lg mb-12 bg-customBg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="inline-block">
          新しい技術の探求、自分を磨く努力、そして仲間との絆がここにはあります。
        </span>
      </motion.p>

      {/* 이미지 */}
      <motion.img
        src="/images/1.WEBP"
        alt="メイン画像"
        className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </section>
  );
}
