// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import classnames from 'classnames'
import { CardBody, Button, CustomInput } from 'reactstrap'
import Select, { components } from 'react-select'

import { selectThemeColors, isObjEmpty } from '@utils'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'

import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Filters Checkbox Array
const filters = [
  { label: 'A', color: 'danger', className: 'custom-control-danger mb-1' },
  { label: 'B', color: 'primary', className: 'custom-control-primary mb-1' },
  { label: 'C', color: 'warning', className: 'custom-control-warning mb-1' },
  { label: 'D', color: 'success', className: 'custom-control-success mb-1' },
  { label: 'E', color: 'info', className: 'custom-control-info' }
]

const grades = [
  { label: '1', value: '1'},
  { label: '2', value: '2'},
  { label: '3', value: '3'},
  { label: '4', value: '4'},
  { label: '5', value: '5'},
  { label: '6', value: '6'},
  { label: '7', value: '7'},
  { label: '8', value: '8'},
  { label: '9', value: '9'},
  { label: '10', value: '10'},
  { label: '11', value: '11'},
  { label: '12', value: '12'},
  { label: '13', value: '12'}
]

const GradeComponent = ({ data, ...props }) => {
  return (
    <components.Option {...props}>
      <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
      {data.label}
    </components.Option>
  )
}

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch } = props

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  return (
    <Fragment>
      <div className='sidebar-wrapper'>
        <CardBody className='card-body d-flex justify-content-center my-sm-0 mb-3'>
          <Button.Ripple color='primary' block onClick={handleAddEventClick}>
            <span className='align-middle'>Add Event</span>
          </Button.Ripple>
        </CardBody>
        <CardBody>
          <h5 className='section-label mb-1'>
            <span className='align-middle'>Filter</span>
          </h5>
          <CustomInput
            type='checkbox'
            className='mb-1'
            label='View All'
            id='view-all'
            checked={store.selectedCalendars.length === filters.length}
            onChange={e => dispatch(updateAllFilters(e.target.checked))}
          />
          <div className='calendar-events-filter'>
            {filters.length &&
              filters.map(filter => {
                return (
                  <CustomInput
                    type='checkbox'
                    key={filter.label}
                    id={filter.label}
                    label={filter.label}
                    checked={store.selectedCalendars.includes(filter.label)}
                    className={classnames({
                      [filter.className]: filter.className
                    })}
                    onChange={e => dispatch(updateFilter(filter.label))}
                  />
                )
              })}
          </div>
        </CardBody>
        
        <h5 className='section-label mb-1' style={{position: 'relative', left: 20}}>
            <span className='align-middle'>Grades</span>
          </h5>

        <Select 
          id='label'
          title='Search' 
          // placeholder='Grades' 
          // value={value}
          options={grades}
          theme={selectThemeColors}
          className='react-select'
          classNamePrefix='select'
          isClearable={false}
          // onChange={data => setValue([data])}
          components={{
            Option: GradeComponent
          }}
        />


      </div>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
