import React, { useState } from "react";
import { CssBaseline, Container, Button, TextField } from "@mui/material";
import MDEditor from '@uiw/react-md-editor';

export default function PostingBubble() {
  const [postTitle, setPostTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContents(value);
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
      <Container component="main" maxWidth="md" sx={{ mt: 5, textAlign: 'center', height: '100vh' }}>


        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          value={postTitle}
          onChange={handleTitleChange}
        />
        <MDEditor
          value={contents}
          onChange={handleContentChange}
          height={400}
        />
        <div className="markdownDiv" data-color-mode="light" style={{padding:15}}>
          <MDEditor.Markdown
            style={{ padding: 10 }}
            source={contents} // 마크다운 뷰어에는 작성한 내용을 보여줍니다.
          />
        </div>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 3,
            padding: "0.3rem 1.5rem",
            backgroundColor: "#1B730E", //"#1B730E"->이게 그릭 로고 글자색상!!
            color: "white",
            "&:hover": {
              backgroundColor: "#1B730E",
            },
            
          }}
        >
          작성하기
        </Button>
      </Container>
    </React.Fragment>
  );
}