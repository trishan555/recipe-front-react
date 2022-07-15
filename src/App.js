import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'
import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'
import Category from './components/Category'
import Search from './components/Search'
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <div>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={'/'}>delicious</Logo>
                </Nav>
                <Search />
                <Category />
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/cuisine/:type' element={<Cuisine />} />
                    <Route path='/searched/:search' element={<Searched />} />
                    <Route path='/recipe/:name' element={<Recipe />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    align-items: center;
    font-family: 'Lobster Two', cursive;
    color: black;
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        font-size: 2rem;
    }
`

export default App
