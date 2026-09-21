import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ActionAreaCard({ title, description, image, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => alert(`You clicked on ${title}`)}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          {/* 2. إضافة قسم السعر أسفل الوصف وتنسيقه بشكل مميز */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              {price} JOD
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
