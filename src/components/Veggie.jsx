import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        //limit the api request
        const check = localStorage.getItem('veggie')

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            )
            const data = await response.json()
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data.recipes)
        }
    }

    return (
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide
                options={{
                    perPage: 3,
                    gap: '5rem',
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                }}
            >
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                    />
                                    <Gradiant />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
        /* height: auto; */
    }

    p {
        z-index: 10;
        color: white;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: absolute;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        left: 50%;
        bottom: 10%;
        transform: translate(-50%, 0);
    }
`

const Gradiant = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Veggie
