import { toast } from "react-toastify";

const FETCH_PROJECT = "FETCH_PROJECT"
const BID_SUBMITTED = "BID_SUBMITTED"

export default function (state = null, action = {}) {
    switch (action.type) {
        case FETCH_PROJECT:
            return action.project;
        case BID_SUBMITTED:
            console.log(action);
            toast.success('پیشنهاد با موفقیت ثبت شد.');
            return {...state, hasBidden: true};
        default:
            return state;
    }
}