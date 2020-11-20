import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import img from "../images/image4.jpeg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)

  console.log(data.fixed.childImageSharp.fixed.src)
  return (
    <>
      <section className="images">
        <article className="single-image">
          <h3>Basic Image</h3>
          <img src={img} width="100%"></img>
        </article>
        <article className="single-image">
          <h3>Fixed Image/blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed}></Image>
        </article>
        <article className="single-image">
          <h3>Fluid Images/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        </article>
      </section>
    </>
  )
}

export default Images
