
import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, 
};

const greeting = {
  username: 'Syed Muzammil Ashfaque',
  title: "Hi all, I'm Muzammil",
  subTitle: emoji(
    'A passionate Full Stack Software Engineer 🚀 having an experience of building Web applications with JavaScript / ReactJs / NodeJs /  MongoDB /  Express.Js and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1F23T62QCC6_9G7LE6dP7zZMibSCvQ17z/view?usp=sharing',
  displayGreeting: true, 
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/muzi-official',
  linkedin: 'https://www.linkedin.com/in/syedmuzammilashfaque/',
  gmail: 'syedmuzammilashfaque@gmail.com',
  gitlab: 'https://gitlab.com/syedmuzammilashfaque',
  facebook: 'https://www.facebook.com/officialmuzi/',
  instagram: 'https://www.instagram.com/official_muzi/',
  twitter: 'https://twitter.com/officiaI_muzi',
  medium: 'https://medium.com/@syedmuzammilashfaque',
  stackoverflow: 'https://stackoverflow.com/users/15158872/syed-muzammil-ashfaque',
  display: true, 
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Software Engineer & A Passionate Programming Teacher',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡  Make apps real by using third-party modules like Firebase, Express, MongoDB etc'
    ),
  ],


  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'github',
      fontAwesomeClassname: 'fab fa-github',
    },
  ],
  display: true, 
};


const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: 'Appared in Baqai University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'Bachelor in Software Engineering',
      duration: 'January 2020 - April 2023',
    },

    {
      schoolName: 'Govt. Vocational Training Institute',
      logo: require('./assets/images/vocLogo.png'),
      subHeader: 'Diploma of Information Technology',
      duration: 'September 2017 - April 2019',
    },

    {
      schoolName: 'Al Qamar Academy School',
      logo: require('./assets/images/alqamarLogo.png'),
      subHeader: 'Matric in Computer Science',
      duration: 'September 2002 - April 2014',
    },
    {
      schoolName: 'Saylani Mass IT Training Program',
      logo: require('./assets/images/saylaniLogo.jpg'),
      subHeader: '1.5 Years Certification Software Engineering',
      duration: 'January 2018 - February 2020',
    },


  ],
};



const techStack = {                                 
  viewSkillBars: true, 
  experience: [
    {
      Stack: 'HTML5', 
      progressPercentage: '100%', 
    },
    {
      Stack: 'CSS3',
      progressPercentage: '100%',
    },
    {
      Stack: 'Javascript',
      progressPercentage: '100%',
    },
    {
      Stack: 'React',
      progressPercentage: '100%',
    },
    {
      Stack: 'Node',
      progressPercentage: '80%',
    },
    {
      Stack: 'MongoDB',
      progressPercentage: '80%',
    },
    {
      Stack: 'Firebase',
      progressPercentage: '100%',
    },
  ],
  displayCodersrank: false, 
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Zn Solution',
      companylogo: require('./assets/images/znLogo.jpg'),
      date: 'Dec 2019 – Present',
    },

    {
      role: 'Front-End Developer',
      company: 'Pak Ever Zone',
      companylogo: require('./assets/images/pakeverLogo.jpg'),
      date: 'May 2017 – May 2018',
    },

    {
      role: 'React JS Developer',
      company: 'ZM Creative',
      companylogo: require('./assets/images/zmLogo.png'),
      date: 'Jan 2015 – Sep 2017',
    },

  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Muzi_official', 
  showGithubProfile: 'true', 
  display: true, 
};


const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/wayLogo.png'),
      projectName: "Way Of Success Coaching Center",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://way-success-coaching.web.app/?fbclid=IwAR1SbO0OJDqWNM7mmOA0mKUoxGcmSeh7-ngy4SchLkJjSPXPTpYfT_UzxBY',
        },
      ],
    },
    
  ],
  display: true, 
};


const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Certified Developer',
      subtitle: 'Certified Mobile & Web App Developer',
      image: require('./assets/images/salani1Logo.jpg'),
      footerLink: [
  
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
  
      ],
    },


    {
      title: 'Certified',
      subtitle: 'NDG Linux Essentials',
      image: require('./assets/images/ciscoLogo.png'),
      footerLink: [
  
      ],
    },

    {
      title: 'Certified Developer',
      subtitle: 'E-Commerce Management',
      image: require('./assets/images/digiskillsLogo.png'),
      footerLink: [
  
      ],
    },
  
    {
      title: 'Certified JavaScript',
      subtitle: 'JavaScript Tutorial Course',
      image: require('./assets/images/sololearnLogo.png'),
      footerLink: [
  
      ],
    },

    {
      title: 'Certified Developer',
      subtitle: 'WordPress',
      image: require('./assets/images/learnvernLogo.png'),
      footerLink: [
  
      ],
    },

    {
      title: 'Certified',
      subtitle: 'Certificate In Information Technology',
      image: require('./assets/images/goodshepherdLogo.jpg'),
      footerLink: [
  
      ],
    },

    {
      title: 'Certified',
      subtitle: 'Certificate In Freelancing',
      image: require('./assets/images/digiskillsLogo.png'),
      footerLink: [
  
      ],
    },

    {
      title: 'Certified Developer',
      subtitle: 'Certified Mobile & Web App Developer',
      image: require('./assets/images/itbwLogo.jpg'),
      footerLink: [
  
      ],
    },

  ],
  display: true, 
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url: 'https://syedmuzammilashfaque.medium.com/why-i-choose-react-js-6add6803b87',
      title: 'Why I Choose React JS',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true,
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url:'https://keep.google.com/u/0/#home',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: true, 
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  podcast: [
    'https://www.youtube.com/embed/F_Gy4li2pIg?list=UUZh1mUDnt9k9jmzXpd_okGw',
  ],
  display: true, 
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+92-3151194431',
  email_address: 'syedmuzammilashfaque@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', 
  display: true, 
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
