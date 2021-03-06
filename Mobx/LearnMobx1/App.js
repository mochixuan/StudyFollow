import React,{Component} from 'react';
import {
    StackNavigator
} from 'react-navigation'
import MainPage from './app/containers/MainPage'
import TodoPage from "./app/todo/pages/TodoPage";
import store from './app/store'
import {Provider} from 'mobx-react'

const AppComponent = StackNavigator({
    MainPage: {screen: MainPage},
    TodoPage: {screen: TodoPage},
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    headerMode: 'none',
})

const App = () => {
    return (
        <Provider {...store}>
            <AppComponent />
        </Provider>
    )
}

export default App
