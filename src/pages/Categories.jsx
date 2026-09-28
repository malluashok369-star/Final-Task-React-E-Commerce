import React, { useState, useEffect } from 'react';
import './Categories.css';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Product Data with all categories - 9 items each
  const products = {
    dresses: {
      title: "Dresses",
      items: [
        { id: 1, name: "Summer Floral Dress", category: "dresses", subcategory: "Women", price: 49.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful floral print summer dress" },
        { id: 2, name: "Men's Casual Shirt", category: "dresses", subcategory: "Men", price: 39.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable casual shirt for men" },
        { id: 3, name: "Kids Party Dress", category: "dresses", subcategory: "Kids", price: 29.99, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Adorable party dress for girls" },
        { id: 4, name: "Women's Evening Gown", category: "dresses", subcategory: "Women", price: 89.99, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant evening gown for special occasions" },
        { id: 5, name: "Men's Formal Suit", category: "dresses", subcategory: "Men", price: 199.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Premium formal suit for men" },
        { id: 6, name: "Kids Casual Wear", category: "dresses", subcategory: "Kids", price: 24.99, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable casual wear for kids" },
        { id: 7, name: "Women's Denim Jacket", category: "dresses", subcategory: "Women", price: 59.99, image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stylish denim jacket for women" },
        { id: 8, name: "Men's Hoodie", category: "dresses", subcategory: "Men", price: 54.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable hoodie for men" },
        { id: 9, name: "Kids Winter Coat", category: "dresses", subcategory: "Kids", price: 44.99, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Warm winter coat for kids" }
      ]
    },
    electronics: {
      title: "Electronics Accessories",
      items: [
        { id: 10, name: "Wireless Headphones", category: "electronics", subcategory: "Audio", price: 89.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Premium wireless headphones with noise cancellation" },
        { id: 11, name: "Smart Watch", category: "electronics", subcategory: "Wearable", price: 199.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Fitness tracker with heart rate monitor" },
        { id: 12, name: "Phone Case", category: "electronics", subcategory: "Phone Accessories", price: 19.99, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Durable protective phone case" },
        { id: 13, name: "Power Bank", category: "electronics", subcategory: "Charging", price: 29.99, image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800", description: "20000mAh portable power bank" },
        { id: 14, name: "Bluetooth Speaker", category: "electronics", subcategory: "Audio", price: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Portable waterproof Bluetooth speaker" },
        { id: 15, name: "Gaming Mouse", category: "electronics", subcategory: "Gaming", price: 49.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "RGB gaming mouse with adjustable DPI" },
        { id: 16, name: "Laptop Stand", category: "electronics", subcategory: "Accessories", price: 34.99, image: "https://images.pexels.com/photos/7972747/pexels-photo-7972747.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Ergonomic laptop stand" },
        { id: 17, name: "USB-C Hub", category: "electronics", subcategory: "Accessories", price: 39.99, image: "https://images.pexels.com/photos/11931148/pexels-photo-11931148.jpeg?auto=compress&cs=tinysrgb&w=800", description: "7-in-1 USB-C hub" },
        { id: 18, name: "Mechanical Keyboard", category: "electronics", subcategory: "Gaming", price: 89.99, image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800", description: "RGB mechanical gaming keyboard" }
      ]
    },
    jewels: {
      title: "Jewels",
      items: [
        { id: 19, name: "Gold Necklace", category: "jewels", subcategory: "Women", price: 299.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant gold necklace for women" },
        { id: 20, name: "Men's Silver Ring", category: "jewels", subcategory: "Men", price: 79.99, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stylish silver ring for men" },
        { id: 21, name: "Diamond Earrings", category: "jewels", subcategory: "Women", price: 499.99, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stunning diamond earrings" },
        { id: 22, name: "Men's Bracelet", category: "jewels", subcategory: "Men", price: 59.99, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Leather and steel bracelet" },
        { id: 23, name: "Pearl Necklace", category: "jewels", subcategory: "Women", price: 199.99, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Classic pearl necklace" },
        { id: 24, name: "Gold Earrings", category: "jewels", subcategory: "Women", price: 149.99, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful gold earrings" },
        { id: 25, name: "Men's Chain", category: "jewels", subcategory: "Men", price: 89.99, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stylish silver chain" },
        { id: 26, name: "Bridal Set", category: "jewels", subcategory: "Women", price: 799.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Complete bridal jewelry set" },
        { id: 27, name: "Men's Cufflinks", category: "jewels", subcategory: "Men", price: 49.99, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Elegant silver cufflinks" }
      ]
    },
    appliances: {
      title: "Home Appliances",
      items: [
        { id: 28, name: "Coffee Maker", category: "appliances", subcategory: "Kitchen", price: 89.99, image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Automatic coffee maker with timer" },
        { id: 29, name: "Air Fryer", category: "appliances", subcategory: "Kitchen", price: 129.99, image: "https://images.pexels.com/photos/7433032/pexels-photo-7433032.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Healthy cooking with less oil" },
        { id: 30, name: "Vacuum Cleaner", category: "appliances", subcategory: "Cleaning", price: 159.99, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Powerful cordless vacuum cleaner" },
        { id: 31, name: "Microwave Oven", category: "appliances", subcategory: "Kitchen", price: 149.99, image: "https://images.pexels.com/photos/4623405/pexels-photo-4623405.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Convection microwave oven" },
        { id: 32, name: "Blender", category: "appliances", subcategory: "Kitchen", price: 59.99, image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800", description: "High-speed blender" },
        { id: 33, name: "Toaster", category: "appliances", subcategory: "Kitchen", price: 39.99, image: "https://images.pexels.com/photos/4112591/pexels-photo-4112591.jpeg?auto=compress&cs=tinysrgb&w=800", description: "4-slice toaster" },
        { id: 34, name: "Air Purifier", category: "appliances", subcategory: "Air", price: 199.99, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "HEPA air purifier" },
        { id: 35, name: "Electric Kettle", category: "appliances", subcategory: "Kitchen", price: 29.99, image: "https://images.pexels.com/photos/4107129/pexels-photo-4107129.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Stainless steel electric kettle" },
        {id: 29,name: "Washing Machine",category: "appliances",subcategory: "Home",price: 499.99,image: "https://images.pexels.com/photos/5591713/pexels-photo-5591713.jpeg?auto=compress&cs=tinysrgb&w=800",description: "Fully automatic washing machine"}
      ]
    },
    sandals: {
      title: "Sandals",
      items: [
        { id: 37, name: "Women's Flip Flops", category: "sandals", subcategory: "Women", price: 24.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable beach sandals" },
        { id: 38, name: "Men's Leather Sandals", category: "sandals", subcategory: "Men", price: 49.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Premium leather sandals" },
        { id: 39, name: "Kids Sandals", category: "sandals", subcategory: "Kids", price: 19.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Durable and comfortable kids sandals" },
        { id: 40, name: "Women's Wedge Sandals", category: "sandals", subcategory: "Women", price: 39.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stylish wedge sandals" },
        { id: 41, name: "Men's Sports Sandals", category: "sandals", subcategory: "Men", price: 44.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Outdoor sports sandals" },
        { id: 42, name: "Toddler Sandals", category: "sandals", subcategory: "Kids", price: 15.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Soft sole toddler sandals" },
        { id: 43, name: "Women's Gladiator Sandals", category: "sandals", subcategory: "Women", price: 34.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Trendy gladiator sandals" },
        { id: 44, name: "Men's Casual Sandals", category: "sandals", subcategory: "Men", price: 39.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Everyday casual sandals" },
        { id: 45, name: "Kids Water Sandals", category: "sandals", subcategory: "Kids", price: 22.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Water-friendly kids sandals" }
      ]
    },
    books: {
      title: "Books",
      items: [
        { id: 46, name: "Fiction Bestseller", category: "books", subcategory: "Fiction", price: 14.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Latest fiction bestseller" },
        { id: 47, name: "Self-Help Guide", category: "books", subcategory: "Non-Fiction", price: 19.99, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Transform your life" },
        { id: 48, name: "Cookbook", category: "books", subcategory: "Cooking", price: 24.99, image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Delicious recipes from around the world" },
        { id: 49, name: "Science Fiction", category: "books", subcategory: "Sci-Fi", price: 12.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Exciting sci-fi adventure" },
        { id: 50, name: "Business & Finance", category: "books", subcategory: "Business", price: 22.99, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Master business strategies" },
        { id: 51, name: "Children's Book", category: "books", subcategory: "Kids", price: 9.99, image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Fun stories for kids" },
        { id: 52, name: "Biography", category: "books", subcategory: "Biography", price: 18.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Inspiring life stories" },
        { id: 53, name: "Mystery Novel", category: "books", subcategory: "Mystery", price: 13.99, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Gripping mystery thriller" },
        { id: 54, name: "Poetry Collection", category: "books", subcategory: "Poetry", price: 11.99, image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful poems" }
      ]
    },
    furniture: {
      title: "Furniture Items",
      items: [
        { id: 55, name: "Modern Sofa", category: "furniture", subcategory: "Living Room", price: 599.99, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Comfortable modern sofa" },
        { id: 56, name: "Dining Table", category: "furniture", subcategory: "Dining", price: 399.99, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Wooden dining table set" },
        { id: 57, name: "Office Chair", category: "furniture", subcategory: "Office", price: 199.99, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Ergonomic office chair" },
        { id: 58, name: "Bed Frame", category: "furniture", subcategory: "Bedroom", price: 399.99, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Queen size bed frame" },
        { id: 59, name: "Bookshelf", category: "furniture", subcategory: "Storage", price: 149.99, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Modern bookshelf" },
        { id: 60, name: "Coffee Table", category: "furniture", subcategory: "Living Room", price: 129.99, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Glass coffee table" },
        { id: 61, name: "Wardrobe", category: "furniture", subcategory: "Bedroom", price: 499.99, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Spacious wardrobe" },
        { id: 62, name: "Desk", category: "furniture", subcategory: "Office", price: 179.99, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Computer desk" },
        { id: 63, name: "Nightstand", category: "furniture", subcategory: "Bedroom", price: 79.99, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Wooden nightstand" }
      ]
    },
    wearable: {
      title: "Wearable Tech",
      items: [
        { id: 64, name: "Smart Watch Pro", category: "wearable", subcategory: "Smart Watches", price: 299.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Advanced smart watch with health tracking" },
        { id: 65, name: "Fitness Tracker", category: "wearable", subcategory: "Fitness", price: 79.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Track your daily activity" },
        { id: 66, name: "Smart Ring", category: "wearable", subcategory: "Smart Jewelry", price: 129.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Monitor sleep and activity" },
        { id: 67, name: "Smart Glasses", category: "wearable", subcategory: "Smart Accessories", price: 199.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "AR smart glasses" },
        { id: 68, name: "Fitness Band", category: "wearable", subcategory: "Fitness", price: 49.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Basic fitness tracker" },
        { id: 69, name: "Smart Headband", category: "wearable", subcategory: "Wellness", price: 89.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Monitor brain activity" },
        { id: 70, name: "GPS Watch", category: "wearable", subcategory: "Sports", price: 249.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "GPS enabled sports watch" },
        { id: 71, name: "Kids Smart Watch", category: "wearable", subcategory: "Kids", price: 89.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Safe smart watch for kids" },
        { id: 72, name: "Smart Shoes", category: "wearable", subcategory: "Footwear", price: 159.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Track your running" }
      ]
    },
    sale: {
      title: "Sale",
      items: [
        { id: 73, name: "Summer Collection - 50% OFF", category: "sale", subcategory: "Fashion", price: 24.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Limited time offer on summer wear" },
        { id: 74, name: "Electronics Clearance", category: "sale", subcategory: "Electronics", price: 44.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Great deals on electronics" },
        { id: 75, name: "Jewelry Special", category: "sale", subcategory: "Jewelry", price: 149.99, originalPrice: 299.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "50% off on selected jewelry" },
        { id: 76, name: "Home Appliances Sale", category: "sale", subcategory: "Appliances", price: 89.99, originalPrice: 179.99, image: "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Great discounts on appliances" },
        { id: 77, name: "Footwear Clearance", category: "sale", subcategory: "Footwear", price: 29.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Up to 50% off on sandals" },
        { id: 78, name: "Book Festival", category: "sale", subcategory: "Books", price: 9.99, originalPrice: 19.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Special book discounts" },
        { id: 79, name: "Furniture Sale", category: "sale", subcategory: "Furniture", price: 299.99, originalPrice: 599.99, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "50% off on selected furniture" },
        { id: 80, name: "Tech Deals", category: "sale", subcategory: "Wearable", price: 149.99, originalPrice: 299.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Limited time tech offers" },
        { id: 81, name: "Mega Sale Bundle", category: "sale", subcategory: "Bundle", price: 99.99, originalPrice: 199.99, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Special bundle offer" }
      ]
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'electronics', name: 'Electronics Accessories' },
    { id: 'jewels', name: 'Jewels' },
    { id: 'appliances', name: 'Home Appliances' },
    { id: 'sandals', name: 'Sandals' },
    { id: 'books', name: 'Books' },
    { id: 'furniture', name: 'Furniture Items' },
    { id: 'wearable', name: 'Wearable Tech' },
    { id: 'sale', name: 'Sale' }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 2000);
  };

  const getDisplayProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(products).flatMap(category => category.items);
    }
    return products[selectedCategory]?.items || [];
  };

  const displayProducts = getDisplayProducts();

  return (
    <div className="categories-page">
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      
      {/* Hero Section */}
      <section className="categories-hero">
        <div className="categories-hero-overlay"></div>
        <div className="categories-hero-content">
          <h1>Shop by Categories</h1>
          <p>Discover our wide range of products across different categories</p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="container">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {displayProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.originalPrice && (
                    <span className="sale-badge">SALE</span>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.subcategory}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">
                    <span className="price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;