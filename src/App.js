import logo from './logo.svg';
import './App.scss';

import "..//node_modules/bootstrap/dist/js/bootstrap.bundle";
// Components
import Header from'./Components/Header';
import Footer from './Components/Footer';

//Pages
import Routes from './Pages/Routes';



function App() {
  return (
    <>
   <Routes />
    </>
  );
}

export default App;
