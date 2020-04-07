import React from "react"
import styled from "styled-components"

//style the card that holds user data
const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;

    h1 {
        align-self: center;
    }

    img {
        width: 50%;
        align-self: center;
    }


`



const Card = (props) => {

    const {userName, apiData} = props
    console.log(apiData.avatarURL)

    return(
        <CardHolder>
            <h1>{apiData.name}</h1>
            
            <img src = {apiData.avatarURL} alt = "the user's avatar"/>
            
        </CardHolder>
    )
}

export default Card