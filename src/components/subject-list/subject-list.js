import React, { Component } from 'react';
import './subject-list.css';
import { connect } from 'react-redux';
import FormForSubject from '../form-for-subject';

import { withStoreService } from '../hoc';
import { addSubject, submitSubject, close } from '../../actions';
import compose from '../../utils';


const URL = 'ws://localhost:3001'
class SubjectList extends Component {

    state = {
        name: '',
    }

    ws = new WebSocket(URL)


    componentDidMount() {
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            this.props.addSubject(message)
        }
    }

    render() {

        const { subjects } = this.props;
        return (
            <div>
                <input type='button' value='Disconnect' onClick={() => { this.props.close({ subject: 'disconnect', from: this.state.name, ws: this.ws }) }} />
                <ul>
                    {
                        subjects.map((subj, index) => {
                            return (
                                <li key={index}>
                                    <span>{subj.from}:  {subj.subject}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <label htmlFor="name">
                    Name:&nbsp;
          <input
                        type="text"
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </label>
                <FormForSubject ws={this.ws}
                    onSubmitSubject={messageString => this.props.submitSubject({ subject: messageString, from: this.state.name, ws: this.ws })}></FormForSubject>

            </div>
        );
    }
};

const mapStateToProps = ({ subjects }) => {
    return {
        subjects
    };
}

const mapDipatchToProps = {
    addSubject,
    submitSubject,
    close
}

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDipatchToProps)
)(SubjectList);
