import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Form} from 'semantic-ui-react';
import { PLACES } from './../../data/places';

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const place = PLACES.find(place => place.id === placeId);
    
    return (
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={8}>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input type="text" name="title" value={place.title} />
                        </Form.Field>

                        <Form.Field>
                            <label>Description</label>
                            <input type="text" name="description" value={place.description} />
                        </Form.Field>

                        <input className="ui button" type="submit" value="UPDATE"/>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default UpdatePlace;