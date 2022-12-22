import React from 'react'
type PropsType = {
    name: string | number; // type script pass if is string or number
    lname: string; // this is only string type.
    age : number // this is number type.
    logIn: boolean // this is boolean type.
}
const Props = (props: PropsType) => {
  return (
    <div>
      <h1>{props.logIn ? `Hello ${props.name} ${props.lname} ` : "Hello Guest user"}</h1>
    </div>
  )
}

export default Props
