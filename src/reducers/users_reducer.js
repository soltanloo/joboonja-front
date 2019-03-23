const FETCH_USERS = "FETCH_USERS"

export default function (state = null, action = {}) {
    switch (action.type) {
        case FETCH_USERS:
            return action.users;
        default:
            return state;
    }
}