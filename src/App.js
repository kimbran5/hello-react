import './App.css';

//This component isn't practical, but I wanted to try and recreate the example function
const iceCreamTruck = {
  title: 'Welcome to Brandon\'s Ice Cream Truck!',
  slogan: '"Enjoy a scoop today!"',
  image: 'https://cdn-icons-png.flaticon.com/512/532/532832.png',
  width: '264',
  height: '378'
};

function Truck() {
  return (
    <div>
      <h2>{iceCreamTruck.title}</h2>
      <p>{iceCreamTruck.slogan}</p>
      <img
        className="iceCreamTruckLogo"
        src={iceCreamTruck.image}
        alt={iceCreamTruck.title + ' logo'}
        style={{
            width: iceCreamTruck.width,
            height: iceCreamTruck.height
        }}
      />
    </div>
  );
}

const iceCreamFlavors = [
  { id: 1, flavor: 'Chocolate - $', price: 2.50, available: true },
  { id: 2, flavor: 'Vanilla - $', price: 2.00, available: true },
  { id: 3, flavor: 'Strawberry - $', price: 3.00, available: false },
  { id: 4, flavor: 'Mint Chocolate Chip - $', price: 3.50, available: true },
  { id: 5, flavor: 'Cookies and Cream - $', price: 3.50, available: false },
  { id: 6, flavor: 'Rocky Road - $', price: 3.00, available: true }
];

function IceCreamList() {
  const listFlavors = iceCreamFlavors.map(flavor =>
    <li
      key={flavor.id}
      style={{
        color: flavor.available ? 'green' : 'red'
      }}
    >
      {flavor.flavor}
      {flavor.price}
    </li>
);
return (
  <div>
    <h3>Flavors and Availability:</h3> 
    <ul>{listFlavors}</ul>
  </div>
  )
}

const iceCreamToppings = [
  { id: 1, type: 'Hot Fudge - $', price: 0.50 },
  { id: 2, type: 'Caramel - $', price: 0.50 },
  { id: 3, type: 'Sprinkles - $', price: 0.25 },
  { id: 4, type: 'Mixed Nuts - $', price: 0.50 },
  { id: 5, type: 'Whipped Cream - $', price: 0.25 },
  { id: 6, type: 'Gummy Bears - $', price: 0.50 }
];

function ToppingsList() {
  const listToppings = iceCreamToppings.map(topping =>
    <li
      key={topping.id}
      style={{
        color: topping.price === 0.50 ? 'gold' : 'silver'
      }}
    >
      {topping.type}
      {topping.price}
    </li>
);
return (
  <div>
    <h3>Ice Cream Toppings:</h3>
    <ul>{listToppings}</ul>
  </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Truck />
        <IceCreamList />
        <ToppingsList />
      </header>
    </div>
  );
}

export default App;
