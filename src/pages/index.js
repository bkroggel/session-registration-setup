import React, { useState, useEffect } from "react"
import Link from "../components/link"
import { getLocalStorage } from "../services/localStorage"
import UserForm from "../components/elements/userForm"
import { css } from "@emotion/react"

const Index = () => {
  const [userInput, setUserInput] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  const updateUser = () => {
    setCurrentUser(getLocalStorage("user"))
  }
  useEffect(() => {
    updateUser()
  }, [])

  const handleFormStatus = () => {
    setUserInput(userInput => !userInput)
    updateUser()
  }

  return (
    <div>
      <h1>Session Registration Setup</h1>
      <p>
        This is obviously just a test environment to setup and showcase a
        session registration solution as used on the{" "}
        <Link to="https://expo9.pnptc.events">
          STARTUP AUTOBAHN Expo 9 website
        </Link>
        .
      </p>
      <div>
        <p>The local storage "user" is currently set to:</p>
        <code>{JSON.stringify(currentUser, null, 4)}</code>
      </div>

      <div
        css={css`
          margin-top: 1em;
        `}
      >
        <button onClick={handleFormStatus}>
          {userInput
            ? "Cancel Submission"
            : !!getLocalStorage("user")
            ? "User already set. Update Now."
            : "No userdata available. Set now."}
        </button>
        {userInput ? (
          <UserForm currentUser={currentUser} clickHandler={handleFormStatus} />
        ) : null}
      </div>
    </div>
  )
}

export default Index
