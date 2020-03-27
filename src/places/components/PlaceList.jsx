import React, { useState }from 'react';
import PlaceItem from './PlaceItem';
import ModalMap from './../../shared/UIElements/Modal';

const PlaceList = (props) => {
    const [modalState, setModalState] = useState(false);
    const [location, setLocation] = useState({});

    const handleModalState = (location) => {
        setModalState(!modalState);
        setLocation(location);
    }

    return (
        <React.Fragment>
            {
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
                            handleModal={handleModalState}
                        />
                    );
                  })
                : <div>
                    <h3>No places available</h3>
                  </div>
            }
            <ModalMap isOpen={modalState} closeModal={handleModalState} coordinates={location} />
        </React.Fragment>
    );
}

export default PlaceList;