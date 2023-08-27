import React from 'react'

export const Content = (props) => {
    console.log(props)
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>Name:{props.contact.name}</h1>
    <h1>Email:{props.contact.email}</h1>
    <h1>phone:{props.contact.phone}</h1>
    <h1>Address:{props.contact.address}</h1>
    <br></br>
    </div>
    </>
  )
}
