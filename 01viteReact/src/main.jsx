import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  childern: 'Click me to visit again'
}
const anotherUser = 'chai or react'
const anotherElement =(
  <a href='https://google.com' target='_blank'>Visit Gogle</a>
)

const reactElement = React.createElement(
  'a',
  { href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
  //  App()
   // ReactElement
  //  anotherElement
  reactElement
  // <App />
  
)
