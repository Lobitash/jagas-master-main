import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FilterRenderedComponents from '@util/filterRenderedComponents'
import Layout from '@components/shared/layout'
import ContactForm from '@components/contact/contactForm'
import SEO from '@components/shared/seo'

function Contact() {
  const { sanityContactPage } = useStaticQuery(graphql`
  {
    sanityContactPage {
      seoBlock {
        pageTitle
        pageKeyWords
        pageDescription
        slug {
          current
        }
         ogImage {
          asset {
            fluid {
              src
            }
          }
        }
        }
      pageContent {
        ... on SanityWideImageBlock {
          _key
          _type
          wideImage {
            asset {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
            }
          }
        }
        ... on SanityHeroPlain {
          _key
          _type
          heroText
        }
        ... on SanityContactDetails {
          _key
          _type
          contactCards {
            contactDetailValue
            contactDetailName
          }
          getInTouchTextBlock {
            _rawContent
          }
        }
      }
      contactFormText {
        formDescription
        formHeader
      }
      contactFormCustomerTypes
      contactFormThankYouMessage {
      _rawContent
    }
    }
  }
  `)

  const { pageContent, contactFormText, contactFormCustomerTypes, contactFormThankYouMessage } = sanityContactPage

  return (
    <Layout noCta>
      <SEO seoData={sanityContactPage?.seoBlock} slug='contact' />
      <FilterRenderedComponents pageContent={pageContent} />
      <ContactForm header={contactFormText.formHeader} subHeader={contactFormText.formDescription} customerTypes={contactFormCustomerTypes} thankYouMessage={contactFormThankYouMessage._rawContent} />
    </Layout>
  )
}

export default Contact
