// Плейсхолдеры: серый фон + название товара
const ph = (text, bg = 'E5E5E5', color = '777777', w = 400, h = 500) =>
  `https://placehold.co/${w}x${h}/${bg}/${color}?text=${encodeURIComponent(text)}&font=poppins`;

// Фото товаров (одежда) — плейсхолдеры
export const MOCK_PRODUCTS = [
  { id: 1, title: 'Black Sweatshirt', brand: "Jhanvi's Brand", price: 123, image: ph('Sweatshirt','2C2C2C','white'), category: 'men', type: 'hoodies', rating: 4.5, colors: ['black','gray'], sizes: ['S','M','L','XL'] },
  { id: 2, title: 'Line Pattern Black Hoodie', brand: "AS's Brand", price: 37, image: ph('Hoodie','111111','white'), category: 'men', type: 'hoodies', rating: 4, colors: ['black'], sizes: ['M','L'] },
  { id: 3, title: 'Black Shorts', brand: "MM's Brand", price: 37, image: ph('Shorts','333333','white'), category: 'women', type: 'shorts', rating: 5, colors: ['black'], sizes: ['S','M'] },
  { id: 4, title: 'Lavender Hoodie', brand: "Nike's Brand", price: 119, image: ph('Hoodie','C8B6E2','111111'), category: 'women', type: 'hoodies', rating: 4.5, colors: ['purple'], sizes: ['S','M','L'] },
  { id: 5, title: 'White T-Shirt', brand: "Priya's Brand", price: 15, image: ph('T-Shirt','F5F5F5','111111'), category: 'women', type: 'tshirts', rating: 4, colors: ['white'], sizes: ['XS','S','M'] },
  { id: 6, title: 'Dark Green Sweatshirt', brand: "Robato's Brand", price: 127, image: ph('Sweatshirt','2C4B44','white'), category: 'men', type: 'hoodies', rating: 5, colors: ['green'], sizes: ['M','L','XL'] },
  { id: 7, title: 'Lavender Sweatshirt', brand: "Jhanvi's Brand", price: 133, image: ph('Sweatshirt','B8A0D8','111111'), category: 'women', type: 'hoodies', rating: 4, colors: ['purple'], sizes: ['S','M'] },
  { id: 8, title: 'Urban Jacket', brand: "Sogar's Brand", price: 79, image: ph('Jacket','D4C5B0','111111'), category: 'men', type: 'jackets', rating: 4.5, colors: ['beige'], sizes: ['M','L','XL'] },
  { id: 9, title: 'Plain White T-Shirt', brand: "Jhanvi's Brand", price: 123, image: ph('T-Shirt','FFFFFF','888888'), category: 'men', type: 'tshirts', rating: 4, colors: ['white'], sizes: ['S','M','L','XL'] },
  { id: 10, title: 'Checks Shirt', brand: "HM's Brand", price: 123, image: ph('Shirt','C0392B','white'), category: 'men', type: 'shirts', rating: 4.5, colors: ['red'], sizes: ['M','L'] },
  { id: 11, title: 'Black Top', brand: "Nike's Brand", price: 123, image: ph('Top','1A1A1A','white'), category: 'women', type: 'tops', rating: 5, colors: ['black'], sizes: ['S','M'] },
  { id: 12, title: 'Denim Blue Shirt', brand: "MOMO's Brand", price: 38, image: ph('Shirt','3B82F6','white'), category: 'men', type: 'shirts', rating: 4, colors: ['blue'], sizes: ['M','L','XL'] },
  { id: 13, title: 'Floral Summer Dress', brand: "Femme's Brand", price: 89, image: ph('Dress','F8B8C8','111111'), category: 'women', type: 'dresses', rating: 5, colors: ['pink'], sizes: ['XS','S','M'] },
  { id: 14, title: 'Beige Trench Coat', brand: "Lux's Brand", price: 199, image: ph('Coat','D4C5B0','111111'), category: 'women', type: 'coats', rating: 4.5, colors: ['beige'], sizes: ['S','M','L'] },
  { id: 15, title: 'Knit Joggers', brand: "Comfy's Brand", price: 55, image: ph('Joggers','9CA3AF','white'), category: 'men', type: 'joggers', rating: 4, colors: ['gray'], sizes: ['M','L','XL'] },
  { id: 16, title: 'Yellow Sweatshirt', brand: "Sun's Brand", price: 77, image: ph('Sweatshirt','F4D35E','111111'), category: 'women', type: 'hoodies', rating: 4.5, colors: ['yellow'], sizes: ['S','M','L'] },
];

