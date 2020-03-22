import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Dialog,
  List,
  Chip,
  DialogTitle,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  DialogActions,
  DialogContent,
  Button,
} from "@material-ui/core"

const IngredientsSelectModal = props => {
  const { onClose, open, ingredientsList, modalTitle } = props
  const [checked, setChecked] = React.useState([])

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="ingredients-select-dialog"
      open={open}
    >
      <DialogTitle id="ingredients-select-dialog">{modalTitle}</DialogTitle>
      <DialogContent dividers={true}>
        <List>
          {ingredientsList.map((food, index) => (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": food.name }}
                />
              </ListItemIcon>
              <ListItemText id={food.name} primary={`${food.name}`} />
              <Chip label={`${food.quantity}g`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Zrušit
        </Button>
        <Button onClick={handleClose} color="primary">
          Přidat
        </Button>
      </DialogActions>
    </Dialog>
  )
}

IngredientsSelectModal.propTypes = {}

export default IngredientsSelectModal
