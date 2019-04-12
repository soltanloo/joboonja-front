import axios from 'axios';
import QS from 'querystring';
import { toast } from 'react-toastify';
const url = "http://localhost:8000"
const FETCH_PROJECTS = "FETCH_PROJECTS"
const FETCH_PROJECT = "FETCH_PROJECT"

export function fetchProjects() {
  return dispatch => {
    axios.get(`${url}/projects`)
      .then(res => {
        dispatch({
          type: FETCH_PROJECTS,
          projects: res.data
        })
      })
  }
}

export function fetchProject(id) {
  return dispatch => {
    axios.get(`${url}/projects?id=${id}`)
      .then(res => {
        dispatch({
          type: FETCH_PROJECT,
          project: res.data
        })
      })
  }
}

export function bid(projectId, bidAmount) {
  return dispatch => {
    axios.post(`${url}/projects/bids?id=${projectId}`,
        QS.stringify({ bidAmount }),
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .then(res => {
        toast.success('پیشنهاد با موفقیت ثبت شد')
        dispatch(fetchProject(projectId))
      })
      .catch(err => {
        toast.error('ثبت پیشنهاد با خطا مواجه شد')
      })
  }
}