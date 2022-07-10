import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import Search from '../components/Search'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Searched = () => {
    let params = useParams()
    const [searchedRecipes, setSearchedRecipes] = useState([])

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    const getSearched = async (name) => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
        const data = await response.json()

        setSearchedRecipes(data.results)
        console.log(data.results)
    }
    return (
        <div>
            <div>
                <Search />
                <Category />
            </div>
            <Grid>
                {searchedRecipes.map((item) => {
                    return (
                        <Card>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </Card>
                    )
                })}
            </Grid>
        </div>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 2rem;
`

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    p {
        text-align: center;
        padding: 1rem;
    }
`

export default Searched