export const MOCK_CATEGORIES = {
  men: [
    { id: 'm1', title: 'Shirts', image: ph('Shirts','3B82F6','white',300,300) },
    { id: 'm2', title: 'Printed T-Shirts', image: ph('T-Shirts','111111','white',300,300) },
    { id: 'm3', title: 'Plain T-Shirt', image: ph('Plain','F5F5F5','111111',300,300) },
    { id: 'm4', title: 'Polo T-Shirt', image: ph('Polo','22C55E','white',300,300) },
    { id: 'm5', title: 'Hoodies', image: ph('Hoodies','8B5CF6','white',300,300) },
    { id: 'm6', title: 'Jeans', image: ph('Jeans','1E3A8A','white',300,300) },
    { id: 'm7', title: 'Activewear', image: ph('Activewear','EF4444','white',300,300) },
    { id: 'm8', title: 'Boxers', image: ph('Boxers','374151','white',300,300) },
  ],
  women: [
    { id: 'w1', title: 'Hoodies', image: ph('Hoodies','C8B6E2','111111',300,300) },
    { id: 'w2', title: 'Coats & Parkas', image: ph('Coats','D4C5B0','111111',300,300) },
    { id: 'w3', title: 'Tees & T-Shirt', image: ph('Tees','F5F5F5','111111',300,300) },
    { id: 'w4', title: 'Dresses', image: ph('Dresses','F8B8C8','111111',300,300) },
  ],
};

export const MOCK_NEW_ARRIVAL = [
  { id: 'na1', title: 'Knitted Joggers', image: ph('Joggers','9CA3AF','white',300,300) },
  { id: 'na2', title: 'Full Sleeve', image: ph('Full Sleeve','2C2C2C','white',300,300) },
  { id: 'na3', title: 'Active T-Shirts', image: ph('Active','EF4444','white',300,300) },
  { id: 'na4', title: 'Urban Shirts', image: ph('Urban','3B82F6','white',300,300) },
];

export const MOCK_BIG_SAVING = [
  { id: 'bs1', title: 'Hawaiian Shirts', subtitle: 'Dress up in summer vibe', discount: 'UPTO 50% OFF', image: ph('Hawaiian','5DADE2','white',400,400), bg: '#5DADE2', color: 'white' },
  { id: 'bs2', title: 'Printed T-Shirt', subtitle: 'New Designs Every Week', discount: 'UPTO 40% OFF', image: ph('Printed','F5B7B1','111111',400,400), bg: '#F5B7B1', color: 'white' },
  { id: 'bs3', title: 'Cargo Joggers', subtitle: 'Move with style & comfort', discount: 'UPTO 50% OFF', image: ph('Cargo','D5DBDB','111111',400,400), bg: '#D5DBDB', color: 'black' },
  { id: 'bs4', title: 'Urban Shirts', subtitle: 'Live In Comfort', discount: 'FLAT 60% OFF', image: ph('Urban','F0E5D8','111111',400,400), bg: '#F0E5D8', color: 'black' },
  { id: 'bs5', title: 'Oversized T-Shirts', subtitle: 'Street Style Icon', discount: 'FLAT 60% OFF', image: ph('Oversized','AED6F1','111111',400,400), bg: '#AED6F1', color: 'black' },
];

export const MOCK_BRANDS = ['Nike', 'H&M', "Levi's", 'U.S. Polo', 'Puma'];

export const MOCK_FEEDBACK = [
  { id: 1, name: 'Floyd Miles', avatar: ph('FM','8B5CF6','white',100,100), rating: 4, text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.' },
  { id: 2, name: 'Ronald Richards', avatar: ph('RR','F4D35E','111111',100,100), rating: 4, text: 'Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  { id: 3, name: 'Savannah Nguyen', avatar: ph('SN','22C55E','white',100,100), rating: 4, text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.' },
];

export const MOCK_HERO_SLIDES = [
  { id: 1, eyebrow: 'T-Shirt / Tops', title: 'Summer\nValue Pack', subtitle: 'cool / colorful / comfy', image: ph('Summer Pack','1EA9DD','white',600,700), bg: '#1EA9DD', textColor: 'white' },
  { id: 2, eyebrow: 'New Collection', title: 'Spring\nVibes', subtitle: 'fresh / modern / light', image: ph('Spring','F8B8C8','111111',600,700), bg: '#F8B8C8', textColor: 'white' },
  { id: 3, eyebrow: 'Winter Deals', title: 'Cozy\nSeason', subtitle: 'warm / soft / stylish', image: ph('Cozy','2C4B44','white',600,700), bg: '#2C4B44', textColor: 'white' },
];
