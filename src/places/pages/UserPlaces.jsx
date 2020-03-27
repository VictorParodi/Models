import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import PlaceList from './../components/PlaceList';

const PLACES = [
    {
        id: 'p1',
        title: 'Iglesia De Santa Bárbara',
        imageUrl: 'https://travelgrafia.co/wp-content/uploads/2017/05/Iglesia-santa-barbara-Mompox-Colombia.jpg',
        description: 'The most famous church in Mompox',
        address: 'Mompós, Bolívar',
        creator: '1',
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
        creator: '2',
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
        creator: '3',
        location: {
            lat: 9.2365486,
            lng: -74.4225514
        }
    },

    {
        id: 'p4',
        title: 'Centro de Negocios Vizcaya',
        imageUrl: 'https://s3.amazonaws.com/produccion-bien-raiz/sitio_interes/CC+Vizcaya.png',
        description: 'The most famous mall at Medellin',
        address: 'Mompós, Bolívar',
        creator: '1',
        location: {
            lat: 6.2084848,
            lng: -75.5653247
        }
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const userPlaces = PLACES.filter(place => place.creator === userId);

    return (
        <Container>
            <Grid>
                <Grid.Row columns={3} centered>
                    <PlaceList items={userPlaces} />
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default UserPlaces;