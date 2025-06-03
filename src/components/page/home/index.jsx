import React from 'react'
import Header from '../../elements/header'
import Directions from '../../elements/directions'
import Numbers from '../../elements/numbers'
import Input from '../../elements/input'
import Comments from '../../elements/comments'
import Info from '../../elements/info'

const Home = () => {
  return (
    <div>
      <Header />
      <Directions />
      <Info />
      <Numbers />
      <Comments />
      <Input />
    </div>
  )
}

export default Home