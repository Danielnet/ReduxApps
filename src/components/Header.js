import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                      <h1>Todo List with <span style={{color:"green"}}>Redux</span></h1>
            </div>
        );
    }
}

export default Header;