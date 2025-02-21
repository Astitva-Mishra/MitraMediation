import React from 'react';
import { BookOpen, Users, FileText, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Interactive Guides',
      description: 'Step-by-step visual walkthroughs of the mediation process with engaging explainer videos.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Community Forum',
      description: 'Connect with mediators and peers to share experiences and get expert guidance.',
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Legal Resources',
      description: 'Access downloadable templates, case studies, and multi-language legal documents.',
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Mediator Directory',
      description: 'Find certified mediators by location and expertise with integrated chat support.',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose MitraMediation?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive tools and resources for effective dispute resolution
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-2 bg-blue-50 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;