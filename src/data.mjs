import Linkedin from './assets/Images/LinkedIn (1).svg';
import Instagram from './assets/Images/Instagram.svg';
import Github from './assets/Images/GitHub (1).svg';
import Linkedinb from './assets/Images/LinkedIn-blue.svg';
import Instagramb from './assets/Images/Instagram-blue.svg';
import Githubb from './assets/Images/GitHub-blue.svg';
import Bootcampimg from './assets/Images/bootcamps.png';
import logo from './assets/Images/logo.png';
import event2 from './assets/Images/event2.png';
import html from './assets/Images/html.png';
import css from './assets/Images/css.png';
import Js from './assets/Images/js.png';
import react from './assets/Images/react.png';
import arrow from './assets/Images/arrowsolid.png';
import appdev from './assets/Images/appdev.svg';
import webdev from './assets/Images/webdev.svg';
import aiml from './assets/Images/aiml.svg';
import uiux from './assets/Images/uiux.svg';
import academic from './assets/Images/academic.svg';
import more from './assets/Images/more.svg';
import pr1 from './assets/Images/pr1.svg';
import pr2 from './assets/Images/pr2.svg';
import pr3 from './assets/Images/pr3.svg';
import pr4 from './assets/Images/pr4.svg';
import pr5 from './assets/Images/pr5.svg';
import pr6 from './assets/Images/pr6.svg';
import pr7 from './assets/Images/pr7.png';
import orientation from './assets/Images/orientation.png';
import hack from './assets/Images/hack.jpeg';
import induction from './assets/Images/induction.png';


export const HeroData = {
  headline: 'Innovate, Elevate, Collaborate',
  keywords: ['Innovate.', 'Elevate.', 'Collaborate.'],
  subtitle: 'ACM Thapar 2026',
  copyright: 'THAPAR ACM CHAPTER © 2026',
  info: `A vibrant community of tech enthusiasts, dedicated to exploring, tackling and connecting with all things tech. `,
  logos: [
    {
      img: Linkedin,
      alt: 'Linkedin',
      link: "https://www.linkedin.com/company/thapar-acm-student-chapter/mycompany/",
    },
    {
      img: Instagram,
      alt: 'Instagram',
      link: "https://www.instagram.com/acmthapar/",
    },
    {
      img: Github,
      alt: 'Github',
      link: "https://github.com/ACM-Thapar",
    },
  ],
};

export const NavData = {
  logo: {
    img: logo,
    alt: 'ACM-logo',
  },
  navbar: [
    {
      navitem: "Blogs",
      href: '/Blogs',
    },
    {
      navitem: "Events",
      href: '/Events',
    },
    // {
    //   navitem: "Bootcamps",
    //   href: '/Bootcamps',
    // },
    {
      navitem: "Projects",
      href: '/Projects',
    },
    {
      navitem: "Gallery",
      href: '/Gallery',
    },
    {
      navitem: "Alumni",
      href: '/Alumni',
    },
    {
      navitem: "Team",
      href: '/Team',
    },
    {
      navitem: "Home",
      href: '/',
    }
  ],
  logoss: [
    {
      img: Linkedinb,
      alt: 'Linkedin',
    },
    {
      img: Instagramb,
      alt: 'Instagram',
    },
    {
      img: Githubb,
      alt: 'Github',
    },
  ],
}


export const ProjectData = {
  subtitle2: 'Projects',
  project: [
    {
      name: "Resource Hub",
      tech: "React js, Tailwind CSS, Firebase",
      description: "Resource Hub is an all-in-one academic companion platform designed to make student life easier and more productive. It provides access to a wide range of academic resources, including notes, past papers, and study materials, while also offering curated content to explore and learn new tech domains. Beyond academics, Resource Hub includes practical tools like a timetable and a CGPA calculator, helping students stay organized and track their academic progress effortlessly—all in one place.",
      link: "https://resourcehub.acmthapar.in/",
      img: pr7
    },
    {
      name: "Thapar Time Table",
      tech: "React js, Python",
      description: "This project provides an intuitive and aesthetic web interface for Thapar University students to view, search, and personalize their semester timetables. The website parses an official Excel file released by the university, generating over 60,000 lines of data for comprehensive scheduling information.",
      link: "https://timetable.acmthapar.in/",
      img: pr1
    },
    {
      name: "ACM Team Maker",
      tech: "CrewAI, Python",
      description: "It is an AI-driven assistant that forms well balanced project teams by matching members on skills, interests and learning goals. Using natural language inputs, it helps in reducing coordination overhead and helping teams start productive projects faster.",
      link: "https://github.com/Armaan457/ACM-Team-Maker",
      img: pr3
    },
    {
      name: "ACM Blockchain",
      tech: "Golang",
      description: "The projects includes ACM's Thapar very own blockchain built from scratch using built from sratch using golang. The Chain follows Proof of Work consensus mechanism and works with its CLI This is a open source project and contributions are welcome from anyone who wants to contribute .",
      link: "https://github.com/ACM-Thapar/ACM-Blockchain",
      img: pr5
    },
    {
      name: "Thapar Cos Automation",
      tech: "Node.js, React.js, MongoDB, Docker, CI/CD",
      description: "Repository for Thapar COS Automation. Backend Build using Node.js . Web Frontend using react js . Database used MongoDB . Containerisation done using docker , docker-compose used in dev mode . CI CD pipeline enabled using Travis CI .",
      link: "https://github.com/ACM-Thapar/Thapar-COS-Automation",
      img: pr6
    },
    {
      name: "Expense Tracker ",
      tech: "Dart",
      description: "This project is a starting point for a Flutter application. For help getting started with Flutter development, view the online documentation, which offers tutorials, samples, guidance on mobile development, and a full API reference.",
      link: "https://github.com/ACM-Thapar/Expense_Tracker_Workshop_App",
      img: pr2
    },
    {
      name: "Bitcoin Chatbot",
      tech: "Langchain, Chroma Database",
      description: "It's an LLM customized on that bitcoin pdf. It's like chatgpt specially trained on a topic",
      link: "https://github.com/armeenkaur/BitcoinChatbot",
      img: pr4
    },

  ],
  projectcount: [
    {
      name: "Project 1",
    },
    {
      name: "Project 2",
    },
    {
      name: "Project 3",
    },
    {
      name: "Project 4",
    },
    {
      name: "Project 5",
    },
    {
      name: "Project 6",
    },
  ]
}



