import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Counter from "./pages/Counter.js"
import Effect from "./pages/Effect.js"
import Reducer from "./pages/Reducer.js"

export default function App() {  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="service" element={<Service/>} />
    <Route path="counter" element={<Counter/>} />
    <Route path="effect" element={<Effect/>} />
    <Route path="reducer" element={<Reducer/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
} 
