// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import store from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// ⬇️ react+redux

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './React+Redux/Counter.js'
// import counter from './React+Redux/reducers.js'
//
// const store = createStore(counter)
// const rootEl = document.getElementById('root')
//
// const render = () => ReactDOM.render(
//     <Counter
//         value = {store.getState()}
//         onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
//         onDecrement={()=> store.dispatch( {type: 'DECREMENT'})}
//     />,
//     rootEl
// )
//
// render()
//
// store.subscribe(render)


// ⬇️ react-redux

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './React-Redux/Counter'
import counter from './React-Redux/reducers'
import { Provider, connect } from 'react-redux'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const mapStateToProps = state => {
    return {
        value: state
    }
}

const mapDispatchToProps = state => {
    return {
        onIncrement: () => {
            console.log('in')
            store.dispatch({
                type: 'INCREMENT'
            })
        },
        onDecrement: () => {
            console.log('de')
            store.dispatch({
                type: 'DECREMENT'
            })
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps) (Counter)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl
)
