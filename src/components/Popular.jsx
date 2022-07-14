import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import '@splidejs/react-splide/css'

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    //this is also correct

    // const fetchData = () => {
    //     fetch(
    //         `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setRecipes(data.recipes)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const fetchData = async () => {
        //limit the api request
        const check = localStorage.getItem('popular')

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            )
            const data = await response.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        }
    }

    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide
                options={{
                    perPage: 4,
                    gap: '2rem',
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                }}
            >
                {popular.map((recipe) => {
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

export default Popular
