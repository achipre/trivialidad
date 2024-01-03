"use client"
import React, { useEffect, useState } from 'react'
import './questions.css'
export default function questions() {
  const [count, setCount] = useState(5)
  useEffect(() => {
    if (count !== 0) {
      setInterval(() => {
        setCount(count - 1)
      }, 1000);
    }
  },[count])
  return (
    <main>
      <h2 className='initialQuetions'>Las preguntas enpiezan en:</h2>
      <p>{count}</p>
    </main>
  )
}
