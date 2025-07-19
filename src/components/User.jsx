import React from 'react'
import { useEffect } from 'react'

const User = ({color}) => {
useEffect(()=>{
    alert("hey welcome to my page")
  },[])

  useEffect(()=>{
    alert("hey welcome to my page this is first render")
  })

  useEffect(()=>{
    alert("hey i am running bcoz color was changed")
  },[color])

  return (
    <div>
      I am navbar of {color} User.
    </div>
  )
}

export default User
