import React, { Component } from 'react'
import { connect } from 'react-redux'

import { laodUser, loadMove } from '../actions/UserActions'
import { userService } from '../services/UserService'


class SignupPage extends Component {
    async componentDidMount() {
        this.setState({ name: '' })
    }

    clickHelnder = async () => {
        await userService.setUser(this.state.name)
        this.props.signup()
    }

    render() {
        return (
            <div className="signup-page">
                <h1>Hello new user</h1>
                <form onSubmit={this.clickHelnder}>
                    <input type="text" placeholder="Enter Name" onChange={ev => this.setState({ name: ev.target.value })} />
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

const mapDispatchToProps = {
    laodUser, loadMove
};



export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
