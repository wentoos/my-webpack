import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import img from './1.jpg'
let obj = {
  name:'Liu',
  age:24
}
let {age} = obj

alert(age)

ReactDOM.render(<h1>{age}<img src={img}/></h1>,document.getElementById('root'))
