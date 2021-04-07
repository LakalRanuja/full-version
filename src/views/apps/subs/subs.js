import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Blank Avatar Image Import
import blankAvatar from '@src/assets/images/avatars/avatar-blank.png'

// ** Third Party Components
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu, Search, MoreVertical } from 'react-feather'
import {
  Input,
  Badge,
  InputGroup,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  InputGroupText,
  DropdownToggle,
  InputGroupAddon,
  UncontrolledDropdown
} from 'reactstrap'