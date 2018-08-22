import React from 'react'
import Button from './button'

const LikeButton = () => (
    <Button className="like-button" handleClick={ () => alert('Like button') }>Like</Button>
)

export default LikeButton