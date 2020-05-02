import React from "react"
import PropTypes from "prop-types"

import Agua from "./categories/Agua"
import Bolos from "./categories/Bolos"
import Cafe from "./categories/Cafe"
import Doces from "./categories/Doces"
import Farmacia from "./categories/Farmacia"
import Frigorifico from "./categories/Frigorifico"
import Frutas from "./categories/Frutas"
import Lanches from "./categories/Lanches"
import Marmitaria from "./categories/Marmitaria"
import Mercado from "./categories/Mercado"
import Queijos from "./categories/Queijos"
import Suplementos from "./categories/Suplementos"

const CategoryIcon = props => {
  switch (props.name) {
    case "agua":
      return <Agua {...props} />
    case "bolos-e-tortas":
      return <Bolos {...props} />
    case "cafe":
      return <Cafe {...props} />
    case "doces-e-sobremesas":
      return <Doces {...props} />
    case "farmacia":
      return <Farmacia {...props} />
    case "frigorifico":
      return <Frigorifico {...props} />
    case "frutas-e-verduras":
      return <Frutas {...props} />
    case "lanches":
      return <Lanches {...props} />
    case "marmitaria":
      return <Marmitaria {...props} />
    case "mercado":
      return <Mercado {...props} />
    case "queijos-e-laticinios":
      return <Queijos {...props} />
    case "suplementos":
      return <Suplementos {...props} />
    default:
      return <Suplementos {...props} />
  }
}

CategoryIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export { CategoryIcon }
