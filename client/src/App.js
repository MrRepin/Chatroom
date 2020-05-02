import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import MainLayout from './hoc/Layouts/MainLayout'
import Chatroom from './containers/Chatroom/Chatroom'
import Auth from './containers/Auth/Auth'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            links: [
                {
                    to: '/',
                    label: 'Main',
                    exact: true
                },
                {
                    to: '/auth',
                    label: 'Auth',
                    exact: false
                }
            ]
        }
    }
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route exact path="/">
                        {!this.props.auth ? <Redirect to="/auth" /> : <Chatroom />}
                    </Route>
                    <Route path="/auth" component={Auth} />
                </Switch>
            </MainLayout>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
    }
}

export default connect(mapStateToProps)(App);
