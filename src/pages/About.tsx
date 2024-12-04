import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
      }}
    >
      {/* Contenuto principale */}
      <div className="flex items-center justify-center pt-20">
        <div className="max-w-lg w-full bg-white bg-opacity-80 shadow-lg p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-8">Chi Siamo</h1>
          <p>
            La nostra missione è offrire un’esperienza culinaria unica con un mix di tradizione e innovazione.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
