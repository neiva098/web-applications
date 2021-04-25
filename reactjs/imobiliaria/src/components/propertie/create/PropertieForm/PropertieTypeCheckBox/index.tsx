import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import { FormControlLabel, FormGroup } from '@material-ui/core'

const checkBoxStyles = () => ({
    root: {
        '&$checked': {
            color: '#00AEED',
        },
    },
    checked: {},
})

const BlueCheckbox = withStyles(checkBoxStyles)(Checkbox)

const PropertieTypeCheckBox = (props: { isRow: boolean, type: 'casa' | 'apartamento', handleTypeChange: Function }) => {
    return (
        <FormGroup row={props.isRow}>
            <FormControlLabel className='checkBox-item'
                control={
                    <BlueCheckbox
                        checked={props.type === 'casa'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTypeChange(event)}
                        name='casa'
                    />
                }
                label={<label>Casa</label>}
            />
            <FormControlLabel className='checkBox-item'
                control={
                    <BlueCheckbox
                        checked={props.type === 'apartamento'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTypeChange(event)}
                        name='apartamento'
                    />
                }
                label={<label>Apartamento</label>}
            />
        </FormGroup>
    )
}

export default PropertieTypeCheckBox