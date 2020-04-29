import React, { Component, createRef } from "react"
import p5 from "p5"

export default class Sketch extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef()
  }

  Sketch = p => {
    p5.disableFriendlyErrors = true

    let scale = 20
    let inc = 0.01
    let zoff = 0
    let cols, rows

    p.setup = () => {
      p.createCanvas(p.windowWidth / 2, p.windowHeight / 2)
      cols = Math.floor(p.width / scale)
      rows = Math.floor(p.height / scale)
    }

    p.draw = () => {
      p.fill(255, 5)
      p.noStroke()
      p.rect(0, 0, p.width, p.height)

      p.perlinGrid()
    }

    p.perlinGrid = () => {
      p.strokeWeight(0.1)
      let yoff = 0

      for (let y = 0; y <= rows; y++) {
        let xoff = 0
        for (let x = 0; x <= cols; x++) {
          xoff += inc
          let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI
          let v = p5.Vector.fromAngle(angle)
          let col = p.map(p.degrees(angle), 0, 360, 0, 255)

          p.stroke(col)
          p.push()
          p.translate(x * scale, y * scale)
          p.rotate(v.heading())
          p.line(0, 0, scale * p.map(angle, 2, 4, 0, 2), 0)
          p.pop()
        }
        yoff += inc
        zoff += 0.0001
        inc = p.noise(yoff, zoff) * 0.15
      }
    }
  }

  componentDidMount() {
    this.p5Instance = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef}></div>
  }
}
