import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ModalMap = (props) => {
    const ModalComponent = (
        <Modal basic size='small' open={props.isOpen}>
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    This is the space for the map
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={props.closeModal}>
                    <Icon name='remove' /> Close
                </Button>
            </Modal.Actions>
        </Modal>
    );

    return ReactDOM.createPortal(
        ModalComponent,
        document.querySelector('#sidebar')
    );
}

export default ModalMap;