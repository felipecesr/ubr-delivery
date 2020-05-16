import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import { Hit } from "../components/Search/Hit"
import Layout from "../components/layout"
import { Container } from "../components/Container/styles"
import SEO from "../components/seo"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="UBR Delivery" />
      <Container>
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
      </Container>
    </Layout>
  )
}

export default SearchPage
