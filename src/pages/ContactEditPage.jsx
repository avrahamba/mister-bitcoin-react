import React, { Component } from 'react'
import { contactService } from '../services/ContacrServie.js';
import { Redirect } from 'react-router';


export class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }
    async componentDidMount() {
        const id = this.props.match.params.id
        if (id) {
            this.setState({deleteStr:'Delete'})
            contactService.getContactById(id)
            .then(contact => { this.setState({ contact }) })
            .catch(_ => { })
        }
        else this.setState({deleteStr:'Cancel'})
    }
    handleInputChange = (field, value) => {
        this.setState(({ contact }) => {
            return { contact: { ...contact, [field]: value } }
        })
    }
    handleSave = _ => {
        contactService.saveContact(this.state.contact)
            .then(contact => this.setState({ redirect: true, newId: contact._id }))
    }
    handleDelete=_=> {
        if (this.state.contact._id) {
            contactService.deleteContact(this.state.contact._id)
                .then(_ => this.setState({ back: true }))
        } else this.setState({ back: true })

    }
    render() {
        const { contact } = this.state;

        if (this.state.redirect) {
            if (contact._id) return <Redirect push to={'/contact/' + contact._id} />;
            else return <Redirect push to={'/contact/' + this.state.newId} />;
        }
        if (this.state.back) {
            return <Redirect push to="/contact" />;
        }

        if (!contact) {
            return <div>Loading! :) </div>;
        }

        return (
            <div>
                <img
                    src={`https://robohash.org/${contact._id}.png`}
                    alt=""
                />
                <form onSubmit={ev => ev.preventDefault()}>
                    <input type="text" onChange={ev => this.handleInputChange('name', ev.target.value)} placeholder="Name" value={contact.name} />
                    <input type="text" onChange={ev => this.handleInputChange('email', ev.target.value)} placeholder="Email" value={contact.email} />
                    <input type="text" onChange={ev => this.handleInputChange('phone', ev.target.value)} placeholder="phone" value={contact.phone} />
                    <button onClick={this.handleSave}>Save</button>
                </form>
                <button onClick={this.handleDelete}>{this.state.deleteStr}</button>
            </div>
        )
    }
}
