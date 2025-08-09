import React from 'react'

const SummaryListItem = ({ author }) => {
  return (
    <>
    <h3>Author Summary</h3>
    <p>Name: {author.name}, Age: {author.age}, Bio: {author.bio}</p>
    </>
  )
}

export default SummaryListItem;