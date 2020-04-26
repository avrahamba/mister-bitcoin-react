import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loadContactById, saveContact, deleteContact } from '../actions/ContactActions'

import { Redirect } from 'react-router';
import addContactSvg from '../assets/imgs/add-contact.svg';

class ContactEditPage extends Component {
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
            this.setState({ deleteStr: 'Delete' })
            this.props.loadContactById(id)
                .then(_ => this.setState({ contact: JSON.parse(JSON.stringify(this.props.currContact)), img: `https://robohash.org/${this.props.currContact._id}.png` }))
                .catch(_ => { })
        }
        else this.setState({ deleteStr: 'Cancel', img: addContactSvg })
    }
    handleInputChange = (field, value) => {
        this.setState(({ contact }) => {
            return { contact: { ...contact, [field]: value } }
        })
    }
    handleSave = _ => {
        this.props.saveContact(this.state.contact)
            .then(contact => this.setState({ redirect: true, newId: contact._id }))
    }
    handleDelete = _ => {
        if (this.state.contact._id) {
            this.props.deleteContact(this.state.contact._id)
                .then(_ => this.setState({ back: true }))
        } else this.setState({ back: true })

    }
    render() {
        const { contact } = this.state;

        if (this.state.redirect) {
            if (contact._id) return <Redirect push to={'/mister-bitcoin-react/contact/' + contact._id} />;
            else return <Redirect push to={'/mister-bitcoin-react/contact/' + this.state.newId} />;
        }
        if (this.state.back) {
            return <Redirect push to="/mister-bitcoin-react/contact" />;
        }

        if (!contact) {
            return <div>Loading! :) </div>;
        }

        return (
            <div className="contact-edit">
                <form onSubmit={ev => ev.preventDefault()}>
                    <img src={this.state?.img} alt="" />
                    <input type="text" onChange={ev => this.handleInputChange('name', ev.target.value)} placeholder="Name" value={contact.name} />
                    <input type="text" onChange={ev => this.handleInputChange('email', ev.target.value)} placeholder="Email" value={contact.email} />
                    <input type="text" onChange={ev => this.handleInputChange('phone', ev.target.value)} placeholder="phone" value={contact.phone} />
                    <div className="btn">
                        <button onClick={this.handleSave}>Save Contact</button>
                        <button className="del" onClick={this.handleDelete}>{this.state.deleteStr}</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currContact: state.contact.currContact,
    };
};

const mapDispatchToProps = {
    loadContactById,
    saveContact,
    deleteContact
};



export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);
