import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Header, Footer } from "./components/index"
import './assets/css/layout.css'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
