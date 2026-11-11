const SITE_DATA = {
  brand: { mark: "O", first: "ogbole", second: "folio" },

  student: {
    fullName: "Ogbole Clement Okoh",
    firstName: "Ogbole",
    photo: "images/student.jpeg",
    photoAlt: "Photograph of Ogbole Clement Okoh",
    email: "o.clement4830@gmail.com",
    tagline: "A student. A learner. A work in progress.",
    shortBio:
      "My name is Ogbole Clement Okoh. I am a creative, hardworking and ambitious individual with a passion for learning, personal growth and business development. I enjoy exploring new opportunities, connecting with people, and using technology to create meaningful impact. My goal is to continue developing my skills and achieving success in my personal and professional life.",
    matricNumber: "",
    programme: "Computer Science",
    course: "COS 106 \u2013 Introduction to Web Technologies",
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Projects", href: "projects.html" },
    { label: "Planner", href: "planner.html" },
    { label: "Contact", href: "contact.html" },
  ],
  cta: { label: "Let's connect", href: "contact.html" },
  footer: "\u00A9 2026 Ogbole Clement Okoh. COS 106 Term Project, MIVA Open University.",

  about: {
    education: [
      { period: "Completed", institution: "Basic Education", qualification: "Basic Education Certificate" },
      { period: "Completed", institution: "Secondary School", qualification: "SSCE" },
    ],
    aspirations:
      "I aim to become a senior software engineer who builds reliable, user-friendly products that solve real problems for people and businesses.",
    skills: [
      "Internet research",
      "Microsoft Office applications",
      "Email communication",
      "Social media management",
      "Online content creation",
      "Using digital platforms and learning new technologies",
    ],
    hobbies: [
      "Listening to music",
      "Travelling",
      "Meeting new people",
      "Exploring new ideas and learning new things",
      "Business, technology, creativity and personal development",
      "Watching football",
      "Spending quality time with friends and family",
      "Discovering opportunities that help me grow",
    ],
    video: { src: "media/intro.mp4", poster: "images/profile.svg" },
  },

  projects: [
    {
      title: "CGPA Calculator",
      description: "A simple CGPA calculator where a student enters their courses, grades and units to work out their grade point average.",
      image:
        "/images/calcImg.png",
      imageAlt: "CGPA calculator app screenshot",
      link: "https://github.com/",
    },
    {
      title: "Academic Task Planner",
      description: "A simple to-do app that lets me add, complete and delete coursework tasks and saves them in the browser.",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=plain%20screenshot%20of%20a%20simple%20beginner%20to-do%20list%20web%20app%2C%20white%20background%2C%20a%20list%20of%20tasks%20with%20checkboxes%20and%20an%20add%20button%2C%20minimal%20HTML%20CSS%20JavaScript%2C%20no%20device%20frame%2C%20not%20a%20mockup&image_size=landscape_4_3",
      imageAlt: "Academic task planner app screenshot",
      link: "https://github.com/",
    },
    {
      title: "Simple Calculator",
      description: "A basic calculator built with HTML, CSS and JavaScript for everyday arithmetic.",
      image:"/images/calculator.jpg",
      imageAlt: "Simple calculator app screenshot",
      link: "https://github.com/",
    },
  ],
};
