import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>Strona główna</h1>
          <StaticImage src="../assets/images/logo.svg" alt="AJMotyl Logo" />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section``
