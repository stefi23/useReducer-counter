import React, {useReducer} from 'react'
import {Button, Badge} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <>  
            <div className='counter'>
                Simple Counter <Badge color="info">{count}</Badge>
            </div>

             <div>
                <Button color="secondary" onClick={() => dispatch('reset')}>Reset</Button>
                <Button color="danger" onClick={() => dispatch('decrement')}>Decrement</Button>
                <Button color="success"onClick={() => dispatch('increment')}>Increment</Button>
            </div>
        </>
    )
}

export default Counter