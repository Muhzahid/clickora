// seed.js
require('dotenv').config();
const connectDB = require('./config/db');
const Service = require('./models/Service');
const Portfolio = require('./models/Portfolio');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('Set MONGO_URI in .env before seeding');
  process.exit(1);
}

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    short: 'Modern responsive websites using React & Node',
    details: 'We build fast, SEO-friendly websites and web apps.',
    features: ['Responsive', 'SEO-friendly', 'Fast'],
    priceFrom: '300$'
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    short: 'Grow traffic via SEO, Ads & Social Media',
    details: 'Full-funnel marketing services.',
    features: ['SEO','PPC','Social Media'],
    priceFrom: '200$'
  }
];

const portfolio = [
  {
    title: 'Business Website for ABC',
    category: 'web',
    description: 'Corporate website built with React.',
    imageUrl: 'https://via.placeholder.com/600x400',
    projectUrl: '#'
  },
  {
    title: 'Branding for XYZ',
    category: 'design',
    description: 'Logo and brand kit.',
    imageUrl: 'https://via.placeholder.com/600x400',
    projectUrl: '#'
  }
];

const seed = async () => {
  await connectDB(MONGO_URI);
  await Service.deleteMany({});
  await Portfolio.deleteMany({});
  await Service.insertMany(services);
  await Portfolio.insertMany(portfolio);
  console.log('Seeded DB with sample services & portfolio');
  process.exit();
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
