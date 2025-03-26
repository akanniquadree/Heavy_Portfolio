import React from "react";
import "./slide.css";
import { Box, Button, Paper, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

export default function Slide() {
  return (
    <div className="slideContainer">
      <div className="slideWrapper">
        <div className="slideLeft">
          <Paper
            elevation={0}
            sx={{
              padding:{ xs:'0', sm: '0',md:"30px"},
              backgroundColor: "inherit",
              borderRadius: "5px",
            }}
          >
            <Stack
              direction={"column"}
              spacing={3}
              sx={{ color: "white", zIndex: 2 }}
            >
              <h6 className="slideIntro">Welcome</h6>
              <h6 className="slideNam">
                Hi, <span>I'm </span>HABEEB AKANNI
              </h6>
              <h3 className="slideName">A Data Scientist</h3>
              <span className="slideLoc" style={{ textAlign: "left" }}>
                Based in London,{" "}
                <span >United Kingdom</span>
              </span>
              <span
                className="slideLoc"
                style={{ textAlign: "justify", fontSize: "15px" }}
              >
                Detail-oriented and results-driven Data Analyst and Scientist
                with a strong foundation in statistical analysis, data
                visualization, and reporting. Skilled at performing data
                cleaning, creating insightful visualizations, and providing
                actionable recommendations to improve decision making and drive
                business outcomes
              </span>
            </Stack>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              padding:{ xs:'0', sm: '0',md:"30px"},
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: "inherit",
            }}
          >
            <span>
              Download my <b >curriculum vitae:</b>
            </span>

            <Button
              variant="outlined"
              sx={{ color: "inherit", borderColor: "white", width: "200px" }}
            >
              <a
                href="/Images/DataScientist_CV.pdf"
                style={{}}
                download="Akanni_Habeeb_CV.pdf"
              >
                Download CV
              </a>
            </Button>
          </Paper>
        </div>
        <div className="slideRight">
          <Paper
            className="sidePap"
            elevation={2}
            sx={{
              height: "calc(100% - 55px)",
              overflow: "hidden",
              padding: {xs:0,sm:'0',md:"10px"},
              borderRadius: "5px",
            }}
          >
            <img src="/Images/intro-bg.jpg" alt="" />
          </Paper>
        </div>
      </div>
    </div>
  );
}
