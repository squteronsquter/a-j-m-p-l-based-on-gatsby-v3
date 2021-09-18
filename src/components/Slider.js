import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Slider() {
  return (
    <>
      <Wrapper>
        <StaticImage src="../assets/images/motyl_slider_01.jpg" alt="AJMotyl" />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``
