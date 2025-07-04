
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Menu from './components/Menu';
import Contact from './components/Contact';
import { createBrowserRouter } from 'react-router';
import Error from './components/Error';
import App from './components/App';

const data = {
  pizza: [
    {name: 'Çiken Ranç', img: 'cikenRanc.jpg', desc: 'Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella'},
    {name: 'Marqarita', img: 'marqarita.jpg', desc: 'Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano'},
    {name: '4 Pendir', img: '4pendir.jpg', desc: 'Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar pendirləri'},
    {name: 'Qarışıq ət', img: 'qarıshıqEt.jpg', desc: 'Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella'},
    {name: 'NY Style Pizza Pepperoni', img: 'NYpepperoni.jpg', desc: 'Pizza sousu, Pepperoni, Mozzarella'},
  ]
}
const router = createBrowserRouter([
    
    {path: '/', element: <App />, children:[
        {index: true, element: <Navigate to="menu"></Navigate>},
        {path: 'main', element: <Main />},
        {path: 'menu', element: <Menu />},
        {path: 'contact', element: <Contact />},
        {path: '*', element: <Error />}
]}
    
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
