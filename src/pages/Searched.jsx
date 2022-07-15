import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
            <Grid>
                {searchedRecipes.map((item) => {
                    return (
                        <Card>
                            <Link to={'/recipe/' + item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </Link>
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

    a {
        text-decoration: none;
        color: black;
    }

    p {
        text-align: center;
        padding: 1rem;
        font-weight: 500;
        font-size: 0.8rem;
    }
`

export default Searched
