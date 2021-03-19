import React from "react"

export const Button = ({ handler, title }) => {
  return <button onClick={handler}>{title}</button>
}
