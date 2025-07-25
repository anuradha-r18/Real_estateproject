'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Eye ,Shield, CircleCheckBig, Clock, Linkedin, Twitter, Instagram , Home, Globe, Headphones, List, EyeClosed } from 'lucide-react';
import Footer from '../homepage/Footer';
import Navbar from '../homepage/Navbar';

function TestPage() {
  const features = [
    {
      title: "Verified Properties",
      description: "Every property is thoroughly verified for quality and security.",
      icon: Home,
    },
    {
      title: "User-Friendly Platform",
      description: "Intuitive navigation and seamless property management.",
      icon: Globe,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries.",
      icon: Headphones,
    },
    {
      title: "Comprehensive Listings",
      description: "Wide range of properties to match every need and budget.",
      icon: List,
    },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/*background gradient*/}
      <div className="absolute inset-0 z-0 opacity-60">
      <img
        src="/images/1466101947835.webp"
        className="w-full h-full object-cover"/>
      </div>

      {/*content*/}
      <div className="relative text-center text-white px-4 max-w-5xl mx-auto z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
        Building Your Future,
        <br className="hidden sm:block" />
        One Home at a Time
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-white/90">
        We're more than just a property platform — we're your partner in finding the perfect place to call home.
      </p>
      <div className="w-24 h-1 bg-white mx-auto mt-6 sm:mt-8 rounded-full" />
    </div>

    </div>

    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Core Focus</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              We’re here to flip the script on renting—no jargon, no games, just straight-up clarity.
               Our platform hands you the keys (literally and figuratively) with transparent info, 
               tools that vibe with your flow, and help that actually helps. Because finding a place to live
               shouldn’t feel like a maze—it should feel like you’ve finally arrived
              </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
            It’s more than a space—it’s your next chapter. We’re here to turn the search into something personal, something beautiful.
            </p>

          </div>

        </div>
      </div>
    </section>

    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Values</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At TrueHabitat, our values are the foundation of every interaction and decision we make.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <CircleCheckBig className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Transparency</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in openness—what you see is exactly what you get, with no hidden surprises.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Trust</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
            Every profile is thoughtfully verified, so trust isn’t just promised—it’s built.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Efficiency</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              From search to move-in, we simplify every step so you can find your ideal place faster and easier.
            </p>
          </div>
        </div>

       

      </div>
    </section>

    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The passionate individuals behind TrueHabitat's success
          </p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/*anuradha*/}
            <div className="bg-blue-100 p-4 md:p-6 rounded-xl shadow-sm w-full max-w-sm mx-auto">
              <div className="flex flex-col items-center">
                <img
                  src="/images/Screenshot 2025-04-07 at 2.34.27 PM.png"
                  alt="Anuradha Raghuwanshi"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-3 md:mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold text-center mb-1 text-black">Anuradha Raghuwanshi</h3>
                <p className="text-blue-600 text-xs md:text-sm text-center mb-2 md:mb-3">
                  Founder & CEO
                </p>
                <p className="text-gray-600 text-sm md:text-base text-center mb-3 md:mb-4">
                  With 20+ years in real estate, Anuradha leads our vision of transforming property search.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

          {/*ganga*/}
            <div className="bg-blue-100 p-4 md:p-6 rounded-xl shadow-sm w-full max-w-sm mx-auto">
              <div className="flex flex-col items-center">
                <img
                  src="images/Screenshot 2025-07-18 at 12.16.00 AM.png"
                  alt="Ganga Raghuwanshi"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-3 md:mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold text-center mb-1 text-black">Ganga Raghuwanshi</h3>
                <p className="text-blue-600 text-xs md:text-sm text-center mb-2 md:mb-3">
                  Co-founder
                </p>
                <p className="text-gray-600 text-sm md:text-base text-center mb-3 md:mb-4">
                  Tech innovator driving our platform's cutting-edge solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

        </div>

      </div>
    </section>

    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Why Choose TrueHabitat?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover a smarter, faster, and more reliable way to find your next home. 
            At UrbHaven, we combine technology, trust, and transparency to deliver an unmatched property experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer/>

      </div>
  );
}
export default TestPage;
