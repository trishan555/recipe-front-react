import { Routes, Route } from 'react-router-dom'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Searched from './pages/Searched'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
        </Routes>
    )
}

export default App
