import React from "react"
import Card from "@components/Card"

const Hit = ({ hit }) => (
  <Card
    name={hit.name}
    phone={hit.phone}
    whatsapp={hit.whatsapp}
    openingHours={hit.openingHours}
  />
)

export default Hit
