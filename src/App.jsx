import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AuthPage from './user/pages/Auth';
import AuthContext from './shared/context/auth-context';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Container>
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
                <Router>
                    <MainNavigation />
                    <Switch>
                        <Route path='/' exact component={Users} />
                        <Route path='/places/new' exact component={NewPlace} />
                        <Route path='/:userId/places' component={UserPlaces} exact />
                        <Route path="/places/:placeId" component={UpdatePlace} exact/>
                        <Route path="/auth" component={AuthPage} exact/>
                        <Redirect to='/' />
                    </Switch>
                </Router>
            </AuthContext.Provider>
        </Container>
    );
}

export default App;