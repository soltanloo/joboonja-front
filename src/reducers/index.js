import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import currentProjectReducer from './current_project_reducer';
import currentUserReducer from './current_user_reducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    currentProject: currentProjectReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
    form: formReducer,
});

export default rootReducer;
