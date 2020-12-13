import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
export const Container = styled.div``;


export const BackButton = styled(Link)`
  /*   border: 0;
  outline: 0;
  background: transparent; */
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const useStyles = makeStyles((theme) => ({
 
  cardPrincipal: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column'
  }
 
}));

export default useStyles;
