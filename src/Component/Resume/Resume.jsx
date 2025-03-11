import React, { useState } from "react";
import "./resume.css";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ff014f",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: "50px" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const CustomTabs = styled(Tabs)({
  backgroundColor: "white", // Background for the tabs container
  padding: "5px",
  // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const CustomTab = styled(Tab)({
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none", // Prevents uppercase text
  padding: "12px 16px",
  borderRadius: "8px",
  backgroundColor:"#ff014f",
  color:'white',
  transition: "0.3s",
  "&.Mui-selected": {
    color: "#ff014f",
    backgroundColor: "white", // Background for active tab
  },
  "&:hover": {
    backgroundColor: "#ff014f", // Hover effect
    color: "white",
  },
});

export default function Resume() {
  const [value, setValue] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="resumeContainer">
      <div className="resumeWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Summary</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">Resume</h4>
            <span></span>
          </div>

          {/* <div className="resumeDetail">
            <div className="resumeDetailLists"></div>
            <div className="resumeDetailLists"></div>
          </div> */}
        </div>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <CustomTabs
            value={value}
            onChange={handleChange}
            variant={isSmallScreen ? "scrollable" : "standard"}
            scrollButtons={isSmallScreen ? "auto" : "off"}
            centered={!isSmallScreen}
            TabIndicatorProps={{
              style: { backgroundColor: "#ff014f", height: "3px" }, // Active tab indicator
            }}
          >
            <CustomTab label="Education" />
            <CustomTab label="Professional Skills" />
            <CustomTab label="Experience" />
          </CustomTabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle"> My Education</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {degree.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.degree}</h5>
                      <span>{item.school}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
              <h4 className="resumeTitle"> Professional Courses</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Courses.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.degree}</h5>
                      <span>{item.school}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle">My Skills</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Skills.map((item, index) => (
                    <div
                      className="resumeDetailList"
                      sx={{ position: "relative" }}
                      key={index}
                    >
                      <div className="resumeValue">
                        <h5>{item.name}</h5>
                        <span>{`${item.garde}%`}</span>
                      </div>
                      <BorderLinearProgress
                        variant="determinate"
                        value={item.garde}
                        sx={{ width: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle">My Experience</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Experience.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.name}</h5>
                      <span>{item.job}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

const degree = [
  {
    school: "University of Greenwich, London, United Kingdom",
    degree: "Data Science (MSc.)",
    date: "2023 – 2024",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "University of Ibadan, Nigeria",
    degree: "Statistics (BSc.)",
    date: "2016 – 2020",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "The Polytechnic, Ibadan, Oyo state, Nigeria",
    degree: "Mathematics and Statistics (ND)",
    date: "2013 - 2015",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
];
const Courses = [
  {
    school: " Future Connect Training Institute, London, UK.",
    degree: "Certificate in Data Science, Internship",
    date: "2024",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "Udemy, 2024",
    degree: "Certificate of Completion, Machine Learning A-Z: AI, Python and R",
    date: "2024",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "Udemy, 2024",
    degree:
      "Certificate of Completion, Python A-Z™: Python For Data Science With Real Exercises.",
    date: "2024",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "SideHustle., Nigeria",
    degree:
      "Certificate of Completion, Python-Introduction to Data Science and Machine Learning A - Z",
    date: "2021",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
];

const Experience = [
  {
    name: "FutureConnect, London, UK.",
    job: "Data Scientist (Intern)",
    date: "2023 - 2024",
    desc: "Developed predictive models using machine learning algorithms, achieving up to 95% accuracy in predictive maintenance models after fine-tuning",
  },
  {
    name: "Dork Discovery Ltd",
    job: "Junior Data Scientist (Voluntary Service)",
    date: "2019 - 2022",
    desc: "Built and implemented machine learning models that achieved up to 85% predictive accuracy in customer segmentation and marketing optimization after model tuning.",
  },
  {
    name: "Jaja Clinic, University of Ibadan",
    job: "Intership ",
    date: "2018 - 2019",
    desc: "Provided technical support for clinic staff and ensured proper functionality of IT infrastructure, helping reduce downtime by 30%",
  },
];

const Skills = [
  {
    name: " Python (Pandas, NumPy, Scikit-Learn)",
    garde: 90,
  },
  {
    name: "Machine Learning Algorithms: Decision Trees, SVM, KNN, K-Means, etc.",
    garde: 85,
  },
  {
    name: "Data Visualization: Power BI, Tableau, Matplotlib, Seaborn",
    garde: 75,
  },
  {
    name: "Deep Learning: ANN, CNN, RNN, TensorFlow, etc.",
    garde: 90,
  },
  {
    name: "SQL Database",
    garde: 75,
  },
  {
    name: "Data Engineering: ETL Pipelines, Data Preprocessing, Feature Engineering",
    garde: 75,
  },
  {
    name: "Model Evaluation: Accuracy, Precision, Recall, F1-score, Cross-validation, Hyperparameter Tuning",
    garde: 74,
  },
  {
    name: "Tools & Libraries: Jupyter, Git, PyTorch, Matplotlib, Seaborn, OpenCV, NLTK, Hugging Face",
    garde: 80,
  },
  {
    name: "Version Control: Git, GitHub",
    garde: 70,
  },
];
