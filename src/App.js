import React from 'react';
import {Login} from './components/login-component'
import s from './App.module.css'
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
    const isLoggedIn = (url) => {
        if (!localStorage.token) return (<Redirect to="/login"/>);
        else if (url) return (<Redirect to={url}/>)
    };

    return (
        <div className={s.loginWrapper}>
            <Switch>
                <Route path="/register">
                    {isLoggedIn("/")}
                    <div>register</div>
                </Route>
                <Route path="/login">
                    {isLoggedIn("/")}
                    <Login/>
                </Route>
                <Route path="/create-note">
                    {isLoggedIn()}
                    <div>create-note</div>
                </Route>
                <Route path = "/">
                    {isLoggedIn()}
                    <div>my-notes</div>
                </Route>
            </Switch>
        </div>

    )
}

export default App;
