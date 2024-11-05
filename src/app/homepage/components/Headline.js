import { description } from '/data/description'

export default function Headline() {
  return (
    <div className="mx-auto mt-20 mb-6 max-w-3xl">
      <h2 className="text-5xl text-center font-medium text-black mb-6">
        Evan Adami
      </h2>

      <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed text-left mx-auto">
        {description}
      </div>
    </div>
  );
}
