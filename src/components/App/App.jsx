import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Popup isOpen={true} />
    </div>
  );
}

export default App;
