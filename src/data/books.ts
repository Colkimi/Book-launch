export const authors = [
  {
    id: 1,
    name: "Pastor Jackson Muhoti",
    title: "Neuroscience & Psychology Expert",
    bio: "Pastor Jackson Muhoti is a renowned neuroscientist and bestselling author with over 15 years of experience in cognitive psychology. She has helped thousands transform their minds through her evidence-based approaches.",
    image: "/api/placeholder/300/300",
    socialLinks: {
      twitter: "https://twitter.com/drsarahmitchell",
      linkedin: "https://linkedin.com/in/sarahmitchell",
      website: "https://sarahmitchell.com"
    },
    bookCount: 5,
    credentials: [
      "PhD in Neuroscience - Harvard University",
      "15+ Years Research Experience",
      "500K+ Lives Transformed",
      "TED Talk Speaker"
    ]
  },
  {
    id: 2,
    name: "Marcus Thompson",
    title: "Life Transformation Coach",
    bio: "Marcus Thompson is a certified life coach and motivational speaker who has dedicated his career to helping people unlock their potential. His unique blend of practical wisdom and spiritual insight has made him a sought-after mentor.",
    image: "/api/placeholder/300/300",
    socialLinks: {
      twitter: "https://twitter.com/marcusthompson",
      linkedin: "https://linkedin.com/in/marcusthompson",
      website: "https://marcusthompson.com"
    },
    bookCount: 1,
    credentials: [
      "Certified Life Coach (ICF)",
      "10+ Years Coaching Experience",
      "International Speaker",
      "Mindfulness Teacher"
    ]
  }
];

export const books = [
  // Sarah's Books
  {
    id: 1,
    title: "The Neuroscience of Change",
    subtitle: "Rewiring Your Brain for Success",
    authorId: 1,
    authorName: "Pastor Jackson Muhoti",
    description: "Discover how to leverage cutting-edge neuroscience to create lasting behavioral change and unlock your brain's full potential.",
    price: { digital: 19.99, hardcover: 24.99 },
    coverColor: "from-blue-600 to-blue-800",
    pages: 320,
    rating: 4.9,
    reviews: 1247,
    category: "Psychology"
  },
  {
    id: 2,
    title: "Mindful Leadership",
    subtitle: "Leading with Emotional Intelligence",
    authorId: 1,
    authorName: "Pastor Jackson Muhoti",
    description: "A comprehensive guide to developing emotional intelligence and mindful leadership skills in today's complex world.",
    price: { digital: 18.99, hardcover: 23.99 },
    coverColor: "from-green-600 to-green-800",
    pages: 280,
    rating: 4.8,
    reviews: 892,
    category: "Leadership"
  },
  {
    id: 3,
    title: "Breaking Mental Barriers",
    subtitle: "Overcoming Limiting Beliefs",
    authorId: 1,
    authorName: "Pastor Jackson Muhoti",
    description: "Learn proven techniques to identify and overcome the mental barriers that hold you back from achieving your goals.",
    price: { digital: 17.99, hardcover: 22.99 },
    coverColor: "from-purple-600 to-purple-800",
    pages: 295,
    rating: 4.9,
    reviews: 756,
    category: "Self-Help"
  },
  {
    id: 4,
    title: "The Focus Formula",
    subtitle: "Mastering Attention in a Distracted World",
    authorId: 1,
    authorName: "Pastor Jackson Muhoti",
    description: "Master the art of deep focus and concentration using science-backed techniques to boost productivity and creativity.",
    price: { digital: 19.99, hardcover: 24.99 },
    coverColor: "from-red-600 to-red-800",
    pages: 310,
    rating: 4.7,
    reviews: 634,
    category: "Productivity"
  },
  {
    id: 5,
    title: "Emotional Mastery",
    subtitle: "The Science of Feeling Good",
    authorId: 1,
    authorName: "Pastor Jackson Muhoti",
    description: "Understand and master your emotions using the latest research in psychology and neuroscience for a happier, more balanced life.",
    price: { digital: 18.99, hardcover: 23.99 },
    coverColor: "from-orange-600 to-orange-800",
    pages: 275,
    rating: 4.8,
    reviews: 543,
    category: "Psychology"
  },
  // Marcus's Book
  {
    id: 6,
    title: "The Warrior's Path",
    subtitle: "Ancient Wisdom for Modern Warriors",
    authorId: 2,
    authorName: "Marcus Thompson",
    description: "Discover timeless principles of strength, courage, and resilience that will help you navigate life's challenges with grace and power.",
    price: { digital: 16.99, hardcover: 21.99 },
    coverColor: "from-gray-800 to-gray-900",
    pages: 350,
    rating: 4.9,
    reviews: 1134,
    category: "Spirituality"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "CEO, Tech Startup",
    content: "Dr. Mitchell's approach to neuroscience-based change is revolutionary. 'The Neuroscience of Change' completely transformed how I lead my team.",
    rating: 5,
    bookId: 1,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Life Coach",
    content: "Marcus's 'The Warrior's Path' is a masterpiece. It beautifully bridges ancient wisdom with practical modern applications.",
    rating: 5,
    bookId: 6,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Psychologist",
    content: "The entire collection by Dr. Mitchell is evidence-based and incredibly practical. I recommend these books to all my colleagues.",
    rating: 5,
    bookId: 2,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "Alex Johnson",
    role: "Entrepreneur",
    content: "These books have been game-changers for my personal and professional development. The combination of science and wisdom is perfect.",
    rating: 5,
    bookId: 3,
    avatar: "/api/placeholder/60/60"
  }
];