import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: this.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => {
        console.log("clicked")
    }
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div styles={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcom {this.state.name}</h2>
                    Email:{this.state.email}
                </div>
            )
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId='1056623285660615'
                    autoLoad={true}
                    fields='name, email,picture'
                    onclick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            )
        }
        return (
            <div>{fbContent}</div >
        )
    }
}

export default Facebook