export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: string;
  date: string;
  initials: string;
  verified: boolean;
}

export interface GoogleReviewSummary {
  rating: number;
  reviewCount: number;
  reviewCountDisplay: string;
  sourceName: string;
  url: string;
}

export const googleReviewSummary: GoogleReviewSummary = {
  rating: 4.9,
  reviewCount: 100,
  reviewCountDisplay: "100+",
  sourceName: "Google Reviews",
  url: "https://www.google.com/search?q=pratiksha-enterprises&rlz=1C1CHBD_enIN1066IN1066&oq=pratiksha+enterpri&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyBwgCEAAYgAQyDQgDEC4YrwEYxwEYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkxMzIxMmowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3959b5a6de8bc4e1:0x9ebcc57074b828e3,1,,,,",
};

/**
 * Verified Real Customer Reviews directly from Google Business Profile
 * Link: https://www.google.com/maps?cid=11438234240399452387
 */
export const reviews: Review[] = [
  {
    id: 1,
    name: "Chetan Rakholiya",
    rating: 5,
    date: "3 months ago",
    source: "Google Review",
    initials: "CR",
    verified: true,
    text: "I am very satisfied with the earthing solution provided by Pratiksha Earthing Solution. The product quality is excellent, durable, and performs as expected. The installation process was smooth, and the team was professional and knowledgeable.\n\nThe earthing system has improved electrical safety and reliability at our site. The materials used appear to be of high quality, and the service support was prompt and helpful.\n\nI would highly recommend Pratiksha Earthing Solution to anyone looking for a reliable and effective earthing system. Great quality, good service, and excellent value for money.",
  },
  {
    id: 2,
    name: "Yagnesh Patel",
    rating: 5,
    date: "3 months ago",
    source: "Google Review",
    initials: "YP",
    verified: true,
    text: "I had a great experience with Pratiksha Earthing Company. Their products are of high quality, durable, and meet industry standards. The team was professional, knowledgeable, and provided excellent support throughout the process. Installation was completed efficiently, and the overall service was reliable and timely. I highly recommend Pratiksha Earthing Company to anyone looking for dependable earthing and lightning protection solutions.",
  },
  {
    id: 3,
    name: "Rajesh Boda",
    rating: 5,
    date: "3 months ago",
    source: "Google Review",
    initials: "RB",
    verified: true,
    text: "Excellent quality Chemical Earthing solutions and professional service. Installation was completed on time with proper guidance and support. Highly recommend Pratiksha Earthing Solutions for reliable earthing and lightning protection work.",
  },
  {
    id: 4,
    name: "Pratiksha Patel",
    rating: 5,
    date: "4 months ago",
    source: "Google Review",
    initials: "PP",
    verified: true,
    text: "Excellent quality earthing products and professional service by Pratiksha Enterprise. Their Chemical Earthing and Copper Coated Earthing solutions are highly reliable, durable, and perfect for industrial, commercial, and residential use. Best earthing manufacturer in Rajkot with timely delivery and strong customer support. Highly recommended for electrical safety and lightning protection solutions.",
  },
  {
    id: 5,
    name: "kishan barotji",
    rating: 5,
    date: "5 months ago",
    source: "Google Review",
    initials: "KB",
    verified: true,
    text: "Very happy with the service and product quality. Everything was delivered on time and exactly as promised. Highly recommend Pratiksha Enterprise for electrical needs!",
  },
];
