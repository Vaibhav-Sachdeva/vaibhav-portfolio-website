import { ExperienceSectionType } from '@/lib/types/sections'

export const experienceSection: ExperienceSectionType = {
    title: "where i've worked",
    experiences: [
    {
        company: 'CommScope',
        companyUrl: 'https://www.commscope.com/',
        role: 'Software Development Engineer Intern',
        started: 'June 2023',
        upto: 'September 2023',
        tasks: [
        'Spearheaded the development of an intuitive CICD Visibility Dashboard using ReactJS, complemented by MySQL and Node.js for seamless data flow. Orchestrated efficient deployment with Docker containers on Google Cloud Platform for scalability.',
        'Engineered a streamlined process for simultaneous comparison of desired and current states for multiple microservices, eliminating the bottleneck of monitoring one service at a time, resulting in a 50% reduction in workflow time',
        'Developed Python scripts for real-time microservices state extraction from Google Kubernetes Engine, delivering up-to-the minute deployment overviews across diverse environments.',
        'Enhanced visibility by 60%, offering a comprehensive view crucial for agile decision-making in dynamic environments.',
        ],
    },
    {
        company: 'Dell Technologies',
        companyUrl: 'https://www.dell.com/en-us',
        role: 'Software Engineer',
        started: 'August 2021',
        upto: 'August 2022',
        tasks: [
        'Developed and enhanced reusable micro frontends, leveraging ReactJS, of the Rate Card Design Center web application, leading to a more streamlined experience for the user to perform CRUD operations on pricing components.',
        'Collaborated with Design and Business teams to optimize rate card creation through the existing UI, resulting in a 40% reduction in clicks needed for users to create ratecards, and an overall decrease of 25% in rate card creation time.',
        'Conducted extensive testing of pricing APIs using Postman, seamlessly integrated them with micro frontends, and utilized CI/CD pipelines to deploy them to production and staging environments, ensuring an optimized release process.',
        'Received an award from senior leadership for displaying a high level of accountability in managing the UI of the Rate Card Design Center application and making significant contributions during engineering/architecture review meetings.'],
    },
    {
        company: 'RanchPal',
        companyUrl: 'https://www.ranchpal.com/',
        role: 'Machine Learning Engineer Intern',
        started: 'June 2021',
        upto: 'August 2021',
        tasks: [
        'Built a deployable cattle activity recognition model using deep learning and joint time-frequency data representation to enable farmers to continuously monitor the health and well-being of their livestock.',
        'Achieved an accuracy rate of 89.3% in classifying nine distinct cattle activities by collecting, visualizing, and manipulating over 3 million real-time data points collected from sensors mounted on dairy cow collars.',
        'Demonstrated that utilizing time-frequency domain data representation could considerably decrease the model size and computational complexity with a minor decrease in classification accuracy.',
        ],
    },
    {
        company: 'Dell Technologies',
        companyUrl: 'https://www.dell.com/en-us',
        role: 'Software Development Engineer Intern',
        started: 'May 2020',
        upto: 'July 2020',
        tasks: [
        'Designed a Grafana dashboard to monitor the delivery of invoices in real-time, enabling enhanced visibility of performance trends over a prolonged period, leading to a 30% boost in team productivity.',
        'Developed a Python exporter to migrate invoice delivery data from an Oracle Database to Prometheus, allowing real-time selection and aggregation of time series data and providing a better compression ratio for effective data storage.',
        'Integrated the dashboard with Prometheus and wrote PromQL queries to create multiple dashboard components, enabling users to exhaustively track the reasons behind invoice delivery failure.',
        ],
    },
    ],
};