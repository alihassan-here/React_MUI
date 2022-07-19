import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={1} direction='row'>
                <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            </Stack>
            <Stack spacing={1} direction='row'>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
                    <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jane Doe" />
                    <Avatar src="https://randomuser.me/api/portraits/women/51.jpg" alt="Jane Doe" />
                </AvatarGroup>
            </Stack>
            <Stack spacing={1} direction='row'>
                <Avatar variant="square" sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>BW</Avatar>
                <Avatar variant="rounded" sx={{ bgcolor: "success.light", width: 48, height: 48 }}>CK</Avatar>
            </Stack>
        </Stack>
    )
}