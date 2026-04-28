export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  mainImage: string;
  subImages: string[];
  keyTrends: {
    title: string;
    description: string;
    points: string[];
    footerText: string;
  };
  futureInnovations: {
    title: string;
    description: string;
  };
  advances: {
    title: string;
    description: string;
    secondaryDescription: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "cardiology",
    title: "Cardiology",
    description: "Our passionate cardiology team prioritizes your well-being and comfort. We provide specialized healthcare tailored to your needs, ensuring you receive the highest level of care. With our expertise and compassion, we are committed to supporting your heart health every step of the way.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Cardiology Care.",
      description: "Cardiovascular care is rapidly evolving with innovative technologies and treatments improving patient outcomes. Telemedicine allows remote consultations, especially in increasing access and convenience. Advanced imaging insights help in precise earlier and more accurate diagnosis of heart conditions. Minimal-invasive procedures, like catheter-based interventions, reduce recovery times and complications.",
      points: [
        "Personalized approach based on heart special state-of-art.",
        "Advanced imaging improves early heart diseases diagnosis.",
        "Wearable devices maintain for health continuity in real-time.",
        "Minimally invasive procedures reduce patient recovery time.",
        "Preventive cardiology focus on lifestyle and risk detection.",
        "Remote monitoring supports ongoing patient care management.",
        "Patient education empowers healthier heart lifestyle choices.",
        "AI analyzes data to enhance clinical decision making."
      ],
      footerText: "Preventive cardiology is gaining focus, emphasizing lifestyle changes and early risk detection to avoid severe heart disease. Telemedicine also continues to enhance patient health connectivity, allowing patients to stay informed in long-distance real-time. Artificial intelligence and big data are transforming cardiovascular care, improving personalized decision-making and predicting potential complications. Together, these trends are transforming cardiology care."
    },
    futureInnovations: {
      title: "Future Cardiology Innovations.",
      description: "The future of cardiology is bright, with innovations transforming patient care. Telemedicine is enhancing accessibility, allowing patients to connect with specialists from anywhere. Cutting-edge imaging technologies are paving the way for earlier and more precise heart condition diagnoses. Additionally, minimally invasive techniques, such as catheter-based procedures, are streamlining recovery and minimizing risks."
    },
    advances: {
      title: "Cardiology Advances Today.",
      description: "Cardiology is progressing rapidly, with new technologies and treatments leading to better patient outcomes. Telemedicine facilitates remote consultations with specialists from anywhere. Cutting-edge imaging techniques allow for earlier and more precise heart condition diagnoses. Additionally, minimally invasive techniques, such as catheter-based procedures, shorten recovery times and lower risks.",
      secondaryDescription: "Cardiology is advancing rapidly, with innovative technologies and treatments improving patient care. Telemedicine facilitates remote consultations with specialists, making access and more convenient. Cutting-edge imaging methods lead to earlier and more precise diagnosis of heart diseases."
    },
    contactInfo: {
      address: "4517 Serenity Ln, Sunset Hills, USA",
      phone: "(555) +1-212-425-5517",
      email: "Information.34@fs.com"
    }
  },
  {
    slug: "neurology",
    title: "Neurology",
    description: "Our dedicated neurology team focuses on the health of your brain and nervous system. We provide comprehensive evaluations and treatments for complex neurological conditions, ensuring personalized care through advanced diagnostics and a compassionate approach.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Neurological Care.",
      description: "Neuroscience is witnessing a revolution in therapeutic approaches and diagnostic precision. From AI-driven EEG analysis to personalized rehabilitation protocols, the focus is shifting towards brain health optimization and early intervention in neurodegenerative diseases.",
      points: [
        "Precision medicine for neurogenetic conditions.",
        "Advanced neuroimaging for early stroke detection.",
        "Brain-computer interfaces for mobility restoration.",
        "Neuroplasticity-based rehabilitation programs.",
        "Non-invasive brain stimulation techniques.",
        "Digital biomarkers for cognitive monitoring.",
        "Tele-neurology for rural healthcare access.",
        "Integrative care for chronic headache management."
      ],
      footerText: "The integration of digital health tools is enabling continuous monitoring of neurological symptoms, allowing for proactive adjustments in treatment. Research into the gut-brain axis and neuroinflammation is opening new pathways for preventive strategies. Together, these innovations are redefining the standards of neurological care."
    },
    futureInnovations: {
      title: "Future Neurology Innovations.",
      description: "Emerging therapies like gene editing and stem cell research hold the promise of reversing damage from conditions like Alzheimer's and Parkinson's. Neuro-robotics will further enhance surgical precision and physical therapy outcomes, making recovery more effective and accessible."
    },
    advances: {
      title: "Neurology Advances Today.",
      description: "Today's neurology combines high-tech diagnostics with holistic patient support. New pharmacological treatments for multiple sclerosis and innovative epilepsy management are significantly improving quality of life. Real-time data from wearables is providing clinicians with unprecedented insights into brain activity.",
      secondaryDescription: "Modern neurology is characterized by a deep understanding of neural networks and the application of that knowledge to create life-changing therapies. The focus remains on preserving cognitive function and enhancing the overall neurological well-being of our patients."
    },
    contactInfo: {
      address: "123 Brain Center Dr, North Hills, USA",
      phone: "(555) +1-212-425-6677",
      email: "Neurology.Care@fs.com"
    }
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    description: "Our orthopedic specialists are experts in restoring mobility and strength. Whether it's a sports injury or joint replacement, we utilize the latest surgical and non-surgical techniques to get you back to your active lifestyle with confidence and minimal pain.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Orthopedic Excellence.",
      description: "Orthopedic surgery is moving towards ultra-minimally invasive techniques and biological enhancements. Robot-assisted joint replacements are now providing unmatched precision, while regenerative medicine is offering new hope for tissue repair without major surgery.",
      points: [
        "Robot-assisted precision in joint replacements.",
        "Regenerative therapies like PRP and stem cells.",
        "Custom 3D-printed orthopedic implants.",
        "Outpatient surgical procedures for faster recovery.",
        "Wearable tech for post-op progress tracking.",
        "Focus on joint preservation over replacement.",
        "Smart bandages for wound monitoring.",
        "Advanced sports medicine for peak performance."
      ],
      footerText: "Bio-compatible materials and advanced surgical navigation systems are reducing the risk of implant failure and improving long-term outcomes. The shift towards value-based care is ensuring that every patient receives a personalized recovery plan that optimizes their functional independence."
    },
    futureInnovations: {
      title: "Future Orthopedic Innovations.",
      description: "The future involves bio-synthetic tissues that mimic natural cartilage and bone, potentially eliminating the need for metallic implants. Remote-controlled rehabilitation exoskeletons will allow patients to undergo intensive physical therapy from the comfort of their homes."
    },
    advances: {
      title: "Orthopedic Advances Today.",
      description: "Modern orthopedics is focused on getting patients moving sooner. Accelerated recovery protocols and improved anesthesia techniques are making major surgeries safer and recovery times shorter. The use of biological grafts is enhancing the body's natural healing processes.",
      secondaryDescription: "Orthopedics is no longer just about fixing bones; it's about optimizing movement and life quality. With the latest in biomechanical research, we are able to provide treatments that are as unique as the patients themselves."
    },
    contactInfo: {
      address: "888 Mobility Way, West Plains, USA",
      phone: "(555) +1-212-425-8899",
      email: "Ortho.Expert@fs.com"
    }
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    description: "Our pediatric care team provides a warm and nurturing environment for children of all ages. From newborn wellness to adolescent health, we are committed to providing the highest quality medical care while supporting the unique developmental needs of every child.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Pediatric Health.",
      description: "Child healthcare is shifting towards a more holistic, family-centered approach. Modern pediatrics emphasizes early developmental screening, nutritional optimization, and mental health support, ensuring that children thrive both physically and emotionally.",
      points: [
        "Family-centered care models.",
        "Early neurodevelopmental screening.",
        "Focus on childhood obesity prevention.",
        "Integrated pediatric mental health services.",
        "Adolescent-specific wellness programs.",
        "School-based health initiative integration.",
        "Vaccination advocacy and education.",
        "Pediatric sub-specialty access via telehealth."
      ],
      footerText: "The use of kid-friendly diagnostic tools and a focus on reducing procedural anxiety are making doctor visits more positive for children. Continuous collaboration between pediatricians and schools is ensuring that health and education go hand-in-hand for the younger generation."
    },
    futureInnovations: {
      title: "Future Pediatrics Innovations.",
      description: "Genomic medicine will allow for even more precise early diagnosis of rare pediatric conditions. Virtual reality will play a larger role in pain management and therapy, turning challenging medical procedures into engaging and less frightening experiences for kids."
    },
    advances: {
      title: "Pediatric Advances Today.",
      description: "Today's pediatrics leverages technology to bridge the gap between clinic and home. Remote monitoring for chronic conditions like childhood asthma and diabetes is providing parents with peace of mind and clinicians with critical real-time data.",
      secondaryDescription: "We believe in treating the whole child, not just the symptoms. Our approach integrates physical health with developmental milestones and emotional well-veing, ensuring every child has the best possible start in life."
    },
    contactInfo: {
      address: "333 Childrens Park, East Side, USA",
      phone: "(555) +1-212-425-1122",
      email: "Kids.Health@fs.com"
    }
  },
  {
    slug: "oncology",
    title: "Oncology",
    description: "Our oncology department is at the forefront of cancer care, combining cutting-edge treatments with deep compassion. We provide a multidisciplinary approach, ensuring that every patient has a personalized plan that includes the latest in immunotherapy, targeted therapy, and supportive care.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Cancer Care.",
      description: "Oncology is moving away from a one-size-fits-all approach towards precision oncology. By analyzing the genetic makeup of tumors, we can now offer treatments that are highly targeted, minimizing side effects and significantly improving the chances of long-term remission.",
      points: [
        "Precision oncology and genetic testing.",
        "Advanced immunotherapy breakthroughs.",
        "Targeted radiation therapy techniques.",
        "Liquid biopsies for early cancer detection.",
        "Integrative supportive care programs.",
        "Clinical trials for next-gen treatments.",
        "Survivorship and long-term follow-up.",
        "Multi-disciplinary tumor board reviews."
      ],
      footerText: "The focus on quality of life during treatment is leading to more robust supportive care services, including nutritional counseling and psychological support. Collaborative research efforts are accelerating the transition of laboratory breakthroughs into life-saving clinical applications."
    },
    futureInnovations: {
      title: "Future Oncology Innovations.",
      description: "Personalized cancer vaccines and CAR-T cell therapies are poised to become standard treatments for a wider range of cancers. Nano-medicine will allow for even more precise delivery of chemotherapy directly to cancer cells, sparing healthy tissue almost entirely."
    },
    advances: {
      title: "Oncology Advances Today.",
      description: "Modern oncology is characterized by a rapid pace of discovery. Today's treatments are more effective and better tolerated than ever before, thanks to advances in molecular biology and pharmacy. Liquid biopsies are changing how we monitor treatment response in real-time.",
      secondaryDescription: "We are committed to standing by our patients through every phase of their journey. Our comprehensive care model ensures that medical treatment is matched by emotional and social support, providing a truly holistic path to healing."
    },
    contactInfo: {
      address: "777 Hope Blvd, North Port, USA",
      phone: "(555) +1-212-425-4433",
      email: "Oncology.Care@fs.com"
    }
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    description: "Our dermatology team provides expert care for all skin, hair, and nail conditions. From medical dermatology for complex skin diseases to advanced cosmetic procedures, we are dedicated to helping you achieve healthy, radiant skin at every stage of life.",
    mainImage: "/images/service_details/service_details_hero.webp",
    subImages: [
      "/images/service_details/sub_image-1.webp",
      "/images/service_details/sub_image-2.webp",
      "/images/service_details/sub_image-3.webp"
    ],
    keyTrends: {
      title: "Key Trends in Skin Health.",
      description: "Dermatology is increasingly utilizing digital imaging and AI for early skin cancer detection. There is also a significant shift towards minimally invasive cosmetic enhancements that provide natural-looking results with minimal downtime.",
      points: [
        "AI-assisted skin lesion analysis.",
        "Teledermatology for rapid consultations.",
        "Non-invasive skin tightening procedures.",
        "Advanced laser therapies for pigmentation.",
        "Personalized skincare based on DNA.",
        "Biologic therapies for chronic psoriasis.",
        "Micro-needling and regenerative aesthetics.",
        "Focus on skin microbiome health."
      ],
      footerText: "The emphasis on sun protection and early detection is saving lives, while new treatments for chronic conditions like eczema are providing long-awaited relief. The fusion of medical expertise with aesthetic sensitivity is ensuring that patients feel good both inside and out."
    },
    futureInnovations: {
      title: "Future Dermatology Innovations.",
      description: "3D-printed skin grafts and advanced gene therapies for inherited skin disorders are on the horizon. Wearable UV sensors will become more integrated into daily life, providing personalized sun safety recommendations in real-time."
    },
    advances: {
      title: "Dermatology Advances Today.",
      description: "Today's dermatologists have an incredible array of tools at their disposal. From biologic drugs that clear severe psoriasis to laser systems that can precisely target vascular lesions, the possibilities for skin restoration are greater than ever.",
      secondaryDescription: "Skin is our body's largest organ and its first line of defense. Our approach to dermatology combines medical rigor with an understanding of skin's role in self-confidence, ensuring comprehensive care for both health and beauty."
    },
    contactInfo: {
      address: "222 Radiance Lane, Glow City, USA",
      phone: "(555) +1-212-425-2211",
      email: "Skin.Care@fs.com"
    }
  }
];
