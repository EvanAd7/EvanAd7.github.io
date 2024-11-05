export default function Project({title, description, image, technologies, link}) {
    return (
        <div
            onClick={() => link && window.open(link, "_blank")}
            className="mx-auto rounded-xl overflow-hidden shadow bg-white 
                   transition-all duration-300 flex cursor-pointer hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="h-56 w-96">
                <img
                    src={image}
                    alt={description}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-5 max-w-sm">
                <p className="text-black font-medium text-xl mb-2">{title}</p>
                <p className="text-gray-700 mb-4">{description}</p>
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