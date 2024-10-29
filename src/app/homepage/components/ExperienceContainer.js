import { experiences } from '/data/experiences'
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
    return (
        <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-700">{experience.position}</h3>
                <div className="flex justify-between text-gray-500">
                    <p>{experience.company}</p>
                    <p className="text-gray-600 text-sm">{experience.duration}</p>
                </div>
            </div>
        </div>
    );
};

export default function ExperienceContainer() {
    return (
        <div className="w-full">
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold text-gray-700">Experience</h2>
                </div>
                
                <div>
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}
