import React, { Component, Fragment } from 'react';

import ToDoContainer from './containers/ToDoContainer';

import './styles/main.css';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="td-header"><h1 className="td-header__logo">To Do Replay</h1></header>
                <ToDoContainer/>
            </Fragment>
        );
      }
};