const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ONE_MESSAGE':
            return action.payload;
        default:
            return state;
    }
};


export default details;
