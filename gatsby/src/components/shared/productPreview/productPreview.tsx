import React from 'react'
import StandardPreview from './standardPreview'
import IconPreview from './iconPreview'

interface Props {
  products: Array<object>;
}

function ProductPreview(props: Props) {

  const { products } = props
  return (
    <>
      {products.previewStyle === "icon" ? <IconPreview products={products.productsArray} /> :
        <StandardPreview products={products.productsArray} />
      }
    </>
  )
}

export default ProductPreview
