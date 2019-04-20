import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

storiesOf('User info', module)
  .add('with infos', () => {
    const infos = {
      username: 'Luan Santos',
      photo: 'https://avatars0.githubusercontent.com/u/6179731?v=4',
      login: 'luansantosti',
      repos: 10,
      followers: 18,
      following: 10
    }
    return <UserInfo userinfo={infos} />
  })
