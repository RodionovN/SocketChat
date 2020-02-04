import React, { Fragment, Component } from 'react';
import './form-for-subject.css';



class FormForSubject extends Component {
    state = {
        subject: '',
    }
    render() {
        return (
            <Fragment>
                <form
                    action="."
                    onSubmit={e => {
                        e.preventDefault()
                        let ws = this.props.ws;
                        let subject = this.state.subject;
                        this.props.onSubmitSubject(subject, this.props.from, ws)
                        this.setState({ subject: '' })
                    }}
                >
                    <input
                        type="text"
                        placeholder={'Enter message...'}
                        value={this.state.subject}
                        onChange={e => this.setState({ subject: e.target.value })}
                    />
                    <input type='submit' value='Send' />
                </form>

            </Fragment>
        );
    }
}



export default FormForSubject;