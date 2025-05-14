import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ my: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Checkout
          </Typography>

          <form>
            <TextField label="Full Name" fullWidth required margin="normal" />
            <TextField
              label="Email"
              fullWidth
              required
              type="email"
              margin="normal"
            />
            <TextField
              label="Phone Number"
              fullWidth
              required
              type="tel"
              margin="normal"
            />
            <TextField
              label="Shipping Address"
              fullWidth
              required
              multiline
              rows={3}
              margin="normal"
            />

            <Box mt={3} display="flex" justifyContent="space-between">
              <Typography fontWeight="bold">
                Total: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(to right, teal, darkslategray)",
                  color: "white",
                  "&:hover": {
                    background: "darkslategray",
                  },
                }}
              >
                Place Order
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;
