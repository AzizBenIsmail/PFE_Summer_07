import React from 'react'
import { useParams } from 'react-router-dom'

export default function Test() {

  const {username} = useParams();
  console.log("username",username)
  
  return (
    <div>
      ahla bik si : {username}
    </div>
  )
}
