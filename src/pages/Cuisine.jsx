import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const Cuisine = () => {
    const [cuisines, setCuisines] = useState([])

    let params = useParams()

    useEffect(() => {
        getCuisines(params.type)
        console.log(params)
    }, [params.type])

    const getCuisines = async (name) => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        )

        const data = await response.json()
        setCuisines(data.results)
        console.log(data.results)
    }
    return (
        <div>
            <h3>
                {params.type.charAt(0).toUpperCase() + params.type.slice(1)}{' '}
                Cuisines
            </h3>
            <Grid>
                {cuisines.map((cuisine) => {
                    return (
                        <Card id={cuisine.id}>
                            <Link to={'/recipe/' + cuisine.id}>
                                <img src={cuisine.image} alt={cuisine.title} />
                                <p>{cuisine.title}</p>
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
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
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
        font-weight: 500;
        font-size: 0.8rem;
    }
    a {
        text-decoration: none;
        color: black;
    }
`

export default Cuisine
