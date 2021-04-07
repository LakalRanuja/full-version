// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        Privacy Policy {new Date().getFullYear()}{' '}
        <a href='https://senturatechnologies.com/' target='_blank' rel='noopener noreferrer'>
          {/* Sentura Technologies */}
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
    </p>
  )
}

export default Footer
