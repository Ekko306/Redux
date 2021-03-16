// // ⬇️ React
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './React/index';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//     <React.StrictMode>
//             <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


// // ⬇️ Redux-Toolkit
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Redux-Toolkit/App';
// import store from './Redux-Toolkit/app/store';
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



// // ⬇️ react+redux （通用redux，并没有用react-react包）
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
