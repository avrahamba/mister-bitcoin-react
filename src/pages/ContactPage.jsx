import React, { Component } from 'react'
import { contactService } from '../services/ContacrServie.js'
import { ContactList } from '../components/ContactList'
import { ConractFilter } from '../components/ConractFilter'
import { NavLink } from 'react-router-dom';

export class ContactPage extends Component {
    state = {
        filterBy: {
            term: ''
        },
        contacts: []
    }
    componentDidMount() {
        contactService.getContacts()
            .then(contacts => { this.setState({ contacts }) })
    }
    onFileHendler = filterBy => {
        contactService.getContacts(filterBy)
            .then(contacts => { this.setState({ contacts }) })
    }

    render() {
        return (
            <div>
                <ConractFilter onFilter={this.onFileHendler} filterBy={this.state.filterBy}></ConractFilter>
                <ContactList contacts={this.state.contacts} />
                <NavLink to="/edit">Add</NavLink>
            </div>
        )
    }
}