export const Bootcamp = {
  subtitle1: 'Bootcamps',
  bootcamps: [
    {
      name: "Web Development",
      img: webdev
    },
    {
      name: "App Development",
      img: appdev
    },
    {
      name: "AI/ML Learning",
      img: aiml
    },
    {
      name: "UI/UX Classes",
      img: uiux
    },
    {
      name: "Academic Classes",
      img: academic
    },
    {
      name: "And More!!! ",
      img: more
    },
  ]
}



export const Teamdata = {
  homeheadline: "Meet The Team",
  ebheadline: "EXBO",
  coreheadline: "THE CORE",
  EB: [
    {
      name: "Vansh Wadhwa",
      position: "EB Advisor",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646711/IMG_20251030_211808_-_Vansh_Wadhwa_qyvpfp.png",
      linkdin: {
        link: "https://www.linkedin.com/in/vansh-wadhwa-/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/vanshwadhwa24",
        img: Github,
      }
    },
    {
      name: "Raghav Garg",
      position: "General Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646709/IMG_1972_-_Raghav_Garg.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/raghav-garg-96a369317/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/raghav-garg8",
        img: Github,
      }
    },
    {
      name: "Yashmit Vaish",
      position: "General Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646713/WhatsApp_Image_2025-11-03_at_10.52.43_b22b4235_-_Yashmit_Vaish_yfkjfz.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/yashmit-vaish-9184a1315/",
        img: Linkedin,
      },
      insta: {
        link: "http://github.com/Yashmitvaish",
        img: Github,
      }
    },
    {
      name: "Gourav Madaan",
      position: "Finance Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646709/IMG_1761.HEIC_2_1_-_Gourav.heic",
      linkdin: {
        link: "https://www.linkedin.com/in/gourav-madaan-6b1a97246/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Gourav1805",
        img: Github,
      }
    },
    {
      name: "Mohan Arora",
      position: "Joint Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646715/IMG_1102_-_Mohan_Arora.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/mohan-arora-980b75324/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/mohanarora3",
        img: Github,
      }
    },
    {
      name: "Gauransh Arora",
      position: "Joint Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646711/IMG-20251105-WA0000_2_-_Gauransh_Arora.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/gauransh-arora/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Gauransh-Arora",
        img: Github,
      }
    },
    {
      name: "Harshit Jain",
      position: "Joint Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646709/IMG_7010_-_Harshit_Jain.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/harshit-jain-528151403/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/kshitiz510",
        img: Github,
      }
    },
    {
      name: "Manvi Gajrani",
      position: "Joint Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646710/IMG_9474_-_Manvi_Gajrani.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/manvi-gajrani-755786328/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/manviii345",
        img: Github,
      }
    },
    {
      name: "Garvita Gupta",
      position: "Joint Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646699/19230b81-1686-444e-a718-b8bb084fbcfb_-_Ayushi_Aggarwal_nthhlf.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/garvita-gupta-0b8962311/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Keval4002",
        img: Github,
      }
    },
    {
      name: "Vandit Gupta",
      position: "Outreach Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646706/IMG_5092_-_Vandit_Gupta.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/vandit-gupta-7537502a5/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/VanditGupta0",
        img: Github,
      }
    },
    {
      name: "Kumari Manya",
      position: "Design Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646711/picturee_-_Kumari_Manya.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/kmanya/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/manyakayz",
        img: Github,
      }
    },
    {
      name: "Aashna Mittal",
      position: "Event Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646715/IMG_2115_-_Aashna_Mittal.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/aashna-mittal-41b3a633a/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/aashnamittal",
        img: Github,
      }
    },
    {
      name: "Kasvi Bansal",
      position: "Event Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786724284/IMG_20251103_105426_-_Kasvi_Bansal_nahxuq.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/kasvi-bansal-18b563309/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/YajatPahuja",
        img: Github,
      }
    },
    {
      name: " Rudraksh Chugh",
      position: "Tech Secretary",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786646708/IMG_5190_-_Rudraksh_Chugh.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/rudraksh-chugh/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/RudrakshChugh",
        img: Github,
      }
    },


    // {
    //   name : "Vasu Tohani",
    //   position : "Joint  Seceratary",
    //   img: face,
    //   linkdin : {
    //     link:"",
    //     img: Linkedin,
    //   },
    //   insta : {
    //     link:"",
    //     img: Instagram,
    //   }
    // },
  ],
  core: [


    {
      name: "Aakarshan Verma ",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698461/20260101_032435_-_Aakarshan_Verma.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/aakarshanverma03?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/AakarshanVerma0311",
        img: Github,
      }
    },
    {
      name: "Ankita Sharma",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698456/anki_blue_-_Ankita_Sharma.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/ankita-sharma-544446378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Ankitasharma2007",
        img: Github,
      }
    },
    {
      name: "Arnesh Chakrabarti ",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786699000/Screenshot_20260813-161120_-_Arnesh_Chakrabarti.png",
      linkdin: {
        link: "https://www.linkedin.com/in/arnesh-chakrabarti-a922a02a7",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/ArneshC88",
        img: Github,
      }
    },
    {
      name: "Dhairya Kumar",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698464/Dhairya_-_Dhairya_Kumar.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/dhairya-kumar-a1b0183aa/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/dhairyakumar6210-master",
        img: Github,
      }
    },
    {
      name: "Divyansh Lalotra",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698463/divyansh_photo_acm_-_Divyansh_Lalotra.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/divyansh-lalotra-89145137a/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/nej1gotnochill",
        img: Github,
      }
    },
    {
      name: "Hardik jain",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698474/IMG_20260805_110745_-_Hardik_Jain.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/hardik-jain-a6748a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Hardik-droid",
        img: Github,
      }
    },
    {
      name: "Keshav Singla",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698461/IMG-20250814-WA0009_-_Keshav_Singla.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/keshav-singla-6b1a9530b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/keshav065",
        img: Github,
      }
    },
    {
      name: "Manan",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698463/20260418_202715_-_Manan.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/beastcodz",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/beastcodz",
        img: Github,
      }
    },
    {
      name: "Nethra Lawania",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698460/f5a6f67f-d81c-435b-82f7-be05a5abd772_-_Nethra_Lawania.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/nethra-lawania-515120391?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/",
        img: Github,
      }
    },
    {
      name: "Palak Bagla",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786724081/0c0a063e-bf68-4f49-9535-979007d30032.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/palak-bagla-2019692bb?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/palakbagla1001-ux",
        img: Github,
      }
    },
    {
      name: "Pratham Goyal",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698884/WhatsApp_Image_2026-08-05_at_12.56.26_AM.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/pratham-goyal007",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/PrathamGoel07",
        img: Github,
      }
    },
    {
      name: "Priyal Gupta",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698459/IMG_4488_-_Priyal_Gupta.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/priyal-gupta-56927237a",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/priyalgupta9",
        img: Github,
      }
    },
    {
      name: "Raghav Kumar",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698455/1000196493_-_Raghav_Kumar.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/raghav0482?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Raghav0482",
        img: Github,
      }
    },
    {
      name: "Saesha Khanna",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698458/7BDB2484-C2AA-4E2A-AC5F-EF91E60EF794_-_Saesha_Khanna.jpg",
      linkdin: {
        link: "http://linkedin.com/in/saesha-khanna-",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/SaeshaKhanna",
        img: Github,
      }
    },
    {
      name: "Sanvi Taneja",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698442/sanvi_taneja_photo_-_Sanvi_Taneja.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/sanvi-taneja-90265727a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/tanejasanvi",
        img: Github,
      }
    },
    {
      name: "Simarpreet Kaur ",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786742293/b5d089d2-bf82-444a-886e-a09e698639bf_-_Simarpreet_Kaur.jpg",
      linkdin: {
        link: "http://linkedin.com/in/Simarpreet-Kaur",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/simarpreetkaur",
        img: Github,
      }
    },
    {
      name: "Skandh Garg",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698468/5733BCC9-901B-4989-8108-6B4FDF10A5E6_-_Skandh_Garg.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/skandh-garg-489a4a371?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com",
        img: Github,
      }
    },
    {
      name: "Soham Aggarwal ",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698469/Gemini_Generated_Image_7n3zd27n3zd27n3z_-_Soham_Aggarwal.png",
      linkdin: {
        link: "https://www.linkedin.com/in/sohamaggarwal/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/sohamaggarwal007",
        img: Github,
      }
    },
    {
      name: "Sushant Gagneja",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786716790/3b6b4065-db02-4d71-9027-fb4b5c0e7f19.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/sushant-gagneja-sg1310/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/SushantGagneja",
        img: Github,
      }
    },
    {
      name: "Vansh Jaiswal ",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698430/WhatsApp_Image_2026-08-13_at_5.07.08_PM_-_Vansh_Jaiswal.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/vj121vj/",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Draco437",
        img: Github,
      }
    },
    {
      name: "Vinesh Aggarwal",
      position: "Core",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786698442/20240623_145025_-_Vinesh_Aggarwal.jpg",
      linkdin: {
        link: "https://www.linkedin.com/in/vinesh-aggarwal-12732937a",
        img: Linkedin,
      },
      insta: {
        link: "https://github.com/Vinesh0409",
        img: Github,
      }
    }
  ]
}

