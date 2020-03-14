import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const SideBar = (props) => {
    const sidebar = (
        <Modal basic size='small' open={props.isOpen}>
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
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
        sidebar,
        document.querySelector('#sidebar')
    );
}

export default SideBar;