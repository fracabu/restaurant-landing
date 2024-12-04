import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { menuItems } from '../../data/menu';
import { MenuItem } from '../../types';

const MenuSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['antipasti', 'primi', 'secondi', 'dolci'];
  const categoriesItalian = {
    antipasti: 'Antipasti',
    primi: 'Primi Piatti',
    secondi: 'Secondi Piatti',
    dolci: 'Dolci',
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const renderMenuItems = (category: MenuItem['category']) => {
    return menuItems
      .filter((item) => item.category === category)
      .map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="flex justify-between items-start p-4 border-b border-gray-200 last:border-0"
        >
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
          <span className="text-amber-600 font-semibold ml-4">€{item.price}</span>
        </motion.div>
      ));
  };

  return (
    <section
      className="py-20 min-h-screen bg-cover bg-center relative"
      id="menu"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjg3NzQ4Mjgw&ixlib=rb-4.0.3&q=80&w=1080')`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* Overlay per migliorare la leggibilità */}

      <div className="relative container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 font-serif text-white"
        >
          Il Nostro Menù
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-amber-500 p-4">
                <h3 className="text-xl font-bold text-white">
                  {categoriesItalian[category as keyof typeof categoriesItalian]}
                </h3>
              </div>
              <div className="p-4">
                {renderMenuItems(category as MenuItem['category'])}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/reservations"
            className="inline-block px-8 py-3 bg-amber-500 text-white rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            Prenota un Tavolo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