export const homebrand = {
  images: [
    orientation, hack, induction
  ],
  details: [
    {
      heading: "Innovate",
      data: "We inspire members to explore uncharted territories, embrace challenges, and turn ideas into technological marvels. Here, creativity flourishes, and every problem becomes a canvas for inventive solutions.",
    },
    {
      heading: "Elevate",
      data: " We're not just a society; we're a community dedicated to elevating skills, aspirations, and the tech landscape as a whole. Through engaging workshops, mentorship programs, and collaborative projects, we empower our members to rise to new heights.",
    },
    {
      heading: "Collaborate",
      data: "At ACM individuals unite their diverse talents and perspectives, creating a vibrant ecosystem where ideas converge and knowledge multiplies. In this collaborative spirit, we navigate the ever-changing tech landscape, achieving shared milestones through the power of teamwork.",
    },
  ]
}

export const alumnid = {
  heading1: "2025-26",
  heading2: "2024-25",
  heading3: "2023-24",
  heading4: "2022-23",
  heading5: "2021-22",
  heading6: "2020-21",
  data26: [
    {
      name: "Jai Madhukar",
      // position:"Ex -Gen. Sec.",
      job: "Placed at Meesho",
      linkedin: "https://www.linkedin.com/in/jai-madhukar/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723728926/jai_bg_-_Jai_Madhukar_-_Jai_Madhukar_lcd3kt.png",
    },
    {
      name: "Utkarsh Agarwal",
      // position:"Ex -Gen. Sec.",
      job: "Intern at CRED, Offers from Salescode.ai",
      linkedin: "https://www.linkedin.com/in/utkarsh-agarwal-054545211/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723727618/utkarsh_-_Utkarsh_Agarwal_nbxuqg.jpg",
    },
    {
      name: "Aaradhya Sharma",
      // position:"Ex -Joint Sec.",
      job: "Placed at ZS Associates",
      linkedin: "https://www.linkedin.com/in/aaradhya-sharma-b94337245/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_830,h_830,ar_1:1,g_auto/v1723730577/WhatsApp_Image_2024-08-15_at_12.15.01_351891f2_-_Aaradhya_Sharma_txu4nv.jpg",
    },
    {
      name: "Siddhant ",
      // position:"Ex -Joint. Sec.",
      job: "Placed at Brahma AI Systems, Offers from Deloitte",
      linkedin: "https://www.linkedin.com/in/siddhant-kamble/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1726418887/DSC09630_u90b5v.jpg",
    },
    {
      name: "Armeen Kaur Luthra",
      // position:"Ex -Joint. Sec.",
      job: "Placed at MakeMyTrip",
      linkedin: "https://www.linkedin.com/in/armeen-kaur-luthra/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3000,h_3000,ar_1:1/v1723729151/ArmeenPic_-_Armeen_Kaur_Luthra_buvq7n.jpg",
    },
    {
      name: "Sidharth Dhawan",
      // position:"Ex -Joint. Sec.",
      job: "Placed at ZS Associates",
      linkedin: "https://www.linkedin.com/in/sidharth-dhawan/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723729801/or-pic_-_Sidharth_Dhawan_j5rf9h.png",
    },
    {
      name: "Varun Khatri",
      // position:"Ex -Joint. Sec.",
      job: "Placed at ZS Associates, Offers from SEW",
      linkedin: "https://www.linkedin.com/in/varun-khatri-4b2139258/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3048,h_3048,ar_1:1,g_auto/v1723751546/IMG_1142_-_Varun_Khatri_csldl3.jpg",
    },
    {
      name: "Jashanpreet Singh",
      job: "Placed at Optum, Interned at Yum!",
      linkedin: "https://www.linkedin.com/in/json-y/",
      img: "https://res.cloudinary.com/dp8uze2fi/image/upload/v1784898712/images_vchvv1.jpg",
    },
    {
      name: "Garv Kansal",
      // position:"Ex -Project Director",
      job: "Placed at Renesas Electronic",
      linkedin: "https://www.linkedin.com/in/garvkansal",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1780,h_1780,ar_1:1,g_auto/v1723731995/IMG_0201_-_Garv_Kansal_p4ickg.jpg",
    },
    {
      name: "Arnav Khanduja",
      // position:"Ex -Marketing Head",
      job: "Placed at Amazon, Offers from Samsung R&D Institute",
      linkedin: "https://www.linkedin.com/in/arnavkhanduja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_2900,h_2900,ar_1:1,g_auto/v1723732325/IMG_7038_-_Arnav_Khanduja_f2sxqh.jpg",
    },
    {
      name: "Ashmeet Kaur",
      // position:"Ex - Project Director",
      job: "Intern at zHealth",
      linkedin: "https://www.linkedin.com/in/ashmeet-kaur-073042258?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_540,h_540,ar_1:1,g_auto/v1723731192/Ashmeet_-_Ashmeet_Kaur_lx4ihf.jpg",
    },
    {
      name: "Vikas Kumar Garg",
      // position:"Ex - PR and Outreach Secretary",
      job: "Placed at Futures First",
      linkedin: "https://www.linkedin.com/in/vikaskumargarg01/",
      img: "https://res.cloudinary.com/duvxjznus/image/upload/v1784819123/Vikas_Kumar_Garg_wmdnth.jpg",
    },
    {
      name: "Avishi Singh Parihaar",
      job: "Intern at ZS Associates",
      linkedin: "https://www.linkedin.com/in/avishisingh/",
      img: "https://res.cloudinary.com/dp8uze2fi/image/upload/v1784878639/1746812475177_cm0psv.jpg"
    },
    {
      name: "Akshita Mittal",
      job: "Placed at Amazon",
      linkedin: "https://www.linkedin.com/in/akshita-mittal01/",
      img: "https://res.cloudinary.com/dp8uze2fi/image/upload/v1784898286/1741800277100_wtbtlw.jpg"
    },
    {
      name: "Swapnil Gumber",
      job: "Placed at GrowthArc",
      linkedin: "https://www.linkedin.com/in/swapnilgumber/",
      img: "https://res.cloudinary.com/dp8uze2fi/image/upload/v1784878689/1779087802541_l8gydx.png"
    },
    {
      name: "Siddhant Gureja",
      job: "Placed at Zscaler",
      linkedin: "https://www.linkedin.com/in/sidgureja/",
      img: "https://res.cloudinary.com/dp8uze2fi/image/upload/v1784897005/1781212613725_npi0ki.jpg"
    },
  ],
  data25: [
    {
      name: "Mayank Gupta",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Nvidia, Offers from Optum, Expedia, DEShaw",
      linkedin: "https://www.linkedin.com/in/mayankzach/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762096415/mayank_gupta_cc8j4x.jpg",
    },
    {
      name: "Yashvi Garg",
      // position:"Ex - Joint Sec.",
      job: "Placed at Airtel",
      linkedin: "https://www.linkedin.com/in/yashvi-garg/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762098711/yashvi_garg_jnx9do.jpg",
    },
    {
      name: "Vasu Tohani",
      // position:"Ex - Joint Sec.",
      job: "Placed at Deloitte",
      linkedin: "https://www.linkedin.com/in/vasutohani/",
      img: "https://res.cloudinary.com/duvxjznus/image/upload/ar_1:1,c_auto/vasu_pnhn1w_epkqqo.jpg",
    },
    {
      name: "Komal Dua",
      // position:"Ex - Alumni Cell Sec.",
      job: "Placed at Barclays",
      linkedin: "https://www.linkedin.com/in/komaldua8/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762098855/komal_dua_ibib20.jpg",
    },
    {
      name: "Mohak Sharma",
      // position:"Ex - Joint Sec.",
      job: "Placed at Deloitte",
      linkedin: "https://www.linkedin.com/in/mohak-sharma-40a121170/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762099265/mohak_sharma_fvsals.png",
    },
    {
      name: "Ishank Gupta",
      // position:"Ex - Joint Sec.",
      job: "Placed at Blackrock",
      linkedin: "https://www.linkedin.com/in/igupta201202/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762099321/ishank_gupta_ymcyis.jpg",
    },
    {
      name: "SK Sayan",
      // position:"Ex - UI/UX Lead",
      job: "Placed at ZS",
      linkedin: "https://www.linkedin.com/in/sksayan/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762099466/sksayan_fmma7o.png",
    },
    {
      name: "Umar Shaikh",
      // position:"Ex - UI/UX Lead",
      job: "Placed at Rusk Media",
      linkedin: "https://www.linkedin.com/in/umar-shaikh-96b7b31a5/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762099781/umar_shaikh_aoexrn.png",
    },
    {
      name: "Ayush Nangia",
      // position:"Ex - ML Lead",
      job: "Placed at Oracle",                                  //To be confirmed
      linkedin: "https://www.linkedin.com/in/ayush-nangia/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762099901/ayush_nangia_qwbzqo.jpg",
    },
    {
      name: "Ishika Dhiman",
      // position:"Ex - Design Lead",
      job: "Placed at Bain and Co.",
      linkedin: "https://www.linkedin.com/in/ishika-dhiman-58a02825a/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762100306/ishika_dhiman_czyv8m.png",
    },
    {
      name: "Shourya De",
      // position:"Ex - (not mentioned)",
      job: "Placed at Apple, Offers from JPMC",
      linkedin: "https://www.linkedin.com/in/shouryade/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762100061/shourya_de_wfqge5.jpg",
    },
    {
      name: "Rochak Ranjan",
      // position:"Ex - (not mentioned)",
      job: "Placed at Amazon, Offers from Barclays",
      linkedin: "https://www.linkedin.com/in/rochak-ranjan-b14742172/",
      img: "https://res.cloudinary.com/duvxjznus/image/upload/ar_1:1,c_auto/rochak_ranjan_p5n8w3_mc7caa.png",
    },
    {
      name: "Ayush Kumar Singh",
      // position:"Ex - Development Lead",
      job: "Placed at NuvertOS",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-singh-9ab626216/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762100468/ayush_kumar_singh_pj0eik.png",
    },
    {
      name: "Prisha Chadha",
      // position:"Ex - Social Media Lead",
      job: "Placed at Erricson, Internship at amazon",
      linkedin: "https://www.linkedin.com/in/prisha-chadha/",
      img: "https://res.cloudinary.com/duvxjznus/image/upload/ar_1:1,c_auto/prisha_chadha_pvbn3h_sc5bkh.png",
    },
  ],
  data24: [
    {
      name: "Niyati kapoor",
      // position:"Ex - Gen. Sec.",
      job: "Placed at JPMC",
      linkedin: "https://www.linkedin.com/in/niyati-kapoor-210502120/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829679/niyati_rbcuxa.png",
    },
    {
      name: "Abhimanyu Raghuvanshi",
      // position:"Ex - Gen. Sec.",
      job: "Placed at ARB Trading Group",
      linkedin: "https://www.linkedin.com/in/theonlyabr/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829683/abhimanyu_auzkk2.png",
    },
    {
      name: "Samik Malhotra",
      // position:"Ex - Gen. Sec.",
      job: "Placed at ION",
      linkedin: "https://www.linkedin.com/in/samikmalhotra/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829689/samik_oblmfq.png",
    },
    {
      name: "Prabhav Chopra",
      // position:"Ex - Technical Head",
      job: "Placed at Amex",
      linkedin: "https://www.linkedin.com/in/prabhav-chopra/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829695/prabhav_cn4ft3.png",
    },
    {
      name: "Arjun Rai",
      // position:"Ex - Technical Head",
      job: "Placed at IoT83",
      linkedin: "https://www.linkedin.com/in/arjun-rai-868155191/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829702/arjun_po0cj7.png",
    },
    {
      name: "Ananya Thomas",
      // position:"Ex - Joint Sec",
      job: "Placed at JPMC",
      linkedin: "https://www.linkedin.com/in/ananya-thomas-6b55011b9/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829709/ananya_thy2tg.png",
    },
    {
      name: "Kunwar Apoorvaditya",
      // position:"Ex - Joint Sec",
      job: "Placed at BlackRock",
      linkedin: "https://www.linkedin.com/in/kunwar-apoorvaditya/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829749/kunwar_yfxxxg.png",
    },
    {
      name: "Kriti Singhal",
      // position:"Ex - Joint Sec",
      job: "Placed at Microsoft",
      linkedin: "https://www.linkedin.com/in/kriti-711/",
      img: "https://res.cloudinary.com/dkpjtsstt/image/upload/v1762829755/kriti_rldth8.png",
    },
  ],
  data23: [
    {
      name: "Harshit Vishwakarma ",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Microsoft",
      linkedin: "https://www.linkedin.com/in/harshit-vishwakarma-2001/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723460750/Harshit_Vishwakarma_aaudsp.jpg",
    },
    {
      name: "Mahek Khowala",
      // position:"Ex - Gen. Sec.",
      job: "Placed at JP Morgan Chase & Co.",
      linkedin: "https://www.linkedin.com/in/mahek-khowala/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724520945/mahek_khowala_xccpwi.jpg",
    },
    {
      name: "Aniket Biswas",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Headout",
      linkedin: "https://www.linkedin.com/in/aniket-biswas-59394b191/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723393436/aniket_biswas_kwdopt.jpg",
    },
    {
      name: "Harsh Goyal",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Oracle",
      linkedin: "https://www.linkedin.com/in/harsh-goyal-909380186/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723461037/Harsh_Goyal_itcvn0.jpg",
    },
    {
      name: "Sanchit Goyal",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Zynga",
      linkedin: "https://www.linkedin.com/in/sanchitgoyal01/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723461912/Sanchit_Goyal_lxcubi.jpg",
    },
    {
      name: "Shourya Gupta",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Corizo EdTech",
      linkedin: "https://www.linkedin.com/in/shouryaguptaa/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723462292/Shourya_Gupta_lfxcil.jpg",
    },
  ],
  data22: [
    {
      name: "Robin Sandhu",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Bloomberg",
      linkedin: "https://www.linkedin.com/in/robin-sandhu-b62010181/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723462587/Robin_Sandhu_pfmcyh.jpg",
    },
    {
      name: "Varun Aggarwal",
      // position:"Ex - Gen. Sec.",
      job: "Placed at MakeMyTrip",
      linkedin: "https://www.linkedin.com/in/varun-aggarwal-840970179/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723462706/Varun_Aggarwal_ig1xci.jpg",
    },
    // {
    //   name:"Ankush Gupta",
    //   // position:"Ex - Gen. Sec.",
    //   job:"Placed at MSB Docs",
    //   linkedin : "https://www.linkedin.com/in/ankush1009/",
    //   img:profile,
    // },
  ],
  data21: [
    {
      name: "Roopali Neeraj",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Amazon",
      linkedin: "https://www.linkedin.com/in/roopali-neeraj-1710/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723467551/Roopali_Neeraj_wafkzd.jpg",
    },
    {
      name: "Varun Singla",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Siemens",
      linkedin: "https://www.linkedin.com/in/varunsingla211/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723466319/Varun_Singla_bmvmia.jpg",
    },
    {
      name: "Kuljot Singh Saggu",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Siemens EDA",
      linkedin: "https://www.linkedin.com/in/kuljot-singh-saggu-93a6461b2/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723467346/Kuljot_Singh_voz7pg.jpg",
    },
    {
      name: "Shaurya Thakur",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Everest Group",
      linkedin: "https://www.linkedin.com/in/shaurya-thakur-301154171/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723467719/Shaurya_Thakur_szecrx.jpg",
    },
    {
      name: "Shaurya Goyal",
      // position:"Ex - Gen. Sec.",
      job: "Placed at Pluang",
      linkedin: "https://www.linkedin.com/in/shourya-goyal-3002a7185/",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723467988/Shaurya_Goyal_erehzf.jpg",
    },
    // {
    //   name:"Alex Carey",
    //   position:"Ex - Gen. Sec.",
    //   job:"Placed at Google",
    //   linkedin : "",
    //   img:profile,
    // },
  ]
}

