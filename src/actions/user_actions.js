import axios from 'axios';
import QS from 'querystring';
const url = "http://localhost:8000"
const FETCH_USERS = "FETCH_USERS"
const FETCH_USER = "FETCH_USER"

export function fetchUsers() {
  return dispatch => {
    axios.get(`${url}/users`)
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
    axios.get(`${url}/users?id=${id}`)
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
    axios.post(`${url}/users/addskill?id=${userId}`,
        QS.stringify({ skillName }),
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .then(res => {
      })
      .catch(err => {

      })
  }
}

export function removeSkill(userId, skillName) {
  return dispatch => {
    axios.post(`${url}/users/removeskill?id=${userId}`,
        QS.stringify({ skillName }),
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .then(res => {
        dispatch(fetchUser(userId))
      })
      .catch(err => {

      })
  }
}

export function endorseSkill(userId, endorserId, skillName) {
  return dispatch => {
    axios.post(`${url}/users/endorseskill?id=${userId}`,
        QS.stringify({ skillName, endorserId }),
        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .then(res => {
        dispatch(fetchUser(userId))
      })
      .catch(err => {

      })
  }
}