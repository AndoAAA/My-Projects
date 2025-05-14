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
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            {/* Cart Items */}
            <Box>
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 3,
                    transition: "0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      backgroundColor: "#f5f5f5",
                    },
                    gap: 2,
                  }}
                >
                  {/* Product Info */}
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    flex={2}
                    sx={{ flexWrap: "wrap" }}
                  >
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
                    <Box>
                      <Typography fontWeight="bold" fontSize="1.1rem">
                        {item.title}
                      </Typography>

                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography fontSize="0.9rem" color="text.secondary">
                          Color:
                        </Typography>
                        {item.selectedColor && (
                          <Box
                            sx={{
                              backgroundColor: item.selectedColor,
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              border: "1px solid gray",
                            }}
                          />
                        )}
                      </Box>

                      <Typography fontSize="0.9rem" color="text.secondary">
                        Size: <b>{item.selectedSize}</b>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Quantity & Controls */}
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <IconButton
                      onClick={() =>
                        item.quantity > 1 && dispatch(minusItem(item))
                      }
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

                  {/* Price Info */}
                  <Box textAlign="center">
                    <Typography fontSize="0.95rem">
                      Unit: ${item.price.toFixed(2)}
                    </Typography>
                    <Typography fontWeight="bold" fontSize="1rem" color="teal">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>

                  {/* Remove Button */}
                  <IconButton
                    onClick={() => {
                      const confirm = window.confirm(
                        `Remove "${item.title}" from cart?`
                      );
                      if (confirm) {
                        dispatch(removeFromCart(item));
                      }
                    }}
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
                onClick={() => navigate("/checkout")}
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
