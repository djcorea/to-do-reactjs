import React from 'react';

const List =()=>{
    return(
        <div className="ui grid center aligned">
            <div className="row">
                <div className="column five wide">
                    <h2>Test to-do item.</h2>
                </div>

                <div className="column one wide">
                    <button className="ui button circular icon blue"><i className="check icon"></i></button>
                </div>

                <div className="column one wide">
                    <button className="ui button circular icon red"><i className="remove icon"></i></button>
                </div>

            </div>
        </div>
    );
};

export default List;