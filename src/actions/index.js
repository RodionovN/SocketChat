const connected = () => {
    return {
        type: 'CONNECTED',
        payload: true
    };
}
const addSubject = (subjects) => {
    return {
        type: 'ADD_SUBJECT',
        payload: subjects
    };
}

const submitSubject = (subjects) => {
    return {
        type: 'SUBMIT_SUBJECT',
        payload: subjects
    };
}

const addUser = () => {
    return {
        type: 'ADD_USER'
    };
};

const close = (subj) => {
    return {
        type: 'CLOSE',
        payload: subj
    }
}


export {
    connected,
    addSubject,
    submitSubject,
    addUser,
    close
};