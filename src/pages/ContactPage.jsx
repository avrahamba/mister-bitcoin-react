import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { loadContacts } from '../actions/ContactActions';

import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'

import addContactSvg from '../assets/imgs/add-contact.svg';

class ContactPage extends Component {
    state = {
        filterBy: {
            term: ''
        },
        contacts: []
    }
    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }
    onFileHendler = filterBy => {
        this.props.loadContacts(filterBy)
    }

    render() {
        return (
            <div className="contact-page">
                <ContactFilter onFilter={this.onFileHendler} filterBy={this.state.filterBy}></ContactFilter>
                <ContactList contacts={this.props.contacts} />
                <NavLink to="/edit">
                    <img className="add" src={addContactSvg} alt="add" title="Add"/>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts,
    };
};

const mapDispatchToProps = {
    loadContacts,
};



export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
