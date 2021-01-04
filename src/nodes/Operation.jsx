import { createNode } from '@rootzjs/core';
import React from 'react';

const [node, dispatchNode] = createNode("Operation", ({
        state,
        actions,
    }) => {
            return (
                <React.Fragment>
                    <h3>First argument value:- {state.first} </h3>
            <h3>Second argument value is:- {state.second}</h3>
                    {
                        state.result ?
                                <p>{state.result}</p>
                        :
                        <p>0</p>
                    }
                <button onClick={actions.ADD}>Add</button>
                <button onClick={actions.SUB}>Sub</button>
                <button onClick={actions.MUL}>Mul</button>
                <button onClick={actions.RESET}>Reset</button>
            </React.Fragment>
                
        )
    });
    
    node.state({ 
            result: 0,
            first:23,
            second:12 
    });
    
    // create action for updating the state on btn click
    node.useActionCallback(
        "ADD", 
        (state,[]) => ({ 
           result: state.first + state.second,
        })
    );
    node.useActionCallback(
        "RESET", 
        (state,[]) => ({ 
           result: 0,
        })
    );
    node.useActionCallback(
        "SUB", 
        (state,[]) => ({ 
            result: state.first - state.second,
        })
    );
    node.useActionCallback(
        "MUL", 
        (state,[]) => ({ 
            result: state.first * state.second,
        })
    );
    export const Operation = dispatchNode(node);
