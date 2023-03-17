import "./App.css";
import Header from "./components/Header";
import Projeler from "./components/projelercomps/Projeler";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import FForm from "./components/Form";

function App() {
  return (
    <div className="app">
      <Header />
      <Skills />
      <Profile />
      <Projeler />
      <Footer />
      <FForm />
    </div>
  );
}

export default App;