export const gallery = {
  heading: "Gallery",
  images: [
    {
      img1: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786739321/IMG_2147.heic",
      date1: "Orientation '25",
      img2: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786739395/IMG_3465.jpg",
      date2: "Eclpise 6.0",
      img3: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786740063/20260804_182023.jpg",
      date3: "Web Dev WS",
    },
    {
      img1: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786740443/PXL_20251029_135453540.jpg",
      date1: "Induction 2025",
      img2: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786739438/IMG_7485.heic",
      date2: "Eclipse_team 6.0",
      img3: "https://res.cloudinary.com/dvk962s9o/image/upload/v1762174474/Screenshot_2025-11-03_182339_km042x.png",
      date3: "Orientation '25",
    },
    // {
    //   img1: gallery2,
    //   img2: gallery0,
    //   img3: gallery1,
    // },
  ],
}

export const events = {
  details: [
    {
      heading: "Events",
      subtitle: "ECLIPSE 6.0",
      description: "Flagship Event",
      data: "A premier 24-hour hackathon that brought together 500+ students across 117 teams to turn bold ideas into real-world solutions across AI, Distributed Systems, EdTech, and LegalTech; backed by expert mentorship, industry insights, and an environment built for collaboration, innovation, and impact.",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786726823/WhatsApp_Image_2026-08-14_at_22.09.38.jpg",
    },
    {
      heading: "Sub-Events",
      subtitle: "ENIGMA",
      description: "Competitive Coding Contest",
      data: "Enigma is an exciting coding challenge designed to test logical thinking, problem-solving, and algorithmic skills. Participants decode puzzles and programming problems to unlock clues and showcase their technical creativity.",
      img: "https://res.cloudinary.com/dvk962s9o/image/upload/v1762171043/Screenshot_2025-11-03_172553-2_qytkhn.png",
    },
    {

      subtitle: "TREASURE HUNT",
      // description: "Treasure Hunt",
      data: "An exciting treasure hunt, wherein participants had to team up and decipher hints, exploring the alleys of Thapar University, with every hint pointing to a new location.  Themed around 'Death Note', SAKUJO had a massive footfall, making it a huge success.",
      img: "https://res.cloudinary.com/dvk962s9o/image/upload/v1762444308/treasure-hunt_co5irs.jpg",
    },
    {
      subtitle: "CRYPTIC HUNT",
      // description: "Designathon",
      data: "Cryptic Hunt, a 24 hour Scavenger Hunt requiring participants to solve tricky puzzles on the internet, using tools like cyphers and image steganography, with each level rewarding points. This event progresses non-linearly with the team at the top of the final leader board winning.",
      img: "https://res.cloudinary.com/dvk962s9o/image/upload/v1762444127/cryptic-hunt_z8nrja.jpg",
    },

    {

      subtitle: "HACKLIPSE",
      description: "Most Popular Hackathon",
      data: "Hacklipse, our standout hackathon, is an immersive 24-hour coding marathon where participants unleash their coding prowess and creativity, it is a dynamic blend of innovation, problem-solving, and memorable moments.",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786727053/IMG_2898.heic",
    },
    {
      subtitle: "FLAMINGO",
      description: "Designathon",
      data: "Flamingo has been a canvas for imaginative expression, where designers used their artistic flair to craft visually stunning and impactful creations.",
      img: event2,
    },
    {
      // heading: "Events",
      subtitle: "Feature Creep Chaos",
      description: "Saturnalia x ACM",
      data: "A one-day coding and innovation challenge that put participants through three intense rounds of ideation, execution, and building—turning creative concepts into working solutions under pressure, and testing their problem-solving, coding, and presentation skills.",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786726821/IMG_3057.heic"
    },
    {
      subtitle: "CODESPRINT",
      description: "Competitive Coding",
      data: "An intra society event, providing a dynamic platform where members engage in intense coding sessions, showcasing their problem-solving abilities and fostering a spirit of friendly competition.",
      img: "https://res.cloudinary.com/c30h7o2k/image/upload/v1786727213/IMG_3529.heic",
    },
    {
      subtitle: "ORIENTATION",
      description: "Introduction to ACM",
      data: "Orientation helps new students understand ACM’s culture, meet mentors, and explore opportunities in tech and development,introducing them to the ACM's goals, projects, and opportunities while encouraging collaboration and enthusiasm for the journey ahead.",
      img: "https://res.cloudinary.com/dvk962s9o/image/upload/v1762092699/WhatsApp_Image_2025-11-02_at_19.41.10_199a00ac_lklxt0.jpg",
    },
  ],
}

