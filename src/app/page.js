'use client'

import Headline from './homepage/components/Headline'
import ProjectContainer from './homepage/components/ProjectContainer'
import ExperienceContainer from './homepage/components/ExperienceContainer'
import EducationContainer from './homepage/components/EducationContainer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Headline />
      <ProjectContainer />
      <div className="mt-10 mb-12 flex flex-col md:flex-row justify-center gap-8 mx-auto max-w-6xl">
        <div className="w-full md:w-1/2">
          <ExperienceContainer />
        </div>
        <div className="w-full md:w-1/2">
          <EducationContainer />
        </div>
      </div>
    </main>
  );
}
