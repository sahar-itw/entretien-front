const data = [
  {
    title: "Project Alpha",
    description:
      "A web development project for a client in the finance industry.",
  },
  {
    title: "Project Beta",
    description:
      "An e-commerce platform with features like product search and user authentication.",
  },
  {
    title: "Project Gamma",
    description:
      "Building a mobile app for a healthcare startup to track patient vitals.",
  },
  {
    title: "Project Delta",
    description:
      "Creating a content management system for a blogging platform.",
  },
  {
    title: "Project Epsilon",
    description:
      "Developing a social media analytics tool for marketing professionals.",
  },
  {
    title: "Project Zeta",
    description:
      "Designing a responsive website for an online education platform.",
  },
  {
    title: "Project Eta",
    description:
      "Implementing a chat application with real-time messaging and notifications.",
  },
  {
    title: "Project Theta",
    description:
      "Building a portfolio website for a freelance graphic designer.",
  },
  {
    title: "Project Iota",
    description:
      "Developing a task management system for a small business team.",
  },
  {
    title: "Project Kappa",
    description:
      "Creating a weather app with location-based forecasts and alerts.",
  },
];

export const axios = {
  get(url: "https://my-data.com") {
    return new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 1_000);
    });
  },
};
