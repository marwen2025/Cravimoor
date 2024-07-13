import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/Aboutus/AboutUs';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contactus/ContactUs';
import Services from './Components/Services/Services';
function App() {
  return (
    <>
      <div className=" bg-white ">
      <NavBar/>
      <Home/>  
      <AboutUs/>
      <Services/>
      <Projects/>
      
      {/*<ContactUs/>
      <Footer/> */}
      </div>    
    </>
  );
}

export default App;
