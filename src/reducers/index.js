
const initialState = {
    subjects: [

    ]
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SUBJECT':
            return { subjects: [...state.subjects, action.payload] };
        case 'SUBMIT_SUBJECT':
            action.payload.ws.send(JSON.stringify({ from: action.payload.from, subject: action.payload.subject }))
            return { subjects: [...state.subjects, action.payload] };
        case 'ON_MESSAGE':
            const messages = JSON.parse(action.payload.data)
            return { subjects: [...state.subjects, messages] };
        case 'CLOSE':
            const mes = { from: action.payload.from, subject: action.payload.subject }
            action.payload.ws.send(JSON.stringify(mes))
            action.payload.ws.close();
            return { subjects: [...state.subjects, mes] };
        default:
            return state;
    }
}

export default reducer;