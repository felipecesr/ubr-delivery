import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Layout from "@layouts/pesquisar"
import SEO from "@components/seo"
import Hit from "@components/Hit"
import Nav from "@components/Nav"
import AlgoliaLogo from "@components/AlgoliaLogo"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Pesquisar" lang="pt-br" />
      <Nav name="Pesquisar" />
      <section>
        <InstantSearch
          searchClient={searchClient}
          indexName={algolia.indexName}
          onSearchStateChange={searchState => {
            const page = `?query=${searchState.query}`
            window.ga("send", "pageView", page)
          }}
        >
          <SearchBox
            translations={{
              placeholder: "Pesquise um comércio ou categoria",
            }}
          />
          <Stats
            translations={{
              stats(nbHits, timeSpentMs) {
                return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
              },
            }}
          />
          <Hits hitComponent={Hit} />
        </InstantSearch>
        <AlgoliaLogo />
      </section>
    </Layout>
  )
}

export default SearchPage
