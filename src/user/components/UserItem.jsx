import React from 'react';
import { Grid, Segment, Feed, Icon } from 'semantic-ui-react';
import './UserItem.css';

const UserItem = (props) => {
    return (
        <Grid.Column>
            <Segment>
                <Feed size='large'>
                    <Feed.Event>
                        <Feed.Label image={props.image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>{props.name}</Feed.User>
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>

                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Segment>
        </Grid.Column>
    );
}

export default UserItem;