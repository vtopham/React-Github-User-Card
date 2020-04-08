import React from "react"
import styled from "styled-components"
import FollowersCard from "./FollowersCard"

//style the card that holds user data
const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    align-items: center;

   img {
       width: 50%;
   }




`



const Card = (props) => {

    const {userName, apiData, followers} = props

    return(
        <CardHolder>
            <h1>{apiData.name}</h1>
            
            <img src = {apiData.avatarURL} alt = "the user's avatar"/>
            <p>{apiData.bio}</p>
            <div className = "followers-card">
                <h3>Followers ({apiData.numOfFollowers})</h3>
                {followers.map((follower) => {
                    return <FollowersCard key = {follower.id} follower = {follower}/>
                })}
            </div>
                
        </CardHolder>
    )
}

export default Card