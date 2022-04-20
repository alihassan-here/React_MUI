import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      {/* if we want to display h1 tag, but with the size of h4 and gutterBottom for bottom margin */}
      <Typography variant="h4" component='h1' gutterBottom>h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1">Body 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea adipisci facilis perspiciatis delectus ut. Quisquam quae quam quia officia commodi excepturi corrupti hic. Distinctio odio tempore inventore ex a?</Typography>
      <Typography variant="body2">Body 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus cumque dolorum animi, voluptatem voluptatibus incidunt laboriosam suscipit saepe repellendus, quibusdam nesciunt corporis iusto similique dicta quasi voluptatum, nulla illo!</Typography>
    </div>
  )
}
