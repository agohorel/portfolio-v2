import { useEffect, useCallback } from "react"
import { navigate } from "gatsby"

export const useKeyboardNavigation = pageContext => {
  const keyboardNavigation = useCallback(
    e => {
      const goToPreviousItem = () => {
        navigate(pageContext.prev.node.frontmatter.path)
      }

      const goToNextItem = () => {
        navigate(pageContext.next.node.frontmatter.path)
      }

      switch (e.key) {
        case "ArrowLeft":
          goToPreviousItem()
          break
        case "ArrowRight":
          goToNextItem()
          break
        default:
          break
      }
    },
    [pageContext]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyboardNavigation)

    return () => document.removeEventListener("keydown", keyboardNavigation)
  }, [keyboardNavigation])
}
