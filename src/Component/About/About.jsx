import React from "react";
import "./about.css";
import { Box, Button, Divider, Stack } from "@mui/material";

const desc = [
  {
    question: "Name",
    answer: "Akanni H.T",
  },
  {
    question: "Occupation",
    answer: "Data Analyst",
  },
  {
    question: "Phone",
    answer: "07440547920 ",
  },
  {
    question: "Email",
    answer: "Akannih@gmail.com",
  },
  {
    question: "Location",
    answer: "London, United Kingdom",
  },
];

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">About Me</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">Know More About Me</h4>
            <span></span>
          </div>
        </div>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={4}
          sx={{ marginTop: "30px" }}
        >
          <div className="aboutDetail">
            <img src="/Images/intro-bg.jpg" alt="" />
          </div>
          <div className="aboutDetail">
            <div className="aboutDetailWrap">
              <h3>
                <span style={{ color: "#ff014f" }}>I'm </span>HABEEB TEMITOPE
                AKANNI
              </h3>
              <p>
                Detail-oriented and results-driven Data Scientist and Analyst
                with a strong foundation in statistical analysis and machine
                learning. Holds a master’s in data science and proficient in
                leveraging Python, SQL, Machine Learning, Deep Learning, and
                data visualization tools such as Power BI and Tableau to derive
                actionable insights. Experienced in building predictive models,
                performing data wrangling, and automating workflows to improve
                decision-making processes
              </p>
              <Divider />
              {desc.map((item, index) => (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginTop: "2px", alignItems: "start" }}
                  key={index}
                >
                  <Box sx={{ width: "100px", fontWeight: "bold" }}>
                    {" "}
                    {/* Fixed width for alignment */}
                    <h5>{item.question}</h5>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    {" "}
                    {/* Takes the remaining space */}
                    <p>{item.answer}</p>
                  </Box>
                </Stack>
              ))}
              <Divider />
              <Button
                variant="contained"
                sx={{ alignSelf: "center", backgroundColor: "#ff014f" }}
              >
                <a href="/Images/DataScientist_CV.pdf" style={{}} download="Akanni_Habeeb_CV.pdf">Download CV</a>
              </Button>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

