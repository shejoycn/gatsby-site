import React from 'react'
import Layout from '../components/Layout'
import {ExampleButton, ExampleButton2} from '../components/Button'


export default function Blog() {
 return (
  <div>
   <Layout>
   Hello Blog!!
   <ExampleButton  >Click here</ExampleButton>
    <ExampleButton2  >Click here</ExampleButton2>
  </Layout>
  </div>
 )
}
