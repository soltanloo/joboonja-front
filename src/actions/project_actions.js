import axios from 'axios';
import QS from 'querystring';
import { getDefaultConfig, getFormConfig } from './config';
import { toast } from 'react-toastify';
const url = "http://localhost:8000/joboonja"
const FETCH_PROJECTS = "FETCH_PROJECTS"
const FETCH_PROJECT = "FETCH_PROJECT"


export function fetchProjects(page = 1, size = 3) {
  return dispatch => {
    axios.get(`${url}/projects?page=${page}&size=${size}`, getDefaultConfig())
      .then(res => {
        dispatch({
          type: FETCH_PROJECTS,
          projects: res.data
        })
      })
  }
}

export function fetchProjectsByQuery(query = '', page = 1, size = 10) {
  return dispatch => {
    axios.get(`${url}/projects?query=${query}`, getDefaultConfig())
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
    axios.get(`${url}/projects?id=${id}`, getDefaultConfig())
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
        getFormConfig())
      .then(res => {
        toast.success('پیشنهاد با موفقیت ثبت شد')
        dispatch(fetchProject(projectId))
      })
      .catch(err => {
        toast.error('ثبت پیشنهاد با خطا مواجه شد')
      })
  }
}