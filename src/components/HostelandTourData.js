import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Modals from './Modals'

const level1Panels = [
  { title: 'Hostel Pirwa Colonial (22 points per night)', content: 'Hostel Pirwa Colonial' },
  { title: 'Sunset House Cusco (18 points per night)', content: 'Sunset House Cusco' },
  { title: 'Ecopackers (36 points per night)', content: 'Ecopackers' },
  { title: 'Intro Hostels Cusco (16 points per night)', content: 'Intro Hostels Cusco' },
  { title: 'Pariwana Hostel Cusco (24 points per night)', content: 'Pariwana Hostel Cusco' },
  { title: 'Magicpacker Hostel (20 points per night)', content: 'Magicpacker Hostel' },
  { title: 'Inka Club Hostel (19 points per night)', content: 'Inka Club Hostel' },
  { title: 'Dragonfly Hostels (12 points per night)', content: 'Dragonfly Hostels' },
  { title: 'Sungate Hostels (17 points per night)', content: 'Sungate Hostels' },
  { title: 'The Points Hostels (18 points per night)', content: 'The Points Hostels' },
//   { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Choose a Hostel to book!
    <Modals />
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { title: 'Inka Sports (88 points per person)', content: 'ATV Tour to Moray Maras and Salt Flat' },
  { title: 'Andes Cusco Tours (220 points per person)', content: 'Cusco City Sightseeing Tour' },
  { title: 'Huayna Picchu and Machu Picchu from Cusco (150 points per person)', content: 'Huayna Picchu and Machu Picchu from Cusco' },
  { title: '4-Day Inca Jungle Adventure to Machu Picchu Including Mountain Biking, Rafting and Zipline (250 points per person)', content: '4-Day Inca Jungle Adventure to Machu Picchu Including Mountain Biking, Rafting and Zipline' },
  { title: '4-Day Classic Machu Picchu Inca Jungle Trek (890 points per person)', content: '4-Day Classic Machu Picchu Inca Jungle Trek' },
]

const Level2Content = (
  <div>
    Choose a Tour to book!
    <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { title: 'Hostels', content: { content: Level1Content, key: 'content-1' } },
  { title: 'Tours', content: { content: Level2Content, key: 'content-2' } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={1} panels={rootPanels} styled />
)

export default AccordionExampleNested
