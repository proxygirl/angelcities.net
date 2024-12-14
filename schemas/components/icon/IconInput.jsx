
import {set} from 'sanity'
import {Stack, Button, Grid, Label, Text} from '@sanity/ui'
import {useCallback, createElement} from 'react'
import { ICONS } from './icon'

export function IconInput(props) {

  const {value, onChange} = props

  const handleClick = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value
      onChange(set(nextValue))
    },
    [onChange]
  )  

  return (
    <Grid columns={7} gap={3}>
      {ICONS.map((icon) => (
        <Button
          key={icon.value}
          value={icon.value}
          mode={value === icon.value ? `default` : `ghost`}
          tone={value === icon.value ? `primary` : `default`}
          onClick={handleClick}
        >
          { icon.value ?
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={`/images/emoticons/${icon.value}`} />
            </div> 
            : ''
          }
          
        </Button>
      ))}
    </Grid>
  )
}