import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
        <div className='header'>
            <Logo className='logo-container' to="/">
                <logo className='logo'/>
            </Logo>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='/signin'>SIGN IN</Link>)
                }
            </div>
        </div>
)
export default Header