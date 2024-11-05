import { description } from '/data/description'

export default function Headline() {
  return (
    <div className="max-w-3xl mb-6 text-lg text-gray-700 whitespace-pre-line leading-relaxed text-left mx-auto">
      {description}
    </div>
  );
}
