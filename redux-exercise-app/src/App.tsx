import {Provider } from 'react-redux'
import { store } from './store/store'

import { Counter } from "./components/Counter"


export const App = () => {

    return (
        <Provider store={ store } >
            <Counter/>
        </Provider>
    )
}
