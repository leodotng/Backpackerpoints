import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Modals = () => (
  <Modal trigger={<Button>Book Hostel</Button>} closeIcon>
    <Header icon='thumbs up' content='Please confirm Booking' />
    <Modal.Content>
      <p>Please confirm the booking of 1 night at Hostel Pirwar Colonial for 22 points deducted from your backpack.</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <a href="http://localhost:3000/booking=success">
      <Button color='green'>
        <Icon name='checkmark' /> Confirm
      </Button>
      </a>
    </Modal.Actions>
  </Modal>
)

export default Modals