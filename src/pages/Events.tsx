import Footer from "../components/layout/Footer";

const Events = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
      }}
    >
      {/* Contenuto principale */}
      <div className="flex items-center justify-center pt-20">
        <div className="max-w-lg w-full bg-white shadow-lg p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-8">I Nostri Eventi</h1>
          <p>
            Organizziamo eventi privati, feste di compleanno e cene aziendali. <br />
            Contattaci per maggiori informazioni!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
