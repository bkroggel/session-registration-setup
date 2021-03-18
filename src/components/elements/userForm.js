import React from "react"
import { Formik, Form } from "formik"
import { Input } from "../form.js"
import { setLocalStorage } from "../../services/localStorage"
import { passToFunction } from "../../services/signUp"

const UserForm = ({ clickHandler, currentUser }) => {
  const setClear = () => {
    localStorage.removeItem("user")
    clickHandler()
  }

  return (
    <Formik
      onSubmit={values => {
        setLocalStorage("user", values)
        passToFunction({ user: values })
        clickHandler()
      }}
      initialValues={{
        user_firstname: currentUser?.user_firstname
          ? currentUser.user_firstname
          : "",
        user_lastname: currentUser?.user_lastname
          ? currentUser.user_lastname
          : "",
        user_company: currentUser?.user_company ? currentUser.user_company : "",
        user_position: currentUser?.user_position
          ? currentUser.user_position
          : "",
        user_email: currentUser?.user_email ? currentUser.user_email : "",
      }}
    >
      <Form>
        <Input title="First Name" id="user_firstname" />
        <Input title="Last Name" id="user_lastname" />
        <Input title="Company" id="user_company" />
        <Input title="Position/Profession" id="user_position" />
        <Input title="eMail Address" id="user_email" />
        <button type="submit">Submit</button>
        <button type="button" onClick={setClear}>
          Clear
        </button>
      </Form>
    </Formik>
  )
}

export default UserForm
