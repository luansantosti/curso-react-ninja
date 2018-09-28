'use strict' 

import React from 'react'

const userInfo = () => (
    <div className='user-info'>
      <img src='https://avatars0.githubusercontent.com/u/6179731?v=4' />
      <h1 className='username'><a href='https://api.github.com/users/luansantosti'>Luan Santos</a></h1>

      <div className='repos-info'>
        <ul>
          <li>- Repositórios: 122</li>
          <li>- Seguidores: 10</li>
          <li>- Seguindo: 12</li>
        </ul>
      </div>
    </div>
)

export default userInfo