import { doctors as doctorDetails, Doctor as DoctorDetail } from "@/data/doctorDetails";

export type Doctor = DoctorDetail;

export const doctors: Doctor[] = doctorDetails;

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  { slug: "cardiology", name: "Cardiology", short: "Our cardiology team prioritizes your heart health.",
    description: "Our passionate cardiology team prioritizes your well-being and comfort. We provide specialized services tailored to your needs, ensuring you receive the highest level of care.",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=1200&q=80" },
  { slug: "dermatology", name: "Dermatology", short: "Advanced skin treatments and aesthetic care.",
    description: "Discover comprehensive dermatology care for healthy, radiant skin. From medical to aesthetic treatments, our team has you covered.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=80" },
  { slug: "neurology", name: "Neurology", short: "Expert neurological diagnosis and treatment.",
    description: "Discover advanced neurology care backed by powerful diagnostics, ensuring personal medication and effective recovery.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80" },
  { slug: "orthopedics", name: "Orthopedics", short: "Comprehensive bone, joint and muscle care.",
    description: "Get comprehensive orthopedic care to relieve pain and restore mobility through evidence-based therapies.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80" },
  { slug: "pediatrics", name: "Pediatrics", short: "Compassionate care for every child.",
    description: "Access specialized pediatric care that meets the unique health care needs of children, ensuring a gentle, friendly experience.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80" },
  { slug: "oncology", name: "Oncology", short: "Compassionate cancer care and treatment.",
    description: "Receive specialized oncology care led by experienced specialists, focused on personalized treatment and successful healing.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80" },
];

import { blogPosts as blogDetails, BlogPost as BlogPostDetail } from "@/data/blogDetails";

export type BlogPost = BlogPostDetail;

export const blogPosts: BlogPost[] = blogDetails;

export const faqs = [
  { q: "What Services Do You Currently Offer Patients?", a: "We offer a range of services tailored to your needs, including personalized treatment plans, wellness consultations, and ongoing support to ensure your health journey is as comfortable and effective as possible." },
  { q: "Can I Reschedule My Appointment After Booking?", a: "Yes, you can easily reschedule via our patient portal or by calling our front desk at least 24 hours before your appointment." },
  { q: "What Payment Methods Do You Currently Accept?", a: "We accept all major credit cards, debit cards, HSA/FSA, bank transfers and most major insurance providers." },
  { q: "Do You Offer Emergency Medical Services Too?", a: "We provide urgent consultations during clinic hours and can refer you to partnered emergency facilities when needed." },
  { q: "Do You Accept All Major Health Insurances?", a: "We work with most major health insurance providers. Contact our team to verify your specific plan." },
  { q: "How Long Does a Consultation Usually Take?", a: "A standard consultation typically lasts 20–40 minutes depending on the type of visit and your specific needs." },
];
