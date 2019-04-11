const FETCH_PROJECTS = "FETCH_PROJECTS"

export default function (state = [], action = {}) {
    switch (action.type) {
        case FETCH_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}