import Linkedin from './assets/Images/LinkedIn (1).svg';
import Instagram from './assets/Images/Instagram.svg';
import Github from './assets/Images/GitHub (1).svg';
import Linkedinb from './assets/Images/LinkedIn-blue.svg';
import Instagramb from './assets/Images/Instagram-blue.svg';
import Githubb from './assets/Images/GitHub-blue.svg';
import Device from './assets/Images/device.png';
import Bootcampimg from './assets/Images/bootcamps.png';
import Phone from './assets/Images/phone.png';
import amico1 from './assets/Images/amico.png';
import gallery2 from './assets/Images/gallery_big.png';
import gallery0 from './assets/Images/gallery.png';
import gallery1 from './assets/Images/gallery1.png';
import project from "./assets/Images/project.svg";
import face from './assets/Images/sample.png';
import logo from './assets/Images/logo.png';
import hackathon from "./assets/Images/hack.png";
import profile from "./assets/Images/profile.png"
import event1 from './assets/Images/event1.png';
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

export const HeroData = {
  headline: 'Innovate, Elevate, Collaborate',
  keywords: ['Innovate.', 'Elevate.', 'Collaborate.'],
  subtitle: 'ACM Thapar 2024',
  copyright: 'THAPAR ACM CHAPTER © 2024',
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
  logo :{ 
    img: logo,
    alt: 'ACM-logo',
  },
  navbar: [
    {
      navitem: "Alumni",
      href: '/Alumni',
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
      name: "Thapar Time Table",
      tech:  "React js ,Python",
      description: "This project provides an intuitive and aesthetic web interface for Thapar University students to view, search, and personalize their semester timetables. The website parses an official Excel file released by the university, generating over 60,000 lines of data for comprehensive scheduling information.",
      link: "https://github.com/Utkarsh09102004/TimeTable",
      img : pr1
    }, 
    {
      name: "ACM GPT",
      tech:  "Html,Css,Javascript",
      description: "An AI app using Javascript and openAI",
      link: "https://github.com/ACM-Thapar/acmGPT",
      img : pr3
    },
    {
      name: "Acm Blockchain",
      tech:  "Golang",
      description: "The projects includes ACM's Thapar very own blockchain built from scratch using built from sratch using golang. The Chain follows Proof of Work consensus mechanism and works with its CLI This is a open source project and contributions are welcome from anyone who wants to contribute .",
      link: "https://github.com/ACM-Thapar/ACM-Blockchain",
      img : pr5
    },
    {
      name: "Thapar Cos Automation",
      tech:  "Node.js,React.js,MongoDb,Docker,CI CD",
      description: "Repository for Thapar COS Automation. Backend Build using Node.js . Web Frontend using react js . Database used MongoDB . Containerisation done using docker , docker-compose used in dev mode . CI CD pipeline enabled using Travis CI .",
      link: "https://github.com/ACM-Thapar/Thapar-COS-Automation",
      img : pr6
    },
    {
      name: "Expense Tracker ",
      tech:  "Dart",
      description:"This project is a starting point for a Flutter application.For help getting started with Flutter development, view the online documentation, which offers tutorials, samples, guidance on mobile development, and a full API reference.",
      link: "https://github.com/ACM-Thapar/Expense_Tracker_Workshop_App",
      img : pr2
    },
    {
      name: "Bitcoin Chatbot",
      tech:  "Langchain, Chroma Database",
      description: "Its an LLM customized on that bitcoin pdf.Its like chatgpt specially trained on a topic",
      link: "https://github.com/armeenkaur/BitcoinChatbot",
      img : pr4
    }, 
  
  ],
  projectcount : [
    {
      name:"Project 1",
    },
    {
      name:"Project 2",
    },
    {
      name:"Project 3",
    },
    {
      name:"Project 4",
    },
    {
      name:"Project 5",
    },
    {
      name:"Project 6",
    },
  ]
}



export const Bootcamp = {
  subtitle1: 'Bootcamps',
  bootcamps : [
    {
      name:"Web Development",
      img : webdev
    },
    {
      name:"App Development",
      img : appdev
    },
    {
      name:"AI/ML Learning",
      img : aiml
    },
    {
      name:"UI/UX Classes",
      img : uiux
    },
    {
      name:"Academic Classes",
      img : academic
    },
    {
      name:"And More!!! ",
      img : more
    },
  ]
}



