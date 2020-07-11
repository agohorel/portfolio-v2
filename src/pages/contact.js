import React, { useEffect } from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"
import { Centered, StyledButton, PageTitle } from "../styles/common"
import colors from "../styles/colors"

import { useDeviceHeight } from "../hooks/useDeviceHeight"

const ContactForm = () => {
  const [height, handleResize] = useDeviceHeight()

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <Centered>
        <StyledForm
          height={height}
          action="https://formspree.io/gohorelalex@gmail.com"
          method="POST"
        >
          <PageTitle>contact</PageTitle>
          <FormGroup>
            <label htmlFor="name">name</label>
            <FormInput type="text" name="name" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="_replyto">email</label>
            <FormInput type="email" name="_replyto" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="body">message</label>
            <FormTextArea type="text" name="body" rows="6" required />
          </FormGroup>

          <FormGroup>
            <FormSubmit type="submit" value="send message" />
          </FormGroup>
        </StyledForm>
      </Centered>
    </Layout>
  )
}

export default ContactForm

const StyledForm = styled.form`
  height: ${props => props.height * 0.75}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;

  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.4rem;
  }

  input,
  textarea {
    font-family: "JetBrains Mono", monospace;
    padding: 1rem;
  }

  @media only screen and (min-width: 900px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    h1 {
      padding-top: 0;
      font-size: 5rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 3rem;
    }

    input,
    textarea {
      padding: 0.5rem;
    }
  }
`

const FormInput = styled.input`
  display: block;
  border: none;
  width: 100%;
  font-size: 2.4rem;
  transition: 0.2s ease all;
  background-color: ${colors.lightgrey};

  :focus {
    outline: none;
    border-bottom: 3px solid ${colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${colors.invalid};
  }
`

const FormTextArea = styled.textarea`
  display: block;
  border: none;
  width: 100%;
  font-size: 2rem;
  padding: 1rem 0;
  transition: 0.2s ease all;
  resize: none;
  background-color: ${colors.lightgrey};

  :focus {
    outline: none;
    border-bottom: 3px solid ${colors.valid};
  }

  :focus:invalid {
    outline: none;
    border-bottom: 3px solid ${colors.invalid};
  }
`

const FormSubmit = StyledButton.withComponent("input")

const FormGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`
