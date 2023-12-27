import Linkedin from './assets/Images/LinkedIn (1).svg';
import Instagram from './assets/Images/Instagram.svg';
import Github from './assets/Images/GitHub (1).svg';
import Device from './assets/Images/device.png';
import Phone from './assets/Images/phone.png';
import amico1 from './assets/Images/amico.png';
import gallery2 from './assets/Images/gallery_big.png';
import gallery0 from './assets/Images/gallery.png';
import gallery1 from './assets/Images/gallery1.png';
import event1 from './assets/Images/event1.png';
import event2 from './assets/Images/event2.png';
import project from "./assets/Images/project.svg";
import face from './assets/Images/sample.png';
import logo from './assets/Images/logo.png';
import hackathon from "./assets/Images/hackathon.png";
import profile from "./assets/Images/profile.png"

export const HeroData = {
  headline: 'Lorem ipsum dolor sit amet, consectetur',
  keywords: ['Innovate.', 'Elevate.', 'Collaborate.'],
  subtitle: 'ACM Thapar 2023',
  copyright: 'THAPAR ACM CHAPTER © 2023',
  info: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.” `,
  logos: [
    {
      img: Linkedin,
      alt: 'Linkedin',
    },
    {
      img: Instagram,
      alt: 'Instagram',
    },
    {
      img: Github,
      alt: 'Github',
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
    {
      navitem: "Bootcamps",
      href: '/Bootcamps',
    },
    {
      navitem: "Projects",
      href: '/Projects',
    },
    {
      navitem: "Gallery",
      href: '/Gallery',
    },
  ]
}


export const ProjectData = {
  subtitle2: 'Projects',
  project: [
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
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
      img : amico1
    },
    {
      name:"App Development",
      img : amico1
    },
    {
      name:"AI/ML Learning",
      img : amico1
    },
    {
      name:"UI/UX Classes",
      img : amico1
    },
    {
      name:"Academic Classes",
      img : amico1
    },
    {
      name:"And More!!! ",
      img : amico1
    },
  ]
}



export const Teamdata = {
  homeheadline :"Meet The Team",
  ebheadline:"EXBO",
  coreheadline:"THE CORE",
   EB : [
    {
      name : "Amit Goyal",
      position : "General  Seceratary",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Mayank Gupta",
      position : "General  Seceratary",
      img:face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Yashvi Garg",
      position : "Joint  Seceratary",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Ishank Gupta",
      position : "Joint  Seceratary",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Vasu Tohani",
      position : "Joint  Seceratary",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
   ],
   core : [
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
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
  data21 : [
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
  ],
  data22:[
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
    {
      name:"Alex Carey",
      position:"Ex - Gen. Sec.",
      job:"Placed at Google",
      linkdin : "",
      img:profile,
    },
  ]
}

export const gallery = {
  heading: "Gallery",
  images:[
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
  ],
}

export const events = {
  heading1: "Events",
  heading2: "Sub-Events",
  details:[
    { 
      subtitle: "ECLIPSE 3.0",
      description: "Flagship Event",
      data:"Eclipse 3.0, transcended boundaries with a tech extravaganza featuring a high-octane hackathon, intense Kaggle Wars, mind-bending Enigma challenges, and the vibrant Flamingo showcase.",
    },
    {
      subtitle: "HACKLIPSE",
      description: "Most Popular Hackathon",
      data:"Hacklipse, our standout hackathon, is an immersive 24-hour coding marathon where participants unleash their coding prowess and creativity, it is a dynamic blend of innovation, problem-solving, and memorable moments.",
    },
    {
      subtitle: "FLAMINGO",
      description: "Designathon",
      data:"Flamingo has been a canvas for imaginative expression, where designers used their artistic flair to craft visually stunning and impactful creations.",
    },
    {
      subtitle: "CODESPRINT",
      description: "Competitive Coding",
      data:"An intra society event, providing a dynamic platform where members engage in intense coding sessions, showcasing their problem-solving abilities and fostering a spirit of friendly competition",
      images : [

      ]
    },
  ],

  image: [
    {
      img: event1,
      img: event1,
      img: event1,
    },
    {
      img: event2,
      img: event2,
      img: event2,
    },
  ],
}