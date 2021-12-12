import "./App.scss";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import CartPage from "./pages/Cart/CartPage";

function App(props) {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="home"/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cartPage" element={<CartPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
