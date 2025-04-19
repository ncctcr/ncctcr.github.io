import ReactIcon from "../../../../assets/icons/react.png";
import HtmlIcon from "../../../../assets/icons/html.png";
import CssIcon from "../../../../assets/icons/css.png";
import JsIcon from '../../../../assets/icons/js.png';
import TsIcon from '../../../../assets/icons/ts.png';
import ReduxIcon from '../../../../assets/icons/redux.svg';
import MuiIcon from '../../../../assets/icons/mui.png';
import AxiosIcon from '../../../../assets/icons/axios.png';
import ChartJsIcon from '../../../../assets/icons/chartjs.png';
import I18nIcon from '../../../../assets/icons/i18n.png';
import GitIcon from '../../../../assets/icons/git.png';

export const SKILL_VIEWS: { [key: string]: { name: string; icon: string; description: string; experience: string[] } } = {
  react: {
    name: "React",
    icon: ReactIcon,
    description: "React is a JavaScript library that helps developers build user interfaces for web applications. It simplifies the process of creating interactive and dynamic UIs by breaking down the interface into reusable components.",
    experience: [
      "As a frontend developer with 4 years of experience, I have a strong proficiency in React along with a solid understanding of Redux, Hooks, and functional programming paradigms.",
      "Throughout my career, I have leveraged these technologies to create dynamic and interactive user interfaces for various web applications.",
      "I am adept at utilizing React component-based architecture to create reusable and maintainable code, promoting scalability and efficiency in development workflows.",
      "Moreover, my familiarity with Redux enables me to effectively manage application state and orchestrate data flow, ensuring a predictable and stable user experience.",
      "I have implemented Redux middleware and combined it with React to manage asynchronous actions and side effects seamlessly.",
      "In addition, my expertise extends to utilizing React Hooks to manage component state and lifecycle in a functional and concise manner.",
      "Leveraging the power of functional programming concepts in JavaScript, I strive to write clean, declarative, and composable code, enhancing readability and maintainability across projects.",
      "Overall, my extensive experience with React, Redux, Hooks, and functional programming has equipped me with the skills and knowledge necessary to tackle complex frontend challenges and deliver high-quality solutions that meet both user requirements and business objectives."
    ]
  },
  html: {
    name: "HTML",
    icon: HtmlIcon,
    description: "HTML is the backbone of web development, and I have a deep understanding of its syntax, structure, and best practices.",
    experience: [
      "As a front-end developer with 4 years of experience, I have extensively worked with HTML to create and build user interfaces for various websites and web applications.",
      "Throughout my career, I have utilized HTML to create semantic and accessible web pages. I am proficient in using different HTML elements such as headings, paragraphs, lists, tables, forms, and more to organize content and present information in a clear and well-structured manner.",
      "Working with HTML5, I have implemented the latest features and functionalities, including the integration of multimedia elements like audio and video, as well as the use of semantic tags to improve search engine optimization and enhance the overall user experience.",
      "In my projects, I have collaborated closely with UI/UX designers and back-end developers to ensure seamless integration and functionality. I am well-versed in using HTML with CSS and JavaScript to implement responsive designs and create interactive and dynamic web pages.",
      "I also have experience in optimizing web pages for performance and speed, utilizing techniques such as minification and proper tag usage."
    ]
  },
  css: {
    name: "CSS",
    icon: CssIcon,
    description: "CSS is a programming language that is used to design web pages. It defines how each element of a web page looks like: its color, size, layout, and other styles.",
    experience: [
      "My expertise encompasses crafting visually appealing and user-friendly web interfaces through precise styling and layout techniques.",
      "I'm adept at leveraging CSS to customize the appearance of web elements, ensuring consistency across different browsers and devices.",
      "Additionally, I have a strong command of CSS frameworks and preprocessors, enabling me to streamline development processes and maintain clean, scalable code.",
      "My proficiency in CSS extends to implementing responsive design principles, optimizing performance, and troubleshooting styling issues effectively.",
      "Overall, my years of experience have honed my skills in utilizing CSS to create engaging and functional web experiences."
    ]
  },
  javascript: {
    name: "JavaScript",
    icon: JsIcon,
    description: "JavaScript is a programming language used to make web pages interactive. It allows you to do things like show pop-up messages, validate forms, create animations, and dynamically update content on a webpage without needing to reload the entire page.",
    experience: [
      "My experience involves developing interactive and dynamic web applications, leveraging JavaScript to enhance user experiences and add functionality to websites.",
      "I'm proficient in using JavaScript library such as React.js to create robust and scalable front-end solutions.",
      "Additionally, I have expertise in vanilla JavaScript, allowing me to implement custom features and solve complex problems efficiently.",
      "I'm well-versed in asynchronous programming, utilizing promises, async/await, and AJAX to manage data fetching and processing seamlessly.",
      "My experience also includes optimizing JavaScript code for performance and accessibility, ensuring smooth and responsive interactions across various browsers and devices."
    ]
  },
  typescript: {
    name: "TypeScript",
    icon: TsIcon,
    description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    experience: [
      "Over the course of my career, I've gained significant experience with TypeScript.",
      "TypeScript is a superset of JavaScript that adds static typing to the language, which enhances code robustness and maintainability.",
      "My proficiency with TypeScript involves leveraging its features such as type annotations, interfaces, and generics to catch errors during development and improve code clarity.",
      "I have successfully utilized TypeScript in various front-end and back-end projects, enabling me to write cleaner, more predictable code and facilitate collaboration within development teams.",
      "Additionally, TypeScript's support for modern JavaScript features and tooling integration has empowered me to build scalable and maintainable applications with confidence."
    ]
  },
  redux: {
    name: "Redux",
    icon: ReduxIcon,
    description: "Redux is an open-source JavaScript library for application state management.",
    experience: [
      "In my journey as a frontend developer, Redux has been a cornerstone in my projects, enabling me to efficiently manage application state.",
      "I've seamlessly integrated Redux with React components, ensuring a centralized and predictable state container.",
      "This integration facilitated smoother data flow throughout the applications, allowing me to develop complex features with ease.",
      "One of the key aspects of my experience with Redux lies in its role in enhancing scalability.",
      "By adopting Redux, I've been able to handle larger datasets and more intricate user interactions, ensuring that the applications remain responsive and adaptable to evolving requirements."
    ]
  },
  mui: {
    name: "MUI",
    icon: MuiIcon,
    description: "MUI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    experience: [
      "In my frontend development endeavors, Material-UI (MUI) has been an invaluable resource, empowering me to create stunning and highly functional user interfaces with ease.",
      "Integrating MUI into my projects has enabled me to leverage a rich set of pre-designed React components, speeding up development and ensuring consistency in UI design.",
      "MUI's extensive component library has been instrumental in crafting responsive and visually appealing user interfaces.",
      "I've utilized components such as buttons, cards, dialogs, and form elements to build intuitive user experiences that align with modern design principles.",
      "The flexibility and customization options offered by MUI components have allowed me to tailor UI elements to suit the specific needs and branding of each project."
    ]
  },
  axios: {
    name: "Axios",
    icon: AxiosIcon,
    description: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests",
    experience: [
      "One of the primary ways I've utilized Axios is to perform asynchronous operations, such as fetching data from RESTful APIs.",
      "Its intuitive syntax and promise-based approach have made it straightforward to make HTTP requests and handle responses efficiently.",
      "By leveraging Axios, I've been able to streamline the process of fetching data and updating the application's state accordingly.",
      "Moreover, Axios has provided me with flexibility in handling different types of requests, including GET, POST, PUT, and DELETE.",
      "This versatility has allowed me to interact with backend APIs seamlessly, whether it's retrieving user information, submitting form data, or updating resource records."
    ]
  },
  chartjs: {
    name: "Chart.js",
    icon: ChartJsIcon,
    description: "Chart.js - is a free, open-source JavaScript library for data visualization, which supports eight chart types: bar, line, area, pie (doughnut), bubble, radar, polar, and scatter.",
    experience: [
      "Chart.js has been an indispensable tool in my frontend development arsenal, empowering me to visualize data and create compelling, interactive charts and graphs within my applications.",
      "Integrating Chart.js into my projects has allowed me to convey complex information in a clear and visually appealing manner, enhancing user understanding and engagement.",
      "One of the key strengths of Chart.js is its simplicity and ease of use.",
      "With its intuitive API and comprehensive documentation, I've been able to quickly integrate various chart types, including line charts, bar charts, pie charts, and more, into my applications.",
      "The ability to customize chart appearance, labels, colors, and tooltips has enabled me to tailor visualizations to meet specific project requirements and design preferences."
    ]
  },
  i18n: {
    name: "i18n",
    icon: I18nIcon,
    description: "Internationalization (i18n) is the process of designing and developing software to be adapted for users of different cultures and languages.",
    experience: [
      "In my frontend development journey, internationalization (i18n) has been a crucial aspect in ensuring that applications cater to diverse linguistic and cultural preferences.",
      "Implementing i18n solutions has allowed me to create applications that seamlessly adapt to different languages and locales, providing a localized experience for users worldwide.",
      "One of the primary approaches I've adopted for i18n is leveraging libraries such as react-i18next or i18next in my projects.",
      "These libraries offer robust features for managing translations, organizing locale files, and dynamically switching between languages based on user preferences."
    ]
  },
  git: {
    name: "Git",
    icon: GitIcon,
    description: "Git - is a distributed version control system that tracks changes in any set of computer files.",
    experience: [
      "Git has been a cornerstone of my development workflow, providing powerful version control and collaboration capabilities essential for managing project codebases effectively.",
      "Incorporating Git into my projects has enabled me to track changes, collaborate with team members, and ensure the integrity and stability of code throughout the development lifecycle.",
      "One of the key benefits of Git is its decentralized nature, which allows each developer to work on their local copy of the repository independently.",
      "I've leveraged Git's branching model to create feature branches, enabling me to work on new features or bug fixes without affecting the main codebase.",
      "This approach promotes isolation and facilitates parallel development, empowering teams to work on multiple tasks simultaneously without conflicts."
    ]
  }
};
