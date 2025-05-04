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
    "desc": "Moment Captcha is a simple and easy to use app. which allows user to select the favourite photos. Inspiration came to sort my own wedding photos.",
    "image": "pswd",
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
  }
]
