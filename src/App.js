// import logo from "./logo.svg";gr
import "./App.css";
import Features from "./Components/Body/Features/Features";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ReasturantSection from "./Components/Body/RestaurantSection/ReasturantSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <ReasturantSection />
      <Footer />
    </div>
  );
}

export default App;
