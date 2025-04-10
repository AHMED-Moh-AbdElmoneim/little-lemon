import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import pages from "./src/utils/pages";
import Layout from "./src/layouts/Layout/Layout";
import Menu from "./src/pages/Menu/Menu";
import Orders from "./src/pages/Orders/Orders";
import About from "./src/pages/About/About";
import Login from "./src/pages/Login/Login";
import Reservations from "./src/pages/Reservations/Reservations";
const App = () => {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("menu").path} element={<Menu />} />
          <Route path={pages.get("reservations").path} element={<Reservations />} />
          <Route path={pages.get("orders").path} element={<Orders />} />
          <Route path={pages.get("login").path} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
