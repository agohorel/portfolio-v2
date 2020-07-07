import React, { Component, createRef } from "react"
let p5

if (typeof window !== `undefined`) {
  p5 = require("p5/lib/p5.min")
}

export default class Sketch extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef()
  }

  Sketch = p => {
    p5.disableFriendlyErrors = true

    let scale = 12
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

      if (p.frameCount % 2 === 0) {
        p.iterator(0, yoff)
      } else {
        p.iterator(1, yoff)
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth / 2, p.windowHeight / 2)
    }

    p.iterator = (start, yoff) => {
      for (let y = start; y <= rows; y += 2) {
        let xoff = 0
        for (let x = start; x <= cols; x += 2) {
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
        zoff += 0.0002
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
