import React from "react"
import { Card } from "../../Card"

const Hit = ({ hit }) => (
  <Card name={hit.name} phone={hit.phone} whatsapp={hit.whatsapp} />
)

export { Hit }
