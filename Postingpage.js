import React, { useState } from "react";
import { CssBaseline, Container, Button, TextField } from "@mui/material";

export default function PostingBubble() {
  const [postTitle, setPostTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = () => {
    // 제출 로직을 구현하시면 됩니다. 예를 들어, 콘솔에 제목과 내용을 출력하는 방식으로 구현합니다.
    console.log("제목:", postTitle);
    console.log("내용:", contents);

    // 실제 서버로 데이터를 전송하거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          value={postTitle}
          onChange={handleTitleChange}
        />
        <TextField
          label="내용"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          value={contents}
          onChange={handleContentChange}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 3,
            padding: "0.3rem 1.5rem",
            backgroundColor: "#D4AB39",
            color: "white",
            "&:hover": {
              backgroundColor: "#D4AB39",
            },
          }}
        >
          작성하기
        </Button>
      </Container>
    </React.Fragment>
  );
}
