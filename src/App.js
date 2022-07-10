import { Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
        </Routes>
    )
}

export default App
