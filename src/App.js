import { Routes, Route } from 'react-router-dom'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
    )
}

export default App
