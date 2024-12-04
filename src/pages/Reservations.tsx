import Footer from "../components/layout/Footer";

const Reservations = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjg3NzQ4Mjgw&ixlib=rb-4.0.3&q=80&w=1080')`,
      }}
    >
      {/* Contenuto principale */}
      <div className="flex items-center justify-center pt-20">
        <div className="max-w-lg w-full bg-white bg-opacity-80 shadow-lg p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-8">Prenota un Tavolo</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Inserisci il tuo nome"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Data e Ora</label>
              <input
                type="datetime-local"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Numero di Persone</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600"
            >
              Prenota
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reservations;
