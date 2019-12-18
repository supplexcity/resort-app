import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
/*const orange = "#f15025";
const SimpleButton = styled.button`
    color:${orange},
    font-size: 3rem,
    background: green
`;*/

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
