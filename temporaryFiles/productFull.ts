import { ProductFull } from "@/types/product";

export const PRODUCTS_FULL: ProductFull = {
  _id: "0",
  photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
  name: "Aspirin",
  suppliers: "Square",
  stock: "12",
  price: "89.66",
  category: "Medicine",
  reviews: [
    {
      _id: "12asfr5434we",
      name: "Maria Tkachuk",
      rating: 5,
      createdAt: "2023-01-01",
      testimonial:
        "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!",
    },
    {
      _id: "123434lk34we",
      name: "Sergey Rybachok",
      rating: 5,
      createdAt: "2023-01-01",
      testimonial:
        "I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.",
    },
    {
      _id: "453fhtgh54",
      name: "Natalia Chatuk",
      rating: 5,
      createdAt: "2023-01-01",
      testimonial:
        "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
    },
    {
      _id: "453sd33g54",
      name: "Natalia Chatuk",
      rating: 3.6,
      createdAt: "2026-01-01",
      testimonial:
        "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
    },
  ],
  description: [
    {
      title: "Medicinal Uses",
      content:
        "Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution.",
    },
    {
      title: "Antioxidant Properties",
      content:
        "Moringa is packed with antioxidants that help fight oxidative stress and inflammation in the body.",
    },
    {
      title: "Anti-Diabetic Effects",
      content:
        "Some studies have shown that moringa leaves might lower blood sugar levels, making it a valuable supplement for managing diabetes.",
    },
    {
      title: "Heart Health",
      content:
        "The plant has been linked to reduced cholesterol levels, which is vital for heart health.",
    },
    {
      title: "Anti-Cancer Properties",
      content:
        "Certain compounds in moringa, such as niazimicin, have been found to suppress the growth of cancer cells in laboratory studies.",
    },
    {
      title: "Immune Support",
      content:
        "With its high vitamin C content, moringa can boost the immune system.",
    },
    {
      title: "Digestive Aid",
      content:
        "Moringa can help in treating digestive disorders due to its anti-inflammatory properties.",
    },
  ],
};
