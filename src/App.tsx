import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeIndex from './routes/Home/HomeIndex'
import Promocao from './routes/Home/Promocao'


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<HomeIndex />} />
            <Route path='home' element={<HomeIndex />} />
            <Route path='promocao' element={<Promocao />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
