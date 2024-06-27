import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const content = [
  {
    word: `Richard Morgan`,
    description: 'well meaning and kindly. "a benevolent smile"',
  },
  {
    word: `Consectetur Justa`,
    description:
      'well meaning and kindly. "a benevolent smile"',
  },
  {
    word: `Robert Long`,
    description:
      'well meaning and kindly. "a benevolent smile"',
  },
];

export default function Testimonials() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "5vh",
        backgroundColor: "#386DB4",
        padding: 2,
        position: "relative",
      }}
    >
      <Typography variant="h4" component="div" sx={{ color: "white", mb: 4 }}>
        Testimonials
      </Typography>
      <Typography variant="h4" component="div" sx={{ color: "white", mb: 4, fontSize: "16px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
        quibusdam odio deleniti reprehenderit facilis.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          position: "relative",
          top: "80px",
        }}
      >
        {content.map((item, index) => (
          <Card
            key={index}
            sx={{ minWidth: 50, minHeight: 300, backgroundColor: "white" }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {item.word}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
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
