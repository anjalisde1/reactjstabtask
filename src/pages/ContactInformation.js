import React, { useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Contact = ({ updateProgress }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography>Contact</Typography>
      <TextField
        label="Map Location"
        placeholder="Enter map location"
        variant="outlined"
        fullWidth
        sx={{ marginY: 2 }}
      />
      <TextField
        label="Phone"
        placeholder="+880 Phone number..."
        variant="outlined"
        fullWidth
        sx={{ marginY: 2 }}
      />
      <TextField
        label="Email"
        placeholder="Email address"
        variant="outlined"
        fullWidth
        sx={{ marginY: 2 }}
      />
    </Box>
  );
};

export default Contact;
