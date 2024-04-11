import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Team.css";

// Example data for team members
const teamMembers = [
  {
    name: "김주혜",
    role: "Front Developer",
    image: "망고.jpeg",
    details: "안녕하세요! 프론트엔드 개발자 김주혜 입니다.",
    id: 1,
    mbti: "ISFP",
  },
  {
    name: "전지우",
    role: "Front Developer",
    image: "알룰로스.png",
    details:
      "안녕하세요. 저는 신입 웹 개발자입니다. 차분하고, 문제를 끝까지 해결하려는 성향을 가지고 있습니다.",
    id: 1,
    mbti: "INTP",
  },
  {
    name: "제현우",
    role: "Front Developer",
    image: "그래놀라.jpeg",
    details:
      "안녕하세요:) 웹 개발자 제현우입니다. 한 단계씩 올라가는 성장형 프로그래머입니다.",
    id: 1,
    mbti: "ESTP",
  },
  {
    name: "정명서",
    role: "Back Developer",
    image: "블루베리.jpeg",
    details:
      "안녕하세요! 백엔드 개발자를 희망하는 정명서입니다. 항상 꾸준히 성장하는 개발자가 되기 위해 노력하고 있습니다.",
    id: 1,
    mbti: "ISFP",
  },
  {
    name: "송은정",
    role: "Back Developer",
    image: "청포도.jpeg",
    details: "안녕하세요 도전하며 성장하는 백엔드 개발자 송은정입니다.",
    id: 1,
    mbti: "ISFP",
  },
  {
    name: "이민우",
    role: "Back Developer",
    image: "아몬드.jpeg",
    details:
      "안녕하세요 백엔드 개발자를 꿈꾸는 이민우 입니다. 프로젝트 역량을 키워 무엇이든 가능하다고 말하는 그 날까지 열심히 노력해보겠습니다 :)",
    id: 1,
    mbti: "INTJ",
  },
  // Add more team members as needed...
];

const TeamMemberCard = ({ name, role, image, mbti, details, id }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const cardStyle = {
    height: "100%", // Adjust height to fill the grid item
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center", // Align text to center
    // Add other styles for the card background image here if necessary
  };

  // Overlay style when the card is not flipped
  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // Text color on the overlay
    // Add more styles for the overlay content here if necessary
  };

  const foggyStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backdropFilter: "blur(10px)", // Adjust the blur value as needed
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#000", // Text color for legibility
    padding: "16px", // Padding around the text
    boxSizing: "border-box", // Ensures padding is included in width and height
  };

  // Move IconButton outside of CardActionArea to prevent nested button issue
  const iconButtonStyle = {
    position: "absolute",
    top: 16, // Adjust the position as necessary
    right: 16,
    zIndex: 1000, // Ensure it's above other content
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        sx={{ height: "100%", width: "100%", objectFit: "cover" }}
        image={image}
        alt={name}
      />
      <CardActionArea
        sx={{ height: "100%", width: "100%", position: "absolute" }}
        onClick={handleClick}
      >
        {!flipped ? (
          <Box sx={overlayStyle}>
            <Typography variant="caption" gutterBottom>
              {role}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
          </Box>
        ) : (
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "text.primary",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name} - {mbti}
            </Typography>
            <Typography variant="body1">{details}</Typography>
          </CardContent>
        )}
      </CardActionArea>
      {!flipped && (
        <Box sx={iconButtonStyle}>
          <IconButton aria-label="add" size="large">
            <AddCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </Box>
      )}
      {flipped && (
        <CardContent sx={{ ...foggyStyle }}>
          <Typography gutterBottom variant="h5" component="div">
            {name} - {mbti}
          </Typography>
          <Typography variant="body1">{details}</Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default function Individual() {
  return (
    <Container maxWidth="lg">
      {" "}
      {/* Increased max width for larger layout */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        marginTop={10}
        textAlign="center"
      >
        우리 팀원들을 소개합니다.
      </Typography>
      <Grid container spacing={3} marginTop={2} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <TeamMemberCard {...member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
