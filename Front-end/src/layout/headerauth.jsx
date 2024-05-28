import * as React from "react"
import { Link } from "react-router-dom"
import BurgerMenu from './BurgerMenu';

const HeaderAuth = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <nav className="flex items-center">
        <Link to="/" className="text-2xl font-irish-grover mr-4">La caverne de l'Ickabog</Link>
      </nav>
      <div className="App">
      <header className="App-header">
        <BurgerMenu />
      </header>
    </div>
    </header>
  );
}

export default HeaderAuth;
