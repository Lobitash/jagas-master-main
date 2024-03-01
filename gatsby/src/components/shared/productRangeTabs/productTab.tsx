import React from 'react'
import DetailedTab from './detailedTab'
import PlainTab from './plainTab'
import StandardTab from './standardTab'

interface Props {
  tabs: Array<object>;
}

function ProductTab(props: Props) {

  const { tab } = props
  return (
    <>
      {tab.tabContent[0]._type === 'standardTab' ? <StandardTab tabContent={tab.tabContent} />
        : tab.tabContent[0]._type === 'detailedTab' ? <DetailedTab tabContent={tab.tabContent} />
          : tab.tabContent[0]._type === 'plainTab' ? <PlainTab tabContent={tab.tabContent} />
            : null}
    </>
  )
}

export default ProductTab
