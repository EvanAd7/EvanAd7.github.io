import { description } from '/data/description'

export default function Headline() {
  return (
    <div className="px-[150px] mt-20">
      <h2 className="text-[40px] font-bold text-gray-300 mb-4">
        👋 Hi, I'm Evan
      </h2>
      
      <div className="text-xl text-gray-300 leading-relaxed">
        {description}
      </div>
    </div>
  );
}
