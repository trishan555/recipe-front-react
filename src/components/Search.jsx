import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const searchHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + search)
    }

    return (
        <StyledForm onSubmit={searchHandler}>
            <FaSearch />
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </StyledForm>
    )
}

const StyledForm = styled.form`
    position: relative;
    margin: 0rem 10rem;

    input {
        border: none;
        border-radius: 1rem;
        background: linear-gradient(10deg, #615f5f, #342f2f);
        width: 100%;
        outline: none;
        color: white;
        font-size: 1rem;
        padding: 1rem 3rem;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search
