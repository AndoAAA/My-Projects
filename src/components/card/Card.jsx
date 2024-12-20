import {
  AppBar,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
  Slide,
  Box,
  Grid2,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/slices/cardSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Card = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.card);
  const totalPrice = useSelector((state) => state.card.totalPrice);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {card.length > 0 ? (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby="cart-dialog-title"
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "black",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                id="cart-dialog-title"
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
              >
                Shopping bag
              </Typography>
            </Toolbar>
          </AppBar>
          <List sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {card.map((item, index) => (
              <Grid2
                container
                key={index}
                spacing={2}
                alignItems="center"
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Grid2 item xs={3}>
                  <Box
                    component="img"
                    src={item.img || "https://via.placeholder.com/150"}
                    alt={item.name || "Product image"}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: 100,
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  />
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >{`Quantity: ${item.amount}`}</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    Size: {item.size}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ display: "flex", gap: 1 }}
                  >
                    Color:{" "}
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: item.color,
                        border: "1px solid #ddd",
                        cursor: "pointer",
                      }}
                    ></Box>
                  </Typography>
                </Grid2>
                <Grid2 item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >{`$${item.price.toFixed(2)}`}</Typography>
                </Grid2>
                <Grid2 item xs={1}>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => dispatch(removeProduct(item))}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Grid2>
              </Grid2>
            ))}

            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6">Total Price</Typography>
              <Typography variant="h6">{`$${totalPrice.toFixed(
                2
              )}`}</Typography>
            </Box>
          </List>
        </Dialog>
      ) : (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby="cart-dialog-title"
        >
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              Your bag is empty
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{ mt: 2,  backgroundColor: "black", }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Dialog>
      )}
    </>
  );
};

Card.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Card.defaultProps = {
  open: false,
  setOpen: () => {},
};

export default Card;
