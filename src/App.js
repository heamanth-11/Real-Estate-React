import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Store from "./Components/Store"
import PriceTag from "./Components/PriceTag";
import Achievement from "./Components/Achievement";
import Featuredproperty from "./Components/Featuredproperty"
import RecentProperty from "./Components/RecentProperty";


function App() {
  return (
    <div className="App">

     <Header/>
     <Achievement/>  
     <RecentProperty />
     <Featuredproperty/>
     <PriceTag/>
     <Store />
     <Footer />
    

    </div>
  );
}

export default App;
