import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export const ContactPreview = ({ contact }) => {
    return (
        <div>

                <NavLink to={'/contact/' + contact._id}>
                    <p>
                        {contact.name}
                    </p>
                </NavLink>
        </div>
    )
}
