import React from 'react'
import {NavLink} from "react-router-dom";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from '../stylesheets/login.module.css'

export const Login = () => {
    return (
        <div className={s.login}>
            <h1 className={s.name}> TODO </h1>
            <form className={s.loginForm}>
                <div className={s.loginFieldWrapper}>
                    <FontAwesomeIcon icon={faUser} className={s.icon}/>
                    <input className={s.loginField} type="name" placeholder="Username" name="usrnm"/>
                </div>
                <div className={s.passwordFieldWrapper}>
                    <FontAwesomeIcon icon={faUnlockAlt} className={s.icon}/>
                    <input className={s.passwordField} type="password" placeholder="Password" name="psw"/>
                </div>
                <input className={s.submit} type="submit" value="Login" onClick={()=>{localStorage.token = "token"}}/>
            </form>
            <p> Still not registered? Register <NavLink style={{color: 'white'}}
                                                       activeStyle={{color: 'white'}}
                                                       to="/register">
                here
            </NavLink>
            </p>
        </div>

    );
};