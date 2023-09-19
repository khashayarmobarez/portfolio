import './App.css';

import Footer from './Components/Footer';
import Home from './Components/Mainpage/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
