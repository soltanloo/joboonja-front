const FETCH_PROJECT = "FETCH_PROJECT"
const BID_SUBMITTED = "BID_SUBMITTED"

export default function (state = null, action = {}) {
    switch (action.type) {
        case FETCH_PROJECT:
            return action.project;
        case BID_SUBMITTED:
            return {...state, hasBidden: true};
        default:
            return state;
    }
}