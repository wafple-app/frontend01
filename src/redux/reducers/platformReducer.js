const initialState = {
    platform: undefined
};

const platformReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'setPlatform': {
            return { platform: payload };
        }
        default: {
            return state;
        }
    }
};

export default platformReducer;
