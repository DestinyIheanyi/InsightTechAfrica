import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Laptop, GraduationCap, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Empowering Africa's Tech Future
              </h1>
              <p className="text-xl mb-8">
                Providing young Africans with the knowledge and skills needed to thrive in the IT industry.
              </p>
              <Link to="/courses" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 inline-flex">
                Get Started <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" 
                alt="Young African tech professionals collaborating" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Learning</h3>
              <p className="text-gray-600">Access curated courses in programming, web development, and more.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600">Connect with experienced professionals in the tech industry.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Projects</h3>
              <p className="text-gray-600">Build real-world projects to enhance your portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Learn frontend and backend development with modern technologies.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Mobile Development",
                description: "Create native and cross-platform mobile applications.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data Science",
                description: "Master data analysis, machine learning, and AI concepts.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              }
            ].map((path, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={path.image} alt={path.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <Link to={`/courses/${path.title.toLowerCase().replace(' ', '-')}`} className="text-purple-600 font-semibold flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Start Your Tech Journey Today</h2>
          <p className="text-xl mb-8">Join thousands of young Africans building successful careers in tech</p>
          <Link to="/register" className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 inline-block">
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
}