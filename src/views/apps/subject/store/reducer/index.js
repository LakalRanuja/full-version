// ** Initial State
const initialState = {
    subjects: [],
    selectedSubject: {},
    params: {
      filter: '',
      q: '',
      sort: '',
      tag: ''
    }
  }
  
  const SubjectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SUBJECTS':
        return { ...state, subjects: action.subjects, params: action.params }
      case 'UPDATE_SUBJECTS':
        return { ...state }
      case 'REORDER_SUBJECTS':
        return { ...state, subjects: action.subjects }
      case 'SELECT_SUBJECT':
        return { ...state, selectedSubject: action.subject }
      default:
        return state
    }
  }
  export default SubjectReducer
  