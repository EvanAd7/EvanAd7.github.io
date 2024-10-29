import { description } from '/data/description'

export default function Headline() {
  return (
    <div className="px-[150px] mt-20">
      <h2 className="text-[40px] font-bold text-black mb-4">
        👋 Hi, I'm Evan
      </h2>
      
      <div className="text-xl text-gray-700 leading-relaxed">
        {description}
      </div>
    </div>
  );
}
