export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  subCategory: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  reading: string;
  cover: string;
  excerpt: string;
  sections: {
    title?: string;
    content: string;
  }[];
  quote: {
    text: string;
    image: string;
  };
  smartTips: {
    title: string;
    description: string;
    images: string[];
  };
  conclusion: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "your-guide-to-choosing-the-right-medical-clinic",
    title: "Your Guide to Choosing the Right Medical Clinic.",
    category: "Category",
    subCategory: "Nutrition Insights",
    author: "Sarah Johnson",
    authorRole: "Doctor",
    authorImage: "/images/blog/Profile Image-001.webp",
    date: "Aug 18, 2025",
    reading: "10 Minutes",
    cover: "/images/blog/blog-1.webp",
    excerpt: "Choosing the right medical clinic can feel overwhelming, but it doesn't have to be.",
    sections: [
      {
        title: "Choosing Care Made Simple and Clear.",
        content: "Choosing the right medical clinic is a critical step, but it doesn't have to be sources. You can make the decision process easy by focusing on what truly matters — qualified professionals, trusted care, range of services, location, and patient experience. Whether you need innovative check-ups or specialized treatments, our guide to personalized your options will help ensure and confidence, ensuring you find a solution that fits your medical and support tastes."
      }
    ],
    quote: {
      text: "A medical clinic is a healing sanctuary, blending compassionate care with advanced technology. Here, every patient receives dignified, personalized attention. Trust our expertise to support your journey toward wellness.",
      image: "/images/blog/blog-2.webp"
    },
    smartTips: {
      title: "Smart Tips for Picking Quality Care.",
      description: "Before selecting a medical clinic, it's essential to know what type of care you require. Are you seeking general check-ups, chronic condition management, or specialized treatments? Consider location, clinic hours, and whether the clinic accepts your insurance. Reading patient reviews and verifying credentials can also provide insight. At the right clinic, patient safety and comfort are standard, ensuring an informed choice for better health and improved quality of life.",
      images: ["/images/blog/blog-3.webp", "/images/blog/blog-4.webp", "/images/blog/blog-5.webp"]
    },
    conclusion: "Once you've narrowed your options, explore the clinic's website. Look for transparency in services, clean and welcoming facilities, and responsive staff. Ensure the clinic uses updated technology and follows safety protocols. At the right clinic, medical teams communicate and treat you as a partner in care. At the right clinic, healthcare professional expertise with compassionate service, giving you confidence in every visit."
  },
  {
    slug: "navigating-your-path-to-the-ideal-healthcare-facility",
    title: "Navigating Your Path to the Ideal Healthcare Facility",
    category: "Category",
    subCategory: "Healthcare",
    author: "Leslie Alexander",
    authorRole: "Cardiologist",
    authorImage: "/images/blog/Profile Image-002.webp",
    date: "Aug 12, 2025",
    reading: "8 Minutes",
    cover: "/images/blog/blog-2.webp",
    excerpt: "How to navigate options and choose a healthcare facility that fits your needs.",
    sections: [
      {
        title: "Modern Healthcare Excellence.",
        content: "Finding the ideal healthcare facility involves understanding your specific medical needs and matching them with a clinic that offers comprehensive services and expert care. Navigating today's healthcare landscape requires a focus on facilities that integrate cutting-edge diagnostics with patient-centered environments."
      }
    ],
    quote: {
      text: "Excellence in healthcare is not just about the technology we use; it's about the connection we build with every patient who walks through our doors. Our mission is to provide care that transcends expectations.",
      image: "/images/blog/blog-3.webp"
    },
    smartTips: {
      title: "Essential Selection Criteria.",
      description: "Prioritize facilities that offer a wide range of services under one roof. This ensures continuity of care and better coordination between specialists, leading to more effective treatment outcomes and a smoother patient experience.",
      images: ["/images/blog/blog-4.webp", "/images/blog/blog-5.webp", "/images/blog/blog-6.webp"]
    },
    conclusion: "Choosing carefully means investing in your long-term health. A facility that values transparency and patient education will always be your best partner in achieving and maintaining optimal wellness."
  },
  {
    slug: "how-to-boost-your-immunity-naturally-today",
    title: "How to Boost Your Immunity Naturally Today",
    category: "Category",
    subCategory: "Wellness",
    author: "Amina Rahman",
    authorRole: "Office Manager",
    authorImage: "/images/blog/Profile Image-003.webp",
    date: "Aug 04, 2025",
    reading: "6 Minutes",
    cover: "/images/blog/blog-3.webp",
    excerpt: "Natural strategies to strengthen your immune system in everyday life.",
    sections: [
      {
        title: "The Power of Natural Wellness.",
        content: "Your immune system is your body's primary defense mechanism against illness and disease, and maintaining its peak performance is easier than you think. Simple lifestyle changes can significantly enhance your body's ability to fight off infections naturally."
      }
    ],
    quote: {
      text: "Natural immunity is a lifelong investment in your well-being. By focusing on fundamental health habits, you can build a resilient shield for your body and enjoy a vibrant, active lifestyle for years to come.",
      image: "/images/blog/blog-4.webp"
    },
    smartTips: {
      title: "Daily Habits for Success.",
      description: "Focus on consuming a variety of whole foods, managing stress effectively, and ensuring you get 7-9 hours of quality sleep every night. These foundational practices are the bedrock of a robust immune system.",
      images: ["/images/blog/blog-5.webp", "/images/blog/blog-6.webp", "/images/blog/blog-1.webp"]
    },
    conclusion: "Boosting your immunity is a journey of small, consistent steps. Start today with one positive habit and watch your health transform as your body becomes stronger and more capable of defending itself."
  },
  {
    slug: "understanding-diabetes-tips-every-patient-needs",
    title: "Understanding Diabetes: Tips Every Patient Needs",
    category: "Category",
    subCategory: "Diabetes Care",
    author: "Michael Hossain",
    authorRole: "Data Analyst",
    authorImage: "/images/blog/Profile Image-004.webp",
    date: "Jul 29, 2025",
    reading: "9 Minutes",
    cover: "/images/blog/blog-4.webp",
    excerpt: "Practical tips and lifestyle changes for managing diabetes effectively.",
    sections: [
      {
        title: "Living Well with Diabetes.",
        content: "Managing diabetes successfully involves a combination of medical guidance, careful monitoring, and informed lifestyle choices. Understanding the relationship between blood glucose levels, diet, and physical activity is the foundation of effective management."
      }
    ],
    quote: {
      text: "Diabetes management is an active partnership between the patient and their healthcare team. With the right knowledge and a proactive mindset, you can lead a full, active, and vibrant life without limitations.",
      image: "/images/blog/blog-5.webp"
    },
    smartTips: {
      title: "Proactive Management Tips.",
      description: "Regular monitoring and consistent communication with your doctor are essential for adjusting your care plan as your needs evolve. Stay informed about the latest treatments and technologies available for diabetes care.",
      images: ["/images/blog/blog-6.webp", "/images/blog/blog-1.webp", "/images/blog/blog-2.webp"]
    },
    conclusion: "Empower yourself with information and support. A proactive approach to diabetes care ensures you stay in control of your health, allowing you to live life to the fullest despite your diagnosis."
  },
  {
    slug: "why-regular-health-checkups-really-matter",
    title: "Why Regular Health Checkups Really Matter",
    category: "Category",
    subCategory: "Preventive Care",
    author: "Nathaniel Carter",
    authorRole: "HR Officer",
    authorImage: "/images/blog/Profile Image-005.webp",
    date: "Jul 21, 2025",
    reading: "7 Minutes",
    cover: "/images/blog/blog-5.webp",
    excerpt: "How preventive checkups catch issues early and keep you healthier longer.",
    sections: [
      {
        title: "The Value of Prevention.",
        content: "Regular health checkups are the cornerstone of preventive medicine, allowing doctors to detect potential health issues before they become serious. Investing time in regular screenings can save years of complex treatments later."
      }
    ],
    quote: {
      text: "Prevention is always better than cure. Regular checkups provide peace of mind and are the most effective way to ensure a long and healthy life. Don't wait for symptoms to appear before seeing your doctor.",
      image: "/images/blog/blog-6.webp"
    },
    smartTips: {
      title: "Making the Most of Your Visit.",
      description: "Prepare a list of questions and concerns before your appointment to ensure you and your doctor cover all important aspects of your health. Being an active participant in your care leads to better health outcomes.",
      images: ["/images/blog/blog-1.webp", "/images/blog/blog-2.webp", "/images/blog/blog-3.webp"]
    },
    conclusion: "Prioritize your health today for a brighter, healthier tomorrow. Regular checkups are a simple yet powerful commitment to your future self, ensuring you stay well for yourself and your loved ones."
  },
  {
    slug: "managing-stress-for-better-overall-wellbeing",
    title: "Managing Stress for Better Overall Wellbeing",
    category: "Category",
    subCategory: "Mental Health",
    author: "Sarah Ahmed",
    authorRole: "Therapist",
    authorImage: "/images/blog/Profile Image-006.webp",
    date: "Jul 14, 2025",
    reading: "8 Minutes",
    cover: "/images/blog/blog-6.webp",
    excerpt: "Evidence-based ways to reduce stress and boost everyday resilience.",
    sections: [
      {
        title: "Building Resilience.",
        content: "In today's fast-paced world, learning to manage stress effectively is essential for maintaining both mental clarity and physical vitality. Stress management is about developing techniques that help you navigate life's challenges with ease."
      }
    ],
    quote: {
      text: "Mental wellbeing is the foundation of physical health. Managing stress is not a luxury; it is a fundamental requirement for a balanced life. Prioritizing your peace of mind is the first step toward true health.",
      image: "/images/blog/blog-1.webp"
    },
    smartTips: {
      title: "Stress Reduction Strategies.",
      description: "Practice mindfulness, set boundaries for your time and energy, and engage in activities that bring you joy. Small changes in your perspective and daily routine can lead to significant improvements in wellbeing.",
      images: ["/images/blog/blog-2.webp", "/images/blog/blog-3.webp", "/images/blog/blog-4.webp"]
    },
    conclusion: "Embrace a calmer, more mindful approach to life. By managing stress effectively, you open the door to greater productivity, better relationships, and improved long-term health and happiness."
  }
];
