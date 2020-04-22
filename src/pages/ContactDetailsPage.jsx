import React, { Component } from 'react'
import { contactService } from '../services/ContacrServie.js';
import { NavLink } from 'react-router-dom';


export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }
    componentDidMount() {
        const id = this.props.match.params.id
        contactService.getContactById(id)
            .then(contact => this.setState({ contact }))
    }
    render() {
        const { contact } = this.state;
        if (!contact) {
            return <div>Loading! :) </div>;
        }

        return (
            <div>
                <NavLink to="/contact">Back</NavLink>
                <NavLink to={'/edit/' + contact._id}>edit</NavLink>
                <img
                    src={`https://robohash.org/${contact._id}.png`}
                    alt=""
                />
                <h1>{contact.name}</h1>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
        )
    }
}
