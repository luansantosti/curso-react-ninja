'use strict' 

import React, { PropTypes } from 'react'

const userInfo = ({ userInfo }) => (
    <div className='user-info'>
      <img src={userInfo.photo} />
      <h1 className='username'>
        <a href={`https://api.github.com/users/${userInfo.login}`}>{userInfo.username}</a>
      </h1>

      <div className='repos-info'>
        <ul>
          <li>- Repositórios:{userInfo.repos}</li>
          <li>- Seguidores: {userInfo.followers}</li>
          <li>- Seguindo: {userInfo.following}</li>
        </ul>
      </div>
    </div>
)

userInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    
  })
}

export default userInfo