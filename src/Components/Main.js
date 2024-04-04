import React from 'react';
import '../styles/Main.css';

function Main() {
  const laptops = [
    {
      name: 'Mac Book',
      price: '$1999',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Dell 14 Laptop',
      price: '$1299',
      image: 'https://m.media-amazon.com/images/I/61GEizrmU9L._AC_UY218_.jpg', 
    },
    {
      name: 'HP Laptop 15s',
      price: '$899',
      image: 'https://m.media-amazon.com/images/I/71+W1knSKPL._AC_UY218_.jpg',
    },
    {
      name: 'Samsung Galaxy Book2',
      price: '$1499',
      image: 'https://m.media-amazon.com/images/I/71VETao+NEL._AC_UL320_.jpg', 
    },
    {
      name: 'Asus vivoBook K15',
      price: '$1099',
      image: 'https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UY218_.jpg', 
    },
    {
        name: 'Mac Book Pro',
        price: '$999',
        image: 'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg',
      },
      {
        name: 'Dell 15 laptop',
        price: '$1299',
        image: 'https://m.media-amazon.com/images/I/51UqceHVZ5L._AC_UY218_.jpg', 
      },
      {
        name: 'Hp Envy x360',
        price: '$899',
        image: 'https://m.media-amazon.com/images/I/71wXesJri5L._AC_UY218_.jpg',
      },
      {
        name: 'Samsung Galaxy Book4 pro',
        price: '$1499',
        image: 'https://m.media-amazon.com/images/I/710dnv-+HTL._AC_UY218_.jpg', 
      },
      {
        name: 'HP victus Gaming laptop',
        price: '$1099',
        image: 'https://m.media-amazon.com/images/I/71SHyB5cVnL._AC_UY218_.jpg', 
      },
  ];

  return (
    <div className="laptop-container">
      {laptops.map((laptop, index) => (
        <div key={index} className="laptop">
          
          <img src={laptop.image} alt={laptop.name} />
          <br></br><br></br>
          <h1>{laptop.name}</h1>
          
          <h2>Price: {laptop.price}</h2>
          <br></br>
          <button className='buyButton' >Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default Main;