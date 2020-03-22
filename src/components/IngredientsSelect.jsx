import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"
import IngredientsSelectModal from "./IngredientsSelectModal"

const IngredientsSelect = ({
  ingredientsData,
  onIngredientsSelect,
  modalTitle,
  buttonLabel = "Přidat",
}) => {
  const [selectOpened, setSelectOpened] = useState(false)

  const handleSelectClickOpen = () => {
    setSelectOpened(true)
  }

  const handleSelectClose = value => {
    setSelectOpened(false)
  }

  return (
    <>
      <Button onClick={handleSelectClickOpen}>{buttonLabel}</Button>
      <IngredientsSelectModal
        modalTitle={modalTitle}
        open={selectOpened}
        ingredientsList={ingredientsData}
        onClose={handleSelectClose}
      />
    </>
  )
}

IngredientsSelect.propTypes = {}

export default IngredientsSelect
