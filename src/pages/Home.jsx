import Category from '../components/Category'
import Popular from '../components/Popular'
import Search from '../components/Search'
import Veggie from '../components/Veggie'

const Home = () => {
    return (
        <div>
            <Search />
            <Category />
            <Veggie />
            <Popular />
        </div>
    )
}

export default Home
