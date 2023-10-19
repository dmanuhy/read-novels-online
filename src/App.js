import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Header, Footer, Genre } from "./components/index"
import "./assets/css/layout.scss"

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres/:id" element={<Genre />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
