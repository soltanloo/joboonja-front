const FETCH_PROJECTS = "FETCH_PROJECTS"

export default function (state = null, action = {}) {
    switch (action.type) {
        case FETCH_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}