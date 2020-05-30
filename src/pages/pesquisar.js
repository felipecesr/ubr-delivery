import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Hit from "@components/Hit"
import * as S from "@layouts/pesquisar"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Pesquisar" />
      <S.SearchWrapper>
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
