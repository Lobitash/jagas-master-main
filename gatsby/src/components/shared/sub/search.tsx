import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
// import { useLunr } from 'react-lunr'
import { useFlexSearch } from 'react-use-flexsearch'
import styled from 'styled-components'
import SearchPreview from './searchPreview'

import { P } from '@util/standard'
import { icons, MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  backgroundColor: string;
  openSearch: boolean;
  productPage?: boolean;
  isDesktop?:boolean;
  onClick: () => void;
}

const SearchWrapper = styled.div<{searchOpen: boolean; isDesktop?:boolean;}>`
  padding-top: 34px;
  margin-left: ${props => props.isDesktop ? "0" : "60%"};
  width: 15%;
  ${({ searchOpen }) => searchOpen && `width: 40%; margin-right: 40px; margin-left: 0px;`};
  transition: all 0.2s;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    ${({ searchOpen }) => searchOpen && `width: 90%;`};
    margin-right: 0px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
     ${({ searchOpen }) => searchOpen && `width: 120%; margin-right: 40px; margin-left: 0px;`};
  }
`

const ResultsWrapper = styled.div`
position: fixed;
padding-top: 100px;
padding-bottom: 50px;
top: 0px;
right: 0px;
width: 100vw;
background-color: white;
z-index: 3;
max-height: 65vh;
overflow-y: scroll;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  padding-top: 120px;
}
`

const InputWrapper = styled.div < { borderColor: boolean; productPage: boolean; searchOpen: boolean; }>`
  position: relative;
  cursor: pointer;
  z-index: 4;
  display: grid;
  padding-bottom: 1px;
  grid-template-columns: 20% 80%;
  border-bottom: 1.2px solid white;
  ${({ searchOpen }) => !searchOpen && `border: none;`};
  ${({ borderColor}) => borderColor && `border-bottom: 2px solid black;`};
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width:100%;
  }
  `

const SearchIcon = styled.img<{ darkened: boolean; productPage: boolean;}>`
display: inline-block;
cursor: pointer;
width: 25px;
height: 25px;
padding-top: 5px;
margin-right: 10px;
filter: brightness(5);
${({ darkened, productPage }) => (darkened || productPage) && `filter: brightness(0);`};
`

const SearchInput = styled.input<{ fontColor: boolean; productPage: boolean; searchOpen: boolean; }>`
display: inline-block;
color: white;
cursor: pointer;
font-family: 'bold';
border: none;
opacity: 0;
z-index: 5;
padding-top: 5px;
padding-left: 8px;
background-color: rgba(51, 170, 51, 0);
${({ fontColor, productPage }) => (fontColor || productPage) && `color: black;`};
${({ searchOpen }) => searchOpen && `opacity: 1;`};
::placeholder {
  color: white;
  font-family: 'bold';
  ${({ fontColor, productPage }) => (fontColor || productPage) && `color: black;`};
}

&:focus {
  outline: none;
}
width: 100%;
transition: all 0.3s;
`

const NoResult = styled(P)`
font-size: 20px;
font-family: 'bold';
text-align: center;
`

const ResultsHeader = styled(P)`
  width: 60%;
  margin: 0 auto;
  font-family:'bold';

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width:  90%;
  }
`


const QuickLinkHeader = styled(P)`
  margin-top: 30px;
  text-align: center;
  font-family:'bold';
`

const QuickLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  width: 19%;
  margin: 0 auto;
  min-width: 250px;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    min-width: 0px;

  }
`

const QuickLink = styled(P)`
  color: #D86310;
  font-family: 'bold';
  text-align: center;
  cursor: pointer;
  width: max-content;
  margin: 0 auto;
  
  &:hover {
    color: black;
  }
  transition: color 0.2s;
`

function Search(props: Props) {

  const { localSearchProducts } = useStaticQuery(graphql`
    {
    localSearchProducts {
      index
      store
    }
  }
  `)

  useEffect(() => {
    const input = document.getElementById("searchInput");
    if ((input) && (openSearch)) {
      input.focus()
    }
  })

  const { index, store } = localSearchProducts

  const [query, updateQuery] = useState(null)

  let results = useFlexSearch(query, index, store)
  const { backgroundColor, openSearch, productPage, onClick, isDesktop } = props
  
  return (
    <SearchWrapper searchOpen={openSearch} isDesktop={isDesktop}>
      <InputWrapper borderColor={openSearch} productPage={productPage} onClick={onClick}>
        <SearchIcon src={icons.search} darkened={openSearch} productPage={productPage}/>
        <SearchInput searchOpen={openSearch} fontColor={openSearch} productPage={productPage} type="text" onChange={e => updateQuery(e.target.value)} id="searchInput"/>
      </InputWrapper>
      {(openSearch) && <ResultsWrapper>
        {results.length === 0 && 
        <>
        <NoResult>{!query ? 'Start typing to search' : `No results for "${query}"`}</NoResult>
        <QuickLinkHeader>Quick Links:</QuickLinkHeader>
        <QuickLinksWrapper>
            <QuickLink onClick={() => updateQuery('paving')}>Paving</QuickLink>
            <QuickLink onClick={() => updateQuery('precast')}>Precast</QuickLink>
            <QuickLink onClick={() => updateQuery('blog')}>Blog</QuickLink>
          </QuickLinksWrapper>
        </>
        }
        {results.length >= 1 && <ResultsHeader>Search Results:</ResultsHeader>}
        {results.map(result => {
          return (
            <SearchPreview product={result} onClick={() => navigate(result.pageCategory !== "blog" ? `/${result.pageCategory}/${result.slug}` : `/${result.slug}`)} />
          )
        })}
      </ResultsWrapper>}
    </SearchWrapper>
  )
}

export default Search
