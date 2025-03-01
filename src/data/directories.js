export const directories = {
  education: {
    'ubc': 'University Of British Columbia\nBSc - Combined Major in Computer Science and Statistics\n' +
    "Dean's Honour List | 88% CGPA\n" +
    'Exp. Grad: May 2027\n',
  },

  experiences: {
    'minesense': 'MineSense\n Data Science Co-op - Incoming\n September 2024 -- May 2025\n ' +
    'Developing machine learning models for complex sensor data to predict ore properties.',
    'ta': 'The University of British Columbia\nUndergraduate Teaching Assistant - Computer Science\n'+
    'January 2024 -- Present\n'+
    'Responsible for teaching over 600 students each term concepts relating to system architectures, operating systems, threads, mutual exclusion, assembly and asynchronous code in C.\n'+
    'Assisted in manually grading asynchronous code submissions for 200+ students.\n' +
    'Collaborated with 22 other teaching assistants and received a 96\% overall rating from students.\n',
    'freelance':'Freelance\nSystems Diagnosis and Troubleshooting\nMay 2022 -- Present\n'+
    'Performed Linux troubleshooting services including fixing OS installations, drive partitions and drivers.\n' + 
    'Visited online forums and scheduled appointments to assist in identifying and diagnosing issues.\n'
    ,
  },

  projects: {
    'NatureNexus' : 'Developed an ecosystem management website using JavaScript and SQL\n'+
    'enabling park rangers to track various flora/fauna and park proceedings.\n' + 
    'Implemented endpoints in Express to allow seamless integration of the React front end\nand the Oracle SQL database.\n',
    
    'WouldTheyStay' : 'Developed a Logistic Regression model to predict employee attrition.\n'+
    'Tidied data using the R Tidyverse packages.\n' + 
    'Partitioned data using a 70-30 Train-Test split and explored various methods such as\nForward/Backward selection, LASSO and Ridge to optimize predictive performance.\n'+
    'Used cross-validation to ensure an optimal ridge regularization parameter.\n',
    
    'JoelCLI' : 'This Website!\nUtilized React to engineer an innovative personal website having a shell interface\n' + 
    'Implemented shell commands such as ls, cd and cat to navigate experiences, projects and more,\ndrawing inspiration from Linux terminals.\n',
    
    'HealthStatLogger' : 'Developed a logging utility using Java to track body statistics during workouts,\nand visualize monthly progress through dynamic plots.\n' + 
    'Utilized a JUnit test suite to ensure methods and classes were adequately tested,\nachieving 100% line coverage.\n' + 
    'Engineered an intuitive GUI using Java Swing, leveraging JSON files\nfor seamless data persistence and user interaction',

    'CyberSecSalaries':'Analyzed sample CyberSec salaries from 2021 to 2022 to determine whether\nthere was a statistically significant increase.\n'+
    'Utilized both bootstrapping and theoretical results such as the Central Limit Theorem\nto conclude results.\n' + 
    'Conducted hypothesis testing using the infer package workflow, taking a significance level 0.10.\n' + 
    'Developed visual plots using the ggplot2 package to enhance the results presented.',

    'TennisRankUp':"Analyzed tennis match data and player information to predict the player's\nAssociation of Tennis Professionals (ATP) ranking.\n" + 
    "Used the player's height, age, and rank points as predictor variables to develop a K-NN regression model.\n"+
    "Utilized Jupyter notebooks to demonstrate the dataset cleaning and wrangling steps,\nalong with the regression modelling process.",
  },

  extracurriculars: {
    'bolt': 'Bolt UBC\nSoftware Developer and Statistics Advisor\n\n' + 
    "Generated synthetic datasets based on trends in factors, and developed cases for Bolt's datathons.\n"+
    "Developed and conducted Data Science and Machine Learning workshops for 50+ datathon competitors.\n"+
    "Served on the developer team, prototyping and developing the Bolt website using React, Node and Supabase.\n",
    'csss': 'UBC Computer Science Student Society\n'+ 'Vice President Internal | Former Internal Officer\n\n' +
    'Leading a team of Internal Officers, \nundertaking all internal proceedings of the official UBC CS department club. \n',
  },

  skills: {
    'languages': 'Python, R, SQL, C, C++, JavaScript/TypeScript, Java, HTML/CSS\n',
    'frameworks': 'PyTorch, TensorFlow, Tidyverse + Tidymodels, pandas, NumPy, Matplotlib, React, Node\n',
    'tools':'GNU/Linux, Jupyter Notebooks, Git, Vim, Bash,' +
    'Virtualization and Hypervisors, Docker, Azure, AWS, Supabase, LaTeX\n',
  },  
}




export const fileSystem = {
  root: {
    type: "directory",
    children: {
      "whoami.txt": {
        type: "file",
        content: "Hi! I'm Joel Bonnie! I'm a fourth year student at UBC studying Computer Science and Statistics :D\n"
      },
      education: {
        type: "directory",
        children: {
          "ubc.txt": {
            type: "file",
            content: directories.education.ubc
          },
        },
      },
      experiences: {
        type: "directory",
        children: {
          "gis.txt": {
            type: "file",
            content: "Genomics ML Researcher: Description under construction!"
          },
          "minesense.txt": {
            type: "file",
            content: "Data Scientist: Description under construction!"
          },
          "ta.txt": {
            type: "file",
            content: directories.experiences.ta
          },
          "freelance.txt": {
            type: "file",
            content: directories.experiences.freelance
          },
        },
      },
      projects: {
        type: "directory",
        children: {
          "brainrotgpt.txt": {
            type: "file",
            content: "Description under construction!"
          },
          "chitchart.txt": {
            type: "file",
            content: "Description under construction!"
          },
          "joelcli.txt": {
            type: "file",
            content: directories.projects.JoelCLI
          },
          "naturenexus.txt": {
            type: "file",
            content: directories.projects.NatureNexus
          },
          "wouldtheystay.txt": {
            type: "file",
            content: directories.projects.WouldTheyStay
          },
          "healthstatlogger.txt": {
            type: "file",
            content: directories.projects.HealthStatLogger
          },
          "cybersecsalaries.txt": {
            type: "file",
            content: directories.projects.CyberSecSalaries
          },
          "tennisrankup.txt": {
            type: "file",
            content: directories.projects.TennisRankUp
          },

        },
      },
      extracurriculars: {
        type: "directory",
        children: {
          "bolt.txt": {
            type: "file",
            content: directories.extracurriculars.bolt
          },
          "csss.txt": {
            type: "file",
            content: directories.extracurriculars.csss
          },
          
        }
      },
      skills: {
        type: "directory",
        children: {
          "languages.txt": {
            type: "file",
            content: directories.skills.languages
          },
          "frameworks.txt": {
            type: "file",
            content: directories.skills.frameworks
          },
          "tools.txt": {
            type: "file",
            content: directories.skills.tools
          },
        },
      },  
    },
  },
}

