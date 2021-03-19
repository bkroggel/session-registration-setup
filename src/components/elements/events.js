import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "../button"
import { css } from "@emotion/react"

const EventButton = id => {
  return <Button title="Register Now" />
}

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "events" } }) {
        edges {
          node {
            recordId
            data {
              title
            }
          }
        }
      }
    }
  `)

  console.log(data.allAirtable.edges)
  return data.allAirtable.edges.map(({ node }, index) => (
    <div
      css={css`
        margin-bottom: 2em;
      `}
      key={index}
    >
      <p>{node.data.title}</p>
      <EventButton id={node.recordId} />
    </div>
  ))
}

export default Events
