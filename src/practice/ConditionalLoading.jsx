import React, { Component } from 'react'

export default class ConditionalLoading extends Component {
    constructor(){
        super()
        this.state ={
          isLoad : false
        }
      }
      hadleClick = () =>{
        this.setState(prevState=>{
          return({isLoad:!prevState.isLoad})
        })
      }
      render() {
        let button = this.state.isLoad ? "Logout":"Login"
        return (
          <>
            <button type="button" onClick={this.hadleClick}>{button}</button>
          </>
        )
      }
}
