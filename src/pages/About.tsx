import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About InsightTech Africa</h1>
          <p className="text-xl">Empowering the next generation of African tech leaders</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To bridge the digital skills gap in Africa by providing accessible, quality tech education.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To create a thriving tech ecosystem that positions Africa as a global tech talent hub.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-gray-600">A growing network of learners, mentors, and industry partners across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2025, InsightTech Africa emerged from a vision to transform the African tech landscape. We recognized the immense potential of young Africans and the growing demand for tech skills in the global market.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a small community of passionate tech enthusiasts has grown into a comprehensive platform that has helped thousands of young Africans launch successful careers in technology.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our impact through partnerships with leading tech companies, innovative learning approaches, and a commitment to making quality tech education accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-gray-600">Expert Mentors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <p className="text-gray-600">African Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}