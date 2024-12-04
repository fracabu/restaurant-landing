import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjg3NzQ4Mjgw&ixlib=rb-4.0.3&q=80&w=1080')`,
      }}
    >
      {/* Overlay per migliorare il contrasto */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenitore per il contenuto */}
      <div className="relative max-w-lg w-full bg-white bg-opacity-90 shadow-lg p-6 rounded-lg text-center z-10 mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-8">Contattaci</h1>
        <ul className="space-y-4">
          <li className="text-lg">
            Email:{' '}
            <a href="mailto:info@lacucinaitaliana.it" className="text-amber-500 hover:underline">
              info@lacucinaitaliana.it
            </a>
          </li>
          <li className="text-lg">
            Telefono:{' '}
            <a href="tel:+39123456789" className="text-amber-500 hover:underline">
              +39 123 456 789
            </a>
          </li>
          <li className="text-lg">Indirizzo: Via Roma 1, Milano</li>
        </ul>
        <div className="mt-8">
          {/* Embed Google Maps */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.526887568084!2d9.18893451549805!3d45.464203079101366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a3e6f31bff%3A0x90b5761bd4a9f48a!2sVia%20Roma%201%2C%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2sit!4v1687649163712!5m2!1sen!2sit"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
