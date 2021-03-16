import React, { Component } from 'react'

const ButtonAct = (props) => <button onClick={props.onClick}>{props.text}</button>

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked: {value} times
                <br/>
                {' '}
                <ButtonAct onClick={onIncrement} text="+"/>
                {' '}
                <ButtonAct onClick={onDecrement} text="-"/>
                {' '}
                <ButtonAct onClick={this.incrementIfOdd} text="Increment if odd"/>
                {' '}
                <ButtonAct onClick={this.incrementAsync} text="Increment async"/>
            </p>
        )
    }
}

export default Counter
