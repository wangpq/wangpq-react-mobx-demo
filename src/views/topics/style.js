import styled from 'styled-components';

export const Wrapper = styled.div`;
  padding:8px;
`;

export const HeadTitle = styled.h1`;
  margin: 12px 0;
  font-size:16px
`;



export const SearchWraper = styled.div`;
    display:flex;
    flex-direction :row;
    .item:first-child{
        flex :1;
        display: inline-block; 
        width: 180px; 
        margin-right: 8px;
    }
`;

export const SearchTips = styled.div`;
  margin-top:4px;
  font-variant:normal;
  margin-bottom:12px;
  h2{
    font-size:14px;
    color:#0a0;
  }
  .clear{
    cursor:pointer;
    font-size:12px;
    background-color:#c00;
    color:#fff;
    padding:2px 4px;
    border-radius:4px;
  }
`;

export const SearchTopics = styled.ul`;
  li{
    list-style: none; 
    background-color:#fff; 
    border-radius:6px;
    margin-bottom:12px;
    border:1px solid #eee;
    padding:12px;
    box-shadow:0 0 8px 2px rgba(155,155,155,0.1) inset;
    overflow:hidden;
  }
`;

