import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const ActivityFeed = () => (
  <Card centered fluid>
    <Card.Content>
      <Card.Header>
        Friends Feed
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21231320_10211675343533957_4938361026450874990_n.jpg?oh=357a324c16acc1f2f7413b179df7e2df&oe=5AECF0B8' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              Irene just bought 100 backpackerpoints!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/18118589_10212489719506880_6537678211832828172_n.jpg?oh=372594df0c2234f593de6a95ad865f06&oe=5B1DDDEA' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              Luis just bought 2,000 backpackerpoints!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13043415_10153659727566733_1710835273950369165_n.jpg?oh=022a08abe1df7cce6545f2b01a53e61e&oe=5B26D104' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              Matt just booked 5 nights stay in Thailand for 800 points!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21317899_10156542047298709_4436546021536629740_n.jpg?oh=44de03dedd84888492884959e919d961&oe=5B1DE5D8' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              Jon just booked 2 nights stay in Australia for 300 points!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23844436_10155961525536383_6005416083881100635_n.jpg?oh=eb96178740916c47e5532cb14878767c&oe=5AE658BD' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              Jira just bought 1000 points!
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default ActivityFeed