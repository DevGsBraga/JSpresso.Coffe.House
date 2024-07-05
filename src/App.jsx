import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





// IMPORTE DOS COMPONENTES
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SobrePage from "./pages/Sobre/SobrePage";


// VAI FICAR TODOS OS COMPONENTES QUE SERÃO CRIADO PARA DAR VIDA AO SITE..

function App() {

  return (
    <>
    <Router>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<SobrePage />} />

      </Routes>

    </Router>




    </>
  )
}

export default App
