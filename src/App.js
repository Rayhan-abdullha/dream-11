import React, { useState, useEffect } from 'react';
import './App.css';
import playerData from './data/data.json';
import Players from './Componate/Players/Players';
import Navigation from './Componate/Navigation/Navigation';
import Cart from './Componate/Cart/Cart';
import Footer from './Componate/Footer/Footer';

function App() {
 
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    setPlayer(playerData)
  },[])
  // buy button evenHandler
  const handleAddPlayer = (addCart) => {
    const newCart = [...cart, addCart]
    setCart(newCart)
  }

  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
    <div className="welcome-text text-center">
      <h1 className="my-5">Dream Eleven</h1>
    </div>
    <div className="allPlayerList">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              {
                player.map(players => <Players playersInfo={players} handleAddPlayer={handleAddPlayer} key={players.alpha3Code}></Players>)
              }
            </div>
          </div>
          <div className="col-xl-3">
              <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
      <footer className="footer text-center bg-dark py-5 text-white">
        <Footer></Footer>
      </footer>
    </div>
    
  );
}

export default App;
