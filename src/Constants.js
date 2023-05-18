import ge from "./Assets/Projects/gestion.jpeg";
import word from "./Assets/Projects/wordPress.jpg";
import py from "./Assets/Projects/Python.svg.png";
import pfa from "./Assets/Projects/isivc.png";



export const PROJECTS = [
  {
    image: ge,
    name: "Gestion des salles est des machines",

    description: "Development of a room management application using Laravel for both scheduling and managing rooms.",
    
  },
  
  {
    image: py,
    name: "Python Project",
   
    description: "Desktop application that displays the shortest route on a map between all the gas stations of a given brand.",

  },
  {
    image: word,
    name: "WordPress",

    description: "Website for the Polydisciplinary Faculty of Sidi Bennour using WordPress.",
   
  },
  {
    image: pfa,
    name: "Pfa Project",

    description: "Scientific conference management platform with automatic subdomain generation.",
    
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 3 },
  { name: "React-Native", initialRating: 3 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Python", initialRating: 4 },
  { name: "Java", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
 
  { name: "Git", initialRating: 3 },
];

export const TOOLS = ["Visual Studio Code", "Git",  "Linux", "Adobe", "Postman"]
