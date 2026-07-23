export default function Hero() {
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

          <button className="btn btn-outline">
            View Demo
          </button>
        </div>

      </div>
    </section>
  );
}