import React, {useState, useRef} from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

const NewPlace = () => {
    const titleRef = useRef('');
    const descriptionRef = useRef('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle = () => {
        setTitle(titleRef.current.value);
    }

    const handleDescription = () => {
        setDescription(descriptionRef.current.value);
    }

    const handleSubmit = (event) => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        console.log(title, description);
        
    }

    return (
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Title</label>
                            <input type="text" name="title" value={title} ref={titleRef} onChange={handleTitle}/>
                        </Form.Field>

                        <Form.Field>
                            <label>Descripyion</label>
                            <input type="text" name="description" value={description} ref={descriptionRef} onChange={handleDescription}/>
                        </Form.Field>

                        <input className="ui button" type="submit" value="SUBMIT"/>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default NewPlace;