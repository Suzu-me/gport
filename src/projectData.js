import disney from "./images/projects/disney.png";
import spotify from "./images/projects/portfolio.png";
import portfolio from "./images/projects/portfolio.png"
import netflixchill from "./images/projects/netflixchill.png";

export const projectData = [
  {
    title: "Netflix N Chill",
    description: `Netflix N Chill is a clone of Netflix's web interface. This app was created using React 
    functional components, Redux state management, axios async/await requests, and deployed on Google Firebase. 
    Firebase Authentication allows user account creation, and Firebase Firestore is the database used to store 
    customer and product records. Once a user is subscribed, movie data is pulled from The Movie Database (TMDB) for 
    trending movies and movie poster images. Movie trailers are integrated 
    from YouTube if one is successfully found.`,
    technologies:
      "React, Redux, TMDB API, Firebase Authentication, Firebase Firestore, JavaScript, HTML, CSS, GitHub",
    image: netflixchill,
    date_created: "June 2020",
    link: "https://netflix-chill-b1baa.web.app/",
    github: "https://github.com/Suzu-me/Netflix-Chill",
    test_user: "mohit@gmail.com",
    test_password: "123456",
    
  },
  {
    title: "Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on 80's retro arcade games. The site is mobile and desktop responsive, with 
        additional functionality including an app-wide music player that is saved in the app state. `,
    technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify",
    image: portfolio,
    date_created: "May 2021",
    link: "",
    github: "https://github.com/Suzu-me/Portfolio",
  },
  {
    title: "Disney +",
    description: `Disney + is a video-streaming platform, centered 
        around entertainment. This app was created using React, Redux state management, material UI, 
        axios async/await requests, and deployed on Google Firebase. Firebase Authentication allows user account creation, and Firebase. `,
    technologies:
      "React, Redux, Material UI, HTML, CSS, GitHub, Firebase",
    image: disney,
    date_created: "March 2021",
    link: "https://disney-clone-b7a20.web.app/",
    github: "https://github.com/Suzu-me/Disney-",
  },
  {
    title: "Spotify",
    description: `This single-page user interface sync spotify's playlist data and allow user to login from their own Spotify Account.`,
    technologies:
      "React, Spotify Web Api, JavaScript, CSS, HTML, GitHub, Firebase",
    image: spotify,
    date_created: "April 2021",
    link: "https://spotify-9191.web.app/",
    github: "",
  },
];
