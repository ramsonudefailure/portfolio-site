export const portfolioItemsByCategory = {
  "Manipulations": [],
  "Retouching": [
    { id: 1, src: "/images/Retouchings/Master.jpg", alt: "Master" },
    { id: 2, src: "/images/Retouchings/Master-1-1-After-Retouch.jpg", alt: "Retouching 2" },
    { id: 3, src: "/images/Retouchings/Life-is-very-short-full.jpg", alt: "Retouching 3" },
    { id: 4, src: "/images/Retouchings/Life-is-very-short-full 3-4.jpg", alt: "Retouching 4" },
  ],
  "Flyers & Cards": [],
  "CDP": [
    { id: 1, src: "/images/CDP/WorldKajalism.jpg", alt: "World Kajalism" },
  ],
  "Birthday Designs": [
    { id: 1, src: "/images/Birthday Designs/HappyBirthdayShanviSri.jpg", alt: "Happy Birthday Shanvi Sri" },
    { id: 2, src: "/images/Birthday Designs/HappyBirthdayYamiGautam.jpg", alt: "Happy Birthday Yami Gautam" },
    { id: 3, src: "/images/Birthday Designs/HappyBirthdayAishwaryaRai.jpg", alt: "Happy Birthday Aishwarya Rai" },
    { id: 4, src: "/images/Birthday Designs/HappyBirthdayAnanyaPandey.webp", alt: "Happy Birthday Ananya Pandey" },
    { id: 5, src: "/images/Birthday Designs/HappyBirthdayAshikaRanganath.webp", alt: "Happy Birthday Ashika Ranganath" },
    { id: 6, src: "/images/Birthday Designs/HappyBirthdayMaheshBabu.webp", alt: "Happy Birthday Mahesh Babu" },
    { id: 7, src: "/images/Birthday Designs/HappyBirthdayJeevaRebel.webp", alt: "Happy Birthday Jeeva Rebel" },
    { id: 8, src: "/images/Birthday Designs/HappyBirthdayKashishKhan.webp", alt: "Happy Birthday Kashish Khan" },
    { id: 9, src: "/images/Birthday Designs/HappyBirthdayNehaShetty.jpg", alt: "Happy Birthday Neha Shetty" },
    { id: 10, src: "/images/Birthday Designs/HappyBirthdayNaguPowerKing.webp", alt: "Happy Birthday Nagu Power King" },
    { id: 11, src: "/images/Birthday Designs/HappyBirthdayNishaAggarwal.webp", alt: "Happy Birthday Nisha Aggarwal" },
    { id: 12, src: "/images/Birthday Designs/HappyBirthdayPoojaFriend.webp", alt: "Happy Birthday Pooja Friend" },
    { id: 13, src: "/images/Birthday Designs/HappyBirthdayPoojaHegde.webp", alt: "Happy Birthday Pooja Hegde" },
    { id: 14, src: "/images/Birthday Designs/HappyBirthdayPrabhas.webp", alt: "Happy Birthday Prabhas" },
    { id: 15, src: "/images/Birthday Designs/HappyBirthdayPriyankaMohan.webp", alt: "Happy Birthday Priyanka Mohan" },
    { id: 16, src: "/images/Birthday Designs/HappyBirthdayPSPK.webp", alt: "Happy Birthday Power Star Pavan Kalyan" },
    { id: 17, src: "/images/Birthday Designs/HappyBirthdayRakulPreet.webp", alt: "Happy Birthday Rakul Preet" },
    { id: 18, src: "/images/Birthday Designs/HappyBirthdaySaiKiran.webp", alt: "Happy Birthday Sai Kiran" },
  ],  
  "Other Designs": [],
};

// Flatten all items into one array for "All" category
export const portfolioItems = Object.entries(portfolioItemsByCategory).flatMap(
  ([category, items]) => items.map(item => ({ ...item, category }))
);
