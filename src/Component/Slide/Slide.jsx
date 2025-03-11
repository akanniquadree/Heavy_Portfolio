import React from "react";
import "./slide.css";
import { Box, Button, Paper, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

export default function Slide() {
  return (
    <div className="slideContainer">
      <div className="slideWrapper">
        <div className="slideLeft">
          <Paper elevation={2} sx={{ padding: "30px", borderRadius: "5px" }}>
            <Stack
              direction={"column"}
              spacing={3}
              sx={{ color: "white", zIndex: 2 }}
            >
              <h6 className="slideIntro" style={{color:'#ff014f'}}>Welcome</h6>
              <h6 className="slideNam">Hi, <span style={{color:'#ff014f'}}>I'm </span>HABEEB TEMITOPE AKANNI</h6>
              <h3 className="slideName">
                <Typewriter
                  words={[" a Data Scientist", " a Data Analyst"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
              <span className="slideLoc" style={{ textAlign: "left" }}>
                Based in London, <span style={{color:'#ff014f'}}>United Kingdom</span>
              </span>
              <span
                className="slideLoc"
                style={{ textAlign: "justify", fontSize: "15px" }}
              >
                Detail-oriented and results-driven Data Analyst and Scientist with a strong
                foundation in statistical analysis, data visualization, and
                reporting. Skilled at performing data cleaning, creating
                insightful visualizations, and providing actionable
                recommendations to improve decision making and drive business
                outcomes
              </span>
            </Stack>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              padding: "30px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span>Download my <b style={{color:'#ff014f'}}>curriculum vitae:</b></span>

            <Button
              variant="outlined"
              sx={{ color: "inherit", borderColor: "#ff014f", width: "200px" }}
            >
              Download CV
            </Button>
          </Paper>
        </div>
        <div className="slideRight">
          <Paper className="sidePap" elevation={2} sx={{height:'calc(100% - 55px)',overflow:'hidden', padding: "10px", borderRadius: "5px" }}>
            <img
              src="/Images/intro-bg.jpg"
              alt=""
              />
          </Paper>
        </div>
      </div>
    </div>
  );
}