export const BlogData = {
  blogs: [
    {
      id: "payment-interfaces-ux-guide",
      slug: "payment-interfaces-ux-guide",
      title: "The Hidden Power of Payment Interfaces: How UX Makes Us Spend More",
      excerpt: "Modern online payment interfaces aren't just about processing transactions—they are carefully engineered to remove friction, build trust, and even subtly encourage us to spend more. Decode the psychological secrets behind these designs.",
      date: "2025-01-20",
      readTime: "7 min read",
      tags: ["UX Design", "Payment Systems", "Psychology", "User Experience"],
      featured: false,
      author: "Divyansh Lalotra",
      authorLink: "",
      markdownFile: "payment-interfaces-ux-guide.md"
    },
    {
      id: "understanding-cdns-guide",
      slug: "understanding-cdns-guide",
      title: "Understanding CDNs: How They Work and Why They Save You Money",
      excerpt: "Learn how Content Delivery Networks (CDNs) work, why they make your website faster, and how they can reduce your hosting costs by up to 80%. A practical guide to CDN basics for developers.",
      date: "2025-01-15",
      readTime: "8 min read",
      tags: ["Web Development", "CDN", "Performance", "Infrastructure"],
      featured: false,
      author: "Bhupesh Kumar",
      authorLink: "https://bhupeshkumar.tech",
      markdownFile: "understanding-cdns-guide.md"
    },
    {
      id: "app-development-guide-2025",
      slug: "app-development-guide-2025",
      title: "The Complete Guide to Modern App Development: Flutter, React Native, and Kotlin",
      excerpt: "Explore the world of mobile app development with Flutter, React Native, and native Android development using Kotlin. Learn which framework suits your project and master cross-platform development.",
      date: "2025-11-10",
      readTime: "12 min read",
      tags: ["App Development", "Flutter", "React Native", "Kotlin"],
      featured: false,
      author: "Bhupesh Kumar",
      authorLink: "https://bhupeshkumar.tech",
      markdownFile: "app-development-guide-2025.md"
    },
    {
      id: "consistent-hashing-netflix-scaling",
      slug: "consistent-hashing-netflix-scaling",
      title: "How Consistent Hashing Helps Netflix Scale User Data",
      excerpt: "Learn how Netflix uses consistent hashing to manage millions of user data interactions with minimal redistribution and high scalability.",
      date: "2026-02-24",
      readTime: "5 min read",
      tags: ["System Design", "Distributed Systems", "Scaling", "Netflix"],
      featured: true,
      author: "Vinayak Jain",
      authorLink: "https://www.linkedin.com/in/vinayak-jain-21b493298",
      markdownFile: "consistent-hashing-netflix-scaling.md"
    }
  ]
}