export const Teamdata = {
  homeheadline :"Meet The Team",
  ebheadline:"EXBO",
  coreheadline:"THE CORE",
   EB : [
    {
      name : "Jai Madhukar",
      position : "General Secretary",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723728926/jai_bg_-_Jai_Madhukar_-_Jai_Madhukar_lcd3kt.png",
      linkdin : {
        link:"https://www.linkedin.com/in/jai-madhukar/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Jai-17",
        img: Github,
      }
    },
    {
      name : "Utkarsh Agarwal",
      position : "General Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723727618/utkarsh_-_Utkarsh_Agarwal_nbxuqg.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/utkarsh-agarwal-054545211/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Utkarsh09102004",
        img: Github,
      }
    },
    {
      name : "Aaradhya Sharma",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_830,h_830,ar_1:1,g_auto/v1723730577/WhatsApp_Image_2024-08-15_at_12.15.01_351891f2_-_Aaradhya_Sharma_txu4nv.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aradhya-sharma-b94337245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/aradhyyySharrma8204",
        img: Github,
      }
    },
    {
      name : "Armeen Kaur Luthra",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3000,h_3000,ar_1:1/v1723729151/ArmeenPic_-_Armeen_Kaur_Luthra_buvq7n.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/armeen-kaur-luthra/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/armeenkaur/",
        img: Github,
      }
    },
    {
      name : "Siddhant",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1726418887/DSC09630_u90b5v.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/siddhant-kamble/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/WakeUpSidd",
        img: Github,
      }
    },
    {
      name : "Sidharth Dhawan",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723729801/or-pic_-_Sidharth_Dhawan_j5rf9h.png",
      linkdin : {
        link:"https://www.linkedin.com/in/sidharth-dhawan/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/sidharthd7",
        img: Github,
      }
    },
    {
      name : "Varun Khatri",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3048,h_3048,ar_1:1,g_auto/v1723751546/IMG_1142_-_Varun_Khatri_csldl3.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/varun-khatri-4b2139258/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/V5run-Kh5tri",
        img: Github,
      }
    },
    {
      name : "Ashmeet Kaur",
      position : "Project Director",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_540,h_540,ar_1:1,g_auto/v1723731192/Ashmeet_-_Ashmeet_Kaur_lx4ihf.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/ashmeet-kaur-b0b275296/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/ashmkaur",
        img: Github,
      }
    },
    {
      name : "Garv Kansal",
      position : "Project Director",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1780,h_1780,ar_1:1,g_auto/v1723731995/IMG_0201_-_Garv_Kansal_p4ickg.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/garvkansal",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Github,
      }
    },
    {
      name : "Arnav Khanduja",
      position : "Marketing Head",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_2900,h_2900,ar_1:1,g_auto/v1723732325/IMG_7038_-_Arnav_Khanduja_f2sxqh.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/arnavkhanduja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Github,
      }
    },
    {
      name : "Vasu Chugh",
      position : "Alumni Cell Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723732570/vc_picture_-_Vasu_Chugh_jv2syr.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vasu-chugh-945746200/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/YashvardhanChugh",
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
   core : [
    {
      name : "Aaditya Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893302/IMG_20240810_195547023_3_-_AADITYA_JAIN_oik0mb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aaditya-jain-7a3666247/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Aaditya060",
        img: Github,
      }
    },
    {
      name : "Aneesh Grover",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1800,h_1800,ar_1:1,g_auto/v1723894901/aneesh_di_sohni_photo_-_ANEESH_GROVER_dwa3dq.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aneesh-grover",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Aneesh-382005",
        img: Github,
      }
    },
    {
      name : "Ansh Madaan",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723894499/IMG_8235_-_ANSH_MADAAN_aamfih.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/ansh-madaan-5362b92a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Anshm1234",
        img: Github,
      }
    },
    {
      name : "Armaan Gogoi",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723894605/Screenshot_20240814-232634_-_ARMAAN_GOGOI_mxo0c3.png",
      linkdin : {
        link:"https://www.linkedin.com/in/armaan-gogoi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.con/Armaan100",
        img: Github,
      }
    },
    {
      name : "Armaan Jagirdar",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723891633/ArmaanJagirdar_-_ARMAAN_JAGIRDAR_e7cwt6.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/armaan-jagirdar-183b47285/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Armaan457",
        img: Github,
      }
    },
    {
      name : "Arnav Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723895053/20240120_220832_-_ARNAV_GUPTA_ky1geu.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/arnavgupta3035",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/arnavgupta00",
        img: Github,
      }
    },
    {
      name : "Arpita Singh",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1726418881/IMG-20230805-WA0072_2_evlymt.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/arpita-singh-746920286/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/arpitasingh2004",
        img: Github,
      }
    },
    {
      name : "Aryan Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1200,h_1200,ar_1:1/v1726418882/WhatsApp_Image_2024-09-13_at_16.47.30_fa5cba9b_tnygyx.jpg",
      linkdin : {
        link:"http://www.linkedin.com/in/aryan-gupta-17ba3a243",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/aryang081",
        img: Github,
      }
    },
    {
      name : "Atin Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723895206/IMG_3637_-_ATIN_GUPTA_ikhjkq.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/atin-gupta-a323b3290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/TheCurdler",
        img: Github,
      }
    },
    {
      name : "Bhaumik",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723895284/Photo_-_BHAUMIK_k56sre.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/bhaumik-48125b2a7/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Bhaumik181",
        img: Github,
      }
    },
    {
      name : "Deepansh Tandon",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1080,h_1080,ar_1:1,g_auto/v1723894312/Screenshot_2023-10-13-22-53-44-35_948cd9899890cbd5c2798760b2b95377_-_DEEPANSH_TANDON_lqukzm.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/deepansh-tandon-296033278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Deepansh-tandon",
        img: Github,
      }
    },
    {
      name : "Gaurang Garg",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1700,h_1700,ar_1:1,g_auto/v1723893945/IMG_20240730_190037_-_GAURANG_GARG_umdhjf.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/gaurang-garg-5441382a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Ultramech",
        img: Github,
      }
    },
    {
      name : "Gurleen Kaur",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1200,h_1200,ar_1:1/v1723893714/IMG-20240716-WA0029_-_GURLEEN_KAUR_r6vf5j.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/gurleen-kaur-60b966278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/gurleenkaur164",
        img: Github,
      }
    },
    {
      name : "Kashish Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893036/IMG_4007_-_KASHISH_GUPTA_oicejb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/kashish-gupta-34205a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Kashish101204",
        img: Github,
      }
    },
    {
      name : "Kavya Aggarwal",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_778,h_778,ar_1:1,g_auto/v1727068532/k_vdldx1.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/kavya-aggarwal-08b358291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/KavyaAgg18",
        img: Github,
      }
    },
    {
      name : "Kshitiz Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1840,h_1840,ar_1:1,g_auto/v1723733187/photo-with-bg-edited_-_KSHITIZ_JAIN_yw5gig.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/kshitiz-jain2005/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/kshitiz510",
        img: Github,
      }
    },
    {
      name : "Matangi Sharma",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1727069334/photo_e709b6.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/matangi-sharma-4b1706283/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/matangi05",
        img: Github,
      }
    },
    {
      name : "Naman Kundra",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_4200,h_4200,ar_1:1/v1723733841/hhhh_-_NAMAN_KUNDRA_kw4wrz.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/naman-kundra-850209281/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/naman777",
        img: Github,
      }
    },
    {
      name : "Nimish Goyal",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723734107/IMG_1968_-_Nimish_Goyal_gdhmfd.jpg",
      linkdin : {
        link:"http://linkedin.com/in/nimish-goyal-9483a02a2",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/nimishgoyal1",
        img: Github,
      }
    },
    {
      name : "Parth Kaushal",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723893623/IMG_5316_-_PARTH_KAUSHAL_cdhffj.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/parth-kaushal",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/parthkaushal18",
        img: Github,
      }
    },
    {
      name : "Sanya Sharma",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893515/IMG_4049_-_SANYA_SHARMA_yje1w3.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/sanya-sharma-807596295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/sanyasharma09",
        img: Github,
      }
    },
    {
      name : "Snehil Jhawar",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893177/IMG_0145_-_SNEHIL_JHAWAR_juwz8k.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/snehil-jhawar-36b845244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"http://github.com/snehiljhawar",
        img: Github,
      }
    },
    {
      name : "Vansh Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3100,h_3100,ar_1:1/v1723894712/my_photo_-_VANSH_GUPTA_pjaksb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vansh-gupta-4269001b5/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Vansh-7",
        img: Github,
      }
    },
    {
      name : "Vinayak Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_400,h_400,ar_1:1,g_auto/v1723891484/IMG_20240813_214554_-_VINAYAK_JAIN_1_tafnlp.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vinayak-jain-21b493298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Vinayak55jain",
        img: Github,
      }
    },
    {
      name : "Yajat Pahuja",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_500,h_500,ar_1:1/v1723894124/IMG-20240814-WA0039_-_YAJAT_PAHUJA_mdz1ml.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/yajat-pahuja-275a30275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/YajatPahuja",
        img: Github,
      }
    },
    // {
    //   name : "Jashan",
    //   position : "Core",
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
   ]
}

