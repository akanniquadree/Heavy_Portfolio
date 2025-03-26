import React, { useState } from "react";
import "./work.css";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { GitHub, Language } from "@mui/icons-material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(50, 50, 50, 0.6)",
  boxShadow: 24,
  p: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function Work() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (index) => {
    setOpen(true);
    setCurrentIndex(index)
  };
  const handleNext = () =>[
    setCurrentIndex((prev)=>(prev + 1) % workData.length)
  ]
  const handlePrev = () =>[
    setCurrentIndex((prev)=>(prev - 1 + workData.length) % workData.length)
  ]

  return (
    <div className="workContainer">
      <div className="workWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Portfolio</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">My Works</h4>
            <span></span>
          </div>
        </div>
        <div className="workStack">
          {workData.map((item, index) => (
            <Paper sx={{backgroundColor:'inherit'}}
              onClick={() => handleOpen(index)}
              className="workLists"
              elevation={2}
              key={index}
            >
              <div className="workListImage">
              <img src="/Images/intro-bg.jpg" alt="" />
              </div>
              <h3>{item.name}</h3>
            </Paper>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Close Button */}
          <IconButton
            htmlColor="white"
            size="large"
            onClick={handleClose}
            style={{ zIndex: 3, position: "absolute", top: 10,color:'white', right: 10 }}
          >
            <CloseIcon htmlColor="white" />
          </IconButton>
          <div
            style={{
              backgroundColor: "black",
              width: "80%",
              height: "90%",
              padding: "20px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              {workData[currentIndex].name}
            </h3>
            <div className="workStack">
              <div className="modalList">
                <img src="/Images/intro-bg.jpg" alt="" />
              </div>
              <div className="modalList">
                <div className="modalitem">
                  <h5 className="modalitemH">Project Info:</h5>
                  <p>
                  {workData[currentIndex].desc}
                  </p>
                </div>
                <div className="modalitem">
                  <h5 className="modalitemH">Project Details:</h5>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Client:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p> {workData[currentIndex].client}</p>
                    </Box>
                  </Stack>
                  <Divider sx={{backgroundColor:'white', marginBottom: "7px" }} />
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Industry:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p> {workData[currentIndex].org}</p>
                    </Box>
                  </Stack>
                  <Divider sx={{backgroundColor:'white', marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Technologies:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p> {workData[currentIndex].tech}</p>
                    </Box>
                  </Stack>
                  <Divider sx={{backgroundColor:'white', marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Website type:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>Full Stack</p>
                    </Box>
                  </Stack>
                  <Divider sx={{backgroundColor:'white', marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Date:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p> {workData[currentIndex].date}</p>
                    </Box>
                  </Stack>
                  <Divider sx={{backgroundColor:'white', marginBottom: "7px" }} />

                 

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "7px", alignItems: "center" }}
                  >
                    <GitHub />
                    <a href= {workData[currentIndex].code}>
                    <Button sx={{ color: "#ff014f", height:'50px' }}>View Source code</Button></a>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconButton
            onClick={handlePrev}
            >
              <ArrowBackIosNewIcon htmlColor="white" />
            </IconButton>
            <IconButton
            onClick={handleNext}
            >
              <ArrowForwardIosIcon htmlColor="white" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

const workData = [
  {
    name: "AI for Marketing Campaign Optimization",
    code: "https://github.com/akannih/A.I.Sales_Agent",
    client: "Personal Project",
    org: "Marketing Firm",
    tech: "Python",
    date: "2024.",
    type: "Deployed the model on AWS for real-time predictions.",
    desc: "Used XGBoost and Logistic Regression to predict customer engagement with marketing campaigns, resulting in an 88% accuracy rate.",
  },
  {
    name: "Predictive Maintenance Model for Manufacturing",
    code: "https://github.com/akannih/Financial_Analysis.git",
    client: "Personal Project",
    org: "Manufacturing Company",
    tech: "Python ",
    date: "2024.",
    type: "Machine Learning",
    desc: "Built a predictive maintenance model using Random Forest and XGBoost, achieving 95% accuracy in predicting equipment failure. Utilized data preprocessing techniques and feature engineering to ensure data quality.",
  },
  {
    name: "Cancer Malignancy Prediction",
    code: "https://github.com/akannih/Machine_Learning_Projects/blob/main/Cancer%20prediction.ipynb",
    client: "Personal Project",
    org: "Machine Learning",
    tech: "Python",
    date: "2024.",
    type: "Improved the model’s performance to 98% by using XGBoost for model optimization",
    desc: "Built a Decision Tree Classifier model that predicted benign vs malignant cancers with 90% accuracy",
  },
  {
    name: "Stock Price Prediction Using XGBoost",
    code: "https://github.com/akannih/Machine_Learning_Projects/blob/main/Stock_Price_Prediction.ipynb",
    client: "Personal Project",
    org: "Machine Learning",
    tech: "Python",
    date: "2024",
    type: "Machine Learning",
    desc: "Developed a stock price prediction model using XGBoost",
  },
  {
    img:'',
    name: "AI for Super Mario Game",
    code: "https://github.com/akannih/Super_Mario_Project.git",
    client: "Personal Project",
    org: "Artificial Intelligence",
    tech: "Python",
    date: "2024.",
    type: "Machine Learning",
    desc: "Implemented a Reinforcement Learning model to enable an AI to play Super Mario using Keras and the OpenAI Gym library.",
  },
];
