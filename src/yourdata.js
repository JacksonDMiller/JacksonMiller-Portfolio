// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import nodejsIcon from "./images/nodejs.png"
import bitcoinIcon from "./images/bitcoin.jpeg"


// Social Icon
import githubIcon from "./images/github.svg"
import youtubeIcon from "./images/youtube.png"
import twitterIcon from "./images/twitter.png"

// Project Images
import lightningHosted from "./images/LightningHosted.png"
import docchiMe from "./images/Docchie.png"
import bitcoinFortuneCookie from "./images/bitcoinFortuneCookie.png"

// Image of me
import jacksonMiller from "./images/JacksonMiller.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jackson",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
"Efficient professional with 10+ years of experience and a proven knowledge of programming, web development, and digital marketing. Aiming to leverage my skills to successfully fill the Developer role at your company.",
  //Contact Email
  contactEmail: "Jackson.sbe@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Lightning Hosted", //Project Title - Add Your Project Title Here
      para:
        "An image hosting service that uses the Bitcoin lightning network to share advertising revenue with users.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        lightningHosted,
      //Project URL - Add Your Project Url Here
      url: "https://LightningHosted.com/",
    },
    {
      title: "Docchi.me", //Project Title - Add Your Project Title Here
      para:
        "A game written with React, Redux and Firebase with a Bitcoin rewards system.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
              docchiMe,      //Project URL - Add Your Project Url Here
      url: "https://Docchi.me",
    },
    {
      title: "Bitcoin Fortune Cookie", //Project Title - Add Your Project Title Here
      para:
        "A site where you can buy digital fortune cookies with Bitcoin.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
              bitcoinFortuneCookie,
      //Project URL - Add Your Project Url Here
      url: "https://BitcoinFortuneCookie.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is Jackson Miller. I am an avid rock climber and web developer. I am aiming to leverage my skills to successfully fill the developer role at your company.",
  aboutParaTwo:
    "I am passionate about Bitcoin. My intrest in Bitcoin inspired me to learn to code and gave me the finacial freedom to persue that goal.",
  aboutParaThree:
    "I have been coding for 5 years. I started by building a few passion projects to hone my skills. Now I do freelance software development and I'm seeking a full time postion",
  aboutImage:
    jacksonMiller,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "5 years of HTML expereince,",
    },
    {
      img: cssIcon,
      para:
        "5 years of CSS expereince",
    },
    {
      img: jsIcon,
      para:
      "5 years of JavaScript expereince",
    },
    {
      img: reactIcon,
      para:
      "3 years of React expereince",
    },
    {
      img: nodejsIcon,
      para:
        "3 years of NodeJs experenice",
    },
    {
      img: bitcoinIcon,
      para:
        "8 years of Bitcoin expereince",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/JacksonDMiller" },
    {
      img: twitterIcon,
      url: "https://twitter.com/JacksonDMiller",
    },
    {
      img: youtubeIcon,
      url: "https://www.youtube.com/user/yui79jam",
    },
  ],

  // End Contact Section ---------------
}

