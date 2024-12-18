import React, { useEffect } from "react";
import { TextField, Button, Typography, Box, MenuItem } from "@mui/material";

const FoundingInfo = ({ updateProgress }) => {
  return (
    <Box sx={{ padding: 4 }}>
      
     
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, marginY: 2 }}>
      {/* Organization Type */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Organization Type
        </Typography>
        <TextField
          select
          label="Select..."
          variant="outlined"
          fullWidth
        >
          <MenuItem value="Private">Private</MenuItem>
          <MenuItem value="Public">Public</MenuItem>
        </TextField>
      </Box>

      {/* Industry Types */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Industry Types
        </Typography>
        <TextField
          select
          label="Select..."
          variant="outlined"
          fullWidth
        >
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Healthcare">Healthcare</MenuItem>
        </TextField>
      </Box>

      {/* Team Size */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Team Size
        </Typography>
        <TextField
          select
          label="Select..."
          variant="outlined"
          fullWidth
        >
          <MenuItem value="1-10">1-10</MenuItem>
          <MenuItem value="11-50">11-50</MenuItem>
        </TextField>
      </Box>
    </Box>
    <Box sx={{ display: "flex", gap: 2, marginY: 2 }}>
  {/* Date Field */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
    Year of Establishment
    </Typography>
    <TextField
      type="date"
      variant="outlined"
      fullWidth
    />
  </Box>

  {/* Company Website */}
  <Box sx={{ flex: 1 }}>
    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      Company Website
    </Typography>
    <TextField
      label="Website Url..."
      variant="outlined"
      fullWidth
    />
  </Box>

  {/* Empty Placeholder */}
  <Box sx={{ flex: 1 }}>
    {/* Intentionally left empty */}
  </Box>
  </Box>
      <TextField
        label="Company Vision"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ marginY: 2 }}
      />
    </Box>
  );
};

export default FoundingInfo;
