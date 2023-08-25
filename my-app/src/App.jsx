
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Articles from "./pages/articles.jsx";
import ReadArticle from "./pages/readArticle.jsx";
import Contact from "./pages/contact.jsx";
import Notfound from "./pages/404.jsx";
import useLoader from './Hooks/useLoader.jsx'
import "./App.css";
import Loader from './components/loader/loader.jsx'


function App() {
  const loading = useLoader(4000);

  return (
    <div className="App">
     {loading ? (
        <Loader />
      ) : (
        <BrowserRouter basename="/optimized-portfolio">
         <Routes >
          <Route  path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<ReadArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        </BrowserRouter>    

       
       
      )}
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;