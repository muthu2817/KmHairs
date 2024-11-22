import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from '../src/Pages/About.jsx';
import Store from '../src/Pages/Store.jsx';
import Product from '../src/Pages/Products.jsx';
import Blog from '../src/Pages/blog.jsx';
import Notfound from '../src/utils/ErrorPage.jsx';
import ContactPage from './Pages/Contactus.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
       <Route path="/" element={<App/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/productpage" element={<Product/>}></Route>
       <Route path="/store" element={<Store/>}></Route>
       <Route path="/blog" element={<Blog/>}></Route>
       <Route path="/contactus" element={<ContactPage/>}></Route>
       <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </Router>
  </StrictMode>
)