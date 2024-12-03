import members from "@/app/data/members.json";
import MemberCard from "./MemberCard";

const Members = () => (
  <section id="members" className="py-16 px-4">
    {/* 텍스트 영역 */}
    <div className="text-center flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-600 bg-customBg py-2 px-4 rounded-lg shadow-lg inline-block">
        メンバー
      </h2>
      <div className="bg-customBg py-4 px-6 sm:px-8 md:px-10 rounded-lg shadow-lg inline-block text-left max-w-xl mx-auto">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
          私たちのグループには、さまざまな経験や
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
          専門分野を持つエンジニアが集まっています。
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
          共通の目標は、
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          互いに協力しながら成長していくことです。
        </p>
      </div>
    </div>

    {/* 멤버 카드 영역 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  </section>
);

export default Members;
