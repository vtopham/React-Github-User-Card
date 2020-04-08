import React from 'react';
import axios from "axios"
import logo from './logo.svg';
import './App.css';
import Card from "./components/card"



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      userName: "vtopham",
      apiData: {
        name: "",
        avatarURL: "",
        company: "",
        bio: "",
        numOfFollowers: ""
      },
      followers: []
    }
  }

  componentDidMount() { //grab the data from the API
    axios.get(`https://api.github.com/users/vtopham`)
    .then(response => {
      // console.log(response.data)
      this.setState({apiData: {
        name: response.data.name,
        avatarURL: response.data.avatar_url,
        company: response.data.company,
        bio: response.data.bio,
        numOfFollowers: response.data.followers
      }
    })

    }) //end .then
    .catch(
      console.log("user request failed")
    )

    axios.get(`https://api.github.com/users/vtopham/followers`)
    .then(response => {
      console.log(response.data)
      this.setState({followers: response.data})
    }) //end .then
    .catch(
      console.log("followers request failed")
    )
  } //end componentDidMount
  

  render(){
    return(
      <>
      <Card 
        // userName = {this.state.userName}
        apiData = {this.state.apiData}
        followers = {this.state.followers}/>
      </>
    )
  }
}

export default App;
