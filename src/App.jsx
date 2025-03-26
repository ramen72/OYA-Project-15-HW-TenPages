import { BrowserRouter, Route, Routes } from 'react-router'
import './assets/css/tailwindCSS.css'
import PageOne from './pages/PageOne'
import Home from './AllProjects/projectOne/pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageOne/>}/>
          <Route path='/projectOne' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
