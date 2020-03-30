import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteModal = (props) => {
    const modalComponent = (
        <Modal basic size='small' open={props.isOpen}>
            <Header icon='trash' content='Delete modal' />
            <Modal.Content>
                <p>You're goint to delete this place. Are you sure?</p>
                <h3>{props.placeTitle}</h3>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={props.closeModal}>
                    <Icon name='remove' /> Close
                </Button>
            </Modal.Actions>
        </Modal>
    );

    return ReactDOM.createPortal(
        modalComponent,
        document.querySelector('#sidebar')
    );
}

export default DeleteModal;