import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/shared/layout'
import PlainHero from '@components/shared/hero/plainHero'
import SwatchesDisplay from '@components/shared/swatches/swatchesDisplay'

function Swatches() {

  const { allSanitySwatchCard } = useStaticQuery(graphql`
  {
    allSanitySwatchCard {
      edges {
        node {
          swatchName
          _key
          description
          featureImage {
            asset {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
            }
          }
          textures {
            textureName
            textureThumbnail {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
            }
            images {
            _key
            asset {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
            }
          }
            _key
          }
        }
      }
    }
  }  
  `)

  return (
    <Layout>
      <PlainHero heroText='SWATCHES' />
      <SwatchesDisplay swatches={allSanitySwatchCard.edges} />
    </Layout>
  )
}

export default Swatches
