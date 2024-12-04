const Menu = () => {
  return (
    <div
    className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjg3NzQ4Mjgw&ixlib=rb-4.0.3&q=80&w=1080')`,
    }}
  >
      <div className="container max-w-5xl w-full bg-white bg-opacity-80 shadow-lg p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Il Nostro Menù</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Antipasti</h2>
            <p>Bruschette, Caprese</p>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Primi</h2>
            <p>Lasagna, Spaghetti alla Carbonara</p>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Secondi</h2>
            <p>Bistecca Fiorentina, Pesce al Forno</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