export const homebrand = {
  images: [hackathon,hackathon,hackathon,hackathon],
  details : [
    {
      heading : "Innovate",
      data : "We inspire members to explore uncharted territories, embrace challenges, and turn ideas into technological marvels. Here, creativity flourishes, and every problem becomes a canvas for inventive solutions.", 
    },
    {
      heading : "Elevate",
      data : " We're not just a society; we're a community dedicated to elevating skills, aspirations, and the tech landscape as a whole. Through engaging workshops, mentorship programs, and collaborative projects, we empower our members to rise to new heights.", 
    },
    {
      heading : "Collaborate",
      data : "At ACM individuals unite their diverse talents and perspectives, creating a vibrant ecosystem where ideas converge and knowledge multiplies. In this collaborative spirit, we navigate the ever-changing tech landscape, achieving shared milestones through the power of teamwork.", 
    },
  ]
}

export const alumnid = {
  heading1 : "2022-23",
  heading2 : "2021-22",
  heading3 : "2020-21",
  data23 : [
    {
      name:"Harshit Vishwakarma ",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Microsoft",
      linkedin : "https://www.linkedin.com/in/harshit-vishwakarma-2001/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723460750/Harshit_Vishwakarma_aaudsp.jpg",
    },
    {
      name:"Mahek Khowala",
      // position:"Ex - Gen. Sec.",
      job:"Placed at JP Morgan Chase & Co.",
      linkedin : "https://www.linkedin.com/in/mahek-khowala/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1724520945/mahek_khowala_xccpwi.jpg",
    },
    {
      name:"Aniket Biswas",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Headout",
      linkedin : "https://www.linkedin.com/in/aniket-biswas-59394b191/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723393436/aniket_biswas_kwdopt.jpg",
    },
    {
      name:"Harsh Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Oracle",
      linkedin : "https://www.linkedin.com/in/harsh-goyal-909380186/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723461037/Harsh_Goyal_itcvn0.jpg",
    },
    {
      name:"Sanchit Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Zynga",
      linkedin : "https://www.linkedin.com/in/sanchitgoyal01/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723461912/Sanchit_Goyal_lxcubi.jpg",
    },
    {
      name:"Shourya Gupta",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Corizo EdTech",
      linkedin : "https://www.linkedin.com/in/shouryaguptaa/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462292/Shourya_Gupta_lfxcil.jpg",
    },
  ],
  data22:[
    {
      name:"Robin Sandhu",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Bloomberg",
      linkedin : "https://www.linkedin.com/in/robin-sandhu-b62010181/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462587/Robin_Sandhu_pfmcyh.jpg",
    },
    {
      name:"Varun Aggarwal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at MakeMyTrip",
      linkedin : "https://www.linkedin.com/in/varun-aggarwal-840970179/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462706/Varun_Aggarwal_ig1xci.jpg",
    },
    // {
    //   name:"Ankush Gupta",
    //   // position:"Ex - Gen. Sec.",
    //   job:"Placed at MSB Docs",
    //   linkedin : "https://www.linkedin.com/in/ankush1009/",
    //   img:profile,
    // },
  ],
  data21:[
    {
      name:"Roopali Neeraj",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Amazon",
      linkedin : "https://www.linkedin.com/in/roopali-neeraj-1710/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467551/Roopali_Neeraj_wafkzd.jpg",
    },
    {
      name:"Varun Singla",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Siemens",
      linkedin : "https://www.linkedin.com/in/varunsingla211/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723466319/Varun_Singla_bmvmia.jpg",
    },
    {
      name:"Kuljot Singh Saggu",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Siemens EDA",
      linkedin : "https://www.linkedin.com/in/kuljot-singh-saggu-93a6461b2/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467346/Kuljot_Singh_voz7pg.jpg",
    },
    {
      name:"Shaurya Thakur",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Everest Group",
      linkedin : "https://www.linkedin.com/in/shaurya-thakur-301154171/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467719/Shaurya_Thakur_szecrx.jpg",
    },
    {
      name:"Shaurya Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Pluang",
      linkedin : "https://www.linkedin.com/in/shourya-goyal-3002a7185/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467988/Shaurya_Goyal_erehzf.jpg",
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
  images:[
    {
      img1: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724087537/g2_vbeqnp.jpg",
      date1: "Orientation '23",
      img2: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724087536/g4_qj5lq2.jpg",
      date2: "Induction",
      img3: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724087996/1691988232131_zhcsq1.jpg",
      date3: "Python Workshop, Frosh Week",
    },
    {
      img1: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724087537/g3_jpwubw.jpg",
      date1: "Sakujo",
      img2: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724090239/IMG_8725_stqlnv.jpg",
      date2: "Eclipse 4.0",
      img3: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724087486/g1_aib9mf.jpg",
      date3: "Orientation '23",
    },
    // {
    //   img1: gallery2,
    //   img2: gallery0,
    //   img3: gallery1,
    // },
  ],
}

export const events = {
  details:[
    {
      heading: "Events",
      subtitle: "ECLIPSE 4.0",
      description: "Flagship Event",
      data:"A premier tech competition that featured an exhilarating overnight hackathon Hacklipse, innovative designathon 'Flamingo' showcasing creative excellence, rigorous Enigma competitive programming challenges, the mind-bending Sakujo quests and the intense virtual cipher-breaking of Cryptic Hunt.",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724323527/img_pka8hq.jpg",
    },
    {
      heading: "Sub-Events",
      subtitle: "SAKUJO",
      description: "Treasure Hunt",
      data:"Sakujo, an exciting treasure hunt, wherein participants had to team up and decipher hints, exploring the alleys of Thapar University, with every hint pointing to a new location.  Themed around 'Death Note', SAKUJO had a massive footfall, making it a huge success.",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724135144/20240223063610_IMG_5521_hoetev.jpg",
    },
    {
      subtitle: "CRYPTIC HUNT",
      // description: "Designathon",
      data:"Cryptic Hunt, a 24 hour Scavenger Hunt requiring participants to solve tricky puzzles on the internet, using tools like cyphers and image steganography, with each level rewarding points. This event progresses non-linearly with the team at the top of the final leader board winning.",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724135135/cryptic_h8ajzm.jpg",
    },
    // {
    //   heading: "Events",
    //   subtitle: "ECLIPSE 3.0",
    //   description: "Flagship Event",
    //   data:"Eclipse 3.0, transcended boundaries with a tech extravaganza featuring a high-octane hackathon, intense Kaggle Wars, mind-bending Enigma challenges, and the vibrant Flamingo showcase.",
    //   img: event1,
    // },
    {
      // heading: "Sub-Events",
      subtitle: "HACKLIPSE",
      description: "Most Popular Hackathon",
      data:"Hacklipse, our standout hackathon, is an immersive 24-hour coding marathon where participants unleash their coding prowess and creativity, it is a dynamic blend of innovation, problem-solving, and memorable moments.",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724135136/hacklipse_etixxj.jpg",
    },
    {
      subtitle: "FLAMINGO",
      description: "Designathon",
      data:"Flamingo has been a canvas for imaginative expression, where designers used their artistic flair to craft visually stunning and impactful creations.",
      img: event2,
    },
    {
      subtitle: "CODESPRINT",
      description: "Competitive Coding",
      data:"An intra society event, providing a dynamic platform where members engage in intense coding sessions, showcasing their problem-solving abilities and fostering a spirit of friendly competition.",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1724326264/codesprint_syc1zm.jpg",
    },
  ],
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