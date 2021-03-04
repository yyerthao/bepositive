const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.payload;
        case 'SET_ONE_MESSAGE':
            return action.payload;
        default:
            return state;
    }
};


export default messageReducer;
