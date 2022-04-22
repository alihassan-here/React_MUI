import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    console.log({ checked });

    return (
        <Box>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={handleChange}
                        size="small"
                        color="success"
                    />
                }
                label="Dark mode"
            />
        </Box>
    )
}
