import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const DetailPageEx = ({title,date,content,tag,img}) => {
    // useParams 훅을 사용하여 URL 파라미터에서 postId를 가져옵니다. DetailPageEx로 이전

    const { postId } = useParams();

    return(
    <>
       <h1><Title>{title}</Title></h1>
       <p><Date>{date}</Date></p>
       
       <p><PostId>Posted By &nbsp; Greek{postId}</PostId></p>
      
       <br />
       {/* Content : 글, 그림 등등등*/}
       <p><Content>{content}</Content></p>
       <img src={process.env.PUBLIC_URL +"/example.png"} width="200px" height="200px"/>
       <p><Tag>{tag}</Tag></p>
      
      </> 
    )

    
}

export default DetailPageEx;

const Title = styled.h1`
  font-size: 2rem;
  text:bold;
  text-align:center;
`;

const Date = styled.p`
  font-size: 1rem;
  text-align:right;
`;

const PostId = styled.p`
  font-size: 1.2rem;
  text:bold
`;

const Tag = styled.p`
  font-size: 1rem;
  text:bold;
  color: blue;
  margin-top:12rem;
`;

const Content = styled.p`
  font-size: 1rem;
  text:bold
`;
