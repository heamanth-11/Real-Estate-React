import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Store from "./Components/Store"
import PriceTag from "./Components/PriceTag";
import Achievement from "./Components/Achievement";
import Featuredproperty from "./Components/Featuredproperty"
import RecentProperty from "./Components/RecentProperty";
import Home from "./Components/Home";
import ReviewCard from "./Components/ReviewCard";
import Review from "./Components/Review";


function App() {
  return (
    <div className="App">
     <Header/>
      <Home />
     <Achievement/>  
     <RecentProperty />
     <Featuredproperty/>
     <PriceTag/>
     <Review />
     <Store />
     <Footer />   

    </div>
  );
}

export default App;
