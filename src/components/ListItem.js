import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ListItems = ({ listitems }) => (
  <div>
    {listitems.map(listitem => (
      <article key={v4()} className="message">
        <div className="message-body">
          {listitem.quote}
          <br />
          <cite> – {listitem.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

ListItems.propTypes = {
  listitems: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default ListItems
