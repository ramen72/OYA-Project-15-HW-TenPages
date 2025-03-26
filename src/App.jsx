import { BrowserRouter, Route, Routes } from 'react-router'
import './assets/css/tailwindCSS.css'
import PageOne from './pages/PageOne'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageOne/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
