import React, { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";

const Completion = ({ updateProgress }) => {
  useEffect(() => {
    updateProgress(4); // 100% progress
  }, [updateProgress]);

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        MyJob Setup Progress 100% Completed
      </Typography>

      <Typography variant="h6" gutterBottom>
        Congratulations, Your profile is 100% complete!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Donec hendrerit, ante mattis pellentesque eleifend, tortor urna
        malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc mauris
        arcu, mattis sed sem vitae.
      </Typography>

      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: 2 }}
          onClick={() => (window.location.href = "/dashboard")}
        >
          View Dashboard
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => (window.location.href = "/post-job")}
        >
          Post Job
        </Button>
      </Box>
    </Box>
  );
};

export default Completion;
