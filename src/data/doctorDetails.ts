export interface Doctor {
  slug: string;
  name: string;
  role: string;
  experience: string;
  consults: number;
  image: string;
  bio: string[];
}

export const doctors: Doctor[] = [
  {
    slug: "dr-maria-lopez",
    name: "Dr. Maria Lopez",
    role: "Pediatrician",
    experience: "+08 Years",
    consults: 480,
    image: "/images/doctors/doctors-1.webp",
    bio: [
      "Meet Dr. Maria Lopez, a passionate pediatrician committed to enhancing children's health. With a wealth of experience in clinical practice and research, Dr. Lopez has made notable contributions to pediatrics. She is recognized for her creative treatment methods, utilizing state-of-the-art diagnostic therapies and tailored care plans. Dr. Lopez also prioritizes education, providing scholarships to support aspiring pediatricians.",
      "Welcome to Dr. Maria Lopez's innovative pediatric clinic, where cutting-edge technology meets compassionate care. She provides virtual consultations, making expert childcare advice accessible to all. With an emphasis on advanced diagnostic methods and gentle treatments, Dr. Lopez helps her patients achieve optimal health with minimal recovery time. Her commitment to mentorship and scholarship continues to inspire the next generation of pediatricians.",
    ],
  },
  {
    slug: "dr-samuel-kim",
    name: "Dr. Samuel Kim",
    role: "Dermatologist",
    experience: "+08 Years",
    consults: 600,
    image: "/images/doctors/doctors-2.webp",
    bio: [
      "Dr. Samuel Kim is a board-certified dermatologist with over 12 years of experience in medical and cosmetic dermatology. He is dedicated to helping patients achieve healthy, beautiful skin through evidence-based treatments and personalized care. His expertise includes advanced laser therapies, acne management, and skin cancer screenings.",
      "At our dermatology center, Dr. Kim combines his technical skill with a compassionate approach, ensuring each patient feels heard and supported. He stays at the forefront of dermatological research to provide the most effective and innovative solutions for all skin types and conditions.",
    ],
  },
  {
    slug: "dr-emily-davis",
    name: "Dr. Emily Davis",
    role: "Oncologist",
    experience: "+10 Years",
    consults: 300,
    image: "/images/doctors/doctors-3.webp",
    bio: [
      "Dr. Emily Davis is a highly skilled oncologist specializing in personalized cancer treatment plans and supportive care. With a decade of experience, she is known for her dedication to patient outcomes and her empathetic approach during difficult times. She focuses on the latest advancements in targeted therapy and immunotherapy.",
      "Dr. Davis believes in a holistic approach to oncology, addressing not only the physical but also the emotional needs of her patients. She works closely with a multidisciplinary team to ensure comprehensive care and the best possible quality of life for those under her guidance.",
    ],
  },
  {
    slug: "dr-alex-chen",
    name: "Dr. Alex Chen",
    role: "Neurologist",
    experience: "+08 Years",
    consults: 480,
    image: "/images/doctors/doctors-4.webp",
    bio: [
      "Dr. Alex Chen is a dedicated neurologist focused on diagnosing and treating complex neurological disorders. His expertise covers a wide range of conditions, including migraines, epilepsy, and neurodegenerative diseases. He utilizes advanced diagnostic tools to provide accurate assessments and effective management strategies.",
      "With a patient-centered philosophy, Dr. Chen aims to empower individuals by providing clear explanations and collaborative care plans. His commitment to neurological research ensures that his patients benefit from the latest evidence-based treatments and therapies.",
    ],
  },
  {
    slug: "dr-robert-singh",
    name: "Dr. Robert Singh",
    role: "Orthopedic Surgeon",
    experience: "+15 Years",
    consults: 650,
    image: "/images/doctors/doctors-5.webp",
    bio: [
      "Dr. Robert Singh is a renowned orthopedic surgeon with 15 years of experience in joint replacements and sports medicine. He is committed to restoring mobility and improving the quality of life for patients with musculoskeletal issues. His surgical precision and dedication to post-operative recovery are widely recognized.",
      "Dr. Singh employs a range of minimally invasive techniques to ensure faster recovery times and better long-term results. He works closely with physical therapists and rehabilitation specialists to provide a comprehensive path back to an active lifestyle for every patient.",
    ],
  },
  {
    slug: "dr-ethan-carter",
    name: "Dr. Ethan Carter",
    role: "Cardiologist",
    experience: "+09 Years",
    consults: 420,
    image: "/images/doctors/doctors-6.webp",
    bio: [
      "Dr. Ethan Carter is an experienced cardiologist dedicated to heart health and preventive cardiovascular medicine. He specializes in the diagnosis and management of heart disease, hypertension, and rhythm disorders. His approach combines clinical expertise with a focus on lifestyle modifications for optimal heart function.",
      "At our cardiac unit, Dr. Carter provides state-of-the-art diagnostic testing and personalized treatment regimens. He is passionate about patient education and strives to help individuals understand their cardiovascular health and make informed decisions for a longer, healthier life.",
    ],
  },
  {
    slug: "dr-emily-carter",
    name: "Dr. Emily Carter",
    role: "Pediatrician",
    experience: "+07 Years",
    consults: 550,
    image: "/images/doctors/doctors-7.webp",
    bio: [
      "Dr. Emily Carter is a compassionate pediatrician who brings a gentle and friendly approach to children's healthcare. With seven years of experience, she is dedicated to the well-being of infants, children, and adolescents. Her practice emphasizes preventive care, immunizations, and developmental milestones.",
      "Dr. Carter believes that every child deserves a positive and supportive medical experience. She works closely with parents to ensure they are informed and comfortable with their child's healthcare journey, fostering a foundation for healthy growth and development.",
    ],
  },
  {
    slug: "dr-michael-lee",
    name: "Dr. Michael Lee",
    role: "Cardiologist",
    experience: "+11 Years",
    consults: 580,
    image: "/images/doctors/doctors-8.webp",
    bio: [
      "Dr. Michael Lee is a leading cardiologist with a focus on interventional cardiology and advanced heart failure management. His 11 years of experience in treating complex cardiac conditions have made him a trusted specialist in the field. He is known for his commitment to clinical excellence and patient safety.",
      "Dr. Lee utilizes the latest technologies in cardiac imaging and minimally invasive procedures to deliver superior outcomes. He is dedicated to continuous learning and frequently contributes to cardiac research, ensuring his patients receive the most current and effective care available.",
    ],
  },
  {
    slug: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    role: "Dermatologist",
    experience: "+09 Years",
    consults: 520,
    image: "/images/doctors/doctors-9.webp",
    bio: [
      "Dr. Sarah Johnson is a passionate dermatologist specializing in skin health and aesthetic rejuvenation. With nine years of experience, she combines medical expertise with an artistic eye to deliver personalized skincare solutions. Her areas of focus include chronic skin conditions, anti-aging treatments, and pediatric dermatology.",
      "Dr. Johnson is committed to providing a welcoming environment where patients can discuss their skin concerns openly. She emphasizes the importance of sun protection and skin health education, helping patients achieve and maintain radiant, healthy skin through every stage of life.",
    ],
  },
];
