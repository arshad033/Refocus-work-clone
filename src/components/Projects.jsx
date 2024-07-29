import React from 'react';
import Project from './Project'
function Projects() {
  const project = [{
    projectName: 'Arqitel',
    description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
    buttons: ['Live Website']
  },
  {
    projectName: 'EcoHomes',
    description: 'An interactive platform that promotes sustainable living by connecting users with eco-friendly housing options and resources.',
    buttons: ['Live Website', 'GitHub Repo']
  },
  {
    projectName: 'HealthSync',
    description: 'A comprehensive health management app that integrates with wearable devices to track fitness, nutrition, and overall wellness.',
    buttons: ['Live Website', 'App Store']
  },
  {
    projectName: 'TravelMate',
    description: 'A travel planning tool that uses AI to suggest personalized itineraries, accommodations, and activities based on user preferences.',
    buttons: ['Live Website', 'Google Play']
  },
  {
    projectName: 'EduLearn',
    description: 'An online learning platform offering interactive courses, quizzes, and certifications across various subjects and skill levels.',
    buttons: ['Live Website', 'Course Catalog']
  }]
  return (
    <div className='text-white w-full mt-28'>
      {project.map((item, index)=><Project key={index} item={item}/>)}
    </div>
  )
}

export default Projects