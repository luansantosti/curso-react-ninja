import React, { PropTypes } from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
  <div>
    <Search isDisabled={isFetching} handleSearch={handleSearch}/> 
    { isFetching && <div>Carregando...</div>}
    { !!userInfo && <UserInfo userInfo={userInfo}/> }
    { !!userInfo && 
      <Actions 
        getRepos={getRepos}
        getStarred={getStarred} 
      /> 
    }
    
    { !!repos.length &&
      <Repos 
        className='repos' 
        title='Repositórios'
        repos={repos}
      />
    }

    { !!starred.length && 
      <Repos 
        className='starred' 
        title='Favoritos'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default AppContent