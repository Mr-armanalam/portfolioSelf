import fullstack from "./full-stack.webp";
import api from "./api.jpg";
import uiux from "./uiux-consult.jpg";
import frontend1 from "./frontend1.webp";
import maintenance from "./maintenance.jpg";
import backend1 from "./backend1.png";

export const services = [
    {
        cardImage: fullstack,
        serviceName: "Full Stack Development",
        serviceDescription: "End-to-end website and web-app creation using Next.js (strong full stack framework) and also develped on MERN technology ",
    },
    {
        cardImage: frontend1,
        serviceName: "Front-End Development",
        serviceDescription: "Beautiful, responsive user interfaces and easy interaction with the help of React.js, using three.js (making 3D-graphics)"
    },
    {
        cardImage: backend1,
        serviceName: "Back-End Development",
        serviceDescription: "Secure, scalable server-side data handling with Node.js, Express.js, MongoDB, and the JavaScript for building logic",
    },
    {
        cardImage: api,
        serviceName: "API Integration",
        serviceDescription: "Connecting various services and systems to backend server, Google Cloud Integration, Payment Integration etc."
    },
    {
        cardImage: uiux,
        serviceName: "UI/UX Design Consultation",
        serviceDescription: "Enhancing user experience through design by making a responsive user-interface flexible design",
    },
    {
        cardImage: maintenance,
        serviceName: "Maintenance and Support",
        serviceDescription: "Ongoing updates and issue resolution after the handover of the project and insure that our client always happy and satisfied",
    },
];

const ServiceType = [
    ['UI/UX Design', 'Responsive Web Design', 'Interactive Features', 'Performance Optimization'],
    ['Server-Side Development', 'Database Management', 'API Development', 'Authentication & Authorization'],
    ['Integration Services', 'Version Control', 'Testing & Maintenance', 'Project Management']
]

const ProjectType = [
    ['Dev Overflow','QuirkCart', 'AI Chatgemeni', 'AI Code Assitant'],
    ['Youtube Clone', 'Chat App', 'Promptopia web'],
    ['Spotify Clone', 'Studio Clone','Amazon Clone']
];

export function ServicehoverData (serviceTitle) {
    let serviceName = [];

    switch (serviceTitle) {
        case "Full Stack Web Development":
            ServiceType.map((item, index) => {
                item.map((items) => {
                    serviceName.push(items)
                }) 
            })
            break;
        case "Front-End Development":
            ServiceType[0].map((item, index) => {
                serviceName.push(item)
            })
            break;
        case "Back-End Development":
            ServiceType[1].map((item, index) => {
                serviceName.push(item)
            })
            break;   
        case "Developed with Next.js":
            ProjectType[0].map((item, index) => {
                serviceName.push(item)
            })
            break;   
        case "Developed with React.js":
            ProjectType[1].map((item, index) => {
                serviceName.push(item)
            })
            break;   
        case "Developed with HTML, CSS, & JavaScript":
            ProjectType[2].map((item, index) => {
                serviceName.push(item)
            })
            break;   
        default:
            break;
    }
    
    return serviceName
}



