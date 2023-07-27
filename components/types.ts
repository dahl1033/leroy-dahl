export interface Card {
  id: number;
  background: string;
  title: string;
  description: string;
  image: string;
  toolDescription: string;
  keyPoints: { id: number; text: string }[];
}

// const getBrandStyle = () => {
//   const random = Math.floor(Math.random() * 5);
//   const availableStyles = [
//     {
//       text: "text-violet-500",
//       bg: "bg-violet-100",
//     },
//     {
//       text: "text-denim-500",
//       bg: "bg-blue-100",
//     },
//     {
//       text: "text-aqua-500",
//       bg: "bg-stone-100",
//     },
//     {
//       text: "text-meadow-500",
//       bg: "bg-yellow-200",
//     },
//     {
//       text: "text-marigold-500",
//       bg: "bg-red-100",
//     },
//   ];
//   return availableStyles[random].bg;
// };

export const cards: Card[] = [
  {
    id: 0,
    background: "bg-violet-100",
    title: "Longevity Holdings",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      `As the intermediary for Longevity's cross-functional teams, I played a pivotal role in conceptualizing 
      their new front-facing application. I contributed to its design and functionality, aiming to consolidate profitable elements from their 
      existing applications into a single domain to reduce costs and maintenance. Moreover, I led the rebranding initiatives for these applications 
      and implemented feature enhancements, ensuring client satisfaction and meeting the needs of both clients and internal users.`,
    image: "/longevity.jpg",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 1,
    background: "bg-gray-200",
    title: "Land O'Lakes - Purina",
    toolDescription: "Nextjs, Prisma, PostgreSQL, Node.js",
    description:
      `I designed and oversaw the development of a V1 sales and reporting application for Land O'Lakes - Purina, which was created to streamline their trial process. 
      This application, tailored specifically for in-field sales, was successfully launched in January 2023 and is now available on their mobile devices.`,
    image: "/purina.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 2,
    background: "bg-white",
    title: "Work Out Loud",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      `During the COVID-19 pandemic, I collaborated with WorkOutLoud to create a customized virtual conferencing application on their platform. 
      As part of this project, I integrated the Vonage Video API to enable video communication, utilizing signal and event handlers to establish 
      connections between publishers and subscribers. Additionally, I implemented a real-time chat functionality that allowed attendees to engage in conversations 
      both within the entire venue and individual sessions or booths, with the ability to save chat records. To ensure smooth operations, I developed moderator control 
      features for administrators, empowering them to manage and moderate the virtual conference environment. Furthermore, I designed and implemented event scheduling 
      features to streamline the organization of WorkOutLoud's virtual conference platform. Lastly, I built a broadcast system specifically tailored for the platform's 
      "Main Stage Events," ensuring a captivating and immersive experience for attendees.`,
    image: "/WorkOutLoud.jpeg",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: "bg-violet-100",
    title: "Huge Improv Theater",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      `I led the redesign and rebuilding of HUGE Improv's system, implementing an automated class signup process for a seamless user experience.
       Additionally, I developed a backend architecture that connected classes, shows, jams, and the blog. This empowered admin users to 
       customize the website by uploading content and maintaining it without developer intervention. To facilitate class payments, I handled credit card 
       processing directly on the website, instead of invoice, using stripe's API. Moreover, I set up webhooks to ensure real-time updates for events, payment statuses, and refund processing within 
       the website itself. These efforts resulted in a revamped website with improved functionality, streamlined processes, and enhanced administrative control for HUGE Improv.`,
    image: "/hugetheater.svg",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 4,
    background: "bg-violet-100",
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      `I upgraded the checkout process for Housing First Minnesota, accommodating both one-time credit card payments and subscription models. Additionally, 
      I implemented ACH Direct Debit functionality to provide high-paying customers with an alternative to credit card fees. This involved instant bank 
      verification and updating user profiles with their chosen default payment source(s). To handle delayed payments, I utilized Stripe's webhook events, 
      including micro deposits that can take several days to complete. These enhancements improved the payment experience for Housing First Minnesota, offering 
      flexibility and convenience for their customers while reducing transaction costs.`,
    image: "/housingfirst.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 5,
    background: "bg-white",
    title: "Motivated Moms",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      `For Motivated Moms, I developed pages that allow users to manage their subscription plans. Additionally, 
      I set up customer portals that enable users to delete their accounts and cancel subscriptions. To ensure administrative control, I implemented 
      capabilities for administrators to delete user accounts and store data based on profile information. These efforts provided Motivated Moms with 
      enhanced subscription management and user control features. `,
    image: "/motivatedmoms.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 6,
    background: "bg-violet-100",
    title: "Bus Stop Mamas",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Enhanced and optimized the existing system of Bus Stop Mamas. I developed user account functionalities for job seekers, employers, and administrators, facilitating seamless interactions and personalized experiences. This included implementing a subscription-based model integrated with Stripe for automated payment processing and post creation, streamlining employer interactions. To empower users, I designed intuitive dashboards enabling job seekers and employers to track applications, manage postings, edit profiles, and generate hire reports. Additionally, I automated email notifications for sign-ups, marketing campaigns, and important alerts, enhancing user communication and engagement. These efforts resulted in a more efficient and user-friendly system, significantly improving the overall platform experience for Bus Stop Mamas.",
    image: "/bsm.webp",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 7,
    background: "bg-violet-100",
    title: "400 Doors",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      " I created visually appealing and engaging emails that capture the attention of the target audience. By leveraging Litmus, I conducted comprehensive testing across various email clients, devices, and browsers, guaranteeing consistent rendering and optimal performance. Additionally, I implemented a custom email template system that allows 400 Doors to create and send emails without developer intervention. These efforts resulted in a revamped website with improved functionality, streamlined processes, and enhanced administrative control for 400Doors.",
    image: "/400doors.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  
];
