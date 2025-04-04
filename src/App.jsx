import { BrowserRouter, Route, Routes } from 'react-router'
import './assets/css/tailwindCSS.css'
import PageOne from './pages/PageOne'
import HomeOne from './AllProjects/projectOne/pages/Home';
import HomeTwo from './AllProjects/ProjectTwo/pages/Home';
import HomeThree from './AllProjects/projectThree/pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageOne/>}/>
          <Route path='/projectOne' element={<HomeOne/>}/>
          <Route path='/projectTwo' element={<HomeTwo/>}/>
          <Route path='/businessConsulting' element={<HomeThree/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
