import React from "react";
import { connect } from "react-redux";
import {addTodo} from '../../redux/actions'
import {store} from '../../redux/store';
import './style.css'
let AddTodo = ({dispatch}) => {
    console.log(dispatch);
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(!input.value){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = '';
                    store.subscribe(() => console.log(store.getState()))
                }}    
            >
                <input ref={node => input = node} className="input"/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}


export default connect()(AddTodo)