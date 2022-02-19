import MyRoute from "./router/MyRoute";
import Home from "./pages/Home";
import SendHelp from "./pages/SendHelp";
import WantToHelp from "./pages/WantToHelp";
import Header from "./components/header/Header";
import HelpForm from "./pages/HelpForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import AboutUs from "./pages/AboutUs";
export default function App() {
  return (
    <div className="App">
      <Register/>
      {/* <SendHelp/> */}
    </div>
  );
}
