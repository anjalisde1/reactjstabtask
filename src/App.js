import React, { useState } from "react";
import { BsBriefcase } from "react-icons/bs";
import {
  Box,
  Button,
  Typography,
  Tabs,
  Tab,
  LinearProgress,
} from "@mui/material";
import Completion from "./pages/Completion";
import FoundingInfo from "./pages/FoundingInfo";
import SocialMediaProfile from "./pages/SocialMediaProfile";
import Contact from "./pages/ContactInformation";
import CompanyInfo from "./pages/CompanyInfo";
import { CgProfile } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { FaAt } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Company Info", icon: <LuUserRound /> },
    { label: "Founding Info", icon: <CgProfile /> },
    { label: "Social Media profile", icon: <TbWorld /> },
    { label: "Contact ", icon: <FaAt /> },
    { label: "Completion", icon: null },
  ];
  const progress = (activeStep / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <><div style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"10px"}}>
      <div style={{display:"flex",alignItems:"center"}}>
      <Typography variant="h4"  sx={{ marginBottom: 2,marginRight:1 }}>
       
      <BsBriefcase />
      </Typography>
      
      <Typography variant="h6" fontWeight={600} sx={{ marginBottom: 2 }}>
       
       MyJob  
      </Typography>
      </div>
       
      <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Typography variant="h6"   fontSize={16} sx={{ marginBottom: 1 }}>
      Setup Progress 
      </Typography>
      <Typography variant="h6"  fontSize={16} sx={{ marginBottom: 1 }}>
      {Math.round(progress) !== 0 &&
    `${Math.round(progress)}% Completed`
}
      </Typography>
      </div>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ marginBottom: 4, height: 8, borderRadius: 5,width:300  }}
      />
      </div>
      </div>
  
    <Box sx={{ padding: 4, maxWidth: 950, margin: "0 auto" }}>
      {/* Progress Bar */}
      

      {/* Tabs Navigation */}
      <Tabs
  value={activeStep}
  onChange={(e, newValue) => setActiveStep(newValue)}
  variant="fullWidth"
  sx={{ marginBottom: 4 }}
>
{steps.slice(0, steps.length - 1).map((step, index)=> (
    <Tab
      key={index}
      label={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {step.icon}
          {step.label}
        </Box>
      }
      sx={{
        textTransform: "none",
        fontWeight: activeStep === index ? "bold" : "normal",
      }}
      
    />
  ))}
</Tabs>

      {/* Dynamic Content */}
      <Box>
        {activeStep === 0 && <CompanyInfo />}
        {activeStep === 1 && <FoundingInfo />}
        {activeStep === 2 && <SocialMediaProfile />}
        {activeStep === 3 && <Contact />}
        {activeStep === 4 && (
          <Completion updateProgress={() => setActiveStep(4)} />
        )}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{ display: "flex", marginTop: 4 }}
      >
        {activeStep !== 4 && (
          <>
            <Button
              variant="outlined"
              onClick={handlePrevious}
              disabled={activeStep === 0}
              sx={{marginRight:3}}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 2 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </Box>
    </Box>
    </>
  );
};


export default App;
