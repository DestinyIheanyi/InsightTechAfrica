import React from 'react';
import { Search, Filter, BookOpen, Clock, Star } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics for building modern websites.",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "React & Node.js Development",
      description: "Master full-stack development with React and Node.js.",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis and machine learning.",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native.",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Computing Essentials",
      description: "Learn cloud services and deployment with AWS.",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Master user interface and experience design principles.",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl">Discover your path to tech excellence</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}