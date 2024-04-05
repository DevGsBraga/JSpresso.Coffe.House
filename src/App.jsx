import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





// IMPORTE DOS COMPONENTES
import Home from "./pages/Home/Home";


// VAI FICAR TODOS OS COMPONENTES QUE SERÃO CRIADO PARA DAR VIDA AO SITE..

function App() {

  return (
    <>
    <Router>

      <Routes>
          <Route path="/" element={<Home />} />

      </Routes>

    </Router>




    </>
  )
}

export default App
