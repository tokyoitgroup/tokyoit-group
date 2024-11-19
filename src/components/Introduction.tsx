import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="flex flex-col items-center mx-2 my-40 text-center"
    >
      {/* 제목 */}
      <motion.div
        className="bg-customBg px-4 py-2 rounded-lg mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl font-bold text-blue-600">Tokyo IT Group</h2>
      </motion.div>

      {/* 첫 번째 문장 */}
      <motion.div
        className="bg-customBg px-4 py-2 rounded-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-xl text-gray-700">
          一人では挫けそうなときも、仲間がいれば乗り越えられる。
        </p>
      </motion.div>

      {/* 두 번째 문장 */}
      <motion.div
        className="bg-customBg px-4 py-2 rounded-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-xl text-gray-700">
          私たちは、共に学び合い、成長し続けるエンジニアの集まりです。
        </p>
      </motion.div>

      {/* 세 번째 문장 */}
      <motion.div
        className="bg-customBg px-4 py-2 rounded-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-lg text-gray-600">
          新しい技術の探求、自分を磨く努力、そして仲間との絆がここにはあります。
        </p>
      </motion.div>

      {/* 이미지 */}
      <motion.img
        src="/images/1.WEBP"
        alt="メイン画像"
        className="rounded-lg shadow-lg w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </section>
  );
}
