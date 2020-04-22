import React, { Component } from 'react'
import { userService } from '../services/UserService.js'
import { bitcoinService } from '../services/BitcoinService.js'

export class HomePage extends Component {
    state = {
        user: null,
        bitcoins: 0
    }
    componentDidMount() {
        userService.getUser()
            .then(user => this.setState({ user }))
            .then(_=>{
                bitcoinService.getRate(this.state.user.coins)
                    .then(bitcoins => this.setState({ bitcoins }))
            })
    }

    render() {
        return (
            <div>
                <h2>Hi {this.state.user?.name}</h2>
                <p>Dolars: {this.state.user?.coins}</p>
                <p>Coins: { this.state.bitcoins}</p>
            </div>
        )
    }
}
