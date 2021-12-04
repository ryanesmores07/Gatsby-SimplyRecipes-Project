import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

const Example = () => {
  const data = useStaticQuery(getData)
  const dataName = data.site.info

  return (
    <div>
      <h2>{dataName.author}</h2>
    </div>
  )
}

export default Example
