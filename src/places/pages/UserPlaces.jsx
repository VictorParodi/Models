import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import PlaceList from './../components/PlaceList';
import { PLACES } from './../../data/places';

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