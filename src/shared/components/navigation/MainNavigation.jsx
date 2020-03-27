import React from 'react';
import { Grid } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = () => {
    return (
        <MainHeader>
            <Grid className="main__navigation">
                <Grid.Row>
                    <Grid.Column width={3}>
                        <h3>LOGO</h3>
                    </Grid.Column>

                    <NavLinks />
                </Grid.Row>
            </Grid>
        </MainHeader>
    );
}

export default MainNavigation;