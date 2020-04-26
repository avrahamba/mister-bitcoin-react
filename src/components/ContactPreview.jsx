import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export const ContactPreview = ({ contact }) => {
    return (
        <NavLink to={'/mister-bitcoin-react/contact/' + contact._id}>
            <div className="contact-preview">
                <img src={'https://robohash.org/'+contact._id} alt={contact.name}/>
                <p>
                    {contact.name}
                </p>
            </div>
        </NavLink>
    )
}
