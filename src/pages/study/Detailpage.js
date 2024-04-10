import React, { useState, useEffect } from 'react';
import {Box,Button,Stack,TextField} from '@mui/material';
import styled from 'styled-components';
import DetailPageEx from './DetailpageEx';
import contents from './Contents';

const CustomButton = styled(Button)`
  background-color: #009630;
  color: white;
  &:hover {
    color: #FFD700;
    background-color: #009630;
  }
`;

const DetailPage = () => {

  // 현재 랜덤 개체의 인덱스 상태
  const [randomIndex, setRandomIndex] = useState(0);
  // 현재 선택된 무작위 개체 상태
  const [randomObject, setRandomObject] = useState(contents[0]);

  // 페이지 로드 시랑 새로 고침할 때마다 새로운 무작위 개체 표시
  useEffect(() => {
    const newIndex = Math.floor(Math.random() * contents.length);
    setRandomIndex(newIndex);
  }, []);

  // 무작위 개체 선택 및 상태 업데이트
  useEffect(() => {
    setRandomObject(contents[randomIndex]);
  }, [randomIndex]);


  //하트 버튼 누를 때마다 좋아요 수 올라가는 기능
  const [count,setCount]=useState(0);

  const [showComment, setShowComment] = useState(false); // 댓글 창을 보여줄지 여부를 저장하는 상태

  // 버튼 클릭 시 댓글 창을 보이거나 숨기는 함수
  const handleButtonClick = () => {
    setShowComment(prevState => !prevState); // 이전 상태의 반대값으로 변경
  };

  return (
    <>
    <Box
      sx={{
        position: 'relative',
        width: 900,
        height: 700,
        margin: 2,
        border: 1,
        borderColor: '#eeeded',
        padding: 3,
        borderRadius: 5,
        backgroundColor: '#fffdfd',
      }}>

      {/* <DetailPageEx title={"소프트웨어 공학_5주차_손 필기본"}
                   date={"2024-03-28"}
                   tag={"#소공 #소공5주차 #좋아요"}
                   content={"좋아요 10 넘을 시 공개하겠음"}>
      </DetailPageEx> */}
      
      <DetailPageEx title={randomObject.title}
                   date={randomObject.date}
                   tag={randomObject.tag}
                   content={randomObject.content}
                   img={randomObject.img}>
      </DetailPageEx>
      {/* 글 작성자일 경우에만 권한 허용-로그인 기능 구현 시 수정 */}
      <Stack
        sx={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          gap: 2,
          margin: 2,
          flexDirection: 'row', // 버튼들을 가로로 정렬
          alignItems: 'center', // 버튼들을 세로 중앙 정렬
        }}
      >
        <CustomButton>수정하기</CustomButton>
        <CustomButton>삭제하기</CustomButton>
      </Stack>
    </Box>
    <Box 
      sx={{
      margin: 1,
      padding:1,
      fontSize: '1.2rem',
      }}>
      {/*좋아요 버튼 부분 : 누를 때마다 1씩 증가함*/ }
      <Button
        sx={{
          border:'none'
        }}
        onClick={()=>{
          setCount(count+1);
        }}>
        <img src={process.env.PUBLIC_URL + "/heart.png"} width="40rem" height="40rem" />
      </Button>
      Like &nbsp;
      {count}
      &nbsp;&nbsp;&nbsp;
      <Button 
        sx={{
          border:'none',
          bgcolor: 'transparent', 
          color: 'black',
          boxShadow: 'none', // 그림자 제거
          '&:hover': {backgroundColor: 'transparent'}
        }}
        onClick={handleButtonClick} variant="contained" >
        <img src={process.env.PUBLIC_URL + "/comment.png"} width="40rem" height="40rem" />
        &nbsp;Comment
      </Button>
      
      {/* 댓글 창 */}
      {showComment && (
        <TextField
        
          id="comment"
          label="Enter the text"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
      )}
    </Box>
    </>
  );
};

export default DetailPage;
