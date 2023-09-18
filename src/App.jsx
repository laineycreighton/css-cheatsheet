//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

//----- EXPORTS -----//
function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
