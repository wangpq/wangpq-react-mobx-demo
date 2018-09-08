import styled from 'styled-components';

export const DetailWrap = styled.div`;
  .header{
    height:48px;
    background-color: #333;
    color:#fff;
    display: flex;
    align-items: center;
    padding-left:12px;

    position :fixed;
    left:0;
    right:0;
    top:0;
    z-index:1000;    
  }
  .body{
    margin:68px 12px 12px;
    padding:12px;
    background-color :#fff;
    border-radius:8px;
    h2{
      color:#0a0;
      margin-bottom:10px;
    }
    .info{
      font-size:14px;
      color:#888;
      marginBottom:12px;
    }
    .content{
      overflow:hidden
    }
  }
`;

