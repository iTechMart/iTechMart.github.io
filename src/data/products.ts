import { Product } from "@/types/product";

export const products: Product[] = [
  // Electronics
  {
    id: "elec-001",
    name: "Arduino Uno R3 Development Board",
    description: "Microcontroller board based on ATmega328P with 14 digital I/O pins",
    price: 24.95,
    category: "electronics",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["ATmega328P", "16 MHz", "32 KB Flash", "USB Interface"]
  },
  {
    id: "elec-002",
    name: "Raspberry Pi 5 - 8GB",
    description: "Latest Raspberry Pi single-board computer with powerful quad-core processor",
    price: 89.95,
    category: "electronics",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["8GB RAM", "Quad-core CPU", "Dual 4K display", "WiFi 6"]
  },
  {
    id: "elec-003",
    name: "ESP32 DevKit WiFi & Bluetooth Module",
    description: "Powerful IoT development board with WiFi and Bluetooth capabilities",
    price: 14.95,
    category: "electronics",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["WiFi 802.11", "Bluetooth 4.2", "Dual-core processor", "40 GPIO pins"]
  },
  {
    id: "elec-004",
    name: "OLED Display 128x64 I2C",
    description: "Compact OLED display module with high contrast and wide viewing angle",
    price: 8.95,
    category: "electronics",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["128x64 resolution", "I2C interface", "White display", "3.3-5V compatible"]
  },
  
  // Audio
  {
    id: "audio-001",
    name: "Professional Studio Headphones",
    description: "Premium over-ear headphones with superior sound quality for studio monitoring",
    price: 149.95,
    category: "audio",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["50mm drivers", "Frequency: 5Hz-35kHz", "Closed-back design", "3m cable"]
  },
  {
    id: "audio-002",
    name: "Bluetooth Speaker with Subwoofer",
    description: "Portable wireless speaker with deep bass and 360° sound",
    price: 79.95,
    category: "audio",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Bluetooth 5.0", "20W output", "10-hour battery", "IPX7 waterproof"]
  },
  {
    id: "audio-003",
    name: "USB Condenser Microphone",
    description: "Professional recording microphone with cardioid pattern for streaming and podcasting",
    price: 89.95,
    category: "audio",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Cardioid pattern", "USB-C connection", "Pop filter included", "Shock mount"]
  },
  {
    id: "audio-004",
    name: "3.5mm Audio Cable Gold Plated",
    description: "Premium auxiliary cable with gold-plated connectors for superior sound",
    price: 12.95,
    category: "audio",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["1.5m length", "Gold-plated", "Braided cable", "3.5mm stereo"]
  },

  // Power
  {
    id: "power-001",
    name: "Portable Power Station 500Wh",
    description: "Large capacity power bank with AC outlet and multiple USB ports",
    price: 399.95,
    category: "power",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["500Wh capacity", "AC outlet", "USB-C PD 100W", "Solar charging"]
  },
  {
    id: "power-002",
    name: "100W Solar Panel Foldable",
    description: "Portable solar panel with high efficiency for outdoor charging",
    price: 199.95,
    category: "power",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["100W output", "Foldable design", "23% efficiency", "Weather resistant"]
  },
  {
    id: "power-003",
    name: "18V Cordless Drill Kit",
    description: "Powerful cordless drill with battery pack and charger",
    price: 129.95,
    category: "power",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["18V battery", "2-speed gearbox", "LED work light", "2x batteries"]
  },
  {
    id: "power-004",
    name: "USB-C Power Delivery Charger 65W",
    description: "Fast charging adapter with USB-C Power Delivery for laptops and devices",
    price: 39.95,
    category: "power",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["65W output", "PD 3.0", "Foldable plug", "Universal compatibility"]
  },

  // Smart Home
  {
    id: "smart-001",
    name: "WiFi Security Camera 1080p",
    description: "Indoor security camera with night vision and motion detection",
    price: 49.95,
    category: "smarthome",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["1080p HD", "Night vision", "Two-way audio", "Cloud storage"]
  },
  {
    id: "smart-002",
    name: "Smart Speaker with Voice Assistant",
    description: "Voice-controlled speaker with premium sound and smart home control",
    price: 99.95,
    category: "smarthome",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Voice control", "Multi-room audio", "Smart home hub", "Premium drivers"]
  },
  {
    id: "smart-003",
    name: "Smart LED Light Bulb RGB",
    description: "WiFi-enabled color changing bulb with app control",
    price: 19.95,
    category: "smarthome",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["16 million colors", "WiFi control", "Voice compatible", "Energy efficient"]
  },
  {
    id: "smart-004",
    name: "Smart Doorbell with Camera",
    description: "Video doorbell with HD camera, two-way talk, and motion alerts",
    price: 129.95,
    category: "smarthome",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["1080p HD", "Motion alerts", "Cloud recording", "Two-way audio"]
  },

  // Cables
  {
    id: "cable-001",
    name: "HDMI 2.1 Cable 8K Ultra HD",
    description: "High-speed HDMI cable supporting 8K resolution and HDR",
    price: 24.95,
    category: "cables",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["8K @ 60Hz", "48Gbps", "2m length", "Braided design"]
  },
  {
    id: "cable-002",
    name: "USB-C to USB-C Cable 100W",
    description: "Fast charging cable with 100W power delivery support",
    price: 16.95,
    category: "cables",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["100W charging", "USB 3.2", "2m length", "E-marker chip"]
  },
  {
    id: "cable-003",
    name: "Ethernet Cat 8 Cable",
    description: "High-speed network cable for gaming and data centers",
    price: 29.95,
    category: "cables",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["40Gbps speed", "Cat 8", "5m length", "Shielded"]
  },
  {
    id: "cable-004",
    name: "Lightning to USB Cable MFi",
    description: "Apple certified charging cable with durable braided design",
    price: 19.95,
    category: "cables",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["MFi certified", "Fast charging", "1.8m length", "Reinforced connector"]
  },

  // Tools
  {
    id: "tool-001",
    name: "Digital Multimeter Professional",
    description: "High-precision multimeter for electrical testing and troubleshooting",
    price: 69.95,
    category: "tools",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Auto-ranging", "True RMS", "6000 count", "Safety rated"]
  },
  {
    id: "tool-002",
    name: "Soldering Station with Digital Display",
    description: "Temperature-controlled soldering iron with LCD display",
    price: 89.95,
    category: "tools",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["200-480°C", "Digital control", "ESD safe", "Stand included"]
  },
  {
    id: "tool-003",
    name: "Precision Screwdriver Set 32-in-1",
    description: "Complete screwdriver kit with magnetic bits for electronics repair",
    price: 34.95,
    category: "tools",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["32 bits", "Magnetic", "Precision tips", "Carrying case"]
  },
  {
    id: "tool-004",
    name: "Wire Stripper and Crimper Tool",
    description: "Professional wire tool for stripping and crimping various gauges",
    price: 24.95,
    category: "tools",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["10-22 AWG", "Ratcheting", "Ergonomic grip", "Multi-function"]
  },

  // Lighting
  {
    id: "light-001",
    name: "LED Strip Lights RGB 5M",
    description: "Color changing LED strip with remote control and adhesive backing",
    price: 29.95,
    category: "lighting",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["5m length", "RGB + White", "Remote control", "Cuttable"]
  },
  {
    id: "light-002",
    name: "Smart LED Panel Light",
    description: "WiFi-enabled panel light with adjustable brightness and color temperature",
    price: 49.95,
    category: "lighting",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Tunable white", "WiFi control", "Voice compatible", "Dimmable"]
  },
  {
    id: "light-003",
    name: "USB LED Work Light",
    description: "Portable work light with flexible neck and magnetic base",
    price: 19.95,
    category: "lighting",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["USB powered", "Flexible", "Magnetic base", "3 brightness levels"]
  },
  {
    id: "light-004",
    name: "Motion Sensor LED Bulb",
    description: "Energy-efficient bulb with built-in motion sensor for automatic lighting",
    price: 24.95,
    category: "lighting",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["Motion sensor", "E27 base", "12W LED", "Auto on/off"]
  },

  // Components
  {
    id: "comp-001",
    name: "Resistor Kit 600pcs Assorted",
    description: "Complete resistor assortment for electronics projects and repairs",
    price: 14.95,
    category: "components",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["600 pieces", "1/4W", "30 values", "Storage box"]
  },
  {
    id: "comp-002",
    name: "Capacitor Assortment Kit",
    description: "Mixed capacitor kit including ceramic and electrolytic types",
    price: 19.95,
    category: "components",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["500 pieces", "Various types", "Organized box", "Common values"]
  },
  {
    id: "comp-003",
    name: "Transistor Pack NPN & PNP",
    description: "Common transistors for amplification and switching circuits",
    price: 12.95,
    category: "components",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["100 pieces", "NPN & PNP", "TO-92 package", "Popular types"]
  },
  {
    id: "comp-004",
    name: "Integrated Circuit IC Chips Set",
    description: "Essential IC collection including op-amps, timers, and logic gates",
    price: 29.95,
    category: "components",
    image: "/placeholder.svg",
    inStock: true,
    specifications: ["50 ICs", "555, 741, 74 series", "DIP package", "With datasheet"]
  },
];

export const categories = [
  { id: "electronics", name: "Electronics", description: "Microcontrollers, dev boards, and modules" },
  { id: "audio", name: "Audio Equipment", description: "Headphones, speakers, and microphones" },
  { id: "power", name: "Power & Energy", description: "Power supplies, batteries, and solar panels" },
  { id: "smarthome", name: "Smart Home", description: "IoT devices and home automation" },
  { id: "cables", name: "Cables & Connectors", description: "All types of cables and adapters" },
  { id: "tools", name: "Tools & Equipment", description: "Professional tools for electronics work" },
  { id: "lighting", name: "Lighting Solutions", description: "LED strips, bulbs, and fixtures" },
  { id: "components", name: "Electronic Components", description: "Resistors, capacitors, and ICs" },
];
