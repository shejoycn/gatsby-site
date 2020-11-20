import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      id,
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <section className={styles.page}>
        <article key={id}>
          <Image fixed={fixed} alt={title}></Image>
          <h3>
            {title} <span>${price}</span>
          </h3>
          <p>{info} </p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProducts($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      id
      info {
        info
      }
      image {
        fixed(width: 100) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
