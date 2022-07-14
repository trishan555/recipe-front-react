import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Category from '../components/Category'
import Search from '../components/Search'
import styled from 'styled-components'

const Recipe = () => {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    const params = useParams()

    useEffect(() => {
        fetchDetails()
    }, [params.name])
    const fetchDetails = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        const data = await response.json()
        setDetails(data)
        console.log(data)
    }

    return (
        <div>
            <div>
                <Search />
                <Category />
            </div>
            <DetailWrapper>
                <div>
                    <h3>{details.title}</h3>
                    <img src={details.image} alt={details.title} />
                </div>
                <div>
                    <Button
                        className={activeTab === 'instructions' ? 'active' : ''}
                        onClick={() => setActiveTab('instructions')}
                    >
                        Instruction
                    </Button>
                    <Button
                        className={activeTab === 'ingredients' ? 'active' : ''}
                        onClick={() => setActiveTab('ingredients')}
                    >
                        Ingredients
                    </Button>

                    {activeTab === 'instructions' && (
                        <div>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: details.summary,
                                }}
                            ></p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: details.instructions,
                                }}
                            ></p>
                        </div>
                    )}
                    {activeTab === 'ingredients' && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => {
                                return <li>{ingredient.original}</li>
                            })}
                        </ul>
                    )}
                </div>
            </DetailWrapper>
        </div>
    )
}

const DetailWrapper = styled.div`
    margin-top: 3rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`
const Button = styled.button`
    margin-right: 2rem;
    border: 2px solid black;
    color: #313131;
    background-color: white;
    padding: 1rem 2rem;
    font-weight: 700;
`
export default Recipe
