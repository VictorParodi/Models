import React from 'react';
import UsersList from './../components/UsersList';
import { Container, Grid } from 'semantic-ui-react';
import './Users.css';

const Users = () => {
    const USERS = [
        {
            id: 1,
            name: 'Allison Mack',
            image: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/54255.jpg',
            places: 5
        },
        {
            id: 2,
            name: 'Anastasya Kivto',
            image: 'https://i.pinimg.com/originals/45/04/f3/4504f35eabd25dad08020ad7f2941787.jpg',
            places: 2
        },
        {
            id: 3,
            name: 'Marian Franco',
            image: 'https://pbs.twimg.com/media/D3gwIecWwAEDz8I.jpg:large',
            places: 4
        },
    ];

    return (
        <Container>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h1 className="page-title">Users list</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <UsersList items={USERS} />
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Users;