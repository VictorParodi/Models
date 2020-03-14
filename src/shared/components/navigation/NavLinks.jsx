import React from 'react';
import { Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    const LINKS = [
        {
            name: 'ALL USERS',
            path: '/',
            isExact: true
        },
        {
            name: 'MY PLACES',
            path: '/u1/places',
            isExact: false
        },
        {
            name: 'ADD PLACE',
            path: '/places/new',
            isExact: false
        },
        {
            name: 'AUTHENTICATE',
            path: '/auth',
            isExact: false
        },
    ];

    const renderLinks = () => {
        return LINKS.map((link, index) => {
            return (
                <Grid.Column key={index} width={3} className="centered-text">
                    <NavLink to={link.path} exact={link.isExact}>{link.name}</NavLink>
                </Grid.Column>
            );
        });
    }

    return renderLinks();
}

export default NavLinks;