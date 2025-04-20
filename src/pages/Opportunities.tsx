import React from 'react';
import { Briefcase, Building2, GraduationCap } from 'lucide-react';

export function Opportunities() {
  const opportunities = [
    {
      title: "Frontend Developer",
      company: "TechCorp Africa",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build modern web applications using React and TypeScript.",
      requirements: ["3+ years of frontend development", "Strong JavaScript skills", "React expertise"]
    },
    {
      title: "Data Scientist Intern",
      company: "DataTech Solutions",
      location: "Nairobi, Kenya",
      type: "Internship",
      description: "Learn and apply data science techniques in a fast-paced environment.",
      requirements: ["Statistics background", "Python programming", "Machine learning basics"]
    },
    {
      title: "Mobile Developer",
      company: "AfriApps",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Create innovative mobile applications for the African market.",
      requirements: ["React Native experience", "API integration skills", "Published apps"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Career Opportunities</h1>
          <p className="text-xl">Find your next role in tech</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Opportunities</h3>
              <p className="text-gray-600">Find roles at leading tech companies across Africa</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partner Companies</h3>
              <p className="text-gray-600">Connect with companies looking for tech talent</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">Develop your skills and advance your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest Opportunities</h2>
          <div className="space-y-6">
            {opportunities.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="ml-2 text-gray-500">{job.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}