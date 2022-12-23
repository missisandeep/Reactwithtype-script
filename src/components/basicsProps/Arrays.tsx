import React from 'react'
type ArrayProps = {
  name : {fname:string, lname:string}[]
}
const Arrays = (props: ArrayProps) => {
  return (
    <div>
      {props.name.map(val => {
        return (
         <h1>{val.fname} {val.lname}</h1>
        )
      })}
    </div>
  )
}

export default Arrays
