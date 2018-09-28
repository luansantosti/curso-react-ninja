'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/userInfo'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />  
    <UserInfo />
    <Actions />
    <Repos 
      className='repos' 
      title='Repositórios'
      repos={[{
        name:'Repositorio 1',
        link:'google.com'
      }]}
    />
    <Repos 
      className='starred' 
      title='Favoritos'
      repos={[{
        name:'Repositorio 1',
        link:'google.com'
      }]}
    />
  </div>
)

export default App;