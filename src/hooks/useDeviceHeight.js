import { useState } from "react"

export const useDeviceHeight = () => {
  const [height, setHeight] = useState(getWindowHeight())

  const handleResize = () => {
    setHeight(getWindowHeight())
  }

  return [height, handleResize]
}

function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window
    return height
  }
}
