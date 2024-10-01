// ToppingModal.js
import { Box, Modal, Typography, Button } from "@mui/material";

const ToppingModal = ({ open, onClose, order }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {order.name}
        </Typography>
        <Typography variant="body1">
          <strong>Toppings:</strong> {order.topping.join(", ")}
        </Typography>
        <Typography variant="body1">
          <strong>Quantity:</strong> {order.quantity}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ToppingModal;
