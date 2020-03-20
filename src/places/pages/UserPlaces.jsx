import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import PlaceList from './../components/PlaceList';

const UserPlaces = () => {
    const PLACES = [
        {
            id: 'p1',
            title: 'Iglesia De Santa Bárbara',
            imageUrl: 'https://travelgrafia.co/wp-content/uploads/2017/05/Iglesia-santa-barbara-Mompox-Colombia.jpg',
            description: 'The most famous church in Mompox',
            address: 'Mompós, Bolívar',
            creator: 'u1',
            location: {
                lat: 9.2365486,
                lng: -74.4225514
            }
        },

        {
            id: 'p2',
            title: 'Iglesia De Santa Bárbara',
            imageUrl: 'https://travelgrafia.co/wp-content/uploads/2017/05/Iglesia-santa-barbara-Mompox-Colombia.jpg',
            description: 'The most famous church in Mompox',
            address: 'Mompós, Bolívar',
            creator: 'u2',
            location: {
                lat: 9.2365486,
                lng: -74.4225514
            }
        },

        {
            id: 'p3',
            title: 'Iglesia De Santa Bárbara',
            imageUrl: 'https://travelgrafia.co/wp-content/uploads/2017/05/Iglesia-santa-barbara-Mompox-Colombia.jpg',
            description: 'The most famous church in Mompox',
            address: 'Mompós, Bolívar',
            creator: 'u3',
            location: {
                lat: 9.2365486,
                lng: -74.4225514
            }
        }
    ];

    return (
        <Container>
            <Grid>
                <Grid.Row columns={3} centered>
                    <PlaceList items={PLACES} />
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default UserPlaces;