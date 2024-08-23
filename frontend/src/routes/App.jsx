import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItem from "../components/FetchItem";

function App() {
  return (
    <>
      <Header />
      <FetchItem />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
