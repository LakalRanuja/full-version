import axios from 'axios'

// ** Get Tasks
export const getSubjects = params => {
  return dispatch => {
    return axios.get('/apps/subject/subjects', { params }).then(res => {
      dispatch({
        type: 'GET_SUBJECTS',
        subjects: res.data,
        params
      })
    })
  }
}

// ** Re-order Tasks on drag
export const reOrderSubjects = subjects => dispatch => dispatch({ type: 'REORDER_SUBJECTS', subjects })

// ** ADD Task
export const addSubject = subject => {
  return (dispatch, getState) => {
    axios
      .post('/apps/subject/add-subjects', { subject })
      .then(res => {
        dispatch({
          type: 'ADD_SUBJECTS',
          subject: res.data
        })
      })
      .then(dispatch(getSubjects(getState().subject.params)))
  }
}

// ** Update Tasks
export const updateSubject = subject => {
  return (dispatch, getState) => {
    axios
      .post('/apps/subject/update-subject', { subject })
      .then(res => {
        dispatch({
          type: 'UPDATE_SUBJECTS',
          subject: res.data
        })
      })
      .then(dispatch(getSubjects(getState().subject.params)))
  }
}

// ** Delete Task
export const deleteSubject = subjectId => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/subject/delete-subject', { subjectId })
      .then(res => {
        dispatch({
          type: 'DELETE_SUBJECT',
          subject: res.data
        })
      })
      .then(() => dispatch(getSubjects(getState().subject.params)))
  }
}

// ** Select Task
export const selectSubject = subject => dispatch => dispatch({ type: 'SELECT_SUBJECT', subject })
