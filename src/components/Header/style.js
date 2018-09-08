import styled from 'styled-components';

export const HeaderWrap = styled.header`;
  position :fixed;
  left:0;
  right:0;
  top:0;
  z-index:1000;
  ul{
    background-color : #333;
    display: block;
    li{
      display: inline-block;
      padding : 16px 18px;
      line-height: 1;
      a{
        text-decoration: none;
        color:#fff;
        font-size:16px;
      }
    }
  }
`;

