import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const content = [
  {
    title: 'Word of the Day',
    word: `be${bull}nev${bull}o${bull}lent`,
    type: 'adjective',
    description: 'well meaning and kindly. "a benevolent smile"',
  },
  {
    title: 'Word of the Day',
    word: `in${bull}teg${bull}ri${bull}ty`,
    type: 'noun',
    description: 'the quality of being honest and having strong moral principles.',
  },
  {
    title: 'Word of the Day',
    word: `per${bull}se${bull}ver${bull}ance`,
    type: 'noun',
    description: 'persistence in doing something despite difficulty or delay in achieving success.',
  }
];

export default function Testimonials() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '50vh',
        backgroundColor: 'blue',
        padding: 2,
        position: 'relative'
      }}
    >
      <Typography variant="h4" component="div" sx={{ color: 'white', mb: 4 }}>
        Testimonials
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          position: 'relative',
          top: '50px',  
        }}
      >
        {content.map((item, index) => (
          <Card key={index} sx={{ minWidth: 200, backgroundColor: 'white' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="div">
                {item.word}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.type}
              </Typography>
              <Typography variant="body2">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
