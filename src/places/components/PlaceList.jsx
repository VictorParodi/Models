import React from 'react';
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {
    console.log(props);
    return (
        props.items.length
        ? props.items.map(place => {
            return (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                />
            );
          })
        : <div>
            <h3>No places available</h3>
          </div>
    );
}

export default PlaceList;