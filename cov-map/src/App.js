import MyRoute from "./router/MyRoute";
import Home from "./pages/Home";
import SendHelp from "./pages/SendHelp";
import WantToHelp from "./pages/WantToHelp";
import Header from "./components/header/Header";
import HelpForm from "./pages/HelpForm";
import Login from "./pages/Login";
export default function App() {
  return (
    <div className="App">
      {/*<HelpForm/> */}
      {/* <SendHelp/> */}
      <Login/>
    </div>
  );
}
