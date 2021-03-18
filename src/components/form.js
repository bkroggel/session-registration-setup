import React from "react"
import { css } from "@emotion/react"
import { Field } from "formik"

export const Input = ({ title, id }) => {
  return (
    <div
      css={css`
        margin-bottom: 0.5em;
      `}
    >
      <label
        css={css`
          margin-right: 1em;
        `}
        htmlFor={id}
      >
        {title}
      </label>
      <Field id={id} name={id} />
    </div>
  )
}
