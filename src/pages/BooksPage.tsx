import { motion } from 'framer-motion';
import { Star, ShoppingCart, User, BookOpen, Calendar } from 'lucide-react';
import { books, authors } from '../data/books';

const BooksPage = () => {
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

  const bookHoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const sarahBooks = books.filter(book => book.authorId === 1);
  const marcusBooks = books.filter(book => book.authorId === 2);

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-primary-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="text-primary-600">Book Collection</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Six transformational books by two renowned authors, combining cutting-edge neuroscience 
              with ancient wisdom to help you unlock your full potential.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="btn-primary">Get Complete Collection</button>
              <button className="btn-secondary">Browse Individual Books</button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Authors Quick Intro */}
      <motion.section 
        className="section-padding bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Authors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {authors.map((author) => (
              <motion.div
                key={author.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {author.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{author.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{author.title}</p>
                <p className="text-gray-600 mb-6">{author.bio}</p>
                <div className="text-center">
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

      {/* Sarah's Books */}
      <motion.section 
        className="section-padding bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dr. Sarah Mitchell's Collection
            </h2>
            <p className="text-xl text-gray-600">
              Neuroscience-based approaches to personal transformation
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {sarahBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <motion.div variants={bookHoverVariants}>
                  <div className={`h-64 bg-gradient-to-br ${book.coverColor} p-6 text-white relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black opacity-0"
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-xl font-bold mb-2"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {book.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm opacity-90 mb-4"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {book.subtitle}
                      </motion.p>
                      <motion.div 
                        className="absolute bottom-4 right-4"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white bg-opacity-20 rounded-full p-2">
                          <BookOpen className="h-6 w-6" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({book.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-500">{book.pages} pages</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary-600">${book.price.digital}</span>
                        <span className="text-sm text-gray-500 ml-2">Digital</span>
                      </div>
                      <motion.button 
                        className="btn-primary text-sm px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Marcus's Book */}
      <motion.section 
        className="section-padding bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marcus Thompson's Masterpiece
            </h2>
            <p className="text-xl text-gray-600">
              Ancient wisdom for the modern warrior
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {marcusBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`h-96 bg-gradient-to-br ${book.coverColor} rounded-xl p-8 text-white relative overflow-hidden shadow-2xl`}>
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{book.title}</h3>
                          <p className="text-lg opacity-90">{book.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">{book.authorName}</p>
                          <p className="opacity-80">Bestselling Author</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                      ))}
                      <span className="text-lg font-semibold text-gray-700">{book.rating}</span>
                      <span className="text-gray-500">({book.reviews} reviews)</span>
                    </div>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{book.description}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-600">{book.pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-600">{book.category}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-600">Available Now</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <span className="text-3xl font-bold text-primary-600">${book.price.digital}</span>
                          <span className="text-gray-500 ml-2">Digital Edition</span>
                        </div>
                        <div>
                          <span className="text-3xl font-bold text-gray-700">${book.price.hardcover}</span>
                          <span className="text-gray-500 ml-2">Hardcover</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button 
                          className="btn-primary flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Buy Digital Version
                        </motion.button>
                        <motion.button 
                          className="btn-secondary flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get Hardcover
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Collection Packages */}
      <motion.section 
        className="section-padding bg-primary-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: -30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Complete Collection Packages
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get all 6 books at a special bundled price and transform every aspect of your life
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white bg-opacity-10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Digital Collection</h3>
                <div className="text-4xl font-bold mb-2">$89.99</div>
                <div className="text-primary-200 mb-6">Save $25 vs individual books</div>
                <motion.button 
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Digital Bundle
                </motion.button>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Complete Collection</h3>
                <div className="text-4xl font-bold mb-2">$129.99</div>
                <div className="text-primary-200 mb-6">Digital + Hardcover editions</div>
                <motion.button 
                  className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Everything
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BooksPage;