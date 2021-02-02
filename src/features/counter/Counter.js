import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrement, incrementByAmount, increment, incrementAsync, selectCount} from "./counterSlice"
import styles from 'Counter.module.css'


export function Counter() {
    const count = useSelector(selectCount())
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return (
        <div className={styles.row}>
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <span className={styles.value}>{count}</span>
            <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    )
}
