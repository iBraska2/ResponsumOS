/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { createClient } from "next-sanity";

type Post = {
  _id: string;
  title: string;
  body: string;
  createdAt?: string;
  category?: string;
};

// Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-05-03",
  useCdn: true,
});

const ResponsumOSLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await sanityClient.fetch<Post[]>(`
          *[_type == "post"] | order(_createdAt desc)[0...3]{
            _id,
            title,
            body,
            _createdAt,
            category
          }
        `);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const features = [
    {
      title: "Modular Architecture",
      description: "Build your perfect system from specialized modules for every life domain.",
      icon: "🧩",
      benefits: ["Customizable Workflows", "Scalable Modules", "Native Performance"],
      techDetails: "Built with Tauri 2.5 for optimal performance"
    },
    {
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights for better life decisions.",
      icon: "📊",
      benefits: ["Advanced Analytics", "Predictive Modeling", "Real-time Dashboards"],
      techDetails: "ML-powered analysis engine with local processing"
    },
    {
      title: "Systems Thinking",
      description: "Understand interconnections and optimize your life as a networked system.",
      icon: "🔄",
      benefits: ["Holistic View", "Dependency Mapping", "Impact Analysis"],
      techDetails: "Graph-based modeling with advanced visualization"
    },
    {
      title: "Complete Control",
      description: "Your data, your rules. 100% local processing without cloud dependency.",
      icon: "🛡️",
      benefits: ["Local-First", "Zero Tracking", "Full Privacy"],
      techDetails: "End-to-end encryption with Rust security layer"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Data Scientist, Microsoft",
      content: "ResponsumOS increased my productivity by 300%. The modular architecture perfectly fits my analytical mindset.",
      avatar: "SC",
      company: "Microsoft"
    },
    {
      name: "Marcus Weber",
      role: "CEO, TechStartup GmbH",
      content: "As an entrepreneur, I need systems that scale with me. ResponsumOS gives me the control I need.",
      avatar: "MW",
      company: "TechStartup"
    },
    {
      name: "Anna Kowalski",
      role: "Quantified Self Expert",
      content: "Finally a system that takes my data seriously. The analysis features are on another level.",
      avatar: "AK",
      company: "Independent"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "Free",
      description: "Perfect for getting started with systematic self-management",
      features: [
        "3 Core Modules",
        "Basic Analytics",
        "Local Storage",
        "Community Support",
        "Desktop App Access"
      ],
      cta: "Start Free",
      popular: false,
      badge: ""
    },
    {
      name: "Professional",
      price: "$29/month",
      description: "For ambitious optimizers and data enthusiasts",
      features: [
        "All Modules Unlocked",
        "Advanced Analytics Engine",
        "Custom Workflows",
        "Priority Support",
        "Data Export APIs",
        "Advanced Integrations",
        "Backup & Sync"
      ],
      cta: "Start 30-Day Trial",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for teams and organizations",
      features: [
        "Custom Module Development",
        "Team Collaboration Suite",
        "SSO Integration",
        "Dedicated Success Manager",
        "On-Premise Deployment",
        "Custom Integrations",
        "White-label Options"
      ],
      cta: "Contact Sales",
      popular: false,
      badge: ""
    }
  ];

  const stats = [
    { value: "15,000+", label: "Active Users" },
    { value: "99.97%", label: "System Uptime" },
    { value: "4.2M+", label: "Data Points Processed" },
    { value: "4.9/5", label: "Enterprise Rating" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white'
        : 'bg-white text-gray-900'
    }`} style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Enterprise Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enterprise Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>R</span>
              </div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Responsum<span className="relative">
                  O
                  <span className="absolute inset-0 w-5 h-5 border-2 border-cyan-400 rounded-full opacity-60 transform translate-x-1 translate-y-1"></span>
                </span>S
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className={`font-medium transition-colors hover:text-blue-400 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Features</a>
              <a href="#how-it-works" className={`font-medium transition-colors hover:text-blue-400 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>How It Works</a>
              <a href="#pricing" className={`font-medium transition-colors hover:text-blue-400 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Pricing</a>
              <a href="#blog" className={`font-medium transition-colors hover:text-blue-400 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Blog</a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className={`px-4 py-2 font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-800'
              }`}>
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden absolute top-16 left-0 right-0 shadow-2xl border-t transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-900 border-gray-800'
                : 'bg-white border-gray-200'
            }`}>
              <div className="px-4 py-6 space-y-4">
                <a href="#features" className={`block font-medium py-2 transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                }`}>Features</a>
                <a href="#how-it-works" className={`block font-medium py-2 transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                }`}>How It Works</a>
                <a href="#pricing" className={`block font-medium py-2 transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                }`}>Pricing</a>
                <a href="#blog" className={`block font-medium py-2 transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                }`}>Blog</a>
                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <button className={`block w-full text-left font-medium py-2 transition-colors ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}>
                    Sign In
                  </button>
                  <button className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enterprise Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20'
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-xl transition-colors duration-300 ${
            isDarkMode ? 'bg-cyan-400' : 'bg-cyan-400'
          }`}></div>
          <div className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-20 blur-xl transition-colors duration-300 ${
            isDarkMode ? 'bg-purple-600' : 'bg-blue-600'
          }`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-blue-900/30 text-blue-300 border-blue-700'
                    : 'bg-blue-100 text-blue-800 border-blue-200'
                }`}>
                  🚀 Native App for Windows, macOS & Linux
                </div>
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Your Life.
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Systematically
                  </span>
                  <br />
                  Optimized.
                </h1>
                <p className={`text-xl leading-relaxed max-w-2xl transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  ResponsumOS is the modular self-management operating system for data-driven individuals
                  who take control of their lives. One System. Many Answers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Start Free Trial
                </button>
                <button className={`px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                    : 'border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600'
                }`}>
                  Watch Live Demo
                </button>
              </div>

              {/* Enterprise Stats */}
              <div className={`pt-8 border-t transition-colors duration-300 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-blue-400 mb-1" style={{ fontFamily: "'Fira Code', monospace" }}>
                        {stat.value}
                      </div>
                      <div className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Hero Visual */}
            <div className="relative">
              <div className={`relative z-10 rounded-2xl shadow-2xl p-8 border transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="space-y-6">
                  {/* Mock Interface Header */}
                  <div className={`flex items-center justify-between pb-4 border-b transition-colors duration-300 ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className={`text-sm font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>ResponsumOS Enterprise v2.5</div>
                  </div>

                  {/* Enterprise Dashboard Mock */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Enterprise Dashboard</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Live</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                      }`}>
                        <div className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-blue-300' : 'text-blue-600'
                        }`}>Productivity</div>
                        <div className="text-lg font-bold text-blue-500">94%</div>
                      </div>
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                      }`}>
                        <div className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-green-300' : 'text-green-600'
                        }`}>Goals</div>
                        <div className="text-lg font-bold text-green-500">18/20</div>
                      </div>
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'
                      }`}>
                        <div className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-purple-300' : 'text-purple-600'
                        }`}>Focus Time</div>
                        <div className="text-lg font-bold text-purple-500">4.2h</div>
                      </div>
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'
                      }`}>
                        <div className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-orange-300' : 'text-orange-600'
                        }`}>Energy</div>
                        <div className="text-lg font-bold text-orange-500">High</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className={`flex items-center justify-between text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span>Active Modules</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section id="features" className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Enterprise-Grade Modular Architecture
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Every module is professionally engineered for individuals who understand data and demand systematic optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Feature Tabs */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? isDarkMode
                        ? 'bg-gray-700 shadow-2xl border-2 border-blue-500'
                        : 'bg-white shadow-2xl border-2 border-blue-300'
                      : isDarkMode
                        ? 'bg-gray-800/50 hover:bg-gray-700 hover:shadow-xl'
                        : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{feature.title}</h3>
                      <p className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{feature.description}</p>

                      {activeFeature === index && (
                        <div className="space-y-3 animate-fadeIn">
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className={`text-sm transition-colors duration-300 ${
                                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>{benefit}</span>
                              </div>
                            ))}
                          </div>
                          <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block transition-colors duration-300 ${
                            isDarkMode
                              ? 'bg-blue-900/50 text-blue-300'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {feature.techDetails}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Feature Visual */}
            <div className="relative">
              <div className={`rounded-2xl shadow-2xl p-8 border transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {features[activeFeature].title}
                    </h3>
                    <div className="text-2xl">{features[activeFeature].icon}</div>
                  </div>

                  {/* Dynamic Content Based on Active Feature */}
                  {activeFeature === 0 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {['Goals', 'Habits', 'Tasks', 'Health', 'Finance', 'Learning'].map((module, idx) => (
                          <div key={idx} className={`p-3 rounded-lg text-center transition-colors duration-300 ${
                            isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                          }`}>
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-2"></div>
                            <div className={`text-xs font-medium transition-colors duration-300 ${
                              isDarkMode ? 'text-blue-300' : 'text-blue-900'
                            }`}>{module}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 1 && (
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>Productivity Trend</span>
                          <span className="text-sm text-green-500 font-semibold">+23%</span>
                        </div>
                        <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                          isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className={`flex justify-between text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span>Average Focus Time</span>
                          <span className="font-medium">4.2h</span>
                        </div>
                        <div className={`flex justify-between text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span>Completed Tasks</span>
                          <span className="font-medium">87</span>
                        </div>
                        <div className={`flex justify-between text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span>Data Points Analyzed</span>
                          <span className="font-medium">1,247</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 2 && (
                    <div className="space-y-4">
                      <div className="relative h-32">
                        <svg className="w-full h-32" viewBox="0 0 300 120">
                          <defs>
                            <linearGradient id="systemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="50%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M10,100 Q50,70 100,60 T200,30 T290,20"
                            stroke="url(#systemGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="animate-pulse"
                          />
                          <circle cx="50" cy="70" r="3" fill="#3B82F6" />
                          <circle cx="150" cy="45" r="3" fill="#8B5CF6" />
                          <circle cx="250" cy="25" r="3" fill="#06B6D4" />
                          <circle cx="290" cy="20" r="4" fill="#06B6D4" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className={`text-sm mb-1 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Systematic Improvement</div>
                        <div className={`text-lg font-bold transition-colors duration-300 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>+47% in 30 Days</div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 3 && (
                    <div className="space-y-4">
                      <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                      }`}>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-green-300' : 'text-green-800'
                        }`}>100% Local Processing</span>
                      </div>
                      <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                      }`}>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-blue-300' : 'text-blue-800'
                        }`}>Rust-Level Security</span>
                      </div>
                      <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'
                      }`}>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-purple-300' : 'text-purple-800'
                        }`}>Zero Tracking Policy</span>
                      </div>
                      <div className={`text-center text-xs font-mono p-2 rounded bg-gray-900 text-green-400 ${
                        isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
                      }`}>
                        $ cargo build --release<br />
                        ✓ Security audit passed
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Three Steps to Optimized Life
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              ResponsumOS makes systematic self-optimization as simple as installing an enterprise application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install & Configure",
                description: "Download ResponsumOS and select your initial modules based on your optimization priorities and data requirements.",
                icon: "⚡",
                tech: "Tauri 2.5 Native"
              },
              {
                step: "02",
                title: "Collect & Analyze",
                description: "The system learns your patterns and creates personalized insights for data-driven decision making at enterprise scale.",
                icon: "🧠",
                tech: "ML Analytics Engine"
              },
              {
                step: "03",
                title: "Optimize Continuously",
                description: "Leverage data-driven recommendations to systematically improve your workflows and life systems with measurable results.",
                icon: "🚀",
                tech: "Continuous Optimization"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className={`rounded-2xl p-8 h-full shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <div className={`text-sm font-bold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} style={{ fontFamily: "'Fira Code', monospace" }}>
                    STEP {step.step}
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{step.title}</h3>
                  <p className={`mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{step.description}</p>
                  <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block transition-colors duration-300 ${
                    isDarkMode
                      ? 'bg-purple-900/50 text-purple-300'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {step.tech}
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className={`w-8 h-8 transition-colors duration-300 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-300'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials */}
      <section className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What Industry Leaders Say
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real professionals. Real results. Real transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{testimonial.name}</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{testimonial.role}</div>
                    <div className={`text-xs font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>{testimonial.company}</div>
                  </div>
                </div>
                <p className={`italic leading-relaxed mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section id="pricing" className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Invest in Your Future
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Choose the plan that matches your ambition level. All plans include the native app and local data processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? `transform scale-105 shadow-2xl ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500'
                          : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                      }`
                    : `shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        isDarkMode
                          ? 'bg-gray-800 border-2 border-gray-700'
                          : 'bg-white border-2 border-gray-200'
                      }`
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    plan.popular
                      ? 'text-white'
                      : isDarkMode
                        ? 'text-white'
                        : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                    plan.popular
                      ? 'text-white'
                      : isDarkMode
                        ? 'text-white'
                        : 'text-gray-900'
                  }`} style={{ fontFamily: "'Fira Code', monospace" }}>
                    {plan.price}
                  </div>
                  <p className={`mb-8 transition-colors duration-300 ${
                    plan.popular
                      ? 'text-blue-100'
                      : isDarkMode
                        ? 'text-gray-300'
                        : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                        plan.popular
                          ? 'text-cyan-300'
                          : 'text-green-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`transition-colors duration-300 ${
                        plan.popular
                          ? 'text-blue-100'
                          : isDarkMode
                            ? 'text-gray-300'
                            : 'text-gray-700'
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              All plans include 30-day money-back guarantee
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>100% local data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Blog Section */}
      <section id="blog" className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Insights & Enterprise Updates
              </h2>
              <p className={`text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Latest insights from the world of systematic self-management and data optimization.
              </p>
            </div>
            <button className={`hidden lg:block px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}>
              View All Articles
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <svg className={`w-12 h-12 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Articles Loading</h3>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Our latest insights will appear here shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id} className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium mb-2 backdrop-blur-sm">
                          {post.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-400 line-clamp-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`mb-4 line-clamp-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {post.body.length > 120 ? `${post.body.substring(0, 120)}...` : post.body}
                    </p>

                    <div className="flex items-center justify-between">
                      {post.createdAt && (
                        <span className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                      <button className="text-blue-500 hover:text-blue-400 font-medium text-sm group-hover:underline transition-colors duration-300">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="lg:hidden text-center mt-8">
            <button className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}>
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900'
          : 'bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600'
      }`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready for Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join over 15,000 ambitious professionals who have already systematically optimized their lives.
            Start with ResponsumOS today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Free Trial Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Enterprise Demo
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30-day free trial
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100% money-back guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Footer */}
      <footer className={`py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>R</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Responsum<span className="relative">
                    O
                    <span className="absolute inset-0 w-5 h-5 border-2 border-cyan-400 rounded-full opacity-60 transform translate-x-1 translate-y-1"></span>
                  </span>S
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The modular self-management operating system for professionals who systematically optimize their lives through data-driven decision making.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'discord'].map((platform, idx) => (
                  <button key={idx} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {platform === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>}
                      {platform === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                      {platform === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>}
                      {platform === 'discord' && <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Roadmap</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Changelog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">API Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">System Requirements</a></li>
              </ul>
            </div>

            {/* Enterprise Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Enterprise Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Developer Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">System Status</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Enterprise Sales</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Security Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Professional Services</a></li>
              </ul>
            </div>
          </div>

          {/* Enterprise Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ResponsumOS. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-500">Built with</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-800 rounded text-orange-400 font-mono text-xs">Tauri 2.5</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-blue-400 font-mono text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-red-400 font-mono text-xs">Rust</span>
                </div>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Legal Notice</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Security</a>
              </div>
            </div>
          </div>

          {/* Enterprise Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 font-medium">
                Enterprise-Grade • SOC 2 Compliant • GDPR Ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResponsumOSLanding;