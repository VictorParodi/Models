import React, {useState} from 'react';
import { Grid, Button } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideBar from './../../UIElements/SideBar';
import './MainNavigation.css';

const MainNavigation = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const modalHandler = () => {
        setIsModalOpened(!isModalOpened);
    }

    return (
        <MainHeader>
            <Grid className="main__navigation">
                <Grid.Row>
                    <Grid.Column width={3}>
                        <h3>LOGO</h3>
                    </Grid.Column>

                    <NavLinks />

                    <Grid.Column width={1}>
                        <Button onClick={modalHandler}>MODAL</Button>
                    </Grid.Column>

                    <SideBar isOpen={isModalOpened} closeModal={modalHandler}/>
                </Grid.Row>
            </Grid>
        </MainHeader>
    );
}

export default MainNavigation;