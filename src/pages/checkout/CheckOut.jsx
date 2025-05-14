import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      items: cartItems,
      totalPrice,
    };

    console.log("Order placed:", orderDetails);

    setOpenSnackbar(true);

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ my: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Checkout
          </Typography>

          <form onSubmit={handleSubmit}>
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

      {/* Snackbar Alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Your order has been placed successfully.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Checkout;
