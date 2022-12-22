import React from 'react'
type ObjectsProps = {
    name : {
        fname: string;
        lname: string;
    }
}
const Objects = (props: ObjectsProps) => {
  return (
    <div>
      <h1>Hello {props.name.fname} {props.name.lname}</h1>
    </div>
  )
}

export default Objects
