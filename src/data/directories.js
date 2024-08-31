export const directories = {
  education: {
    'ubc': 'University Of British Columbia\n BSc - Combined Major in Computer Science and Statistics\n ' +
    "Dean's Honour List | 88% CGPA\n " +
    'Exp. Grad: May 2026',
  },

  experiences: {
    'minesense': 'MineSense\n Data Science Co-op - Incoming\n September 2024 -- May 2025\n ' +
    'Developing machine learning models for complex sensor data to predict ore properties.',
    'ta': 'The University of British Columbia\n Undergraduate Teaching Assistant - Computer Science\n '+
    'January 2024 -- Present\n '+
    'Responsible for teaching over 600 students each term concepts relating to system architectures, operating systems, threads, mutual exclusion, assembly and asynchronous code in C.\n '+
    'Assisted in manually grading asynchronous code submissions for 200+ students.\n ' +
    'Collaborated with 22 other teaching assistants and received a 96\% overall rating from students.\n ',
    'freelance':'Freelance\n Systems Diagnosis and Troubleshooting\n May 2022 -- Present\n '+
    'Performed Linux troubleshooting services including fixing OS installations, drive partitions and drivers.\n ' + 
    'Visited online forums and scheduled appointments to assist in identifying and diagnosing issues.'
    ,
  },

  projects: {
    'NatureNexus' : 'Developed an ecosystem management website using JavaScript and SQL\n '+
    'enabling park rangers to track various flora/fauna and park proceedings.\n ' + 
    'Implemented endpoints in Express to allow seamless integration of the React front end\n and the Oracle SQL database.',

    'CShells' : 'Currently developing a shell implementation in C.\n ' + 
    'Utilizes the C standard library to facilitate system calls to execute applications and manage processes.\n ' + 
    'Provides functionality for command piping and redirecting, as well as running background processes.',
    
    'WouldTheyStay' : 'Developed a Logistic Regression model to predict employee attrition.\n '+
    'Tidied data using the R Tidyverse packages.\n ' + 
    'Partitioned data using a 70-30 Train-Test split and explored various methods such as\n Forward/Backward selection, LASSO and Ridge to optimize predictive performance.\n '+
    'Used cross-validation to ensure an optimal ridge regularization parameter.',
    
    'JoelCLI' : 'This Website!\n Utilized React to engineer an innovative personal website having a shell interface\n ' + 
    'Implemented shell commands such as ls and cat to navigate experiences, projects and more,\n drawing inspiration from Linux terminals.',
    
    'HealthStatLogger' : 'Developed a logging utility using Java to track body statistics during workouts,\n and visualize monthly progress through dynamic plots.\n ' + 
    'Utilized a JUnit test suite to ensure methods and classes were adequately tested,\n achieving 100% line coverage.\n ' + 
    'Engineered an intuitive GUI using Java Swing, leveraging JSON files\n for seamless data persistence and user interaction',

    'CyberSecSalaries':'Analyzed sample CyberSec salaries from 2021 to 2022 to determine whether\n there was a statistically significant increase.\n '+
    'Utilized both bootstrapping and theoretical results such as the Central Limit Theorem\n to conclude results.\n ' + 
    'Conducted hypothesis testing using the infer package workflow, taking a significance level 0.10.\n ' + 
    'Developed visual plots using the ggplot2 package to enhance the results presented.',

    'TennisRankUp':"Analyzed tennis match data and player information to predict the player's\n Association of Tennis Professionals (ATP) ranking.\n " + 
    "Used the player's height, age, and rank points as predictor variables to develop a K-NN regression model.\n "+
    "Utilized Jupyter notebooks to demonstrate the dataset cleaning and wrangling steps,\n along with the regression modelling process.",
  },

  extracurriculars: {
    'csss': 'UBC Computer Science Student Society\n '+ 'Vice President Internal | Former Internal Officer\n ' +
    'Leading a team of Internal Officers, \n undertaking all internal proceedings of the official UBC CS department club. \n',
  },

  skills: {
    'languages': 'Python, R, SQL, C, C++, Java, HTML/CSS, JavaScript/TypeScript',
    'frameworks': 'PyTorch, Tidyverse + Tidymodels, Pandas, NumPy, PyTorch, Matplotlib, React, JUnit',
    'tools':'GNU/Linux, Jupyter Notebooks, Git, Vim,' +
    'Bash Scripting, Virtualization and Hypervisors, Docker, LaTeX',
  },  
}
