import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, ShoppingCart, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { authors, books, testimonials } from '../data/books';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-6 w-6 text-gold-500" />
                <span className="text-gold-600 font-semibold">New Release Collection</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Transform Your Life with
                <motion.span 
                  className="text-primary-600 block"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  6 Powerful Books
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Discover groundbreaking insights from two renowned authors. Pastor Jackson Muhoti combines 
                cutting-edge neuroscience with practical applications, while Marcus Thompson brings 
                ancient wisdom to modern challenges.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button 
                  className="btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Get Collection - $89.99</span>
                </motion.button>
                <motion.div>
                  <Link to="/books">
                    <motion.button 
                      className="btn-secondary flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore Books</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-6 text-sm text-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50,000+ Readers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>6 Books</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Book Showcase */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Featured Books */}
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {books.slice(0, 4).map((book, index) => (
                    <motion.div
                      key={book.id}
                      variants={itemVariants}
                      whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                      className={`w-32 h-40 bg-gradient-to-br ${book.coverColor} rounded-lg shadow-lg p-3 text-white cursor-pointer`}
                      style={{ 
                        transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})`,
                        zIndex: 4 - index
                      }}
                    >
                      <h3 className="text-xs font-bold mb-1 line-clamp-2">{book.title}</h3>
                      <p className="text-xs opacity-80 line-clamp-1">{book.subtitle}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="h-6 w-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Authors Introduction */}
      <motion.section 
        className="section-padding bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Your Authors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two experts, different approaches, one shared mission: to help you unlock your full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {authors.map((author) => (
              <motion.div
                key={author.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {author.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{author.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{author.title}</p>
                <p className="text-gray-600 mb-6">{author.bio}</p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {author.bookCount} Book{author.bookCount > 1 ? 's' : ''}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Books Preview */}
      <motion.section 
        className="section-padding bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each book offers unique insights and practical tools for your transformation journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {books.slice(0, 3).map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-md cursor-pointer group"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${book.coverColor} rounded-lg mb-4 p-4 text-white relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  />
                  <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                  <p className="text-sm opacity-90">{book.subtitle}</p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({book.reviews})</span>
                  </div>
                  <span className="text-lg font-bold text-primary-600">${book.price.digital}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{book.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link to="/books">
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Books
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="section-padding bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Readers Are Saying
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {testimonials.slice(0, 4).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link to="/reviews">
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More Reviews
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="section-padding bg-primary-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <div className="text-center text-white">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ y: -30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Start Your Transformation Today
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of readers who have transformed their lives with our complete collection.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Complete Collection - $89.99
              </motion.button>
              <motion.button 
                className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border-2 border-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Individual Books
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;