export const Bootcampdata = {
  title: "Bootcamps",
  'web-development': {
    heading: "Web Development",
    data: "Students embark on a dynamic journey into web development with our MERN Stack Bootcamp. This immersive experience takes participants from the basics of front-end design to the complexities of back-end development through hands on projects.",
    img: Bootcampimg,
    tech: "HTML | CSS | JavaScript | React | Node.js | Express.js",
    resourcs: [
      {
        name: "One shot HTML Course",
        image: html,
        img: arrow,
        link: "https://youtu.be/k7ELO356Npo?si=_bJSVjCHwSq1lrHI",
      },
      {
        name: "One shot CSS Course",
        image: css,
        img: arrow,
        link: "https://youtu.be/ESnrn1kAD4E?si=2DLrz0L4Gmx3mKQi",
      },
      {
        name: "One shot React Course",
        image: react,
        img: arrow,
        link: "https://youtu.be/FxgM9k1rg0Q?si=eY5riCtylKk7XpBy",
      },
      {
        name: "One shot JS Course",
        image: Js,
        img: arrow,
        link: "https://youtu.be/VlPiVmYuoqw?si=CWHu-pa17Pks4rnA",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "HTML/CSS and Git",
        link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i",
      },
      {
        week: "02",
        topic: "JavaScript",
        link: "https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
      },
      {
        week: "03",
        topic: "Node.js/ Express.js",
        link: "https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
      },
      {
        week: "04",
        topic: "Databases",
        link: "https://youtu.be/RebA5J-rlwg?si=Cb2Y1vheEqRQoUvZ",
      },
      {
        week: "05",
        topic: "React.js",
        link: "https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
      },
      {
        week: "06",
        topic: "Websockets",
        link: "https://youtu.be/7WQ2EbXLfLI?si=ITeweRSxqXORMDsG",
      },
      {
        week: "07",
        topic: "WebRTC",
        link: "https://www.youtube.com/watch?v=pGAp5rxv6II&list=PLinedj3B30sDxXVu4VXdFx678W2pJmORa",
      }
    ]
  },
  'app-development': {
    heading: "App Development",
    data: "Students embark on an exciting journey into app development with our Flutter Bootcamp. This immersive experience guides participants from the fundamentals of UI/UX design to the intricacies of building cross-platform applications through hands-on projects.",
    img: Bootcampimg,
    tech: "Dart | Flutter",
    resourcs: [
      {
        name: "One shot Dart Course",
        image: html,
        img: arrow,
        link: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",
      },
      {
        name: "Flutter playlist",
        image: css,
        img: arrow,
        link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGfGLShoW0vVX_tcyT8u1Y3E",
      },
      {
        name: "Firebase playlist",
        image: react,
        img: arrow,
        link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGeA6_i1WOallrMbTzZtBcp8",
      },
      {
        name: "Deployment",
        image: Js,
        img: arrow,
        link: "https://www.youtube.com/playlist?list=PLq83k-ITj6lSEhobRX2E94fNSZRs1Uwtm",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Introduction to Flutter",
        link: "https://www.youtube.com/playlist?list=PLlxmoA0rQ-LyHW9voBdNo4gEEIh0SjG-q",
      },
      {
        week: "02",
        topic: "Widgets and Layouts",
        link: "https://www.youtube.com/playlist?list=PLkL1Ztu9DMS6Ox13y3-G9E6NqX3fLiihv",
      },
      {
        week: "03",
        topic: "Navigation and Routing",
        link: "https://www.youtube.com/watch?v=zxmWMpkUJpI&ab_channel=dbestechube",
      },
      {
        week: "04",
        topic: "State Management",
        link: "https://www.youtube.com/playlist?list=PLFyjjoCMAPtzn7tFLRV3eny7G74LnlMRt",
      },
      {
        week: "05",
        topic: "Validation and User Inputs",
        link: "https://www.youtube.com/watch?v=GFKqoIAPd0Q&ab_channel=dbestech",
      },
      {
        week: "06",
        topic: "API Integration",
        link: "",
      },
      {
        week: "07",
        topic: "Database Integration",
        link: "https://www.youtube.com/watch?v=hiZcVbyukBo&pp=ygUaTG9jYWwgRGF0YSB",
      }
    ]
  },
  'ai-ml-learning': {
    heading: "AI/ML Bootcamp",
    data: "Students immerse themselves in the cutting edge field of machine and deep learning with our comprehensive Bootcamp. From mastering the fundamentals of algorithms and neural networks to applying advanced techniques in real world projects, this Bootcamp offers hands-on experience in building intelligent systems.",
    img: Bootcampimg,
    tech: "Python | TensorFlow | PyTorch | Scikit-Learn",
    resourcs: [
      {
        name: "One shot Python Course",
        image: html,
        img: arrow,
        link: "https://www.youtube.com/watch?v=qHJjMvHLJdg",
      },
      {
        name: "One shot TensorFlow Course",
        image: css,
        img: arrow,
        link: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
      },
      {
        name: "One shot PyTorch Course",
        image: react,
        img: arrow,
        link: "https://www.youtube.com/watch?v=GIsg-ZUy0MY",
      },
      {
        name: "One shot Scikit-Learn Course",
        image: Js,
        img: arrow,
        link: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Python",
        link: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
      },
      {
        week: "02",
        topic: "Data Analysis",
        link: "https://www.youtube.com/playlist?list=PL9n0l8rSshSnragNblKDBsT8Xu3otp3jA",
      },
      {
        week: "03",
        topic: "Machine Learning",
        link: "https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ",
      },
      {
        week: "04",
        topic: "Deep Learning",
        link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO",
      },
      {
        week: "05",
        topic: "CNNs",
        link: "https://www.youtube.com/playlist?list=PLuhqtP7jdD8CD6rOWy20INGM44kULvrHu",
      },
      {
        week: "06",
        topic: "RNNs",
        link: "https://www.youtube.com/playlist?list=PLuhqtP7jdD8ARBnzj8SZwNFhwWT89fAFr",
      },
      {
        week: "07",
        topic: "Transformers",
        link: "https://www.youtube.com/playlist?list=PLTl9hO2Oobd97qfWC40gOSU8C0iu0m2l4",
      }
    ]
  },
  'ui-ux-classes': {
    heading: "UI/UX Classes",
    data: "Students dive into the world of user-centered design with our UI/UX Bootcamp. From learning to create engaging and intuitive user experiences through hands-on projects, to conducting user research and developing high-fidelity prototypes using tools like Figma, the UI/UX Bootcamp is a perfect learning opportunity for creating digital products.",
    img: Bootcampimg,
    tech: "Figma | Adobe XD | Sketch | InVision",
    resourcs: [
      {
        name: "General Resources",
        image: html,
        img: arrow,
        link: "https://jaimadhukar.notion.site/Resources-27821140752547969f6a38b2fb357125",
      },
      {
        name: "Design Resources",
        image: css,
        img: arrow,
        link: "https://jaimadhukar.notion.site/Design-Resources-fc65563b701a409c89653beebbd8d52f",
      },
      {
        name: "Figma Course",
        image: react,
        img: arrow,
        link: "https://www.youtube.com/playlist?list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-",
      },
      {
        name: "Figma Course - 2",
        image: Js,
        img: arrow,
        link: "https://www.youtube.com/playlist?list=PLXDU_eVOJTx4kKv1IdI-NdlKyCWwE6Ge6",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "UI Basics",
        link: "https://jaimadhukar.notion.site/Week-1-206749c026264963b7024fda7821d039",
      },
      {
        week: "02",
        topic: "UX Principles",
        link: "https://jaimadhukar.notion.site/Week-2-a5ebca0ae9f34bbf8bd331d3c5c7b648",
      },
      {
        week: "03",
        topic: "Wireframe",
        link: "https://bony-zebra-2b6.notion.site/Week-3-05711589a80844b4923830c0c4dd169e",
      },
      {
        week: "04",
        topic: "Prototype",
        link: "https://jaimadhukar.notion.site/Week-4-979fbdc4c5f94c1b928c1f4428544a85",
      },
      {
        week: "05",
        topic: "Testing",
        link: "https://jaimadhukar.notion.site/Week-5-b464cc3165c145cbb14d87b2e2386d86",
      },
      {
        week: "06",
        topic: "Design Sys",
        link: "https://jaimadhukar.notion.site/Week-6-d2be6158a5794d2aba610252565ca8ad",
      },
      {
        week: "07",
        topic: "Portfolio",
        link: "https://jaimadhukar.notion.site/Week-7-ad50d36d146342f4926c3fd82f50aeb3",
      }
    ]
  },
  'academic-classes': {
    heading: "Academic Classes",
    data: "Students dive deep into the core of computer science with our DSA (Data Structures and Algorithms) Bootcamp. This intensive program is designed to equip participants with a strong foundation in essential data structures and algorithms. Through hands-on coding exercises and real-world problem-solving, students will learn to optimize their code for efficiency and scalability",
    img: Bootcampimg,
    tech: "Data Structures | Algorithms",
    resourcs: [
      {
        name: "DSA Sheet by Love Babbar",
        image: html,
        img: arrow,
        link: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/",
      },
      {
        name: "Striver's DSA Sheet",
        image: css,
        img: arrow,
        link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
      },
      {
        name: "Algoprep 151 Qs",
        image: react,
        img: arrow,
        link: "https://docs.google.com/spreadsheets/d/1kyHfGGaLTzWspcqMUUS5Httmip7t8LJB0P-uPrRLGos/edit?pli=1&gid=0#gid=0",
      },
      {
        name: "DSA Sheet by Arsh",
        image: Js,
        img: arrow,
        link: "https://docs.google.com/spreadsheets/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/edit?gid=0#gid=0",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Basics",
        link: "https://docs.google.com/presentation/d/1cPlci7K7-7ONClmc41Awlrp1Adp0A0Ws/edit?usp=sharing&ouid=117868515780097825872&rtpof=true&sd=true",
      },
      {
        week: "02",
        topic: "Arrays",
        link: "https://docs.google.com/document/d/1oEyLoPJ_kxr6PFsZkWHZCFbCLFgn3Oh0AzSB3GQo3kw/edit?usp=sharing",
      },
      {
        week: "03",
        topic: "Time & Space Complexity",
        link: "https://drive.google.com/file/d/1EF7yNSMhFTAf85FKEXjqbX14jitVyAVR/view?usp=sharing",
      },
      {
        week: "04",
        topic: "STL",
        link: "https://docs.google.com/document/d/1oEyLoPJ_kxr6PFsZkWHZCFbCLFgn3Oh0AzSB3GQo3kw/edit?usp=sharing",
      },
      {
        week: "05",
        topic: "Stacks and Queues",
        link: "https://docs.google.com/document/d/1oEyLoPJ_kxr6PFsZkWHZCFbCLFgn3Oh0AzSB3GQo3kw/edit?usp=sharing",
      },
      {
        week: "06",
        topic: "Linked Lists",
        link: "https://drive.google.com/file/d/187ycx2OtloTgPXuxKDLAm9xEsvztWYJN/view?usp=sharing",
      },
      {
        week: "07",
        topic: "Binary search",
        link: "https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm",
      }
    ]
  }
}
