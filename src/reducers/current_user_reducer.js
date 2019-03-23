const FETCH_USER = "FETCH_USER"

export default function (state = null, action = {}) {
    switch (action.type) {
        case FETCH_USER:
            return action.user;
        default:
            return state;
    }
}