import React, { Component } from 'react'

export class ConractFilter extends Component {
    state = {
        term: ''
    }
    constructor(props) {
        super(props);
        this.state = { ...props.filterBy }
    }
    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value }, () => {
            this.props.onFilter({ ...this.state });
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="search"
                        onChange={this.onChangeHandler}
                        name="term"
                        value={this.state.term}
                    />
                </form>
            </div>
        )
    }
}
