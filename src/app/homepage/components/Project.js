export default function Project({ description, image, technologies, link }) {
    return (
        <div
            onClick={() => link && window.open(link, '_blank')}
            className="max-w-[500px] rounded-xl overflow-hidden shadow-md bg-gray-800 
                 transition-all duration-300 hover:shadow-2xl cursor-pointer"
        >
            <div className="w-full h-48 relative">
                <img
                    src={image}
                    alt={description}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <p className="text-gray-300 mb-4 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
