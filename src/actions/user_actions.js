import axios from 'axios';
import QS from 'querystring';
import { toast } from 'react-toastify';
import { getDefaultConfig, getFormConfig } from './config';
const url = "http://localhost:8000"
const FETCH_USERS = "FETCH_USERS"
const FETCH_USER = "FETCH_USER"



export function fetchUsers() {
  return dispatch => {
    axios.get(`${url}/users`, getDefaultConfig())
      .then(res => {
        dispatch({
          type: FETCH_USERS,
          users: res.data
        })
      })
  }
}

export function fetchUsersByQuery(query = '') {
  return dispatch => {
    axios.get(`${url}/users?query=${query}`, getDefaultConfig())
      .then(res => {
        dispatch({
          type: FETCH_USERS,
          users: res.data
        })
      })
  }
}

export function fetchUser(id) {
  return dispatch => {
    axios.get(`${url}/users?id=${id}`, getDefaultConfig())
      .then(res => {
        dispatch({
          type: FETCH_USER,
          user: res.data
        })
      })
  }
}

export function addSkill(userId, skillName) {
  return dispatch => {
    axios.post(`${url}/users/skills?id=${userId}`,
        QS.stringify({ skillName }),
        getFormConfig())
      .then(res => {
        toast.success('مهارت با موفقیت افزوده شد')
        dispatch(fetchUser(userId))
      })
      .catch(err => {
        toast.error('افزودن مهارت با خطا مواجه شد')
      })
  }
}

export function removeSkill(userId, skillId) {
  return dispatch => {
    axios.delete(encodeURI(`${url}/users/skills?id=${userId}&skillId=${skillId}`), getDefaultConfig())
      .then(res => {
        toast.success('مهارت با موفقیت حذف شد')
        dispatch(fetchUser(userId))
      })
      .catch(err => {
        toast.error('حذف مهارت با خطا مواجه شد')
      })
  }
}

export function endorseSkill(userId, endorserId, skillId) {
  return dispatch => {
    axios.put(encodeURI(`${url}/users/skills?id=${userId}&skillId=${skillId}&endorserId=${endorserId}`), {}, getDefaultConfig())
      .then(res => {
        toast.success('مهارت با موفقیت تأیید شد')
        dispatch(fetchUser(userId))
      })
      .catch(err => {
        toast.error('تأیید مهارت با خطا مواجه شد')
      })
  }
}