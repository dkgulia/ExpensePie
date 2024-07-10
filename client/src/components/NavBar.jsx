import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/filldata'>FillData</Tabs>
        <Tabs to='/barchart'>BarChart</Tabs>
        <Tabs to='/piechart'>PieChart</Tabs>
        <Tabs to='/linechart'>LineChart</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
