import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/home";
import About from "./components/Routes/about";
import Services from "./components/Routes/services";
import Faq from "./components/Routes/faq";
import NotFound from "./components/Routes/notFound";
import Navigation from "./components/Navbar/Navigation";


function App() {
  return (

    <Routes >
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Services" element={<Services/>} />
        <Route path="Faq" element={<Faq/>} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>

  );
}

export default App;
