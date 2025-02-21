import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Resolving Conflicts,
              <span className="text-blue-600"> Building Harmony</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Discover the power of mediation in resolving disputes effectively.
              Join our community and learn from expert mediators.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Find a Mediator
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Mediation Session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-blue-600">5000+</p>
              <p className="text-gray-600">Successful Mediations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;