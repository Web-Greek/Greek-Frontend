import React, { useState } from "react";
import Guest from "./Guest";
import { CssBaseline, Container, Button, TextField, Avatar, Grid, Box, Stack } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function Guestbookpage(props) {
  const [nickname, setNickname] = useState("");
  const [contents, setContents] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [guests, setGuests] = useState([]);

  const handleTitleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleContentChange = (e) => {
    setContents(e.target.value);
  };

  // 게스트 추가
  const addGuest = (nickname, currentTime, contents) => {
    setGuests([...guests, {nickname, currentTime, contents}])
  }

  // 버튼 클릭시
  const handleSubmit = () => {
    setCurrentTime(new Date());
    addGuest(nickname, currentTime, contents);
    setNickname('');
    setContents('');
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
        <Accordion>
          <AccordionSummary id="header">
            <Button 
              variant="contained"
              sx={{
              backgroundColor: "#009630",
              color: "white",
              "&:hover": {
               backgroundColor: "#008000",
               },
               }}>
                Write a guestbook
              </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item>
                <Avatar
                  alt="Profile"
                  src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                  sx = {{width: 50, height: 50}}
                />
              </Grid>
              <Grid item xs={10} container direction="column">
                <TextField
                  label="Nickname"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 0.5 }}
                  value={nickname}
                  onChange={handleTitleChange}
                />
                <Grid item xs={11} container>
                <TextField
                  label="Contents"
                  variant="outlined"
                  multiline
                  rows={10}
                  fullWidth
                  value={contents}
                  onChange={handleContentChange}
                />
              </Grid>
                <Grid container justifyContent="flex-end">
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      mt: 3,
                      padding: "0.3rem 1.5rem",
                      backgroundColor: "#009630",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#008000",
                      }
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
      <br/><br/><br/>
      <br/><br/><br/>
      <h2 style={{textAlign: "center", fontFamily: "Century Gothic, sans-serif"}}>📖Guest Book</h2>
      <hr style={{ width: 850, margin: "0 auto"}} />
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="guestbook table">
            <TableHead>
              <TableRow>
                <TableCell>Nickname</TableCell>
                <TableCell>Contents</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guests.map((guest, index) => (
                <TableRow key={index}>
                  <TableCell>{guest.nickname}</TableCell>
                  <TableCell>{guest.contents}</TableCell>
                  <TableCell>{guest.currentTime.toLocaleDateString()} {guest.currentTime.toLocaleTimeString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}

export default Guestbookpage;
