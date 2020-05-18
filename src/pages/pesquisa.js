import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import { Hit } from "../components/Search/Hit"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as S from "../components/Search/styled"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  return (
    <Layout>
      <S.SearchWrapper>
        <SEO title="UBR Delivery" />
        <InstantSearch
          searchClient={searchClient}
          indexName={algolia.indexName}
        >
          <SearchBox translations={{ placeholder: "Pesquisar..." }} />
          <Stats
            translations={{
              stats(nbHits, timeSpentMs) {
                return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
              },
            }}
          />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </S.SearchWrapper>
    </Layout>
  )
}

export default SearchPage
