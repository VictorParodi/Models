import React, { useState }from 'react';
import PlaceItem from './PlaceItem';
import ModalMap from './../../shared/UIElements/Modal';

const renderContent = (data,handleModalState) => {
    return (
        data.items.length
        ? data.items.map(place => {
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
    );
}

const PlaceList = (props) => {
    const [modalState, setModalState] = useState(false);

    const handleModalState = () => {
        setModalState(!modalState);
    }

    return (
        <React.Fragment>
            {renderContent(props, handleModalState)}
            <ModalMap isOpen={modalState} closeModal={handleModalState}/>
        </React.Fragment>
    );
}

export default PlaceList;