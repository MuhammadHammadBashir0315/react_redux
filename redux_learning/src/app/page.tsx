"use client"

import { decrement, increment } from '@/slice'
import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'


export default function Home() {
  const dispatch = useDispatch()
  const selector: any = useSelector((state) => state)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
        {selector.counterReducer}  
        </div>
        <button
          onClick={() => dispatch(increment(10))}
        >Add</button>
        <button onClick={()=>{dispatch(decrement())}}>subtract</button>
    </main>
  )
}
