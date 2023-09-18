//----- IMPORTS -----//
import { Outlet } from "react-router-dom";

import 'normalize.css'
import './App.css';

//----- EXPORTS -----//
function App() {

  return (
    <div className="main">
      <Outlet />
    </div>
  )
}

export default App
