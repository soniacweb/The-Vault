import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'


const ClothingCard = ({ item }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={item.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/clothing/${item._id}`}>{item.title}</Link>
        <p className="has-text-grey-darker">{item.brand}</p>
      </div>
    </div>
  </div>
)
export default ClothingCard