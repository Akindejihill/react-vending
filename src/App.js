import {Outlet, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <header >
      React-Router Vending machine!
      <nav>
        <Link to={'/beer'}><button>Beer</button></Link>
        <Link to={'/banana'}><button>Banana</button></Link>
        <Link to={'/sage'}><button>Sage advice</button></Link>
      </nav>
    </header>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
