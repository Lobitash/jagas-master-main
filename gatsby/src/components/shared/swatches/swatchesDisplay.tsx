import React from 'react'
import SwatchCard from './swatchCard'

interface Props {
  swatches: Array<object>;
}

function SwatchesDisplay(props: Props) {

  const { swatches } = props

  return (
    <>
      {swatches.map((swatchCard, index) => {
        return (
          <SwatchCard swatch={swatchCard.node} bgVisible={index % 2 !== 0} />
        )
      })}
    </>
  )
}

export default SwatchesDisplay
