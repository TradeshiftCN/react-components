import React from 'react'
import Markdown from 'widgets/Markdown'
import html from '../../../CHANGELOG.md'
import './index.less'

export default () => {
  return (
    <div className="changelog">
      {/* <Center> */}
      <Markdown html={html} />
      {/* </Center> */}
    </div>
  )
}
