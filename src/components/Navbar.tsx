import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8" />
          <span className="text-xl font-bold">InsightTech Africa</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/courses" className="hover:text-purple-200">Courses</Link>
          <Link to="/about" className="hover:text-purple-200">About</Link>
          <Link to="/opportunities" className="hover:text-purple-200">Opportunities</Link>
          <Link to="/contact" className="hover:text-purple-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}