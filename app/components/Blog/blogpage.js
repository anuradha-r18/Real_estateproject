'use client';

import React from 'react'
import Link from 'next/link';
import Footer from '../homepage/Footer';
import Navbar from '../homepage/Navbar';
import { Clock, User ,ArrowDown} from 'lucide-react'; 

function Blogpage() {
    const blogPosts = [
        {
            id: 1,
            title: "Tips for First-Time Home Buyers in Today's Market",
            description: "A vital check before buying—spot hidden issues, avoid regrets, and buy smart.",
            image: "/images/760x470xc.webp",
            category: "Home Buying",
        },
        {
            id: 2,
            title: "Beginner’s Guide to Real Estate Investing",
            description: "Start smart. From rental properties to REITs, learn low-risk strategies, build steady cash flow, and grow wealth one brick at a time.",
            image: "/images/contemporary-houses-kerala.jpg",
            category: "Investment",
        },
        {
            id: 3,
            title: "Understanding the Home Inspection Process",
            description: "A home inspection is a crucial step in the buying process. Learn what to expect and how to prepare for it.",
            image: "/images/exterior-design-for-house_0_1200.jpg.webp",
            category: "Home Buying",
        },
        {
            id: 4,
            title: "The Modern Comforts of a Smart Home",
            description: "Discover how smart home tech upgrades your lifestyle—from saving energy to boosting security, comfort, and convenience at every turn.",
            image: "/images/images (1).jpeg",
            category: "Smart Home",
        },
        {
            id: 5,
            title: "Top Neighborhoods to Buy a Home in 2025",
            description: "Explore the best neighborhoods for homebuyers in 2025, considering factors like amenities, community and affordability.",
            image: "/images/f7195ad7ff679c6e807d3b28ebe67baf-p_e.jpg",
            category: "Neighborhoods",
        },
        {
            id: 6,
            title: "How to Stage Your Home for a Quick Sale",
            description: "Staging your home can significantly impact its sale. Learn effective staging tips to attract potential buyers.",
            image: "/images/French-architecture-style-in-Pakistani-house-designs.webp",
            category: "Home Selling",
        },
        ]
  return (
    <div>
      <Navbar />

      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-5xl font-extrabold mb-4 text-black">Our Blog Posts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-center text-xl">
            Your Guide to Smarter Property Decisions
            </p>
        </div>

        <div className="relative">
          {/* Background Image */}
          <img
            src="/images/zpbb0umxc9yidwlufh5h.avif"
            alt="Vision"
            className="w-full h-[750px] object-cover rounded-2xl mb-6"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />

          {/* Text & Icon */}
          <div className="absolute inset-0 text-white px-6 flex flex-col items-end justify-end text-right pb-12">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mb-6">
                It’s one of life’s biggest moves—full of dreams, decisions, and details. 
              <br />
              From budgeting wisely to picking the perfect neighborhood,
              <br />
              here’s your go-to guide to making a choice you’ll never regret. 
            </p>
            <ArrowDown size={36} className="mr-2 animate-bounce" />
          </div>
        </div>
          

        {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-40">

        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-68 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.category}</span>
                <Link href="" className="text-blue-600 hover:underline">Read More</Link>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
    </section>
    <Footer />

    </div>
    )  
    }

export default Blogpage;
