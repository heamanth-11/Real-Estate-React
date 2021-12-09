import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Store from "./Components/Store"
import RecentProperty from "./Components/RecentProperty";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <RecentProperty />
     <Store />
     <Footer />
    
    </div>
  );
}

export default App;
