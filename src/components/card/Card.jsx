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
  Grid,
  Tooltip,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar position="relative" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            Shopping Bag
          </Typography>
        </Toolbar>
      </AppBar>

      {card.length > 0 ? (
        <List sx={{ p: isMobile ? 1 : 3, gap: isMobile ? 1 : 3, display: "flex", flexDirection: "column" }}>
          {card.map((item, index) => (
            <Grid
              container
              spacing={isMobile ? 1 : 2}
              alignItems="center"
              justifyContent="space-between"
              key={index}
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: isMobile ? 1 : 2,
                boxShadow: 1,
              }}
            >
              <Grid item xs={3}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    maxHeight: isMobile ? 60 : 100,
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontSize={isMobile ? "0.9rem" : "1rem"}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {item.amount}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Size: {item.size}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  Color:
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      border: "1px solid #ccc",
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" fontWeight="bold" fontSize={isMobile ? "0.9rem" : "1rem"}>
                  ${item.price.toFixed(2)}
                </Typography>
                <Tooltip title="Delete">
                  <IconButton size="small" onClick={() => dispatch(removeProduct(item))}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          ))}
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f5f5f5",
              p: 2,
              mt: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
          </Box>
        </List>
      ) : (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h6">Your bag is empty</Typography>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 2, backgroundColor: "black" }}
          >
            Continue Shopping
          </Button>
        </Box>
      )}
    </Dialog>
  );
};

Card.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Card;
