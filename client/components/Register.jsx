import React from 'react'
import {registerUser} from '../actions/register'
import { connect } from 'react-redux'
import {register} from '../apis/auth'

class Register extends React.Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        // registerUser(this.state)
        register(this.state)

        this.setState({
            username: '',
            password: ''
        })

    }

    render(){
        return(
            <>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    <h2>Register</h2>
                    <input type="text" name="username" placeholder='Username' onChange={this.handleChange}/>
                    <input type="text" name="password" placeholder='Password' onChange={this.handleChange}/>
                </label>
                <input type="submit" value='Submit'/>
            </form>
            </>
        )
    }
}

export default connect()(Register)