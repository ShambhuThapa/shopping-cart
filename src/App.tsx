import { Container } from "react-bootstrap";
import Header from "./components/Header"
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:slug" element={<ProductDetail />}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
