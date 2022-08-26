module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Alison Deere',
    // Main Site Title
    title: `Alison Deere`,
    // Description that goes under your name in main bio
    description: `Based in Glasgow, UK`,
    // Optional: Github account URL
    github: `https://github.com/adeere`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alison-deere/`,
     // Resume
     author: `https://adeere.github.io/adeere-web/documents/alisondeere_CV.pdf`,

     // Email
     contact: `mailto:alisonpdeere@gmail.com`,


    // Content of the About Me section
    //about: `I am Canadian and moved to Glasgow in February of 2022. I am currently working in an administrative role and am looking for opportunities related to the field I studied 
    //in my bachelor's degree - Atmospheric Science. Throughout the four-year interdisciplinary degree I was was fortunate to take courses in subjects such ascomputer seince, oceanography, climate science, 
   // geographic information science, and political science. I am passionate about creating maps....`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    
    projects: [
      {
        name: 'Web-based Map of Nightclub Spaces',
        description:
          'An interactive map of nightclub spaces in London, UK that I created for a final-year geographic information science course, Research in Cartography. Created using HTML, CSS, Javascript, and Mapbox.',
        link: 'https://adeere.github.io/adeere-web/Lab1/london_nightlife_spaces.html',
      },
      {
        name: 'Web-based Interactive Map of Rail Stations in Nordic Countries',
        description:
          'A searchable map of rail stations in Norway, Sweden, and Finland that I created for a final-year geographic information science course, Research in Cartography. Created using HTML, CSS, Javascript, and Mapbox.',
        link: 'https://adeere.github.io/adeere-web/Lab2/nordic_countries_rail.html',
      },

    {
    name: 'Map of Latin American Population in the United States (2019)',
    description:
      'An interactive map of the distribution of Latin American population in the United States in 2019. Created using HTML, CSS, Javascript, and Mapbox for a final-year project looking at Migration between the US and Latin America.',
    link: 'https://adeere.github.io/adeere-web/Map3/population_2019.html',
  },
      {
        name: 'ArcGIS Project: The Impact of a Rising Sea Level on Vancouver Communities (Results) ',
        description:
          'The results from a project looking at the impacts of a rising sea level due to climate change on communities in Vancouver. I made the maps in 2020 with ArcGIS for an advanced geographic information science course. ',
        link: 'https://adeere.github.io/results.html',
      },
      {
        name: 'Exploring sea-ice thickness within the CCCMA CANESM5 model (Write-up)',
        description:
          'The write-up from my 2021 Directed Studies project where I analyzed decreasing sea-ice thickness in Arctic Canada. I compared future and past projections from two different models within the Coupled Model Intercomparison Project. All figures included within are created with Python.',
        link: 'https://drive.google.com/file/d/1H6URPo_01nOARO_2N8jQBGehF1ATX92Q/view?usp=sharing',
      },
      {
        name: 'Exploring sea-ice thickness within the CCCMA CANESM5 model (Code Repository)',
        description:
          'The github repository for the python code used for my 2021 Directed Studies Project.',
        link: 'https://github.com/adeere/sea_ice_thickness',
      },
   
    ],
    // Optional: List your experience, they must have `name`, 'job', and `description`. `link` is optional.
    experience: [
      {
        name: 'Clinical Placements Administrator for MBChB (Medical Degree) | April 2022 - Present',
        job: 'University of Glasgow',
        description: 'Worked as part of the Undergraduate Medical School team to provide effective and proactive administrative support for clinical placements in Phase 4 of the MBChB programme. Assisted in the coordination of clinical teaching at hospital sites, on-campus, and online. Worked with large spreadsheets and data sheets in Excel and worked to automate several processes.',
        link: '',
      },
      {
        name: 'Community Outreach Coordinator | June 2021 - August 2021',
        job: 'CJSW 90.9 FM (Radio Station in Calgary, AB)',
        description: 'Worked as a summer staff member soliciting existing and new businesses to be part of the CJSW Friends program. Emailed, called or visited 200+ local businesses and organizations to understand their desired sponsorship program. Ensured that CJSW enter the fall funding drive with a full roster of supporting businesses. ',
        link: 'https://cjsw.com',
      },
      {
        name: 'Atmospheric Science Undergraduate Student | September 2016 - May 2021',
        job: 'University of British Columbia',
        description: 'Completed the interdisciplinary four-year undergraduate program that focuses on the meteorological fields of air quality, environment, climate change, weather monitoring, and instrumentation. Obtained a strong foundation in physics, chemistry, math, and computing science.',
        link: 'https://you.ubc.ca/ubc_programs/atmospheric-science/',
      },
      {
        name: 'Research Assistant for the Weather Forecast Research Team | May 2018 - October 2020',
        job: 'University of British Columbia',
        description: 'Worked on a variety of projects both collaboratively and autonomously such as creating a near real-time verification of wildfire smoke forecasts in British Columbia, developing prototype websites, creating course content, and running air pollution models. Used a variety of software including Python (pandas, Xarray), R, Git, HTML, CSS, Hugo, and markdown.',
        link: 'https://www.eoas.ubc.ca/research/facilities/gdcfdc',
      },
      {
        name: 'Teaching Assistant for an Applied Meteorology Course | September 2019 - December 2020',
        job: 'University of British Columbia',
        description: 'Marked final exams and student quizzes for ATSC 113 Applied Meteorology: Weather for Flying, Sailing & Snow Sports, responded to students’ emails in a timely manner and invigilated final exams both in person and online.',
        link: 'https://www.eoas.ubc.ca/courses/atsc113/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Proficient in:',
        description:
          'Python, HTML, CSS, MATLAB, Microsoft Office Suite',
      },
      {
        name: 'Experience with:',
        description: 'R, JavaScript, ArcGIS, QGIS, Git, Bash Scripting, markdown, Adobe Dreamweaver, Camtasia',
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
