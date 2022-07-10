import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Category from '../components/Category'

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
            <div>
                <Category />
            </div>
            <div>
                <h3>
                    {params.type.charAt(0).toUpperCase() + params.type.slice(1)}{' '}
                    Cuisines
                </h3>
                <Grid>
                    {cuisines.map((cuisine) => {
                        return (
                            <Card id={cuisine.id}>
                                <img src={cuisine.image} alt={cuisine.title} />
                                <p>{cuisine.title}</p>
                            </Card>
                        )
                    })}
                </Grid>
            </div>
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
    }
`

export default Cuisine