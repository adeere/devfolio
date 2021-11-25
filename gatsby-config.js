module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Alison Deere',
    // Main Site Title
    title: `Alison Deere | Atmospheric Scientist`,
    // Description that goes under your name in main bio
    description: `Recent Atmospheric Science Undergrad Graduate based in Calgary, Canada.`,
    // Optional: Github account URL
    github: `https://github.com/adeere`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alison-deere/`,
     // Optional: Twitter account handle
     author: `https://adeere.github.io/adeere-web/documents/alisondeere_resume_2021.pdf`,
    // Content of the About Me section
    about: `I have a four-year Atmospheric Science undergraduate degree from the University of British Columbia, completed in May of 2021. Throughout my degree I 
    was fortunate to be able to take courses in many different subjects, including computer science, oceanography, climate science, geography, geographic information science, 
    political science, and anthropology. I am currently looking for a environmental or climate science position where I can put my knowledge of atmospheric science, and all of the 
    skills I learned in my degree to a good use for the planet. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Exploring sea-ice thickness within the CCCMA CANESM5 model',
        description:
          'The write-up from my 2021 Directed Studies project where I analyzed sea-ice thickness projections over the next 100 years. I compared models from two different models. All figures included within are created with python.',
        link: 'https://drive.google.com/file/d/1H6URPo_01nOARO_2N8jQBGehF1ATX92Q/view?usp=sharing',
      },
      {
        name: 'Map of Nightclub Spaces',
        description:
          'An interactive map of nightclub spaces in London, UK that I created for a final-year geographic information science course, Research in Cartography. Created using HTML, CSS, Javascript, and Mapbox.',
        link: 'https://adeere.github.io/adeere-web/Lab1/london_nightlife_spaces.html',
      },
      {
        name: 'Rail Stations in Nordic Countries',
        description:
          'A searchable map of rail stations in Norway, Sweden, and Finland. Created using HTML, CSS, Javascript, and Mapbox for a final-year geographic information science course, Research in Cartography.',
        link: 'https://adeere.github.io/adeere-web/Lab2/nordic_countries_rail.html',
      },
      {
        name: 'Median Values of Dwellings in Vancouver',
        description:
          'An example of work that is part of a project looking at the impacts of a rising sea level due to climate change on communities in Vancouver that I created in 2020 using ArcGIS. This map shows median household income, and was used for further analysis to determine whether there was a relationship between lower rent and median income, and lower elevations.  ',
        link: 'https://drive.google.com/file/d/1lS8sfnYg_kSPyLQZ9iq6puzE3Hm10Lsg/view?usp=sharing',
      },
    ],
    // Optional: List your experience, they must have `name`, 'job', and `description`. `link` is optional.
    experience: [
      {
        name: 'Research Assistant for the Weather Forecast Research Team | May 2018 - October 2020',
        job: 'University of British Columbia',
        description: 'Worked on near real-time verification of wildfire smoke forecasts against surface particulate matter observations using Python, R, and Git. Created webpage for these results using HTML and CSS....',
        link: 'https://firesmoke.ca/',
      },
      {
        name: 'Atmospheric Science Undergraduate Student | September 2016 - May 2021',
        job: 'University of British Columbia',
        description: 'Completed the interdisciplinary four-year undergraduate program that focuses on the meteorological fields of air quality, environment, climate change, weather monitoring, and instrumentation. Obtained a strong foundation in physics, chemistry, math, and computing science.',
        link: 'https://you.ubc.ca/ubc_programs/atmospheric-science/',
      },
      {
        name: 'Teaching Assistant for an Applied Meteorology Course | September 2019 - December 2020',
        job: 'University of British Columbia',
        description: 'Marked final exams and student quizzes for ATSC 113 Applied Meteorology: Weather for Flying, Sailing & Snow Sports, responded to students’ emails in a timely manner and invigilated final exams both in person and online for this and several other courses in the Earth, Ocean, and Atmospheric Science department.',
        link: 'https://www.eoas.ubc.ca/courses/atsc113/',
      },

      {
        name: 'Community Outreach Coordinator | June 2021 - August 2021',
        job: 'CJSW 90.9 FM (Radio Station in Calgary, AB)',
        description: 'Worked as a summer staff member soliciting existing and new businesses to be part of the CJSW Friends program. Emailed, called or visited 200+ local businesses and organizations to understand their desired sponsorship program. Ensured that CJSW enter the fall funding drive with a full roster of supporting businesses. ',
        link: 'https://cjsw.com',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Proficient in:',
        description:
          'Python, HTML, MATLAB, Microsoft Office Suite, Excel',
      },
      {
        name: 'Experience with:',
        description: 'R, CSS, JavaScript, ArcGIS, Git, Bash Scripting, Markdown, Adobe Dreamweaver, Camtasia',
      },
    
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/alison_icon.png`,
      },
    },
  ],
};
