import React from "react"

const FollowersCard = (props) => {

    const {follower} = props
    return(
        <>
         <h2>{follower.login}</h2>
         
        </>
    )
}

export default FollowersCard