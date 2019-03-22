'use strict'

import React, { PropTypes } from 'react'

const Actions = (props) => (
  <div className='actions'>
    <button onClick={props.getRepos}>Ver repositórios</button>
    <button onClick={props.getStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}



export default Actions