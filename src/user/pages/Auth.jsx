import React, { useRef, useState } from 'react';
import { Grid, Form, Button} from 'semantic-ui-react';

const AuthPage = () => {
    const [loginState, setLoginState] = useState(true);

    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleUserName = () => {
        console.log(usernameRef.current.value);
    }

    const handleEmail = () => {
        console.log(emailRef.current.value);
    }

    const handlePassword = () => {
        console.log(passwordRef.current.value);
    }

    const handleToggleForm = () => {
        setLoginState(loginState => !loginState);
    } 

    const LoginContent = (
        <Form>
            <Form.Field>
                <label>Email</label>
                <input type="email" name="email" ref={emailRef} onChange={handleUserName} />
            </Form.Field>

            <Form.Field>
                <label>Password</label>
                <input type="password" name="password" ref={passwordRef} onChange={handlePassword} />
            </Form.Field>

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <input className="ui button" type="submit" value="LOGIN"/>
                    </Grid.Column>

                    <Grid.Column>
                        <Button basic onClick={handleToggleForm}>Go to Signup form</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>
    );

    const SignupContent = (
        <Form>
            <Form.Field>
                <label>Name</label>
                <input type="text" name="username" ref={emailRef} onChange={handleEmail} />
            </Form.Field>

            <Form.Field>
                <label>Email</label>
                <input type="email" name="email" ref={emailRef} onChange={handleEmail} />
            </Form.Field>

            <Form.Field>
                <label>Password</label>
                <input type="password" name="password" ref={passwordRef} onChange={handlePassword} />
            </Form.Field>

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <input className="ui button" type="submit" value="SIGNUP"/>
                    </Grid.Column>

                    <Grid.Column>
                        <Button basic onClick={handleToggleForm}>Go to Login Form</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>
    );

    return (
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={8}>
                    { loginState ? LoginContent : SignupContent }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default AuthPage;