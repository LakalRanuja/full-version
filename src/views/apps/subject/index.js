// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Subjects from './Subjects'
import Sidebar from './Sidebar'
import SubjectsSidebar from './SubjectsSidebar'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getSubjects, updateSubject, selectSubject, addSubject, deleteSubject, reOrderSubjects } from './store/actions'

// ** Styles
// import '@styles/react/apps/app-subject.scss'

const SUBJECTS = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openSubjectsSidebar, setOpenSubjectsSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.subject)

  // ** URL Params
  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }

  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleSubjectsSidebar = () => setOpenSubjectsSidebar(!openSubjectsSidebar)

  // ** Get Tasks on mount & based on dependency change
  useEffect(() => {
    dispatch(
      getSubjects({
        filter: paramsURL.filter || '',
        q: query || '',
        sortBy: sort || '',
        tag: paramsURL.tag || ''
      })
    )
  }, [store.subjects.length, paramsURL.filter, paramsURL.tag, query, sort])

  return (
    <Fragment>
      <Sidebar
        store={store}
        params={params}
        getSubjects={getSubjects}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        setMainSidebar={setMainSidebar}
        handleSubjectsSidebar={handleSubjectsSidebar}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: mainSidebar === true
              })}
              onClick={handleMainSidebar}
            ></div>

            {store ? (
              <Subjects
                store={store}
                subjects={store.subjects}
                sort={sort}
                query={query}
                params={params}
                setSort={setSort}
                setQuery={setQuery}
                dispatch={dispatch}
                getSubjects={getSubjects}
                paramsURL={paramsURL}
                updateSubject={updateSubject}
                selectSubject={selectSubject}
                reOrderSubjects={reOrderSubjects}
                handleMainSidebar={handleMainSidebar}
                handleSubjectsSidebar={handleSubjectsSidebar}
              />
            ) : null}

            <SubjectsSidebar
              store={store}
              params={params}
              addSubject={addSubject}
              dispatch={dispatch}
              open={openSubjectsSidebar}
              updateSubject={updateSubject}
              selectSubject={selectSubject}
              deleteSubject={deleteSubject}
              handleSubjectsSidebar={handleSubjectsSidebar}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SUBJECTS
