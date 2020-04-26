import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadContactById } from '../actions/ContactActions';
import { setCurrMoves, addMove } from '../actions/UserActions'

import { TransferFund } from '../components/TransferFund'
import { MoveList } from '../components/MoveList';

import backSvg from '../assets/imgs/back.svg';
import editSvg from '../assets/imgs/edit-contact.svg';

class ContactDetailsPage extends Component {
    async componentDidMount() {
        const id = this.props.match.params.id
        this.props.loadContactById(id)
        this.props.setCurrMoves(id)
    }
    hendlerSend = count => {
        const { _id, name } = this.props.contact;
        this.props.addMove({ _id, name, count })
    }
    render() {
        const { contact } = this.props;
        if (!contact) {
            return <div>Loading! :) </div>;
        }
        return (
            <div className="contact-details-page">
                <nav>
                    <NavLink to="/mister-bitcoin-react/contact">
                        <img src={backSvg} alt="Back" />
                    </NavLink>
                    <NavLink to={'/mister-bitcoin-react/edit/' + contact._id}>
                        <img src={editSvg} alt="Edit" />
                    </NavLink>
                </nav>
                <main>

                    <img
                        src={`https://robohash.org/${contact._id}.png`}
                        alt=""
                    />
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.email}</p>
                    <p>Email: {contact.phone}</p>
                    <TransferFund name={contact.name} send={this.hendlerSend} />
                    <div className="moves">
                        {this.props.moves.length ? <h3>Your Moves:</h3> : ''}
                        <MoveList contact moves={this.props.moves} />
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact,
        moves: state.user.currMoves,
    };
};

const mapDispatchToProps = {
    setCurrMoves,
    loadContactById,
    addMove
};



export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);
