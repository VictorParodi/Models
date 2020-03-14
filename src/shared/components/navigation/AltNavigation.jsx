import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

const MainNavigation = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleActiveItem = (event, {name}) => {
        setActiveItem(name);
    }

    return (
        <Menu text>
            <Menu.Item header>
                PlaceBook
            </Menu.Item>

            <Menu.Item
                name="Home"
                active={activeItem === 'Home'}
                onClick={handleActiveItem}
            />

            <Menu.Item
                name="Places"
                active={activeItem === 'Places'}
                onClick={handleActiveItem}
            />

            <Menu.Item
                name="Account"
                active={activeItem === 'Account'}
                onClick={handleActiveItem}
            />
        </Menu>
    );
}

export default MainNavigation;