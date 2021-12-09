import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Store from "./Components/Store"

import Achievement from "./Components/Achievement";

import RecentProperty from "./Components/RecentProperty";


function App() {
  return (
    <div className="App">

     <Header/>
     <Achievement/>  
     <RecentProperty />
     <Store />
     <Footer />
    

    </div>
  );
}

export default App;
