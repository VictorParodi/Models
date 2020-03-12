import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';

const App = () => {
    return (
        <Container>
            <Router>
                <MainNavigation />
                <Switch>
                    <Route path='/' exact component={Users} />
                    <Route path='/places/new' exact component={NewPlace} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;