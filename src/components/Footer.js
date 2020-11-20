import React from "react"
import script from "./Footer.module.css"
export function RedFooter() {
  return (
    <div>
      <h1 className={script.redBackground}>Red Footer here</h1>
    </div>
  )
}

export function GreenFooter() {
  return (
    <div>
      <h1 className={script.greenBackground}>Green Footer here</h1>
    </div>
  )
}
