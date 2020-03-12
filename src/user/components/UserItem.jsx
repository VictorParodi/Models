import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Feed, Icon } from 'semantic-ui-react';
import './UserItem.css';

const UserItem = (props) => {
    return (
        <Grid.Column>
            <Link to={`/${props.id}/places`}>
                <Segment>
                    <Feed size='large'>
                        <Feed.Event>
                            <Feed.Label image={props.image} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <span className="feed-user">{props.name}</span>
                                    <Feed.Date>1 Hour Ago</Feed.Date>
                                </Feed.Summary>

                                <Feed.Meta>
                                    <span className="feed-like">
                                        <Icon name='map marker alternate' />4 places
                                    </span>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Segment>
            </Link>
        </Grid.Column>
    );
}

export default UserItem;