interface Experience {
  yearRange: string;
  role: string;
  company: string;
  description: string;
  link?: string;
}

export const experiences: Experience[] = [
  /* {
    "yearRange": "2024 - 2025",
    "role": "Freelance Frontend Developer",
    "company": "Seaview IM",
    "description": "Built responsive UIs for investment tools with real-time data and visualizations. Focused on UX and performance for financial decision-making."
  }, */
  {
    "yearRange": "2022 - 2024",
    "role": "Frontend Developer",
    "company": "Protera",
    "description": "Led frontend for madi™, a SaaS platform for protein design. Built interactive UIs and collaborated with AI and bio teams to optimize performance and usability.",
    "link": "/blog/madi"
  },
  {
    "yearRange": "2021 - 2022",
    "role": "Fullstack Developer",
    "company": "IDA (Ideas Digitales Aplicadas)",
    "description": "Delivered web apps using React, Vue, and Node. Integrated payments, real-time queues, and accessibility features for client projects."
  },
  {
    "yearRange": "2018 - 2021",
    "role": "Software Developer",
    "company": "Duoc UC",
    "description": "Developed internal tools with React, Django, and Next.js. Built apps for exam queries and event accreditation. Hackathon and bootcamp winner."
  }
]