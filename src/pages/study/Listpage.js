import * as React from 'react';
import { Card, CardContent, CardMedia, TextField, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Typography, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


// 포스팅 글 -> detail 폴더에 작성

const cardData = [
  {
    id: 1,
    imageUrl: "https://images.mypetlife.co.kr/content/uploads/2023/11/17133418/61fbb115-3845-4427-b72d-76c5e650cd3c.jpeg",
    title: "Card Title 1",
    content: "Card content 1",
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/random?sig=2",
    title: "Card Title 2",
    content: "Card content 2",
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/random?sig=3",
    title: "Card Title 3",
    content: "Card content 3",
  },
  {
    id: 4,
    imageUrl: "https://source.unsplash.com/random?sig=4",
    title: "Card Title 4",
    content: "Card content 4",
  },
];


const defaultTheme = createTheme();


function Listpage() {

  const backgroundImage = 'https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg';
  //const backgroundImage = 'https://i0.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2015/07/CN63QSUO8C.jpg?resize=1280%2C640&ssl=1';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
          
          <Box sx={{ position: 'relative', mt: 3, mb: 3 }}>
            {/* Background image with transparency */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4, //이미지 투명도
                zIndex: -1,
              }}
            />
            {/* Search bar container */}
              <Container maxWidth="md">
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh', paddingBottom: '5vh' }}>
                  <TextField id="search" label="검색어를 입력해주세요" variant="filled" color='success' 
                    sx={{ 
                      mr: 2, 
                      width: 600, 
                      '& .MuiFilledInput-root': {
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'white',
                        },
                      },
                      
                      }} />
                  <Button variant="contained" color="success">
                    Go!
                  </Button>
                </Box>
              </Container>
          </Box>

        
          {/* Posts cards container */}
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Grid container spacing={8}>
              {cardData.map((card) => (
                <Grid item key={card} xs={12} sm={6} sx={{ px: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Link to={`/study/detail/${card}`} style={{ textDecoration: 'none' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.imageUrl}
                        alt={card.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" sx={{ color: 'black' }}>
                          {card.title}
                        </Typography>
                        <Typography sx={{ color: 'black' }}>{card.content}</Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              ))}

            </Grid>

            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mr: 4  }}>
              <Button variant="contained" endIcon={<EditIcon />} sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}>
                작성하기
              </Button>
            </Box>

          </Container>

          
      </CssBaseline>
    </ThemeProvider>
  );
}

export default Listpage;