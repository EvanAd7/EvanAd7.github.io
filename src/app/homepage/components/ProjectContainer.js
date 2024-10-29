import Project from './Project'
import { projects } from '/data/projects'

export default function ProjectContainer() {
    return (
        <div className="px-[150px] mt-20">
            <h2 className="text-[40px] font-bold text-black mb-4">
                My Projects
            </h2>
            <div className="overflow-x-auto pb-6">
                <div className="flex gap-8 min-w-min">
                    {projects.map((project, index) => (
                        <div key={index} className="w-[400px] shrink-0">
                            <Project {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}