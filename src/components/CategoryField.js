import React from 'react'

const CategoryField = (props) => {
  const { category, checked }  = props

  // onClick or onChange for handleChange?
  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          value={category}
          onChange={props.handleChange}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
