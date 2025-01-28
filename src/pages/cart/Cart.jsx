import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Divider,
  Card,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { minusItem, plusItem, removeFromCart } from "../../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <Container sx={{ py: 4 }}>
        {/* Header */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={4}
          sx={{ justifyContent: "center" }}
        >
          <ShoppingBagIcon fontSize="large" sx={{ color: "teal" }} />
          <Typography variant="h2" fontSize="1.8rem" fontWeight="bold">
            Shopping Cart
          </Typography>
        </Box>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <Box textAlign="center" mt={5}>
            <Typography variant="h6" color="textSecondary" mb={2}>
              🛒 Your cart is empty.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                backgroundColor: "teal",
                "&:hover": {
                  backgroundColor: "darkslategray",
                },
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            {/* Cart Items */}
            <Box>
              {cartItems.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 3,
                    "&:hover": {
                      boxShadow: 4,
                      backgroundColor: "#f9f9f9",
                    },
                    gap: 2,
                  }}
                >
                  {/* Product Info */}
                  <Box display="flex" alignItems="center" gap={2} flex={1}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <Typography fontWeight="bold">{item.title}</Typography>
                  </Box>

                  {/* Price */}
                  <Box>
                    <Typography fontSize="1rem">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>

                  {/* Quantity Controls */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      onClick={() => dispatch(minusItem(item))}
                      size="small"
                      sx={{
                        backgroundColor: "teal",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "darkslategray",
                        },
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography fontWeight="bold">{item.quantity}</Typography>
                    <IconButton
                      onClick={() => dispatch(plusItem(item))}
                      size="small"
                      sx={{
                        backgroundColor: "teal",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "darkslategray",
                        },
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  {/* Total */}
                  <Box>
                    <Typography fontSize="1rem">
                      ${parseFloat(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>

                  {/* Remove Button */}
                  <IconButton
                    onClick={() => dispatch(removeFromCart(item))}
                    aria-label={`Remove ${item.title}`}
                    sx={{
                      color: "red",
                      "&:hover": {
                        color: "darkred",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Card>
              ))}
            </Box>

            {/* Order Summary */}
            <Box
              mt={4}
              p={3}
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "right",
              }}
            >
              <Typography
                variant="h4"
                fontSize="1.5rem"
                fontWeight="bold"
                mb={2}
              >
                Order Summary
              </Typography>
              <Box mb={1}>
                <Typography display="inline">Price:</Typography>
                <Typography display="inline" ml={2}>
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography display="inline">Delivery:</Typography>
                <Typography display="inline" ml={2}>
                  Free
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box mb={3}>
                <Typography display="inline" fontWeight="bold">
                  Total:
                </Typography>
                <Typography
                  display="inline"
                  fontWeight="bold"
                  ml={2}
                  color="teal"
                  fontSize="1.2rem"
                >
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  px: 4,
                  background: "linear-gradient(to right, teal, darkslategray)",
                  color: "white",
                  "&:hover": {
                    background: "darkslategray",
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
