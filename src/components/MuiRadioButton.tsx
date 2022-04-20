import { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText,
} from '@mui/material';

export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    aria-labelledby='job-experience-group-label'
                    name='job-experience-group'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel control={<Radio size='medium' color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}
