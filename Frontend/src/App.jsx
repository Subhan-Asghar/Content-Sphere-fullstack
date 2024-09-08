import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'
import Viewblog from './pages/Viewblog'
import { Routes,Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/view/:id' element={<Viewblog />} />

      </Routes>
    </>
  )
}

export default App
