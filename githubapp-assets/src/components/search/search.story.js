import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search', module)
  .add('default', () => (
    <Search isDisabled={false} handleSearch={action()} />
  ))
