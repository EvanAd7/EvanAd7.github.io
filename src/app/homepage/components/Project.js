export default function Project({
  title,
  description,
  image,
  technologies,
  link,
}) {
  return (
    <div
      onClick={() => link && window.open(link, "_blank")}
      className="rounded-xl overflow-hidden shadow bg-white 
                 transition-all duration-300 hover:shadow-lg cursor-pointer flex hover:-translate-y-1 max-w-3xl"
    >
      <div className="h-48 w-96 relative">
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-black text-xl mb-2">{title}</p>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
