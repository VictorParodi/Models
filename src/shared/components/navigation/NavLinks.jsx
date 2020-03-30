import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import AuthContext from './../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            <Grid.Column width={3} className="centered-text">
                <NavLink to='/' exact={true}>{'ALL USERS'}</NavLink>
            </Grid.Column>

            {
                auth.isLoggedIn &&
                <Grid.Column width={3} className="centered-text">
                    <NavLink to='/1/places'>{'MY PLACES'}</NavLink>
                </Grid.Column>
            }

            {
                auth.isLoggedIn &&
                <Grid.Column width={3} className="centered-text">
                    <NavLink to='/places/new'>{'ADD PLACE'}</NavLink>
                </Grid.Column>
            }

            {
                !auth.isLoggedIn &&
                <Grid.Column width={3} className="centered-text">
                    <NavLink to='/auth'>{'AUTHENTICATE'}</NavLink>
                </Grid.Column>
            }
        </React.Fragment>
    );
}

export default NavLinks;