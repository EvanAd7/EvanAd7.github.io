import { description } from "/data/description";

export default function Headline() {
  return (
    <div className="mx-auto mt-20 max-w-2xl">
      <h2 className="text-5xl font-bold text-black mb-8 text-center">
        👋 Hi, I'm Evan
      </h2>

      <div className="text-xl text-gray-700 leading-relaxed text-left mx-auto">
        {description}
      </div>
    </div>
  );
}
