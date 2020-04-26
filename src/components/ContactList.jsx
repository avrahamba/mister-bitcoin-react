import React from 'react'
import { ContactPreview } from './ContactPreview'
export const ContactList = ({ contacts }) => {
    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <ContactPreview contact={contact} key={contact._id} />
            ))}
        </div>
    )
}
