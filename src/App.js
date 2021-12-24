import React, { Component, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Preloader from "./components/UI/Preloader";
import CheckOut from "./components/Order/CheckOut";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const LoginPage = React.lazy(() => import("./pages/Login/LoginPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound/NotFoundPage"));
const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/Contact/ContactPage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const OrderPage = React.lazy(() => import("./pages/Orders/OrdersPage"));
const OrderDetail = React.lazy(() => import("./pages/Orders/OrderDetail"));


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <ToastContainer style={{ fontFamily: "IranSans" }} />
          <Suspense fallback={<Preloader />}>
            <Routes>
              {/* <Route path="/" element={<LoginPage />} /> */}
              <Route path="/" element={<Navigate replace to="/home"/>}/>
              <Route path="/home" element={<HomePage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/order">
                <Route path=":orderId" element={<OrderDetail />} />
              </Route>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkOut" element={<CheckOut />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default App;
