import logo from './logo.svg';
import './App.scss';

import "..//node_modules/bootstrap/dist/js/bootstrap.bundle";
// Components
import Header from'./Components/Header';
import Footer from './Components/Footer';

//Pages
import Home from './Pages/Home'

function App() {
  return (
    <>
     <header>
     <Header />
     </header>
     <main>
     <Home />
     </main>
     <Footer />
    </>
  );
}

export default App;
