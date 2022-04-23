const initialState = {
    user: undefined
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'userLogin': {
            return { user: payload };
        }
        case 'userLogout': {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default userReducer;