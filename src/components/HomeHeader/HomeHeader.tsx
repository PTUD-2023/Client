import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import avt from 'src/assets/avatar.jpg'

const HomeHeader = () => {
  return (
    <div className='header__wrapper'>
      <div className='header'>
        <h1 className='header__title'>Health Insurance</h1>
        <div className='header__line'>
          <div className='header__line--dot-top'></div>
          <div className='header__line--dot-bottom'></div>
        </div>
        <div className='header__search'>
          <div className='header__search--icon-wrapper'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='header__search--icon'
              style={{ transform: 'rotate(90deg)' }}
            />
          </div>
          <input type='text' className='header__search-input' placeholder='Search' />
        </div>
        <ul className='header__nav'>
          <li>
            <a href='#home' className='header__nav--item'>
              <i className='fa-solid fa-house'></i>
              Home
            </a>
          </li>
          <li>
            <a href='#contract' className='header__nav--item'>
              <i className='fa-solid fa-user'></i>
              Contract
            </a>
          </li>
          <li>
            <a href='#request' className='header__nav--item'>
              <i className='fa-solid fa-earth-asia'></i>
              Request
            </a>
          </li>
        </ul>
        <div className='header__user'>
          <img src={avt} alt='Girl in a jacket' className='header__user--avt'></img>
          <div className='header__user--info'>
            <span className='header__user--greeting'>Welcome back,</span>
            <span className='header__user--name'>Drennan</span>
          </div>
          <FontAwesomeIcon icon={faChevronUp} className='header__user--icon' />
        </div>
      </div>
    </div>
  )
  return <div>abc</div>
}

export default HomeHeader
