import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };
    console.log({ value });
    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size="large"
                icon={<FavoriteIcon fontSize="inherit" color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                highlightSelectedOnly={true}
            />
        </Stack>
    )
}
