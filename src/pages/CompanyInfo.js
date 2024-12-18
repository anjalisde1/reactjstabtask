import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, IconButton } from "@mui/material";
import { useDropzone } from "react-dropzone";
import ClearIcon from "@mui/icons-material/Clear";

const CompanyInfo = ({ updateProgress }) => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleFileChange = (file, setFile) => {
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  const DropzoneBox = ({ title, description, setFile, filePreview, width, height,border,backcolor }) => {
    const { getRootProps, getInputProps } = useDropzone({
      accept: { "image/*": [] },
      maxSize: 5 * 1024 * 1024,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
          handleFileChange(acceptedFiles[0], setFile);
        }
      },
    });

    return (
      <Paper
        variant="outlined"
        sx={{
          backgroundColor:backcolor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: border,
          width,
          height,
          textAlign: "center",
          padding: 2,
          position: "relative",
          cursor: "pointer",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {filePreview ? (
          <>
            <img
              src={filePreview}
              alt="preview"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                backgroundColor: "white",
              }}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <>
            <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </>
        )}
      </Paper>
    );
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
      Logo & Banner Image
      </Typography>
    <div style={{display:"flex"}}>
      {/* Logo Upload */}
      <Box sx={{ marginBottom: 3,marginRight:2 }}>
        <Typography variant="subtitle1">Upload document</Typography>
        <DropzoneBox
          title="Browse photo or drop here"
          description="A photo larger than 400 pixels works best. Max photo size 5 MB."
          setFile={setLogo}
          filePreview={logo}
          width={250}
          height={200}
          border= "2px dashed #aaa"
          backcolor="#f1f1f1"
        />
      </Box>

      {/* Banner Upload */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="subtitle1">Banner Image</Typography>
        <DropzoneBox
          title="Browse photo or drop here"
          description="Banner images optimal dimension 1520x400. Max photo size 5 MB."
          setFile={setBanner}
          filePreview={banner}
          style={{border: '1px solid'}}
          width="116%"
          height={200}
          border=""
          backcolor="#f1f1f1"
        />
      </Box>
      </div>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      Company name
      </Typography>
      {/* Company Name */}
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
      />

      {/* About Us */}
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      About Us
      </Typography>
      <TextField
        label="About Us"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
    </Box>
  );
};

export default CompanyInfo;
