import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'

const Items = ({ items }) => (
  <div>
    {items.map(item => (
      <article key={v4()} className="message">
        <div className="message-body">
          {item.name}
          <br />
          <Link className="navbar-item" to={item.url}>
        </div>
      </article>
    ))}
  </div>
)

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Items
