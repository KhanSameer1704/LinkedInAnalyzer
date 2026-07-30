import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        {/* Right Side */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Profile Score</h2>
            <progress
              className="progress progress-primary w-full"
              value="85"
              max="100"
            ></progress>

            <p>Overall Score: 85/100</p>

            <div className="divider"></div>

            <p>✔ Strong Headline</p>
            <p>✔ Good Skills</p>
            <p>⚠ Improve About Section</p>
          </div>
        </div>

        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-bold">
            Analyze Your LinkedIn Profile
          </h1>

          <p className="py-6 max-w-xl">
            Get a detailed profile score, personalized recommendations,
            and actionable insights to improve your professional presence.
          </p>

          <button className="btn btn-primary mr-4">
            Get Started
          </button>
          <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 px-6">
            View Demo
          </button>
        </div>
      </div>

      {/* Right Column - Glassmorphism Card */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
        <h3 className="text-xl font-bold mb-6 text-white">
          Profile Score
        </h3>
        
        <div className="flex items-center gap-6 mb-6">
          <div 
            className="radial-progress text-indigo-400 font-bold text-lg" 
            style={{ 
              "--value": 85, 
              "--size": "5.5rem", 
              "--thickness": "8px" 
            } as React.CSSProperties}
            role="progressbar"
          >
            85%
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              Overall Score
            </div>
            <div className="text-2xl font-bold text-white">
              85 / 100
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 my-4" />

        <ul className="space-y-3 text-sm font-medium">
          <li className="flex items-center gap-2 text-emerald-400">
            <span className="font-bold">✓</span> Strong Headline
          </li>
          <li className="flex items-center gap-2 text-emerald-400">
            <span className="font-bold">✓</span> Good Skills
          </li>
          <li className="flex items-center gap-2 text-amber-400">
            <span>⚠️</span> Improve About Section
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Hero;