export interface Project {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
      view: string;
      code: string;
    }
}

export const Projects: Project[] = [
  {
    "name": "Moment Captcha",
    "desc": "Moment Captcha is a simple and easy to use app. which allows user to select the favourite photos.",
    "image": "momentCaptcha",
    "category": "webapp",
    "links": {
      "view": "https://codeseryash.github.io/MomentCaptcha/",
      "code": "https://github.com/er-yash-arora"
    }
  },
  {
    "name": "URL Assistant Extension",
    "desc": "Extract or Open Multiple URLs with HTTP/HTTPS Or Reveal IP",
    "image": "extension",
    "category": "apps",
    "links": {
      "view": "https://chromewebstore.google.com/detail/oplihgjalhbanlonmepbompojffccbpl",
      "code": "https://chromewebstore.google.com/detail/oplihgjalhbanlonmepbompojffccbpl"
    }
  },
  {
    "name": "ALGO EXODUS Pswd generator",
    "desc": "Algo exodus is here create the strongest passwords which can help your accounts stay secure.",
    "image": "pswd",
    "category": "webapp",
    "links": {
      "view": "https://algo-exodus.netlify.app/",
      "code": "https://github.com/er-yash-arora"
    }
  },
  {
    "name": "EmailJS Contact Form",
    "desc": "Contact form using EmailJS. It allows you to send emails directly from your web application without needing a backend server.",
    "image": "emailJs",
    "category": "Integration",
    "links": {
      "view": "https://codeseryash.github.io/portfolio-site/browser/#contact",
      "code": "https://github.com/er-yash-arora"
    }
  }
  ,
  {
    "name": "PortFolio Site",
    "desc": "This is my portfolio site. It showcases my skills, projects, and experience.",
    "image": "portfolio",
    "category": "webapp",
    "links": {
      "view": "https://codeseryash.github.io/portfolio-site/browser/#home",
      "code": "https://github.com/codeseryash/portfolio-site"
    }
  },
  {
    "name": "Knight Adventure 🐴",
    "desc": "A fun web board game where you move like a knight in chess and try to visit all squares without repeating.",
    "image": "knight-game",
    "category": "webapp",
    "links": {
      "view": "https://codeseryash.github.io/KnightAdventure/",
      "code": "https://github.com/codeseryash/KnightAdventure"
    }
  }

]
