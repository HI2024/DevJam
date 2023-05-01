import Header from "./components/Header";
import About from "./components/About";
import Category from "./components/Categories";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";
import "./Fonts/Outfit-Light.ttf";
import "./Fonts/Outfit-Medium.ttf";
import "./Fonts/Outfit-Bold.ttf";
import "./Fonts/Outfit-ExtraLight.ttf";
import "./Fonts/Outfit-Regular.ttf";
import "./Fonts/Outfit-SemiBold.ttf";
import "./Fonts/Outfit-Thin.ttf";
import "./Fonts/Outfit-ExtraBold.ttf";
import "./Fonts/Outfit-Black.ttf";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Category />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
