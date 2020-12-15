import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const items = [
    { key: 'donors', label: 'Donors', value: '500' },
    { key: 'helped', label: 'Helped', value: '100' },
  ]

function Stat() {
    return (
        <div>
            <Statistic.Group items={items} />
        </div>
    )
}

export default Stat