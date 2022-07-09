import { useEffect, useState } from 'react'

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

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
        const response = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        )
        const data = await response.json()
        setPopular(data.recipes)
    }

    return (
        <div>
            <ul>
                {popular.map((recipe) => {
                    return <li key={recipe.id}>{recipe.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Popular
