import {styled} from "@mui/system";
import {NavLink} from "react-router-dom";
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
export default  StyledLink;