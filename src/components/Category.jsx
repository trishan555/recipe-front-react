import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { IoMdPizza } from 'react-icons/io'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Category = () => {
    return (
        <List>
            <SLink to={'/cuisine/american/'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/italian/'}>
                <IoMdPizza />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/thai/'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/chinese/'}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1.5rem;

    text-decoration: none;
    background-color: #2a3232;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    transform: scale(0.9);

    h4 {
        font-size: 0.6rem;
        color: #f0f4f8;
    }

    svg {
        color: #f0f4f8;
        font-size: 1.3rem;
    }

    &.active {
        background: linear-gradient(to right, #ee763f, #e73d05);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`

export default Category
