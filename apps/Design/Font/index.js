import React from 'react'
import { Col, Row } from '@tradeshift/react-components/lib/Layout'
import Markdown from 'widgets/Markdown'
import md from './font.md'

export default class extends React.Component {
  render () {
    return (
      <div className="font">
        <Row>
          <Col col="md-16" className="demo__left">
            <Markdown html={md} />
          </Col>
        </Row>
      </div>
    )
  }
}
