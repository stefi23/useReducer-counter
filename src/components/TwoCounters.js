import React, {useReducer} from 'react'
import {Button, Badge} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  count1: 0,
  count2: 2020
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
          return {...state, count1: state.count1 + action.by}
    case 'decrement1':
        return {...state, count1: state.count1 + action.by}
    case 'increment2':
          return {...state, count2: state.count2 + action.by}
    case 'decrement2':
        return {...state, count2: state.count2 + action.by}
    case 'reset':
        return initialState
  }
}

const TwoCounters = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className='counter'>
                <h1>Multiple Counter</h1>
                        <Button color="primary" outline>
                            Count 1 <Badge color="secondary">{count.count1}</Badge>
                        </Button>
                        <Button color="primary" outline>
                            Count 2 <Badge color="secondary">{count.count2}</Badge>
                        </Button>
            </div>
            <p></p>
            <div className='counter'>
                Count 1:
                <Button color="danger" onClick={() => dispatch({ type: 'decrement1', by: 1 })}>decrement</Button>
                <Button color="success" onClick={() => dispatch({ type: 'increment1', by: 1 })}>increment</Button>
            </div>
            <div className='counter'>
                Count 2:
                <Button color="danger" onClick={() => dispatch({ type: 'decrement2', by: 1 })}>decrement</Button>
                <Button color="success" onClick={() => dispatch({ type: 'increment2', by: 1 })}>increment</Button>
            </div>
            <div className='counter'>
                Count 1 by 5:
                <Button color="danger" onClick={() => dispatch({ type: 'decrement1', by: 5 })}>decrement</Button>
                <Button color="success" onClick={() => dispatch({ type: 'increment1', by: 5 })}>increment</Button>
            </div>
            <div className='counter'>
                Count 2 by 5:
                <Button color="danger" onClick={() => dispatch({ type: 'decrement2', by: 5 })}>decrement</Button>
                <Button color="success" onClick={() => dispatch({ type: 'increment2', by: 5 })}>increment</Button>
            </div>
            <div className='counter'>
             <Button color="secondary" onClick={() => dispatch({ type: 'reset' })}>reset</Button>
             </div>
        </>
    )
}

export default TwoCounters