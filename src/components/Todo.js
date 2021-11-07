import React, {useState} from 'react';

const Todo =()=>{

    const [isEditing,setIsEditing]= useState(false);

    const handleDivDoubleClick =() =>{
        setIsEditing(true);
    }
    return(
        isEditing ?
        <input className="ui input"/> :
        <div className="row" onDoubleClick="{handleDivDoubleClick}">
                <div className="column five wide">
                    <h2>Test to-do item.</h2>
                </div>

                <div className="column one wide">
                    <button className="ui button circular icon green"><i className="check icon"></i></button>
                </div>

                <div className="column one wide">
                    <button className="ui button circular icon red"><i className="remove icon"></i></button>
                </div>
                
            </div>
    );
}

export default Todo;