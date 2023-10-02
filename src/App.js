import { useEffect, useState } from 'react';
import styles from './App.module.css';

import Footer from './Components/Footer';
import Home from './Components/Mainpage/Home';
import Navbar from './Components/Navbar/Navbar';
import Loader from './Components/Loader';



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2600);
  }, [])

  return (
    <div className={styles.app}>
      {loading && <Loader /> }
      {!loading &&
      (<>
        <Navbar />
        <Home />
        <Footer />
      </>
      )}
    </div>
  );
}

export default App;
