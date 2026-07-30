export default function Features() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center text-gray-600 max-w-2x1 mx-auto">
          <h2 className="text-4xl font-Bold">
            Powerful Features
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Everything you need to analyze and improve your LinkedIn profile.
          </p>
        </div>

        {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-5xl">📊</div>

                <h2 className="card-title text-gray-900">
                  Profile Score
                    </h2>
                    <p className="text-gray-600">
                      Get an overall profile score based on profile completeness.
                    </p>
               </div>
          </div>


          {/* Card 2 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-5xl">💡</div>
              <h2 className="card-title text-gray-900">Smart Suggestions</h2>
              <p className="text-gray-600">
                Receive personalized recommendations to improve your profile.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-5xl">🎯</div>
              <h2 className="card-title text-gray-900">Skills Analysis</h2>
              <p className="text-gray-600">
                Identify missing skills and improve your professional profile.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-5xl">📄</div>
              <h2 className="card-title text-gray-900">Detailed Report</h2>
              <p className="text-gray-600">
                View a complete report with actionable insights and suggestions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}