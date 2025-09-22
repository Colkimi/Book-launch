import { motion } from 'framer-motion';
import { Award, Globe, Twitter, Linkedin, Mail, Star, Calendar } from 'lucide-react';
import { authors, books } from '../data/books';

const AuthorPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

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
            className="text-center max-w-4xl mx-auto mb-16"
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
              Meet Our <span className="text-primary-600">Authors</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Two remarkable experts bringing together the best of neuroscience and ancient wisdom 
              to create a transformational collection that will change how you see yourself and the world.
            </motion.p>
          </motion.div>

          {/* Authors Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {authors.map((author, index) => (
              <motion.div
                key={author.id}
                variants={itemVariants}
                className="text-center"
              >
                {/* Author Photo */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mx-auto flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Award className="h-10 w-10 text-white" />
                  </motion.div>
                </motion.div>

                {/* Author Info */}
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  {author.name}
                </motion.h2>
                <motion.p 
                  className="text-xl text-primary-600 font-semibold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  {author.title}
                </motion.p>
                
                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">{author.bookCount}</p>
                    <p className="text-gray-600">Book{author.bookCount > 1 ? 's' : ''}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">500K+</p>
                    <p className="text-gray-600">Lives Touched</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.2 }}
                >
                  {[
                    { icon: Twitter, href: author.socialLinks.twitter },
                    { icon: Linkedin, href: author.socialLinks.linkedin },
                    { icon: Mail, href: `mailto:${author.socialLinks.website}` },
                    { icon: Globe, href: author.socialLinks.website }
                  ].map((social, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href={social.href}
                      className="p-3 bg-primary-100 text-primary-600 rounded-full hover:bg-primary-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Individual Author Sections */}
      {authors.map((author, authorIndex) => {
        const authorBooks = books.filter(book => book.authorId === author.id);
        
        return (
          <motion.section 
            key={author.id}
            className={`section-padding ${authorIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Author Details */}
                <motion.div 
                  variants={itemVariants}
                  className={authorIndex % 2 === 0 ? 'order-1' : 'order-2'}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    About {author.name.split(' ')[0]}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {author.bio}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900">Credentials & Achievements</h3>
                    {author.credentials.map((credential, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-5 w-5 text-gold-500 mt-1" />
                        <span className="text-gray-700">{credential}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.div 
                    className="bg-primary-50 rounded-xl p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <blockquote className="text-lg text-gray-700 italic mb-4">
                      {author.id === 1 
                        ? "\"The brain is remarkably plastic. By understanding how it works, we can consciously direct our thoughts and behaviors to create the life we truly want.\""
                        : "\"True strength comes not from forcing our will upon the world, but from aligning ourselves with the deeper currents of wisdom that have guided humanity for millennia.\""
                      }
                    </blockquote>
                    <cite className="text-primary-600 font-semibold">- {author.name}</cite>
                  </motion.div>
                </motion.div>

                {/* Author's Books */}
                <motion.div 
                  variants={itemVariants}
                  className={authorIndex % 2 === 0 ? 'order-2' : 'order-1'}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {author.name.split(' ')[0]}'s Books
                  </h3>
                  
                  <div className="space-y-6">
                    {authorBooks.map((book, bookIndex) => (
                      <motion.div
                        key={book.id}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: bookIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-16 h-20 bg-gradient-to-br ${book.coverColor} rounded-lg flex-shrink-0`} />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h4>
                            <p className="text-sm text-primary-600 mb-2">{book.subtitle}</p>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{book.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">({book.reviews})</span>
                              </div>
                              <span className="text-lg font-bold text-primary-600">${book.price.digital}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Timeline Section */}
      <motion.section 
        className="section-padding bg-primary-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Collaboration Journey
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              How two different approaches to human potential came together to create something extraordinary.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "First Meeting",
                  description: "Dr. Mitchell and Marcus met at a consciousness conference, discovering their complementary approaches."
                },
                {
                  year: "2021",
                  title: "Collaborative Research",
                  description: "Beginning joint research into the intersection of neuroscience and ancient wisdom practices."
                },
                {
                  year: "2022",
                  title: "Framework Development",
                  description: "Creating the integrated methodology that would become the foundation of their book series."
                },
                {
                  year: "2024",
                  title: "Writing Phase",
                  description: "Intensive writing period, with Dr. Mitchell focusing on neuroscience-based books and Marcus on wisdom traditions."
                },
                {
                  year: "2025",
                  title: "Launch",
                  description: "Simultaneous release of their complete collection, offering readers a comprehensive transformation toolkit."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-8"
                >
                  <motion.div 
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-600 font-bold text-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {milestone.year}
                  </motion.div>
                  <div className="flex-1 bg-white bg-opacity-10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-primary-100">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="section-padding bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Our Authors
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Both Dr. Mitchell and Marcus are available for speaking engagements, workshops, and media interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Speaking Event
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Media Inquiries
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AuthorPage;