import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  IconButton,
} from "@mui/material";
import { AddCircle, Close } from "@mui/icons-material";

const platforms = [
  { id: "facebook", name: "Facebook" },
  { id: "twitter", name: "Twitter" },
  { id: "instagram", name: "Instagram" },
  { id: "youtube", name: "YouTube" },
];

const SocialMediaProfile = () => {
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "Facebook", url: "" },
  ]);

  const handleLinkChange = (id, field, value) => {
    setSocialLinks((links) =>
      links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      )
    );
  };

  const addNewSocialLink = () => {
    setSocialLinks((links) => [
      ...links,
      { id: links.length + 1, platform: "Facebook", url: "" },
    ]);
  };

  const removeSocialLink = (id) => {
    setSocialLinks((links) => links.filter((link) => link.id !== id));
  };

  return (
    <Box sx={{ padding: 4 }}>
     

      {socialLinks.map((link, index) => (
        <Box>
          <Typography variant="subtitle1" sx={{ width: "120px" }}>
            Social Link {index + 1}
          </Typography>
       
        <Box
          key={link.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          {/* Social Link Title */}
          

          {/* Dropdown for Platform Selection */}
          <TextField
            select
           
            value={link.platform}
            onChange={(e) => handleLinkChange(link.id, "platform", e.target.value)}
            sx={{ flex: 1 }}
            variant="outlined"
          >
            {platforms.map((platform) => (
              <MenuItem key={platform.id} value={platform.name}>
                {platform.name}
              </MenuItem>
            ))}
          </TextField>

          {/* URL Input Field */}
          <TextField
            placeholder="Profile link/url..."
            value={link.url}
            onChange={(e) => handleLinkChange(link.id, "url", e.target.value)}
            variant="outlined"
            sx={{ flex: 2 }}
          />

          {/* Delete Icon */}
          <button style={{width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "5px"}} onClick={() => removeSocialLink(link.id)} color="error">
            <Close />
          </button>
          </Box>
        </Box>
      ))}

      {/* Add New Social Link Button */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="outlined"
          startIcon={<AddCircle />}
          onClick={addNewSocialLink}
        >
          Add New Social Link
        </Button>
      </Box>
    </Box>
  );
};

export default SocialMediaProfile;
