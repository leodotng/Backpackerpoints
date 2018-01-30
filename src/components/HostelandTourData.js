import React from 'react'
import { Accordion } from 'semantic-ui-react'

const level1Panels = [
  { title: 'Hostel Pirwa Colonial', content: 'Hostel Pirwa Colonial' },
  { title: 'Sunset House Cusco', content: 'Sunset House Cusco' },
  { title: 'Ecopackers', content: 'Ecopackers' },
  { title: 'Intro Hostels Cusco', content: 'Intro Hostels Cusco' },
  { title: 'Pariwana Hostel Cusco', content: 'Pariwana Hostel Cusco' },
  { title: 'Magicpacker Hostel', content: 'Magicpacker Hostel' },
  { title: 'Inka Club Hostel', content: 'Inka Club Hostel' },
  { title: 'Dragonfly Hostels', content: 'Dragonfly Hostels' },
  { title: 'Sungate Hostels', content: 'Sungate Hostels' },
  { title: 'The Points Hostels', content: 'The Points Hostels' },
//   { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Choose a Hostel to book!
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { title: 'Inka Sports', content: 'ATV Tour to Moray Maras and Salt Flat' },
  { title: 'Andes Cusco Tours', content: 'Cusco City Sightseeing Tour' },
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
  <Accordion defaultActiveIndex={2} panels={rootPanels} styled />
)

export default AccordionExampleNested
