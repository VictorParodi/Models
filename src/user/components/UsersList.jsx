import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    const items = props.items || [];

    const renderList = () => {
        return items.map((user) => {
            return (
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    image={user.image}
                    places={user.places}
                />
            );
        });
    }

    return (
        items.length
        ? renderList()
        : <div>Loading...</div>
        
    );
}

export default UsersList;