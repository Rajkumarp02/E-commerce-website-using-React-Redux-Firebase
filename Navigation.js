import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
//import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { ShoppingCart } from '@mui/icons-material';
import { Home } from '@mui/icons-material';


const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: "white"
});



const Dem = () => {
  const { cart } = useSelector((item) => item.user)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }



  return (
    <>


      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>


            <Typography style={{
              fontSize: 20,
              background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}> SaranKart </Typography>
            <Box sx={{ display: 'flex', alignItems: 'right', gap: '70px' }}>
              <StyledNavLink to="/"><Home color="dark" /></StyledNavLink>
              <StyledNavLink to="/Contact"><i class="bi bi-person-lines-fill"></i></StyledNavLink>
              <StyledNavLink to="/Login"><i class="bi bi-person-circle"></i></StyledNavLink>
              <StyledNavLink to='/CartList'>
                <ShoppingCart color='action' id='cartIcon' />
                <p className="text-end">{getTotalQuantity() || 0}</p>
              </StyledNavLink >
            </Box>

          </Toolbar>
        </Container>
      </AppBar>








    </>
  )

}
export default Dem;