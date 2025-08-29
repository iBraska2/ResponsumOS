'use client';

import { useState, useEffect } from 'react';

const ResponsumOSLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    window.location.href = '/maintenance';
  };

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Insights",
      description: "Advanced analytics that learn from your behavior patterns and optimize your daily routines automatically.",
      color: "blue"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Live dashboard with comprehensive metrics tracking your productivity, health, and goal progress.",
      color: "green"
    },
    {
      icon: "🎯",
      title: "Goal Achievement",
      description: "Smart goal setting with milestone tracking and predictive success probability calculations.",
      color: "purple"
    },
    {
      icon: "🔧",
      title: "Modular System",
      description: "Customizable modules for different life areas - from fitness tracking to financial planning.",
      color: "orange"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "€9",
      period: "/month",
      description: "Perfect for individuals starting their optimization journey",
      features: [
        "Basic Analytics Dashboard",
        "Goal Tracking (up to 10)",
        "Mobile & Desktop Apps",
        "Cloud Sync",
        "Basic AI Insights",
        "Community Support"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Professional",
      price: "€29",
      period: "/month",
      description: "Advanced features for serious life optimizers",
      features: [
        "Advanced Analytics Suite",
        "Unlimited Goals & Projects",
        "AI-Powered Recommendations",
        "Custom Module Builder",
        "Priority Support",
        "Team Collaboration (5 users)",
        "API Access",
        "Advanced Integrations"
      ],
      popular: true,
      color: "blue"
    },
    {
      name: "Enterprise",
      price: "€99",
      period: "/month",
      description: "Full-scale solution for organizations and teams",
      features: [
        "Everything in Professional",
        "Unlimited Team Members",
        "Custom AI Model Training",
        "White-label Solutions",
        "Dedicated Account Manager",
        "99.9% SLA Guarantee",
        "On-premise Deployment",
        "Custom Integrations"
      ],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white'
        : 'bg-white text-gray-900'
    }`} style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Abmelden
              </button>
            </div>

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
                <div className="pt-4 border-t border-gray-700">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300"
                  >
                    Abmelden
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20'
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

              <div className={`pt-8 border-t transition-colors duration-300 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { value: "15,000+", label: "Active Users" },
                    { value: "99.97%", label: "System Uptime" },
                    { value: "4.2M+", label: "Data Points Processed" },
                    { value: "4.9/5", label: "Enterprise Rating" }
                  ].map((stat, index) => (
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

            <div className="relative">
              <div className={`relative z-10 rounded-2xl shadow-2xl p-8 border transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="space-y-6">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Life Optimization</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need to take control of your life, backed by advanced AI and real-time analytics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                    : 'bg-white border-gray-200 hover:border-blue-300'
                } ${activeFeature === index ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-4xl mb-4 p-3 rounded-xl ${
                    feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    feature.color === 'green' ? 'bg-green-100 text-green-600' :
                    feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{feature.title}</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`p-8 rounded-2xl border text-center transition-colors duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600'
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>And Much More...</h3>
            <p className={`text-lg mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Custom integrations, advanced reporting, team collaboration, and enterprise-grade security
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300">
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              How ResponsumOS
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Simple setup, powerful results. Get started in minutes, see improvements in days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Data",
                description: "Integrate with your favorite apps and devices. Our AI learns from your existing patterns and behaviors.",
                icon: "🔗"
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our advanced algorithms analyze your data to identify optimization opportunities and create personalized recommendations.",
                icon: "🤖"
              },
              {
                step: "03",
                title: "Take Action",
                description: "Implement AI-driven insights through our intuitive dashboard and track your progress in real-time.",
                icon: "🚀"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl transition-colors duration-300 ${
                  isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.icon}
                </div>
                <div className={`text-sm font-bold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>STEP {item.step}</div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{item.description}</p>

                {index < 2 && (
                  <div className={`hidden md:block absolute top-8 left-full w-full h-px transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Choose Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Optimization Plan</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Start free, scale as you grow. All plans include our core features with 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? isDarkMode
                      ? 'bg-gradient-to-b from-blue-900/30 to-purple-900/30 border-blue-500 ring-2 ring-blue-500'
                      : 'bg-gradient-to-b from-blue-50 to-purple-50 border-blue-300 ring-2 ring-blue-300'
                    : isDarkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold transition-colors duration-300 ${
                      plan.color === 'blue' ? 'text-blue-500' :
                      plan.color === 'purple' ? 'text-purple-500' :
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{plan.price}</span>
                    <span className={`text-lg ml-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              All plans include 30-day money-back guarantee • Cancel anytime • No setup fees
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What Our Users
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join thousands of professionals who&apos;ve transformed their lives with ResponsumOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ResponsumOS completely transformed how I approach my daily routine. The AI insights are incredibly accurate and actionable.",
                author: "Sarah Chen",
                role: "Product Manager at Google",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                quote: "As a CEO, time is everything. ResponsumOS helped me optimize my schedule and increase productivity by 40%.",
                author: "Michael Rodriguez",
                role: "CEO at TechFlow",
                rating: 5,
                avatar: "👨‍💼"
              },
              {
                quote: "The modular approach is genius. I can customize everything to fit my specific needs and goals. Game changer!",
                author: "Emily Watson",
                role: "Freelance Designer",
                rating: 5,
                avatar: "👩‍🎨"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className={`text-lg mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{testimonial.author}</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 relative ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20'
          : 'bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Your Life?</span>
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of professionals who&apos;ve already optimized their lives with ResponsumOS. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Your Free Trial
            </button>
            <button className={`px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 ${
              isDarkMode
                ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                : 'border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600'
            }`}>
              Schedule Demo
            </button>
          </div>

          <div className="mt-8 text-sm">
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              ✅ No credit card required • ✅ 30-day money-back guarantee • ✅ Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-900 border-gray-800'
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>ResponsumOS</h3>
              </div>
              <p className={`mb-6 max-w-md transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                The modular self-management operating system for data-driven individuals who take control of their lives.
              </p>
              <div className="flex space-x-4">
                {['📧', '🐦', '📘', '💼'].map((icon, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "API", "Changelog"]
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "Contact Us", "Status", "Community"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className={`transition-colors duration-300 hover:text-blue-400 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`pt-8 mt-8 border-t flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 ResponsumOS. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm transition-colors duration-300 hover:text-blue-400 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResponsumOSLanding;