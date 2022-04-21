import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

type Skill = {
    id: number;
    label: string;
}
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillsOptions = skills.map((skill, index) => ({ id: index + 1, label: skill }));
export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>('');
    const [skill, setSkill] = useState<Skill | null>(null);
    console.log({ skill });
    return (
        <Stack>
            <Autocomplete
                options={skills}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Skills"
                        variant="outlined"
                    />
                )}
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue as string);
                }}
                freeSolo//for free text
            />
            <Autocomplete
                options={skillsOptions}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Skills"
                        variant="outlined"
                    />
                )}
                value={skill}
                onChange={(event: any, newValue: Skill | null) => {
                    setSkill(newValue);
                }}
            />

        </Stack>
    )
}
