import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

const PlaceItem = (props) => {
    return (
        <Grid.Column>
            <Card>
                <Image src={props.image} alt={props.title}/>
                <Card.Content>
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Meta>
                        <span className="date">user: {props.creatorId}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className="date">{props.address}</span>
                    </Card.Meta>
                    {/* <Card.Meta>
                        <span className="date">{props.coordinates}</span>
                    </Card.Meta> */}
                    <Card.Description>{props.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <span>
                                    <Icon name="eye"/>
                                    View
                                </span>
                            </Grid.Column>

                            <Grid.Column>
                                <span>
                                    <Icon name="edit"/>
                                    Edit
                                </span>
                            </Grid.Column>

                            <Grid.Column>
                                <span>
                                    <Icon name="trash"/>
                                    Delete
                                </span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default PlaceItem;