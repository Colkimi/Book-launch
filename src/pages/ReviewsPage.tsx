import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Life Coach",
      rating: 5,
      date: "March 15, 2025",
      content: "This book is absolutely transformational. I've been in the personal development space for over 10 years, and this is one of the most comprehensive and practical guides I've ever encountered. The exercises are powerful, and the writing is both profound and accessible.",
      helpful: 42,
      verified: true
    },
    {
      id: 2,
      name: "Alex Karisa",
      role: "Entrepreneur",
      rating: 5,
      date: "March 10, 2025",
      content: "As someone who has struggled with limiting beliefs around success, this book provided exactly the tools I needed. The chapter on rewiring beliefs completely changed my relationship with money and achievement. Highly recommend to anyone ready for real change.",
      helpful: 38,
      verified: true
    },
    {
      id: 3,
      name: "David James",
      role: "Therapist",
      rating: 5,
      date: "March 8, 2025",
      content: "I recommend this book to all my clients. The integration of ancient wisdom with modern psychology is masterful. The practical exercises are evidence-based and truly effective. This will be a cornerstone resource in my practice.",
      helpful: 56,
      verified: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Corporate Executive",
      rating: 5,
      date: "March 5, 2025",
      content: "This book helped me navigate a major career transition with clarity and confidence. The chapter on finding your purpose was particularly impactful. I've gifted copies to my entire leadership team.",
      helpful: 29,
      verified: true
    },
    {
      id: 5,
      name: "Lisa Johnson",
      role: "Yoga Instructor",
      rating: 5,
      date: "March 3, 2025",
      content: "Beautiful integration of mindfulness practices with practical life application. The author's personal story is inspiring, and the step-by-step guidance makes transformation feel achievable. A must-read for anyone on a spiritual path.",
      helpful: 33,
      verified: true
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "Retired Teacher",
      rating: 4,
      date: "February 28, 2025",
      content: "At 65, I thought it might be too late for major life changes. This book proved me wrong. The gentle yet powerful approach to personal growth has rekindled my passion for learning and growing. Never too late to transform!",
      helpful: 47,
      verified: true
    }
  ];

  const stats = {
    averageRating: 4.9,
    totalReviews: 2847,
    fiveStars: 2654,
    fourStars: 163,
    threeStars: 23,
    twoStars: 5,
    oneStars: 2
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Reader <span className="text-primary-600">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              See what thousands of readers are saying about their transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-600 mb-2">{stats.averageRating}</div>
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-600">Based on {stats.totalReviews.toLocaleString()} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {[
                  { stars: 5, count: stats.fiveStars, percentage: (stats.fiveStars / stats.totalReviews) * 100 },
                  { stars: 4, count: stats.fourStars, percentage: (stats.fourStars / stats.totalReviews) * 100 },
                  { stars: 3, count: stats.threeStars, percentage: (stats.threeStars / stats.totalReviews) * 100 },
                  { stars: 2, count: stats.twoStars, percentage: (stats.twoStars / stats.totalReviews) * 100 },
                  { stars: 1, count: stats.oneStars, percentage: (stats.oneStars / stats.totalReviews) * 100 }
                ].map((rating, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-20">
                      <span className="text-sm font-medium">{rating.stars}</span>
                      <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                    </div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold-400 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-16 text-right">{rating.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="bg-primary-600 text-white rounded-2xl p-8 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <Quote className="h-12 w-12 text-primary-200 mx-auto mb-4" />
              <blockquote className="text-2xl font-medium mb-6 italic">
                "This book didn't just change my perspective—it changed my entire life. The practical tools and profound insights have helped me create the authentic, fulfilling life I always dreamed of."
              </blockquote>
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-primary-100">
                <strong>Jennifer Martinez</strong> - Bestselling Author
              </p>
            </div>
          </div>

          {/* All Reviews */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">All Reviews</h2>
            
            {reviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <div className="flex items-center space-x-1 justify-end mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have you read the book? We'd love to hear about your transformation journey.
            </p>
            <button className="btn-primary">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;