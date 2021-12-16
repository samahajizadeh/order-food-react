import React, { Suspense } from "react"
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import Preloader from "./components/UI/Preloader";


const HomePage = React.lazy(()=> import("./pages/Home/HomePage"));
const LoginPage = React.lazy(()=> import("./pages/Login/LoginPage"));
const NotFoundPage = React.lazy(()=> import("./pages/NotFound/NotFoundPage"));
const AboutPage = React.lazy(()=> import("./pages/About/AboutPage"));
const ContactPage = React.lazy(()=> import("./pages/Contact/ContactPage"));
const CartPage = React.lazy(()=> import("./pages/Cart/CartPage"));
const OrderPage = React.lazy(()=> import("./pages/Orders/OrdersPage"));

function App(props) {
  return (
    <Router>
      <Layout>
      <Suspense fallback={<Preloader/>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="home"/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/order" element={<OrderPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
