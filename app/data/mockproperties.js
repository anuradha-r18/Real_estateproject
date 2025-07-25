const mockProperties = [
  {
    id: 1,
    image: '/images/SchmittleinFacade.jpeg', // Example: Ensure this path is correct in your public/images
    alt: 'Luxury Villa in Mumbai',
    type: 'Villa',
    status: 'For Sale', // Changed 'For buy' to 'For Sale' for clarity
    title: 'Spacious Luxury Villa in  Bandra',
    location: 'Bandra, Mumbai',
    beds: 5,
    baths: 4,
    sqft: '6500',
    price: '3,50,00,000', // 3.5 Crore
    purchaseType: 'Purchase' // Added for the "Purchase" label in the bottom right
  },
  {
    id: 2,
    image: '/images/760x470xc.webp', // Placeholder: Add your own image to public/images
    alt: 'High-Rise Apartment in Mumbai',
    type: 'Apartment',
    status: 'For Sale',
    title: 'Premium 3BHK Apartment with Sea View',
    location: 'Mumbai',
    beds: 3,
    baths: 3,
    sqft: '1800',
    price: '4,20,00,000', // 4.2 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 3,
    image: '/images/Towles-Court-in-Sarasota-Homes-for-Sale-4.jpg', // Placeholder: Add your own image to public/images
    alt: 'Modern Condo in Delhi',
    type: 'Condo',
    status: 'For Rent', // Changed to 'For Rent'
    title: 'Elegant 2BHK Condo in Saket, South Delhi',
    location: 'Delhi',
    beds: 2,
    baths: 2,
    sqft: '1200',
    price: '75,000 / month', // Price updated to reflect rent
    purchaseType: 'Rent' // Label for rent properties
  },
  {
    id: 4,
    image: '/images/image copy 8.png', // Placeholder: Add your own image to public/images
    alt: 'Greenery Bungalow in Bangalore',
    type: 'Bungalow',
    status: 'For Sale',
    title: 'Charming 4BHK Bungalow in Koramangala',
    location: 'Bangalore',
    beds: 4,
    baths: 4,
    sqft: '4500',
    price: '2,80,00,000', // 2.8 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 5,
    image: '/images/GRADEBALDWIN15FINAL.1506068287.7175.webp', // Placeholder: Add your own image to public/images
    alt: 'Luxurious Penthouse in Pune',
    type: 'Penthouse',
    status: 'For Sale',
    title: 'Panoramic Penthouse in Kalyani Nagar',
    location: 'Pune',
    beds: 4,
    baths: 5,
    sqft: '7000',
    price: '5,00,00,000', // 5 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 6,
    image: '/images/Traditional-houses-in-Kerala-modern.jpg', // Placeholder: Add your own image to public/images
    alt: 'Spacious House in Thrissur',
    type: 'House',
    status: 'For Rent',
    title: 'House in Thrissur',
    location: 'Thrissur',
    beds: 7,
    baths: 8,
    sqft: '800',
    price: '150,000 / month',
    purchaseType: 'Rent'
  },
  {
    id: 7,
    image: '/images/french-2.jpg', // Placeholder: Add your own image to public/images
    alt: 'Sprawling Farmhouse in Delhi',
    type: 'Farmhouse',
    status: 'For Sale',
    title: 'Sprawling Farmhouse with Lush Garden',
    location: 'Delhi',
    beds: 6,
    baths: 5,
    sqft: '15000',
    price: '10,00,00,000', // 10 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 8,
    image: '/images/760x470xc (1).webp', // Placeholder: Add your own image to public/images
    alt: 'Contemporary Villa in Bangalore',
    type: 'Villa',
    status: 'For Sale',
    title: 'Contemporary 3BHK Villa in Sarjapur Road',
    location: 'Bangalore',
    beds: 3,
    baths: 3,
    sqft: '3200',
    price: '1,80,00,000', // 1.8 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 9,
    image: '/images/Raffles-Park-2.jpg', // Placeholder: Add your own image to public/images
    alt: 'Commercial Office Space in Pune',
    type: 'Office Space',
    status: 'For Rent',
    title: 'Modern Office Space in Hinjewadi IT Park',
    location: 'Pune',
    beds: 0, // No beds for office space
    baths: 2,
    sqft: '1000',
    price: '60,000 / month',
    purchaseType: 'Rent'
  },
  {
    id: 10,
    image: '/images/Free-Awesome-House-Map-in-Pakistan-for-Large-House-feature.webp', // Placeholder: Add your own image to public/images
    alt: 'Compact 2BHK in Mumbai',
    type: 'Apartment',
    status: 'For Sale',
    title: 'Affordable 2BHK in Thane West',
    location: 'Mumbai',
    beds: 2,
    baths: 2,
    sqft: '850',
    price: '85,00,000', // 85 Lakhs
    purchaseType: 'Purchase'
  },
  {
    id: 11,
    image: '/images/contemporary-houses-kerala.jpg', // Placeholder: Add your own image to public/images
    alt: 'House in Kerala',
    type: 'Independent House',
    status: 'For Sale',
    title: '4BHK Independent House in Kerala',
    location: 'Kerala',
    beds: 3,
    baths: 3,
    sqft: '2500',
    price: '1,50,00,000', // 1.5 Crore
    purchaseType: 'Purchase'
  },
  {
    id: 12,
    image: '/images/images.jpeg', // Placeholder: Add your own image to public/images
    alt: 'Townhouse in Mumbai Gated Community',
    type: 'Townhouse',
    status: 'For Sale',
    title: 'Sleek Living in a Gated Setting.',
    location: 'Mumbai',
    beds: 4,
    baths: 4,
    sqft: '3800',
    price: '2,10,00,000', // 2.1 Crore
    purchaseType: 'Purchase'
  },
];

export default mockProperties;