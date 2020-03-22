import React, { useState } from "react"
import Slider from "@material-ui/core/Slider"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Grid, Typography, List, Chip, Button } from "@material-ui/core"

import breakfastData from "../data/breakfast.json"
import dinnerData from "../data/dinner.json"
import snackData from "../data/snack.json"
import lunchData from "../data/lunch.json"
import IngredientsSelectModal from "../components/IngredientsSelectModal"
import IngredientsSelect from "../components/IngredientsSelect"

const TabSection = props => {
  const { currentId, id, index, name, foodData } = props

  const [carbsSelectOpened, setCarbsSelectOpened] = useState(false)
  const [proteinsSelectOpened, setProteinsSelectOpened] = useState(false)
  const [fatsSelectOpened, setFatsSelectOpened] = useState(false)
  const [sidesSelectOpened, setSidesSelectOpened] = useState(false)

  const handleCarbsSelectClickOpen = () => {
    setCarbsSelectOpened(true)
  }

  const handleCarbsSelectClose = value => {
    setCarbsSelectOpened(false)
  }

  const handleProteinsSelectClickOpen = () => {
    setProteinsSelectOpened(true)
  }

  const handleProteinsSelectClose = value => {
    setProteinsSelectOpened(false)
  }

  const handleFatsSelectClickOpen = () => {
    setFatsSelectOpened(true)
  }

  const handleFatsSelectClose = value => {
    setFatsSelectOpened(false)
  }

  const handleSidesSelectClickOpen = () => {
    setSidesSelectOpened(true)
  }

  const handleSidesSelectClose = value => {
    setSidesSelectOpened(false)
  }

  return (
    <Box
      component={"div"}
      role="tabpanel"
      hidden={currentId !== index}
      id={id}
      aria-labelledby={id}
    >
      <Typography>{name}</Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md>
          <Typography>Sacharidy</Typography>
          <IngredientsSelect
            ingredientsData={foodData.carbohydrates}
            modalTitle="Vyberte sacharidy"
          />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Typography>Bilkoviny</Typography>
          <Button onClick={handleProteinsSelectClickOpen}>Přidat</Button>
          <IngredientsSelectModal
            open={proteinsSelectOpened}
            ingredientsList={foodData.proteins}
            mealName={name}
            ingredientsType="bilkoviny"
            onClose={handleProteinsSelectClose}
          />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Typography>Tuky</Typography>
          <Button onClick={handleFatsSelectClickOpen}>Přidat</Button>
          <IngredientsSelectModal
            open={fatsSelectOpened}
            ingredientsList={foodData.fats}
            mealName={name}
            ingredientsType="tuky"
            onClose={handleFatsSelectClose}
          />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Typography>Ovoce/Zelenina</Typography>
          <Button onClick={handleSidesSelectClickOpen}>Přidat</Button>
          <IngredientsSelectModal
            open={sidesSelectOpened}
            ingredientsList={foodData.sides}
            mealName={name}
            ingredientsType="ovoce/zeleninu"
            onClose={handleSidesSelectClose}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

const IndexPage = () => {
  const [value, setValue] = useState(100)
  const [currentlyOpenedTab, setOpenedTab] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTabChage = (e, newTabId) => {
    console.log(newTabId)
    setOpenedTab(newTabId)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <AppBar position="static">
        <Tabs value={currentlyOpenedTab} onChange={handleTabChage}>
          <Tab
            label="Snídaně"
            id="meal-section-0"
            aria-controls="breakfast-section-panel"
          />
          <Tab
            label="Oběd"
            id="meal-section-1"
            aria-controls="lunch-section-panel"
          />
          <Tab
            label="Svačina"
            id="meal-section-2"
            aria-controls="snack-section-panel"
          />
          <Tab
            label="Večeře"
            id="meal-section-3"
            aria-controls="dinner-section-panel"
          />
        </Tabs>
      </AppBar>
      <TabSection
        id="meal-section-0"
        index={0}
        currentId={currentlyOpenedTab}
        name="Snidane"
        foodData={breakfastData}
      />
      <TabSection
        id="meal-section-1"
        index={1}
        currentId={currentlyOpenedTab}
        name="Obed"
        foodData={lunchData}
      />
      <TabSection
        id="meal-section-2"
        index={2}
        currentId={currentlyOpenedTab}
        name="Svacina"
        foodData={snackData}
      />
      <TabSection
        id="meal-section-3"
        index={3}
        currentId={currentlyOpenedTab}
        name="Vecere"
        foodData={dinnerData}
      />
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </Layout>
  )
}

export default IndexPage
