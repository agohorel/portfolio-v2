import React, { Component, createRef } from "react"
import p5 from "p5"

export default class Sketch extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef()
  }

  Sketch = p => {
    p.setup = () => {}

    p.draw = () => {}
  }

  componentDidMount() {
    this.p5Instance = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef}></div>
  }
}
