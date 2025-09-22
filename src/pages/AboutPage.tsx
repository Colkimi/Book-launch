import { CheckCircle, BookOpen, Clock, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">The Journey Within</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A transformative guide that bridges the gap between ancient wisdom and modern psychology, 
              designed to help you unlock your true potential and create lasting positive change in your life.
            </p>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You'll Discover
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This comprehensive guide takes you on a profound journey of self-discovery, 
                combining time-tested principles with cutting-edge research to create a roadmap 
                for personal transformation.
              </p>

              <div className="space-y-4">
                {[
                  "Ancient meditation techniques adapted for modern life",
                  "Science-backed strategies for building resilience",
                  "Practical exercises for emotional intelligence",
                  "Methods to overcome limiting beliefs",
                  "Tools for creating meaningful relationships",
                  "Strategies for finding your life's purpose"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Stats */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Details</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">320</p>
                  <p className="text-gray-600">Pages</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-gold-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-gray-600">Chapters</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-gray-600">Exercises</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-gray-600">Parts</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Available Formats</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📱 Digital eBook (PDF, EPUB, MOBI)</p>
                  <p>📚 Hardcover Edition</p>
                  <p>🎧 Audiobook (Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chapter Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each chapter builds upon the previous one, creating a comprehensive system for personal growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  part: "Part I: Foundation",
                  chapters: [
                    { number: 1, title: "Understanding Your Inner World", description: "Explore the depths of your consciousness and identify limiting patterns." },
                    { number: 2, title: "The Power of Mindfulness", description: "Learn to observe your thoughts and emotions without judgment." },
                    { number: 3, title: "Breaking Free from the Past", description: "Release old wounds and create space for new possibilities." },
                    { number: 4, title: "Designing Your Future Self", description: "Create a clear vision of who you want to become." }
                  ]
                },
                {
                  part: "Part II: Transformation",
                  chapters: [
                    { number: 5, title: "Rewiring Your Beliefs", description: "Replace limiting beliefs with empowering ones." },
                    { number: 6, title: "Emotional Mastery", description: "Develop emotional intelligence and resilience." },
                    { number: 7, title: "The Art of Communication", description: "Build deeper, more meaningful relationships." },
                    { number: 8, title: "Finding Your Purpose", description: "Discover your unique contribution to the world." }
                  ]
                },
                {
                  part: "Part III: Integration",
                  chapters: [
                    { number: 9, title: "Daily Practices for Growth", description: "Establish sustainable habits for continuous development." },
                    { number: 10, title: "Overcoming Obstacles", description: "Navigate challenges and setbacks with grace." },
                    { number: 11, title: "Living with Intention", description: "Align your actions with your deepest values." },
                    { number: 12, title: "Your Ongoing Journey", description: "Maintain momentum and continue evolving." }
                  ]
                }
              ].map((part, partIndex) => (
                <div key={partIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-primary-600 text-white p-6">
                    <h3 className="text-xl font-bold">{part.part}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {part.chapters.map((chapter, chapterIndex) => (
                        <div key={chapterIndex} className="border-l-4 border-primary-200 pl-4">
                          <h4 className="font-semibold text-gray-900">
                            Chapter {chapter.number}: {chapter.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">{chapter.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Don't wait for the perfect moment. Your transformation starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
                Get Your Copy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;