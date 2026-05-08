export const destinations = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City of India, known for its magnificent forts, palaces, and vibrant culture. A perfect blend of royal heritage and modern charm.',
    travelType: ['Historical', 'Cultural'],
    idealDuration: '3-4 days',
    budget: { min: 15000, max: 30000 },
    tags: ['Pink City', 'Forts', 'Palaces', 'Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1677868818231-b5e09bcfc5e3',
    images: [
      'https://images.unsplash.com/photo-1677868818231-b5e09bcfc5e3',
      'https://images.unsplash.com/photo-1579982978170-00b03b2c8842'
    ],
    attractions: [
      'Amber Fort',
      'Hawa Mahal',
      'City Palace',
      'Jantar Mantar',
      'Nahargarh Fort',
      'Jal Mahal',
      'Albert Hall Museum'
    ],
    bestTime: 'October to March',
    weather: 'Pleasant winters (10-25°C), hot summers (30-45°C). Monsoon brings moderate rainfall.',
    tips: [
      'Book fort entry tickets online to avoid queues',
      'Hire a local guide for historical insights',
      'Try traditional Rajasthani thali at local restaurants',
      'Bargain at Johari Bazaar and Bapu Bazaar',
      'Carry sunscreen and stay hydrated'
    ],
    coordinates: { lat: 26.9124, lon: 75.7873 },
    transport: 'Auto-rickshaws and app-based cabs are readily available. Consider hiring a car for day trips to Amber Fort.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival and City Palace exploration',
        activities: [
          {
            time: '09:00 AM',
            place: 'City Palace',
            duration: '2-3 hours',
            openingHours: '9:30 AM - 5:00 PM',
            bestTime: 'Morning to avoid crowds',
            description: 'Explore the royal residence with museums showcasing royal artifacts, textiles, and weapons.',
            tips: 'Photography allowed in courtyards, restricted in museums'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Laxmi Misthan Bhandar',
            description: 'Traditional Rajasthani thali with dal baati churma and ghewar'
          },
          {
            time: '02:00 PM',
            place: 'Jantar Mantar',
            duration: '1-2 hours',
            openingHours: '9:00 AM - 4:30 PM',
            bestTime: 'Afternoon',
            description: 'UNESCO World Heritage astronomical observatory with massive instruments.',
            tips: 'Hire a guide to understand the scientific significance'
          },
          {
            time: '04:30 PM',
            place: 'Hawa Mahal',
            duration: '1 hour',
            openingHours: '9:00 AM - 4:30 PM',
            bestTime: 'Late afternoon for golden light',
            description: 'Iconic five-story palace with 953 windows, best viewed from outside.',
            tips: 'Visit the cafe across the street for the best photo angle'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Johari Bazaar',
            description: 'Evening shopping for jewelry, textiles, and handicrafts. Try local street food like pyaaz kachori.'
          }
        ]
      },
      {
        day: 2,
        title: 'Amber Fort and hilltop forts',
        activities: [
          {
            time: '08:00 AM',
            place: 'Amber Fort',
            duration: '3-4 hours',
            openingHours: '8:00 AM - 5:30 PM',
            bestTime: 'Early morning to beat the heat',
            description: 'Majestic fort with Sheesh Mahal (Mirror Palace), courtyards, and stunning valley views.',
            tips: 'Take the elephant ride or jeep to reach the fort entrance'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Peacock Rooftop Restaurant',
            description: 'Lunch with fort views, try laal maas and ker sangri'
          },
          {
            time: '02:30 PM',
            place: 'Jaigarh Fort',
            duration: '1-2 hours',
            openingHours: '9:00 AM - 4:30 PM',
            bestTime: 'Afternoon',
            description: 'Home to the world\'s largest cannon on wheels, Jaivana.',
            tips: 'Combined ticket with Amber Fort available'
          },
          {
            time: '05:00 PM',
            place: 'Nahargarh Fort',
            duration: '2 hours',
            openingHours: '10:00 AM - 5:30 PM',
            bestTime: 'Sunset',
            description: 'Panoramic city views, especially beautiful at sunset.',
            tips: 'Stay for sunset and early evening city lights'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Chokhi Dhani',
            description: 'Traditional Rajasthani village resort with cultural performances, camel rides, and authentic dinner.'
          }
        ]
      },
      {
        day: 3,
        title: 'Museums and local markets',
        activities: [
          {
            time: '09:30 AM',
            place: 'Albert Hall Museum',
            duration: '2 hours',
            openingHours: '9:00 AM - 5:00 PM',
            bestTime: 'Morning',
            description: 'Oldest museum in Rajasthan with Egyptian mummy, miniature paintings, and decorative arts.',
            tips: 'Audio guide available for detailed information'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Rawat Mishtan Bhandar',
            description: 'Famous for pyaaz kachori and mawa kachori'
          },
          {
            time: '02:00 PM',
            place: 'Jal Mahal',
            duration: '1 hour',
            openingHours: 'Viewable from outside',
            bestTime: 'Afternoon',
            description: 'Water palace in the middle of Man Sagar Lake, beautiful photo opportunity.',
            tips: 'Boat rides currently not available, view from the lakeside promenade'
          },
          {
            time: '04:00 PM',
            place: 'Bapu Bazaar',
            duration: '2-3 hours',
            bestTime: 'Late afternoon',
            description: 'Shopping for textiles, mojari shoes, blue pottery, and souvenirs.',
            tips: 'Bargain expected, start at 50% of quoted price'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Raj Mandir Cinema',
            description: 'Experience a Bollywood movie in this iconic art deco theater.'
          }
        ]
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'India\'s beach paradise with Portuguese heritage, vibrant nightlife, and laid-back coastal charm. Perfect for beach lovers and party enthusiasts.',
    travelType: ['Beach', 'Adventure', 'Nightlife'],
    idealDuration: '4-5 days',
    budget: { min: 20000, max: 45000 },
    tags: ['Beaches', 'Nightlife', 'Water Sports', 'Portuguese Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1526370548891-1da424fcf50a',
    images: [
      'https://images.unsplash.com/photo-1526370548891-1da424fcf50a',
      'https://images.unsplash.com/photo-1666637943089-a75e349c3e3d'
    ],
    attractions: [
      'Baga Beach',
      'Calangute Beach',
      'Anjuna Flea Market',
      'Fort Aguada',
      'Basilica of Bom Jesus',
      'Dudhsagar Falls',
      'Palolem Beach'
    ],
    bestTime: 'November to February',
    weather: 'Pleasant winters (20-30°C), hot and humid summers (25-35°C). Heavy monsoon rains June-September.',
    tips: [
      'Rent a scooter for easy beach hopping',
      'Try fresh seafood at beach shacks',
      'Book water sports in advance during peak season',
      'Respect local culture when visiting churches',
      'Carry cash as many beach shacks don\'t accept cards'
    ],
    coordinates: { lat: 15.2993, lon: 74.1240 },
    transport: 'Rent scooters or bikes for flexibility. Taxis and auto-rickshaws available but negotiate fares beforehand.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'North Goa beaches and nightlife',
        activities: [
          {
            time: '10:00 AM',
            place: 'Calangute Beach',
            duration: '2-3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning for calm waters',
            description: 'Popular beach with water sports, shacks, and vibrant atmosphere.',
            tips: 'Try parasailing and jet skiing, negotiate prices'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Souza Lobo',
            description: 'Beachfront restaurant famous for Goan fish curry and prawn balchão'
          },
          {
            time: '03:00 PM',
            place: 'Baga Beach',
            duration: '3-4 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon to evening',
            description: 'Lively beach known for water sports, beach clubs, and sunset views.',
            tips: 'Visit Tito\'s Lane for shopping and cafes'
          },
          {
            time: '07:00 PM',
            type: 'meal',
            place: 'Britto\'s',
            description: 'Beachside dinner with live music, try seafood platter'
          },
          {
            time: '09:00 PM',
            type: 'evening',
            place: 'Tito\'s Club',
            description: 'Iconic nightclub with DJ nights and beach parties. Entry fee applies.'
          }
        ]
      },
      {
        day: 2,
        title: 'Portuguese heritage and Old Goa',
        activities: [
          {
            time: '09:00 AM',
            place: 'Basilica of Bom Jesus',
            duration: '1 hour',
            openingHours: '9:00 AM - 6:30 PM',
            bestTime: 'Morning',
            description: 'UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier.',
            tips: 'Dress modestly, photography restricted inside'
          },
          {
            time: '10:30 AM',
            place: 'Se Cathedral',
            duration: '45 minutes',
            openingHours: '7:30 AM - 6:00 PM',
            bestTime: 'Morning',
            description: 'Largest church in Asia with Portuguese-Manueline architecture.',
            tips: 'Visit during morning mass for a spiritual experience'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Viva Panjim',
            description: 'Authentic Goan cuisine in a heritage home, try xacuti and bebinca'
          },
          {
            time: '02:00 PM',
            place: 'Fort Aguada',
            duration: '2 hours',
            openingHours: '9:00 AM - 6:00 PM',
            bestTime: 'Afternoon',
            description: '17th-century Portuguese fort with lighthouse and panoramic sea views.',
            tips: 'Walk to the lighthouse for best views'
          },
          {
            time: '05:00 PM',
            place: 'Candolim Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Quieter beach perfect for sunset watching and evening walks.',
            tips: 'Less crowded than Calangute and Baga'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Saturday Night Market (Arpora)',
            description: 'Live music, shopping, and food stalls. Open only on Saturdays during season.'
          }
        ]
      },
      {
        day: 3,
        title: 'South Goa and Dudhsagar Falls',
        activities: [
          {
            time: '06:00 AM',
            place: 'Dudhsagar Falls',
            duration: '5-6 hours (including travel)',
            openingHours: '9:00 AM - 5:00 PM',
            bestTime: 'Early morning',
            description: 'Four-tiered waterfall on the Mandovi River, accessible by jeep safari through forest.',
            tips: 'Book jeep safari in advance, carry swimwear and change of clothes'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Martin\'s Corner',
            description: 'Famous for Goan sausage pulao and crab xec xec'
          },
          {
            time: '03:00 PM',
            place: 'Palolem Beach',
            duration: '3-4 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon to sunset',
            description: 'Crescent-shaped beach with calm waters, perfect for kayaking and dolphin spotting.',
            tips: 'Book dolphin spotting tour from beach shacks'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Silent Noise Party',
            description: 'Unique headphone party experience on Palolem Beach (seasonal).'
          }
        ]
      },
      {
        day: 4,
        title: 'Markets and water sports',
        activities: [
          {
            time: '09:00 AM',
            place: 'Anjuna Flea Market',
            duration: '3 hours',
            openingHours: 'Wednesday only, 9:00 AM - 6:00 PM',
            bestTime: 'Morning',
            description: 'Famous Wednesday market with handicrafts, jewelry, clothes, and souvenirs.',
            tips: 'Bargain aggressively, carry cash'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'German Bakery',
            description: 'Healthy breakfast bowls and fresh juices near Anjuna'
          },
          {
            time: '02:00 PM',
            place: 'Vagator Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'Dramatic red cliffs and less crowded beach, popular with backpackers.',
            tips: 'Visit Chapora Fort nearby for panoramic views'
          },
          {
            time: '04:30 PM',
            place: 'Chapora Fort',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Ruins of Portuguese fort, famous from Bollywood movie Dil Chahta Hai.',
            tips: 'Sunset views are spectacular'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Curlies Beach Shack',
            description: 'Sunset dinner and live music at Anjuna Beach.'
          }
        ]
      }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'The spiritual capital of India, one of the world\'s oldest living cities. Experience ancient rituals, ghats along the Ganges, and profound spirituality.',
    travelType: ['Spiritual', 'Cultural', 'Historical'],
    idealDuration: '2-3 days',
    budget: { min: 10000, max: 20000 },
    tags: ['Ghats', 'Ganges', 'Temples', 'Spirituality'],
    heroImage: 'https://images.unsplash.com/photo-1575907039443-1cce5634f084',
    images: [
      'https://images.unsplash.com/photo-1575907039443-1cce5634f084',
      'https://images.unsplash.com/photo-1696236928416-7b90fe5f0cb6'
    ],
    attractions: [
      'Dashashwamedh Ghat',
      'Kashi Vishwanath Temple',
      'Assi Ghat',
      'Manikarnika Ghat',
      'Sarnath',
      'Ramnagar Fort',
      'Banaras Hindu University'
    ],
    bestTime: 'October to March',
    weather: 'Pleasant winters (8-20°C), extremely hot summers (30-45°C). Monsoon brings humidity and occasional flooding.',
    tips: [
      'Respect religious sentiments and photography restrictions',
      'Dress modestly when visiting temples',
      'Take a sunrise boat ride on the Ganges',
      'Try Banarasi paan and street food',
      'Be prepared for crowds and narrow lanes'
    ],
    coordinates: { lat: 25.3176, lon: 82.9739 },
    transport: 'Auto-rickshaws and cycle rickshaws for short distances. Walking is best for exploring the ghats and old city lanes.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Ghats and Ganga Aarti',
        activities: [
          {
            time: '05:30 AM',
            place: 'Sunrise Boat Ride',
            duration: '2 hours',
            openingHours: 'Available from 5:00 AM',
            bestTime: 'Sunrise',
            description: 'Witness the city wake up with morning rituals, bathing pilgrims, and golden sunrise over the Ganges.',
            tips: 'Book boat from Assi Ghat or Dashashwamedh Ghat, negotiate price beforehand'
          },
          {
            time: '08:00 AM',
            type: 'meal',
            place: 'Kashi Chat Bhandar',
            description: 'Traditional breakfast with kachori sabzi and jalebi'
          },
          {
            time: '09:30 AM',
            place: 'Kashi Vishwanath Temple',
            duration: '2 hours',
            openingHours: '3:00 AM - 11:00 PM',
            bestTime: 'Morning',
            description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva. Non-Hindus not allowed inside.',
            tips: 'Long queues expected, no phones or cameras allowed'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Deena Chat Bhandar',
            description: 'Famous for tamatar chaat and aloo tikki'
          },
          {
            time: '02:00 PM',
            place: 'Banaras Hindu University',
            duration: '2 hours',
            openingHours: 'Campus open to visitors',
            bestTime: 'Afternoon',
            description: 'Visit Bharat Kala Bhavan museum and the new Vishwanath Temple on campus.',
            tips: 'Peaceful campus, good for a relaxed afternoon'
          },
          {
            time: '05:00 PM',
            place: 'Assi Ghat',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Evening',
            description: 'Southernmost ghat, popular with students and tourists for evening aarti.',
            tips: 'Less crowded than Dashashwamedh Ghat'
          },
          {
            time: '06:30 PM',
            place: 'Dashashwamedh Ghat - Ganga Aarti',
            duration: '1 hour',
            openingHours: 'Aarti at 6:30 PM daily',
            bestTime: 'Evening',
            description: 'Spectacular evening prayer ceremony with priests, fire lamps, and chanting.',
            tips: 'Arrive 30 minutes early for good viewing spot, watch from boat for best experience'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Banarasi Paan',
            description: 'Try authentic Banarasi paan from Keshav Paan Bhandar or Tambul.'
          }
        ]
      },
      {
        day: 2,
        title: 'Sarnath and cultural exploration',
        activities: [
          {
            time: '08:00 AM',
            place: 'Sarnath',
            duration: '3-4 hours',
            openingHours: '9:00 AM - 5:00 PM',
            bestTime: 'Morning',
            description: 'Buddhist pilgrimage site where Buddha gave his first sermon. Visit Dhamek Stupa, museum, and monasteries.',
            tips: 'Hire a guide for historical context, peaceful atmosphere'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Pizzeria Vaatika Cafe',
            description: 'Rooftop cafe with Ganges view, multi-cuisine menu'
          },
          {
            time: '02:30 PM',
            place: 'Ramnagar Fort',
            duration: '2 hours',
            openingHours: '10:00 AM - 5:00 PM',
            bestTime: 'Afternoon',
            description: 'Vintage cars, royal artifacts, and museum showcasing Varanasi\'s royal history.',
            tips: 'Cross the Ganges by boat to reach the fort'
          },
          {
            time: '05:00 PM',
            place: 'Walking Tour of Old City',
            duration: '2-3 hours',
            bestTime: 'Late afternoon',
            description: 'Explore narrow lanes, silk weaving workshops, and hidden temples.',
            tips: 'Hire a local guide, wear comfortable shoes'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Classical Music Performance',
            description: 'Attend a sitar or tabla performance at a cultural center or ghat.'
          }
        ]
      },
      {
        day: 3,
        title: 'Ghats exploration and shopping',
        activities: [
          {
            time: '06:00 AM',
            place: 'Manikarnika Ghat',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Early morning',
            description: 'Main cremation ghat, witness the cycle of life and death. Photography strictly prohibited.',
            tips: 'Maintain respectful silence, avoid taking photos'
          },
          {
            time: '08:00 AM',
            type: 'meal',
            place: 'Blue Lassi',
            description: 'Famous lassi shop with 80+ flavors, try banana or pomegranate'
          },
          {
            time: '09:30 AM',
            place: 'Tulsi Manas Temple',
            duration: '1 hour',
            openingHours: '5:00 AM - 12:00 PM, 3:00 PM - 9:00 PM',
            bestTime: 'Morning',
            description: 'Modern temple with walls inscribed with Ramcharitmanas verses.',
            tips: 'Peaceful atmosphere, beautiful marble architecture'
          },
          {
            time: '11:00 AM',
            place: 'Silk Weaving Workshop',
            duration: '2 hours',
            openingHours: 'By appointment',
            bestTime: 'Late morning',
            description: 'Visit a Banarasi silk weaving unit to see artisans at work.',
            tips: 'Can purchase authentic silk sarees directly'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Baati Chokha',
            description: 'Traditional Bihari cuisine, try litti chokha'
          },
          {
            time: '03:00 PM',
            place: 'Shopping at Vishwanath Gali',
            duration: '2-3 hours',
            bestTime: 'Afternoon',
            description: 'Shop for Banarasi silk sarees, brassware, and religious items.',
            tips: 'Bargain expected, check silk authenticity'
          },
          {
            time: '06:00 PM',
            type: 'evening',
            place: 'Sunset at Assi Ghat',
            description: 'Peaceful sunset watching and evening snacks at ghat-side cafes.'
          }
        ]
      }
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    description: 'The Yoga Capital of the World, nestled in the Himalayan foothills. Perfect blend of spirituality, adventure sports, and natural beauty along the Ganges.',
    travelType: ['Spiritual', 'Adventure', 'Nature'],
    idealDuration: '3-4 days',
    budget: { min: 12000, max: 25000 },
    tags: ['Yoga', 'Rafting', 'Ganges', 'Adventure', 'Ashrams'],
    heroImage: 'https://images.unsplash.com/photo-1692621031591-4d63ddedc67e',
    images: [
      'https://images.unsplash.com/photo-1692621031591-4d63ddedc67e',
      'https://images.unsplash.com/photo-1626865001705-d55ddb448161'
    ],
    attractions: [
      'Laxman Jhula',
      'Ram Jhula',
      'Triveni Ghat',
      'Beatles Ashram',
      'Neer Garh Waterfall',
      'Parmarth Niketan',
      'Rajaji National Park'
    ],
    bestTime: 'September to November, February to May',
    weather: 'Pleasant spring/autumn (15-30°C), cold winters (5-20°C), hot summers (25-40°C). Monsoon brings heavy rainfall.',
    tips: [
      'Rishikesh is alcohol and meat-free zone',
      'Book rafting and adventure activities in advance',
      'Attend evening Ganga Aarti at Triveni Ghat',
      'Wear modest clothing when visiting ashrams',
      'Carry light woolens even in summer for evenings'
    ],
    coordinates: { lat: 30.0869, lon: 78.2676 },
    transport: 'Auto-rickshaws and shared tempos for local travel. Walking is pleasant along the river. Bikes available for rent.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival and spiritual exploration',
        activities: [
          {
            time: '09:00 AM',
            place: 'Laxman Jhula',
            duration: '1-2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Iconic suspension bridge over the Ganges, surrounded by temples and ashrams.',
            tips: 'Walk across for views, visit Tera Manzil Temple nearby'
          },
          {
            time: '11:00 AM',
            place: 'Beatles Ashram (Chaurasi Kutia)',
            duration: '2 hours',
            openingHours: '10:00 AM - 4:00 PM',
            bestTime: 'Late morning',
            description: 'Abandoned ashram where The Beatles stayed in 1968, now covered in graffiti art.',
            tips: 'Entry fee applies, great for photography'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Little Buddha Cafe',
            description: 'Rooftop cafe with Ganges view, try Israeli and continental dishes'
          },
          {
            time: '03:00 PM',
            place: 'Ram Jhula',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'Another suspension bridge connecting Swarg Ashram and Sivananda Ashram.',
            tips: 'Less crowded than Laxman Jhula'
          },
          {
            time: '04:30 PM',
            place: 'Parmarth Niketan Ashram',
            duration: '1 hour',
            openingHours: 'Open to visitors',
            bestTime: 'Late afternoon',
            description: 'Largest ashram in Rishikesh with beautiful gardens and Ganges ghats.',
            tips: 'Attend yoga classes if interested (advance booking required)'
          },
          {
            time: '06:00 PM',
            place: 'Triveni Ghat - Ganga Aarti',
            duration: '1 hour',
            openingHours: 'Aarti at 6:00 PM daily',
            bestTime: 'Evening',
            description: 'Evening prayer ceremony with floating diyas and devotional songs.',
            tips: 'Arrive early for good spot, participate in diya floating'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Cafe Delmar',
            description: 'Dinner with live music, vegetarian multi-cuisine menu.'
          }
        ]
      },
      {
        day: 2,
        title: 'Adventure activities and waterfalls',
        activities: [
          {
            time: '07:00 AM',
            place: 'White Water Rafting',
            duration: '3-4 hours',
            openingHours: 'September to June',
            bestTime: 'Morning',
            description: '16-24 km rafting from Shivpuri to Rishikesh with Grade III-IV rapids.',
            tips: 'Book with certified operators, life jackets mandatory, no prior experience needed'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Ganga Beach Restaurant',
            description: 'Riverside dining with North Indian and Chinese cuisine'
          },
          {
            time: '02:00 PM',
            place: 'Neer Garh Waterfall',
            duration: '2-3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'Two-tiered waterfall with natural pool, 2 km trek from road.',
            tips: 'Wear trekking shoes, carry swimwear, avoid during monsoon'
          },
          {
            time: '05:30 PM',
            place: 'Sunset Point',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Panoramic views of Rishikesh and the Ganges valley.',
            tips: 'Short trek from Laxman Jhula area'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Yoga Session',
            description: 'Evening yoga class at Parmarth Niketan or Yoga Niketan (pre-booking required).'
          }
        ]
      },
      {
        day: 3,
        title: 'Adventure sports and nature',
        activities: [
          {
            time: '08:00 AM',
            place: 'Bungee Jumping',
            duration: '2 hours',
            openingHours: '10:00 AM - 5:00 PM',
            bestTime: 'Morning',
            description: 'India\'s highest bungee jump (83 meters) at Jumpin Heights.',
            tips: 'Book online in advance, weight restrictions apply'
          },
          {
            time: '11:00 AM',
            place: 'Flying Fox',
            duration: '1 hour',
            openingHours: '10:00 AM - 5:00 PM',
            bestTime: 'Late morning',
            description: 'Zip-lining across the Ganges valley at Jumpin Heights.',
            tips: 'Combo packages available with bungee jumping'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Bistro Nirvana',
            description: 'Organic cafe with healthy bowls and fresh juices'
          },
          {
            time: '03:00 PM',
            place: 'Rajaji National Park',
            duration: '3 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Afternoon safari',
            description: 'Wildlife safari to spot elephants, tigers, leopards, and diverse birdlife.',
            tips: 'Book jeep safari in advance, best visited November to June'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Meditation Session',
            description: 'Guided meditation at Sivananda Ashram or Parmarth Niketan.'
          }
        ]
      },
      {
        day: 4,
        title: 'Yoga and local exploration',
        activities: [
          {
            time: '06:00 AM',
            place: 'Sunrise Yoga',
            duration: '2 hours',
            openingHours: 'Early morning sessions',
            bestTime: 'Sunrise',
            description: 'Yoga session by the Ganges at Parmarth Niketan or Yoga Niketan.',
            tips: 'Book in advance, carry yoga mat or rent on-site'
          },
          {
            time: '08:30 AM',
            type: 'meal',
            place: 'German Bakery',
            description: 'Healthy breakfast with granola bowls and fresh bread'
          },
          {
            time: '10:00 AM',
            place: 'Kunjapuri Temple',
            duration: '3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Hilltop temple with 360-degree Himalayan views, 6 km trek or drive.',
            tips: 'Start early to avoid heat, sunrise trek popular'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Chotiwala Restaurant',
            description: 'Traditional North Indian thali, Rishikesh institution since 1958'
          },
          {
            time: '03:00 PM',
            place: 'Shopping at Laxman Jhula Market',
            duration: '2 hours',
            bestTime: 'Afternoon',
            description: 'Shop for yoga wear, spiritual books, rudraksha beads, and handicrafts.',
            tips: 'Bargain expected, check quality before buying'
          },
          {
            time: '06:00 PM',
            type: 'evening',
            place: 'Final Ganga Aarti',
            description: 'Attend evening aarti at Parmarth Niketan for a grand farewell.'
          }
        ]
      }
    ]
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    description: 'Serene network of lagoons, lakes, and canals lined with coconut palms. Experience houseboat cruises, village life, and lush tropical landscapes.',
    travelType: ['Nature', 'Beach', 'Cultural'],
    idealDuration: '3-4 days',
    budget: { min: 18000, max: 35000 },
    tags: ['Houseboats', 'Backwaters', 'Ayurveda', 'Beaches'],
    heroImage: 'https://images.unsplash.com/photo-1459100652174-45f3b5ca9d04',
    images: [
      'https://images.unsplash.com/photo-1459100652174-45f3b5ca9d04',
      'https://images.unsplash.com/photo-1676969610651-25960a117bfa'
    ],
    attractions: [
      'Alleppey Backwaters',
      'Kumarakom Bird Sanctuary',
      'Vembanad Lake',
      'Marari Beach',
      'Pathiramanal Island',
      'Krishnapuram Palace',
      'Ambalapuzha Temple'
    ],
    bestTime: 'November to February',
    weather: 'Pleasant winters (23-32°C), hot and humid summers (28-35°C). Heavy monsoon rains June-September.',
    tips: [
      'Book houseboats in advance during peak season',
      'Try traditional Kerala meals on houseboat',
      'Carry mosquito repellent',
      'Respect local customs in villages',
      'Book Ayurvedic massages at certified centers'
    ],
    coordinates: { lat: 9.4981, lon: 76.3388 },
    transport: 'Houseboats for backwater exploration. Auto-rickshaws and taxis for land travel. Ferries connect villages.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival and Alleppey exploration',
        activities: [
          {
            time: '10:00 AM',
            place: 'Alleppey Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Pristine beach with historic pier, lighthouse, and calm Arabian Sea.',
            tips: 'Visit the 137-year-old pier, swimming allowed in designated areas'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Thaff Restaurant',
            description: 'Traditional Kerala meals with fish curry, appam, and stew'
          },
          {
            time: '02:00 PM',
            place: 'Houseboat Check-in',
            duration: 'Overnight',
            openingHours: '2:00 PM check-in',
            bestTime: 'Afternoon',
            description: 'Board traditional kettuvallam houseboat for backwater cruise through Vembanad Lake.',
            tips: 'Choose AC or non-AC based on budget, meals included, sunset cruise included'
          },
          {
            time: '04:00 PM',
            place: 'Backwater Cruise',
            duration: 'Evening',
            openingHours: 'Cruise continues',
            bestTime: 'Late afternoon',
            description: 'Cruise through narrow canals, witness village life, paddy fields, and coconut groves.',
            tips: 'Houseboat anchors for night in quiet backwater location'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Dinner on Houseboat',
            description: 'Traditional Kerala dinner with karimeen fry, prawn curry, and rice.'
          }
        ]
      },
      {
        day: 2,
        title: 'Houseboat cruise and Kumarakom',
        activities: [
          {
            time: '06:30 AM',
            place: 'Sunrise on Backwaters',
            duration: '1 hour',
            openingHours: 'Houseboat cruise',
            bestTime: 'Sunrise',
            description: 'Watch sunrise over Vembanad Lake with morning mist and bird calls.',
            tips: 'Breakfast served on deck'
          },
          {
            time: '09:00 AM',
            place: 'Village Walk',
            duration: '2 hours',
            openingHours: 'Arranged by houseboat',
            bestTime: 'Morning',
            description: 'Guided walk through backwater village, visit toddy shops, coir-making units.',
            tips: 'Interact with locals, learn about traditional fishing methods'
          },
          {
            time: '12:00 PM',
            place: 'Houseboat Check-out',
            duration: '30 minutes',
            openingHours: '12:00 PM check-out',
            bestTime: 'Noon',
            description: 'Disembark at Kumarakom jetty.',
            tips: 'Tip the crew if service was good'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Coconut Lagoon Resort',
            description: 'Lunch buffet with Kerala specialties'
          },
          {
            time: '03:00 PM',
            place: 'Kumarakom Bird Sanctuary',
            duration: '2-3 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Afternoon',
            description: 'Spot migratory birds, herons, egrets, and kingfishers in 14-acre sanctuary.',
            tips: 'Best visited November to February for migratory birds, carry binoculars'
          },
          {
            time: '06:00 PM',
            place: 'Sunset at Vembanad Lake',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Watch sunset over India\'s longest lake from Kumarakom waterfront.',
            tips: 'Boat rides available for sunset viewing'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Ayurvedic Massage',
            description: 'Traditional Kerala Ayurvedic massage at resort spa.'
          }
        ]
      },
      {
        day: 3,
        title: 'Marari Beach and cultural sites',
        activities: [
          {
            time: '08:00 AM',
            place: 'Marari Beach',
            duration: '3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Pristine beach with golden sand, coconut palms, and fishing villages.',
            tips: 'Less crowded than Alleppey Beach, swimming safe in designated areas'
          },
          {
            time: '11:30 AM',
            type: 'meal',
            place: 'Marari Beach Resort',
            description: 'Beachside lunch with fresh seafood and Kerala cuisine'
          },
          {
            time: '01:30 PM',
            place: 'Krishnapuram Palace',
            duration: '1-2 hours',
            openingHours: '9:00 AM - 5:00 PM',
            bestTime: 'Afternoon',
            description: '18th-century palace with Kerala architecture and largest mural painting in Kerala.',
            tips: 'Museum showcases antique sculptures and paintings'
          },
          {
            time: '03:30 PM',
            place: 'Ambalapuzha Temple',
            duration: '1 hour',
            openingHours: '4:00 AM - 12:00 PM, 5:00 PM - 8:00 PM',
            bestTime: 'Late afternoon',
            description: 'Ancient Krishna temple famous for palpayasam (sweet milk porridge).',
            tips: 'Try the temple\'s famous palpayasam, dress modestly'
          },
          {
            time: '05:00 PM',
            place: 'Pathiramanal Island',
            duration: '2 hours',
            openingHours: 'Boat access only',
            bestTime: 'Late afternoon',
            description: 'Small island in Vembanad Lake, accessible by boat, rich in rare birds.',
            tips: 'Boat rides from Kumarakom, peaceful spot for nature lovers'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Kathakali Performance',
            description: 'Traditional Kerala dance-drama performance at cultural center.'
          }
        ]
      },
      {
        day: 4,
        title: 'Coir village and departure',
        activities: [
          {
            time: '09:00 AM',
            place: 'Coir Village Tour',
            duration: '2 hours',
            openingHours: 'By arrangement',
            bestTime: 'Morning',
            description: 'Visit traditional coir-making units, see coconut fiber processing.',
            tips: 'Purchase coir products directly from artisans'
          },
          {
            time: '11:30 AM',
            type: 'meal',
            place: 'Harbour Restaurant',
            description: 'Farewell lunch with Kerala fish curry and appam'
          },
          {
            time: '01:00 PM',
            place: 'Alleppey Market',
            duration: '2 hours',
            openingHours: '9:00 AM - 8:00 PM',
            bestTime: 'Afternoon',
            description: 'Shop for spices, coir products, Kerala handicrafts, and cashews.',
            tips: 'Bargain expected, check quality of spices'
          },
          {
            time: '03:30 PM',
            place: 'Nehru Trophy Finishing Point',
            duration: '1 hour',
            openingHours: 'Open to visitors',
            bestTime: 'Afternoon',
            description: 'Venue of famous snake boat race, museum showcasing boat racing history.',
            tips: 'Visit during August for the actual Nehru Trophy Boat Race'
          },
          {
            time: '05:00 PM',
            type: 'evening',
            place: 'Sunset Cruise',
            description: 'Final sunset cruise on Vembanad Lake before departure.'
          }
        ]
      }
    ]
  },
  {
    id: 'leh-ladakh',
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    description: 'The Land of High Passes, offering dramatic Himalayan landscapes, Buddhist monasteries, and adventure at high altitudes. A paradise for bikers and nature lovers.',
    travelType: ['Adventure', 'Nature', 'Spiritual'],
    idealDuration: '7-8 days',
    budget: { min: 35000, max: 60000 },
    tags: ['Mountains', 'Monasteries', 'Biking', 'High Altitude'],
    heroImage: 'https://images.unsplash.com/photo-1686747169711-66fb0489a80c',
    images: [
      'https://images.unsplash.com/photo-1686747169711-66fb0489a80c',
      'https://images.unsplash.com/photo-1649421042994-e515e4b767c0'
    ],
    attractions: [
      'Pangong Lake',
      'Nubra Valley',
      'Khardung La Pass',
      'Thiksey Monastery',
      'Magnetic Hill',
      'Shanti Stupa',
      'Hemis Monastery'
    ],
    bestTime: 'May to September',
    weather: 'Pleasant summers (15-30°C), extremely cold winters (-15 to 5°C). Roads closed November to April due to snow.',
    tips: [
      'Acclimatize for 2 days in Leh before high-altitude trips',
      'Carry Diamox for altitude sickness prevention',
      'Inner Line Permit required for Pangong and Nubra',
      'Limited ATMs, carry sufficient cash',
      'Respect Buddhist culture and monasteries'
    ],
    coordinates: { lat: 34.1526, lon: 77.5771 },
    transport: 'Rent bikes or hire taxis for sightseeing. Shared taxis available for popular routes. No public transport to remote areas.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival and acclimatization in Leh',
        activities: [
          {
            time: '10:00 AM',
            place: 'Hotel Check-in and Rest',
            duration: '3-4 hours',
            openingHours: 'Hotel check-in',
            bestTime: 'Morning',
            description: 'Complete rest for acclimatization to 3,500m altitude. Avoid exertion on day 1.',
            tips: 'Drink plenty of water, avoid alcohol, light meals only'
          },
          {
            time: '02:00 PM',
            type: 'meal',
            place: 'Gesmo Restaurant',
            description: 'Light lunch with Tibetan momos and thukpa'
          },
          {
            time: '04:00 PM',
            place: 'Leh Market Walk',
            duration: '2 hours',
            openingHours: 'Market open till 8:00 PM',
            bestTime: 'Late afternoon',
            description: 'Gentle walk through Leh main bazaar, acclimatization walk.',
            tips: 'Walk slowly, avoid climbing stairs, buy woolens if needed'
          },
          {
            time: '06:30 PM',
            place: 'Shanti Stupa',
            duration: '1 hour',
            openingHours: '5:00 AM - 9:00 PM',
            bestTime: 'Sunset',
            description: 'White Buddhist stupa with panoramic Leh views, accessible by car.',
            tips: 'Drive up, don\'t walk on day 1, sunset views spectacular'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Early Dinner and Rest',
            description: 'Light dinner at hotel, early sleep for acclimatization.'
          }
        ]
      },
      {
        day: 2,
        title: 'Leh local sightseeing',
        activities: [
          {
            time: '09:00 AM',
            place: 'Leh Palace',
            duration: '1-2 hours',
            openingHours: '7:00 AM - 4:00 PM',
            bestTime: 'Morning',
            description: '17th-century palace overlooking Leh, similar architecture to Potala Palace.',
            tips: 'Climb slowly, panoramic views from top'
          },
          {
            time: '11:30 AM',
            place: 'Hall of Fame Museum',
            duration: '1 hour',
            openingHours: '9:00 AM - 7:00 PM',
            bestTime: 'Late morning',
            description: 'War memorial and museum showcasing Indian Army\'s Ladakh operations.',
            tips: 'Photography allowed, moving tribute to soldiers'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Tibetan Kitchen',
            description: 'Authentic Tibetan cuisine with tingmo and shapta'
          },
          {
            time: '02:30 PM',
            place: 'Magnetic Hill',
            duration: '30 minutes',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'Optical illusion where vehicles appear to defy gravity.',
            tips: 'Turn off engine and watch car roll uphill'
          },
          {
            time: '03:30 PM',
            place: 'Gurudwara Pathar Sahib',
            duration: '45 minutes',
            openingHours: '6:00 AM - 7:00 PM',
            bestTime: 'Afternoon',
            description: 'Sikh shrine built in memory of Guru Nanak, free langar available.',
            tips: 'Cover head, remove shoes, peaceful atmosphere'
          },
          {
            time: '04:30 PM',
            place: 'Sangam Point',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Late afternoon',
            description: 'Confluence of Indus and Zanskar rivers with distinct colors.',
            tips: 'Rafting available in summer months'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Leh Market Shopping',
            description: 'Shop for Pashmina shawls, Tibetan handicrafts, and prayer flags.'
          }
        ]
      },
      {
        day: 3,
        title: 'Nubra Valley via Khardung La',
        activities: [
          {
            time: '06:00 AM',
            place: 'Khardung La Pass',
            duration: '1 hour',
            openingHours: 'Open 7:00 AM - 5:00 PM',
            bestTime: 'Early morning',
            description: 'World\'s highest motorable road at 5,359m, stunning mountain views.',
            tips: 'Don\'t stay long due to altitude, take photos quickly, oxygen available'
          },
          {
            time: '10:00 AM',
            place: 'Diskit Monastery',
            duration: '1-2 hours',
            openingHours: '7:00 AM - 7:00 PM',
            bestTime: 'Late morning',
            description: 'Oldest monastery in Nubra Valley with 32m Maitreya Buddha statue.',
            tips: 'Climb to Buddha statue for valley views'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Hotel Yarab Tso',
            description: 'Lunch with Ladakhi cuisine in Hunder'
          },
          {
            time: '02:00 PM',
            place: 'Hunder Sand Dunes',
            duration: '2-3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'White sand dunes with double-humped Bactrian camels, unique landscape.',
            tips: 'Camel safari available, sunset views spectacular'
          },
          {
            time: '05:30 PM',
            place: 'Nubra Valley Sunset',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Watch sunset over sand dunes and mountains.',
            tips: 'Temperature drops quickly after sunset'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Overnight in Nubra',
            description: 'Stay in camps or guesthouses, stargazing opportunity.'
          }
        ]
      },
      {
        day: 4,
        title: 'Nubra to Pangong Lake',
        activities: [
          {
            time: '07:00 AM',
            place: 'Departure from Nubra',
            duration: '6-7 hours drive',
            openingHours: 'Travel day',
            bestTime: 'Early morning',
            description: 'Scenic drive via Shyok route to Pangong Lake.',
            tips: 'Carry packed lunch, limited food options en route'
          },
          {
            time: '02:00 PM',
            place: 'Pangong Lake Arrival',
            duration: 'Afternoon',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'First glimpse of the stunning blue lake at 4,350m altitude.',
            tips: 'Lake changes colors throughout the day'
          },
          {
            time: '03:00 PM',
            type: 'meal',
            place: 'Lakeside Camp',
            description: 'Late lunch at camp with basic meals'
          },
          {
            time: '04:30 PM',
            place: 'Pangong Lake Exploration',
            duration: '2-3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late afternoon',
            description: 'Walk along the lake shore, visit the famous 3 Idiots movie location.',
            tips: 'Water is freezing cold, don\'t touch for long'
          },
          {
            time: '07:00 PM',
            place: 'Sunset at Pangong',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Watch the lake change colors during sunset.',
            tips: 'Carry warm clothes, temperature drops to near freezing'
          },
          {
            time: '08:30 PM',
            type: 'evening',
            place: 'Overnight at Pangong',
            description: 'Stay in camps, clear night sky perfect for stargazing.'
          }
        ]
      },
      {
        day: 5,
        title: 'Pangong to Leh via Chang La',
        activities: [
          {
            time: '05:30 AM',
            place: 'Sunrise at Pangong',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunrise',
            description: 'Watch sunrise over the lake with mountains in background.',
            tips: 'Bundle up, extremely cold at sunrise'
          },
          {
            time: '07:00 AM',
            type: 'meal',
            place: 'Camp Breakfast',
            description: 'Hot breakfast at camp before departure'
          },
          {
            time: '08:00 AM',
            place: 'Departure to Leh',
            duration: '5-6 hours drive',
            openingHours: 'Travel day',
            bestTime: 'Morning',
            description: 'Return journey via Chang La Pass (5,360m).',
            tips: 'Stop at Chang La for photos, world\'s third highest motorable road'
          },
          {
            time: '02:00 PM',
            place: 'Arrival in Leh',
            duration: 'Afternoon',
            openingHours: 'Hotel check-in',
            bestTime: 'Afternoon',
            description: 'Return to Leh, rest and recover.',
            tips: 'Hot shower and rest recommended'
          },
          {
            time: '04:00 PM',
            type: 'meal',
            place: 'Bon Appetit',
            description: 'Late lunch with continental and Indian cuisine'
          },
          {
            time: '06:00 PM',
            type: 'evening',
            place: 'Free Evening',
            description: 'Rest, shopping, or explore Leh market at leisure.'
          }
        ]
      },
      {
        day: 6,
        title: 'Monastery circuit',
        activities: [
          {
            time: '08:00 AM',
            place: 'Thiksey Monastery',
            duration: '2 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Morning prayer at 6:30 AM',
            description: '12-story monastery complex resembling Potala Palace, stunning valley views.',
            tips: 'Attend morning prayers for spiritual experience'
          },
          {
            time: '10:30 AM',
            place: 'Hemis Monastery',
            duration: '2 hours',
            openingHours: '8:00 AM - 6:00 PM',
            bestTime: 'Late morning',
            description: 'Largest and wealthiest monastery in Ladakh, famous for Hemis festival.',
            tips: 'Museum showcases ancient thangkas and artifacts'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Chopsticks Noodle Bar',
            description: 'Asian cuisine with noodles and fried rice'
          },
          {
            time: '02:30 PM',
            place: 'Shey Palace',
            duration: '1 hour',
            openingHours: '7:00 AM - 7:00 PM',
            bestTime: 'Afternoon',
            description: 'Former summer palace with 12m high copper statue of Buddha.',
            tips: 'Combine with Thiksey visit, same route'
          },
          {
            time: '04:00 PM',
            place: 'Rancho School',
            duration: '1 hour',
            openingHours: 'By appointment',
            bestTime: 'Late afternoon',
            description: 'School featured in 3 Idiots movie, now called Druk White Lotus School.',
            tips: 'Respect school timings, photography from outside only'
          },
          {
            time: '06:00 PM',
            type: 'evening',
            place: 'Farewell Dinner',
            description: 'Traditional Ladakhi dinner with skyu and butter tea at local restaurant.'
          }
        ]
      },
      {
        day: 7,
        title: 'Departure',
        activities: [
          {
            time: '08:00 AM',
            type: 'meal',
            place: 'Hotel Breakfast',
            description: 'Final breakfast in Leh'
          },
          {
            time: '09:30 AM',
            place: 'Last Minute Shopping',
            duration: '2 hours',
            openingHours: 'Market open',
            bestTime: 'Morning',
            description: 'Buy souvenirs, Pashmina, apricot products, and prayer flags.',
            tips: 'Bargain expected, check authenticity of Pashmina'
          },
          {
            time: '12:00 PM',
            place: 'Airport Transfer',
            duration: '30 minutes',
            openingHours: 'Departure',
            bestTime: 'Noon',
            description: 'Transfer to Leh airport for departure.',
            tips: 'Book morning flights for better weather, afternoon flights often delayed'
          }
        ]
      }
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home to the iconic Taj Mahal, one of the Seven Wonders of the World. A city steeped in Mughal history with magnificent monuments and rich heritage.',
    travelType: ['Historical', 'Cultural'],
    idealDuration: '2-3 days',
    budget: { min: 12000, max: 25000 },
    tags: ['Taj Mahal', 'Mughal Architecture', 'UNESCO Sites', 'Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1672938533580-1a7305049148',
    images: [
      'https://images.unsplash.com/photo-1672938533580-1a7305049148',
      'https://images.unsplash.com/photo-1697375817544-0fa3a88c1c69'
    ],
    attractions: [
      'Taj Mahal',
      'Agra Fort',
      'Fatehpur Sikri',
      'Mehtab Bagh',
      'Itmad-ud-Daulah',
      'Akbar\'s Tomb',
      'Jama Masjid'
    ],
    bestTime: 'October to March',
    weather: 'Pleasant winters (8-25°C), extremely hot summers (30-45°C). Monsoon brings moderate rainfall.',
    tips: [
      'Visit Taj Mahal at sunrise for best light and fewer crowds',
      'Book tickets online to skip queues',
      'Hire certified guides for historical insights',
      'Try Agra\'s famous petha (sweet)',
      'Carry sunscreen and stay hydrated'
    ],
    coordinates: { lat: 27.1767, lon: 78.0081 },
    transport: 'Auto-rickshaws, cycle rickshaws, and app-based cabs available. Walking is pleasant in monument areas.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Taj Mahal and Agra Fort',
        activities: [
          {
            time: '05:30 AM',
            place: 'Taj Mahal at Sunrise',
            duration: '3-4 hours',
            openingHours: 'Sunrise to Sunset, closed Fridays',
            bestTime: 'Sunrise',
            description: 'Marvel at the white marble mausoleum built by Shah Jahan for his wife Mumtaz Mahal.',
            tips: 'Book tickets online, arrive before sunrise, no food/tripods allowed inside'
          },
          {
            time: '09:30 AM',
            type: 'meal',
            place: 'Joney\'s Place',
            description: 'Rooftop breakfast with Taj Mahal view, try parathas and lassi'
          },
          {
            time: '11:00 AM',
            place: 'Agra Fort',
            duration: '2-3 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Late morning',
            description: 'UNESCO World Heritage red sandstone fort with palaces, mosques, and Taj Mahal views.',
            tips: 'Hire audio guide, visit Musamman Burj for Taj view'
          },
          {
            time: '02:00 PM',
            type: 'meal',
            place: 'Pinch of Spice',
            description: 'Mughlai cuisine with biryani and kebabs'
          },
          {
            time: '04:00 PM',
            place: 'Mehtab Bagh',
            duration: '2 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Sunset',
            description: 'Charbagh garden complex across Yamuna River with perfect Taj Mahal sunset views.',
            tips: 'Best spot for Taj photos without crowds, peaceful atmosphere'
          },
          {
            time: '06:30 PM',
            place: 'Sadar Bazaar',
            duration: '2 hours',
            openingHours: 'Market open till 9:00 PM',
            bestTime: 'Evening',
            description: 'Shopping for leather goods, marble inlay work, and souvenirs.',
            tips: 'Bargain expected, check quality before buying'
          },
          {
            time: '08:30 PM',
            type: 'evening',
            place: 'Petha Tasting',
            description: 'Try Agra\'s famous petha at Panchhi Petha or Panchi.'
          }
        ]
      },
      {
        day: 2,
        title: 'Fatehpur Sikri and Itmad-ud-Daulah',
        activities: [
          {
            time: '07:00 AM',
            place: 'Fatehpur Sikri',
            duration: '3-4 hours',
            openingHours: 'Sunrise to Sunset',
            bestTime: 'Early morning',
            description: 'Abandoned Mughal city built by Akbar, UNESCO World Heritage Site with stunning architecture.',
            tips: '40 km from Agra, hire car for day, wear comfortable shoes for walking'
          },
          {
            time: '11:30 AM',
            type: 'meal',
            place: 'Govardhan Restaurant',
            description: 'Vegetarian thali near Fatehpur Sikri'
          },
          {
            time: '01:00 PM',
            place: 'Return to Agra',
            duration: '1 hour drive',
            openingHours: 'Travel time',
            bestTime: 'Afternoon',
            description: 'Drive back to Agra.',
            tips: 'Rest at hotel before evening sightseeing'
          },
          {
            time: '03:00 PM',
            place: 'Itmad-ud-Daulah (Baby Taj)',
            duration: '1-2 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Afternoon',
            description: 'Exquisite marble tomb with intricate inlay work, precursor to Taj Mahal.',
            tips: 'Less crowded than Taj, beautiful gardens, photography allowed'
          },
          {
            time: '05:00 PM',
            place: 'Akbar\'s Tomb, Sikandra',
            duration: '1-2 hours',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Late afternoon',
            description: 'Magnificent tomb of Emperor Akbar with blend of Hindu, Christian, Islamic architecture.',
            tips: 'Peaceful atmosphere, deer roam the gardens'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Mohabbat the Taj Show',
            description: 'Cultural show depicting Taj Mahal\'s love story with music and dance.'
          }
        ]
      },
      {
        day: 3,
        title: 'Local markets and crafts',
        activities: [
          {
            time: '08:00 AM',
            place: 'Jama Masjid',
            duration: '1 hour',
            openingHours: '5:00 AM - 9:00 PM',
            bestTime: 'Morning',
            description: 'Large mosque built by Shah Jahan\'s daughter, stunning architecture.',
            tips: 'Dress modestly, remove shoes, peaceful morning atmosphere'
          },
          {
            time: '09:30 AM',
            type: 'meal',
            place: 'Deviram Sweets',
            description: 'Traditional breakfast with bedai and jalebi'
          },
          {
            time: '10:30 AM',
            place: 'Marble Inlay Workshop',
            duration: '2 hours',
            openingHours: 'By appointment',
            bestTime: 'Late morning',
            description: 'Visit artisan workshop to see traditional marble inlay work (pietra dura).',
            tips: 'Can purchase authentic pieces directly, watch craftsmen at work'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Dasaprakash',
            description: 'South Indian cuisine with dosa and filter coffee'
          },
          {
            time: '02:00 PM',
            place: 'Kinari Bazaar',
            duration: '2-3 hours',
            openingHours: 'Market open till 8:00 PM',
            bestTime: 'Afternoon',
            description: 'Traditional market for textiles, jewelry, and wedding items.',
            tips: 'Narrow lanes, bargain aggressively, watch for pickpockets'
          },
          {
            time: '05:00 PM',
            place: 'Taj Mahal Sunset View',
            duration: '1 hour',
            openingHours: 'Sunset to closing',
            bestTime: 'Sunset',
            description: 'Final visit to Taj Mahal for sunset views (optional).',
            tips: 'Different lighting than sunrise, golden hour photography'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Farewell Dinner',
            description: 'Mughlai dinner at Peshawri or Esphahan with live music.'
          }
        ]
      }
    ]
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    description: 'Ancient ruins of the Vijayanagara Empire set amidst surreal boulder-strewn landscapes. A UNESCO World Heritage Site with temples, palaces, and rich history.',
    travelType: ['Historical', 'Nature', 'Adventure'],
    idealDuration: '2-3 days',
    budget: { min: 10000, max: 20000 },
    tags: ['Ruins', 'Temples', 'Boulders', 'UNESCO Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1617101006115-e303798b0908',
    images: [
      'https://images.unsplash.com/photo-1617101006115-e303798b0908',
      'https://images.unsplash.com/photo-1681181753651-315b07b2b2de'
    ],
    attractions: [
      'Virupaksha Temple',
      'Vittala Temple',
      'Lotus Mahal',
      'Elephant Stables',
      'Matanga Hill',
      'Hemakuta Hill',
      'Queen\'s Bath'
    ],
    bestTime: 'October to February',
    weather: 'Pleasant winters (15-30°C), extremely hot summers (30-42°C). Monsoon brings moderate rainfall.',
    tips: [
      'Rent a bicycle or scooter to explore the vast ruins',
      'Climb Matanga Hill for sunrise views',
      'Carry water and sunscreen, limited shade',
      'Respect temple rules and dress codes',
      'Stay in Hampi Bazaar or Virupapur Gaddi'
    ],
    coordinates: { lat: 15.3350, lon: 76.4600 },
    transport: 'Bicycles and scooters for rent. Auto-rickshaws available. Coracle boats to cross Tungabhadra River.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Sacred Center and Matanga Hill',
        activities: [
          {
            time: '05:30 AM',
            place: 'Matanga Hill Sunrise',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunrise',
            description: 'Climb 30-minute trek for panoramic sunrise views over Hampi ruins and boulder landscape.',
            tips: 'Start early, carry flashlight, wear trekking shoes, stunning 360-degree views'
          },
          {
            time: '08:00 AM',
            type: 'meal',
            place: 'Mango Tree Restaurant',
            description: 'Riverside breakfast with South Indian and continental options'
          },
          {
            time: '09:30 AM',
            place: 'Virupaksha Temple',
            duration: '1-2 hours',
            openingHours: '6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM',
            bestTime: 'Morning',
            description: 'Active 7th-century temple dedicated to Shiva, still in worship with temple elephant.',
            tips: 'Remove shoes, photography allowed in courtyard, meet Lakshmi the temple elephant'
          },
          {
            time: '11:30 AM',
            place: 'Hemakuta Hill Temples',
            duration: '1-2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late morning',
            description: 'Cluster of ancient temples on hilltop with boulder formations and city views.',
            tips: 'Sunset spot, less crowded than Matanga Hill'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Laughing Buddha',
            description: 'Rooftop cafe with Israeli and Indian cuisine'
          },
          {
            time: '03:00 PM',
            place: 'Vittala Temple Complex',
            duration: '2-3 hours',
            openingHours: '8:30 AM - 5:30 PM',
            bestTime: 'Afternoon',
            description: 'Iconic stone chariot and musical pillars, masterpiece of Vijayanagara architecture.',
            tips: 'Entry fee applies, hire guide for historical context, musical pillars demonstration'
          },
          {
            time: '06:00 PM',
            place: 'Tungabhadra River Sunset',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Watch sunset by the river with coracle boat rides available.',
            tips: 'Coracle rides fun but not very stable, peaceful atmosphere'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Hampi Bazaar Walk',
            description: 'Evening stroll through ancient bazaar street with shops and cafes.'
          }
        ]
      },
      {
        day: 2,
        title: 'Royal Center and Anegundi',
        activities: [
          {
            time: '08:00 AM',
            place: 'Queen\'s Bath',
            duration: '45 minutes',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Morning',
            description: 'Indo-Islamic style royal bathing complex with arched corridors.',
            tips: 'Well-preserved structure, photography allowed'
          },
          {
            time: '09:00 AM',
            place: 'Lotus Mahal',
            duration: '1 hour',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Morning',
            description: 'Elegant two-story pavilion with lotus-bud arches in Zenana Enclosure.',
            tips: 'Part of Royal Center, combined ticket with other monuments'
          },
          {
            time: '10:15 AM',
            place: 'Elephant Stables',
            duration: '45 minutes',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Late morning',
            description: 'Long building with 11 domed chambers that housed royal elephants.',
            tips: 'Impressive architecture, imagine royal processions'
          },
          {
            time: '11:30 AM',
            type: 'meal',
            place: 'Gopi Guesthouse Restaurant',
            description: 'Traditional South Indian thali'
          },
          {
            time: '01:00 PM',
            place: 'Coracle Ride to Anegundi',
            duration: '30 minutes',
            openingHours: 'Boats available till evening',
            bestTime: 'Afternoon',
            description: 'Cross Tungabhadra River in traditional coracle boat to Anegundi village.',
            tips: 'Negotiate price, fun experience, slight rocking motion'
          },
          {
            time: '02:00 PM',
            place: 'Anegundi Village Walk',
            duration: '2-3 hours',
            openingHours: 'Village open',
            bestTime: 'Afternoon',
            description: 'Explore ancient village with temples, banana plantations, and rural life.',
            tips: 'Rent bicycle in Anegundi, visit Hanuman Temple, peaceful atmosphere'
          },
          {
            time: '05:30 PM',
            place: 'Sanapur Lake',
            duration: '1-2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Scenic lake surrounded by boulders, cliff jumping spot.',
            tips: 'Swimming allowed, cliff jumping for adventurous, sunset views beautiful'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Dinner at Virupapur Gaddi',
            description: 'Riverside dinner at hippie island cafes with live music.'
          }
        ]
      },
      {
        day: 3,
        title: 'Boulder exploration and departure',
        activities: [
          {
            time: '06:00 AM',
            place: 'Sunrise at Anjaneya Hill',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunrise',
            description: 'Climb 575 steps to Hanuman Temple for sunrise views over Anegundi.',
            tips: 'Steep climb, start early, believed to be Hanuman\'s birthplace'
          },
          {
            time: '08:30 AM',
            type: 'meal',
            place: 'Tamarind Tree',
            description: 'Breakfast with fresh fruit bowls and pancakes'
          },
          {
            time: '10:00 AM',
            place: 'Underground Shiva Temple',
            duration: '1 hour',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Morning',
            description: 'Partially submerged temple with water-filled sanctum, unique architecture.',
            tips: 'Water level varies, atmospheric lighting, photography allowed'
          },
          {
            time: '11:30 AM',
            place: 'Achyutaraya Temple',
            duration: '1-2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late morning',
            description: 'Less-visited temple complex with beautiful courtyards and carvings.',
            tips: 'Peaceful, fewer tourists, good for photography'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Ravi\'s Rose Restaurant',
            description: 'Farewell lunch with North and South Indian cuisine'
          },
          {
            time: '03:00 PM',
            place: 'Shopping at Hampi Bazaar',
            duration: '2 hours',
            openingHours: 'Market open till 8:00 PM',
            bestTime: 'Afternoon',
            description: 'Shop for handicrafts, stone carvings, and souvenirs.',
            tips: 'Bargain expected, check quality of stone items'
          },
          {
            time: '05:00 PM',
            type: 'evening',
            place: 'Final Sunset at Hemakuta Hill',
            description: 'Watch final sunset over Hampi ruins before departure.'
          }
        ]
      }
    ]
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'The Queen of the Hills, famous for tea plantations, toy train, and stunning Kanchenjunga views. A charming hill station with colonial heritage and Himalayan beauty.',
    travelType: ['Nature', 'Adventure', 'Cultural'],
    idealDuration: '3-4 days',
    budget: { min: 15000, max: 28000 },
    tags: ['Tea Gardens', 'Toy Train', 'Mountains', 'Colonial Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1678511445741-e23fd751f2c9',
    images: [
      'https://images.unsplash.com/photo-1678511445741-e23fd751f2c9',
      'https://images.unsplash.com/photo-1577461450294-70fab344fa72'
    ],
    attractions: [
      'Tiger Hill',
      'Darjeeling Himalayan Railway',
      'Batasia Loop',
      'Happy Valley Tea Estate',
      'Peace Pagoda',
      'Padmaja Naidu Himalayan Zoological Park',
      'Mall Road'
    ],
    bestTime: 'March to May, October to December',
    weather: 'Pleasant spring/autumn (10-20°C), cold winters (2-10°C), monsoon brings heavy rainfall and landslides.',
    tips: [
      'Book Tiger Hill tour in advance',
      'Try Darjeeling tea at local estates',
      'Carry warm clothes even in summer',
      'Toy train tickets sell out fast, book early',
      'Avoid monsoon season due to landslides'
    ],
    coordinates: { lat: 27.0410, lon: 88.2663 },
    transport: 'Shared jeeps and taxis for local travel. Toy train for scenic rides. Walking is pleasant on Mall Road.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Tiger Hill sunrise and tea estates',
        activities: [
          {
            time: '03:30 AM',
            place: 'Tiger Hill Sunrise',
            duration: '2-3 hours',
            openingHours: 'Open from 4:00 AM',
            bestTime: 'Sunrise',
            description: 'Watch sunrise over Kanchenjunga (8,586m), world\'s third highest peak, with golden light.',
            tips: 'Book shared jeep night before, carry warm clothes, hot tea available at top'
          },
          {
            time: '06:30 AM',
            place: 'Ghoom Monastery',
            duration: '45 minutes',
            openingHours: '4:30 AM - 6:00 PM',
            bestTime: 'Early morning',
            description: 'Oldest Tibetan Buddhist monastery in Darjeeling with 15-foot Maitreya Buddha.',
            tips: 'On way back from Tiger Hill, peaceful morning prayers'
          },
          {
            time: '07:30 AM',
            place: 'Batasia Loop',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Spiral railway loop with war memorial and panoramic mountain views.',
            tips: 'Watch toy train pass through if timing matches, beautiful gardens'
          },
          {
            time: '09:00 AM',
            type: 'meal',
            place: 'Keventers',
            description: 'Iconic breakfast spot with English breakfast and hot chocolate'
          },
          {
            time: '10:30 AM',
            place: 'Happy Valley Tea Estate',
            duration: '2-3 hours',
            openingHours: '8:00 AM - 4:00 PM',
            bestTime: 'Late morning',
            description: 'Second oldest tea estate in Darjeeling, tour factory and taste fresh tea.',
            tips: 'Guided tours available, buy fresh tea directly, learn tea processing'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Glenary\'s',
            description: 'Colonial-era bakery with sandwiches, pastries, and live music'
          },
          {
            time: '03:00 PM',
            place: 'Padmaja Naidu Himalayan Zoological Park',
            duration: '2-3 hours',
            openingHours: '8:30 AM - 4:30 PM, closed Thursdays',
            bestTime: 'Afternoon',
            description: 'High-altitude zoo with red pandas, snow leopards, and Himalayan wildlife.',
            tips: 'Breeding center for endangered species, uphill walk, wear comfortable shoes'
          },
          {
            time: '06:00 PM',
            place: 'Mall Road Evening Walk',
            duration: '2 hours',
            openingHours: 'Open till late',
            bestTime: 'Evening',
            description: 'Stroll along the main promenade with shops, cafes, and mountain views.',
            tips: 'Shopping for woolens, handicrafts, and souvenirs'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Dinner at Sonam\'s Kitchen',
            description: 'Cozy cafe with momos, thukpa, and continental dishes.'
          }
        ]
      },
      {
        day: 2,
        title: 'Toy train and monasteries',
        activities: [
          {
            time: '08:00 AM',
            place: 'Darjeeling Himalayan Railway (Toy Train)',
            duration: '2 hours',
            openingHours: 'Multiple departures',
            bestTime: 'Morning',
            description: 'UNESCO World Heritage narrow-gauge railway, scenic ride to Ghoom and back.',
            tips: 'Book first class for window seats, joy ride or full journey to Kurseong available'
          },
          {
            time: '10:30 AM',
            type: 'meal',
            place: 'Hasty Tasty',
            description: 'Local favorite for momos and Tibetan bread'
          },
          {
            time: '11:30 AM',
            place: 'Japanese Peace Pagoda',
            duration: '1-2 hours',
            openingHours: '4:30 AM - 7:00 PM',
            bestTime: 'Late morning',
            description: 'White Buddhist stupa with four avatars of Buddha and panoramic valley views.',
            tips: 'Peaceful atmosphere, 20-minute walk from road, meditation sessions available'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Kunga Restaurant',
            description: 'Authentic Tibetan cuisine with tingmo and shapta'
          },
          {
            time: '03:00 PM',
            place: 'Himalayan Mountaineering Institute',
            duration: '2 hours',
            openingHours: '9:00 AM - 4:00 PM, closed Thursdays',
            bestTime: 'Afternoon',
            description: 'Museum showcasing mountaineering history, Tenzing Norgay memorabilia, and equipment.',
            tips: 'Adjacent to zoo, combined visit recommended, inspiring exhibits'
          },
          {
            time: '05:30 PM',
            place: 'Observatory Hill',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Sacred hill with Mahakal Temple, prayer flags, and sunset views.',
            tips: 'Steep climb, both Hindu and Buddhist worship, peaceful atmosphere'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Live Music at Joey\'s Pub',
            description: 'Evening entertainment with live bands and local crowd.'
          }
        ]
      },
      {
        day: 3,
        title: 'Mirik day trip',
        activities: [
          {
            time: '07:00 AM',
            place: 'Drive to Mirik',
            duration: '2 hours',
            openingHours: 'Travel time',
            bestTime: 'Morning',
            description: 'Scenic 49 km drive through tea gardens and pine forests.',
            tips: 'Hire taxi for day trip, winding mountain roads'
          },
          {
            time: '09:30 AM',
            place: 'Sumendu Lake',
            duration: '2-3 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late morning',
            description: 'Serene lake surrounded by gardens, boating, and walking paths.',
            tips: 'Paddle boats and horse rides available, peaceful atmosphere'
          },
          {
            time: '12:30 PM',
            type: 'meal',
            place: 'Jagjeet\'s Restaurant',
            description: 'Lakeside lunch with North Indian and Chinese cuisine'
          },
          {
            time: '02:00 PM',
            place: 'Bokar Monastery',
            duration: '1 hour',
            openingHours: '6:00 AM - 6:00 PM',
            bestTime: 'Afternoon',
            description: 'Tibetan monastery with beautiful architecture and valley views.',
            tips: 'Peaceful meditation spot, photography allowed'
          },
          {
            time: '03:30 PM',
            place: 'Mirik Tea Gardens',
            duration: '1-2 hours',
            openingHours: 'Viewable from road',
            bestTime: 'Late afternoon',
            description: 'Walk through terraced tea plantations with mountain backdrop.',
            tips: 'Photo opportunities, interact with tea pickers'
          },
          {
            time: '05:30 PM',
            place: 'Return to Darjeeling',
            duration: '2 hours',
            openingHours: 'Travel time',
            bestTime: 'Evening',
            description: 'Drive back to Darjeeling.',
            tips: 'Sunset views during return journey'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Farewell Dinner at Windamere Hotel',
            description: 'Colonial-era hotel with traditional English dinner and ambiance.'
          }
        ]
      },
      {
        day: 4,
        title: 'Local exploration and shopping',
        activities: [
          {
            time: '08:00 AM',
            place: 'Rock Garden',
            duration: '2 hours',
            openingHours: '8:00 AM - 5:00 PM',
            bestTime: 'Morning',
            description: 'Terraced garden with waterfalls, rock formations, and valley views.',
            tips: '10 km from town, combine with Ganga Maya Park visit'
          },
          {
            time: '10:30 AM',
            place: 'Ganga Maya Park',
            duration: '1 hour',
            openingHours: 'Adjacent to Rock Garden',
            bestTime: 'Late morning',
            description: 'Natural park with streams, bridges, and picnic spots.',
            tips: 'Peaceful atmosphere, good for nature walks'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Gatty\'s Cafe',
            description: 'Rooftop cafe with mountain views and continental menu'
          },
          {
            time: '01:30 PM',
            place: 'Chowrasta Mall',
            duration: '2-3 hours',
            openingHours: 'Open till late',
            bestTime: 'Afternoon',
            description: 'Central square with shops, pony rides, and people-watching.',
            tips: 'Shopping for tea, woolens, handicrafts, bargain expected'
          },
          {
            time: '04:30 PM',
            place: 'Mahakal Temple',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Late afternoon',
            description: 'Hindu temple on Observatory Hill with prayer flags and city views.',
            tips: 'Remove shoes, peaceful atmosphere, sunset views'
          },
          {
            time: '06:00 PM',
            type: 'evening',
            place: 'Final Tea Tasting',
            description: 'Visit Nathmull\'s Tea Room for final tea tasting and purchases.'
          }
        ]
      }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    state: 'Andaman and Nicobar',
    description: 'Tropical paradise with pristine beaches, crystal-clear waters, and vibrant coral reefs. Perfect for beach lovers, divers, and water sports enthusiasts.',
    travelType: ['Beach', 'Adventure', 'Nature'],
    idealDuration: '5-6 days',
    budget: { min: 30000, max: 55000 },
    tags: ['Beaches', 'Scuba Diving', 'Snorkeling', 'Islands'],
    heroImage: 'https://images.unsplash.com/photo-1553512313-64af79fdfe9c',
    images: [
      'https://images.unsplash.com/photo-1553512313-64af79fdfe9c',
      'https://images.unsplash.com/photo-1689092597690-be7988a95431'
    ],
    attractions: [
      'Radhanagar Beach',
      'Cellular Jail',
      'Ross Island',
      'North Bay Island',
      'Elephant Beach',
      'Neil Island',
      'Baratang Island'
    ],
    bestTime: 'October to May',
    weather: 'Pleasant winters (23-30°C), hot and humid summers (28-35°C). Monsoon brings heavy rainfall and rough seas.',
    tips: [
      'Book ferry tickets in advance for island hopping',
      'Carry cash, limited ATMs on smaller islands',
      'Respect marine life, no touching corals',
      'Book scuba diving with certified operators',
      'Carry sunscreen and reef-safe products'
    ],
    coordinates: { lat: 11.6234, lon: 92.7265 },
    transport: 'Government and private ferries between islands. Auto-rickshaws and bikes for local travel. No public transport on smaller islands.',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival in Port Blair and city tour',
        activities: [
          {
            time: '10:00 AM',
            place: 'Hotel Check-in',
            duration: '1 hour',
            openingHours: 'Hotel check-in',
            bestTime: 'Morning',
            description: 'Arrive at Port Blair, check into hotel and freshen up.',
            tips: 'Book hotels in advance during peak season'
          },
          {
            time: '11:30 AM',
            place: 'Corbyn\'s Cove Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late morning',
            description: 'Coconut palm-fringed beach with water sports and cafes.',
            tips: 'Jet skiing and banana boat rides available, swimming safe'
          },
          {
            time: '01:30 PM',
            type: 'meal',
            place: 'Anju Coco Resto',
            description: 'Seafood lunch with fresh catch and local preparations'
          },
          {
            time: '03:00 PM',
            place: 'Cellular Jail',
            duration: '2 hours',
            openingHours: '9:00 AM - 5:00 PM',
            bestTime: 'Afternoon',
            description: 'Colonial prison where Indian freedom fighters were imprisoned, now a national memorial.',
            tips: 'Audio guide available, moving history, attend light and sound show in evening'
          },
          {
            time: '05:45 PM',
            place: 'Light and Sound Show',
            duration: '1 hour',
            openingHours: 'Shows at 6:00 PM',
            bestTime: 'Evening',
            description: 'Dramatic narration of India\'s freedom struggle at Cellular Jail.',
            tips: 'Book tickets in advance, English and Hindi shows available'
          },
          {
            time: '07:30 PM',
            type: 'evening',
            place: 'Aberdeen Bazaar',
            description: 'Evening shopping for pearls, shells, and local handicrafts.'
          }
        ]
      },
      {
        day: 2,
        title: 'Ross Island and North Bay',
        activities: [
          {
            time: '08:00 AM',
            place: 'Ferry to Ross Island',
            duration: '30 minutes',
            openingHours: 'Ferries from 8:30 AM',
            bestTime: 'Morning',
            description: 'Short ferry ride from Port Blair to historic Ross Island.',
            tips: 'Book ferry tickets day before, carry water and snacks'
          },
          {
            time: '09:00 AM',
            place: 'Ross Island Exploration',
            duration: '2-3 hours',
            openingHours: '8:30 AM - 2:30 PM',
            bestTime: 'Morning',
            description: 'Ruins of British administrative headquarters, now overgrown with nature.',
            tips: 'Deer roam freely, wear comfortable shoes, photography allowed'
          },
          {
            time: '12:00 PM',
            place: 'Ferry to North Bay',
            duration: '30 minutes',
            openingHours: 'Ferries available',
            bestTime: 'Noon',
            description: 'Transfer to North Bay Island for water activities.',
            tips: 'Combined ferry tickets available for Ross and North Bay'
          },
          {
            time: '12:45 PM',
            type: 'meal',
            place: 'Packed Lunch',
            description: 'Carry packed lunch or eat at island shacks'
          },
          {
            time: '01:30 PM',
            place: 'North Bay Water Activities',
            duration: '3 hours',
            openingHours: 'Activities till 3:30 PM',
            bestTime: 'Afternoon',
            description: 'Snorkeling, glass-bottom boat rides, and sea walking with vibrant coral reefs.',
            tips: 'Book activities on arrival, life jackets provided, underwater photography available'
          },
          {
            time: '04:30 PM',
            place: 'Return to Port Blair',
            duration: '30 minutes',
            openingHours: 'Return ferry',
            bestTime: 'Late afternoon',
            description: 'Ferry back to Port Blair.',
            tips: 'Last ferry around 4:30 PM, don\'t miss it'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Seafood Dinner at Amaya',
            description: 'Fresh seafood with local spices and preparations.'
          }
        ]
      },
      {
        day: 3,
        title: 'Havelock Island - Radhanagar Beach',
        activities: [
          {
            time: '06:00 AM',
            place: 'Ferry to Havelock',
            duration: '2-3 hours',
            openingHours: 'Morning ferries',
            bestTime: 'Early morning',
            description: 'Cruise to Havelock Island (Swaraj Dweep) through turquoise waters.',
            tips: 'Book Makruzz or Green Ocean ferry for comfort, carry motion sickness tablets'
          },
          {
            time: '09:30 AM',
            place: 'Hotel Check-in',
            duration: '1 hour',
            openingHours: 'Hotel check-in',
            bestTime: 'Morning',
            description: 'Check into beach resort in Havelock.',
            tips: 'Book beachfront properties for best experience'
          },
          {
            time: '11:00 AM',
            place: 'Radhanagar Beach',
            duration: '4-5 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late morning to sunset',
            description: 'Asia\'s best beach with white sand, turquoise water, and stunning sunsets.',
            tips: 'Swimming safe, no water sports, carry beach essentials, sunset is magical'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Beach Shack Lunch',
            description: 'Fresh seafood and grilled fish at beach shacks'
          },
          {
            time: '06:00 PM',
            place: 'Sunset at Radhanagar',
            duration: '1 hour',
            openingHours: 'Open 24 hours',
            bestTime: 'Sunset',
            description: 'Watch spectacular sunset over the Andaman Sea.',
            tips: 'Arrive 30 minutes before sunset for best spot'
          },
          {
            time: '08:00 PM',
            type: 'evening',
            place: 'Dinner at Full Moon Cafe',
            description: 'Beachside dinner with live music and seafood specialties.'
          }
        ]
      },
      {
        day: 4,
        title: 'Elephant Beach and scuba diving',
        activities: [
          {
            time: '07:00 AM',
            place: 'Boat to Elephant Beach',
            duration: '30 minutes',
            openingHours: 'Boats from 7:00 AM',
            bestTime: 'Early morning',
            description: 'Speed boat ride to Elephant Beach through mangroves.',
            tips: 'Book boat tickets at jetty, trekking option also available (45 minutes)'
          },
          {
            time: '08:00 AM',
            place: 'Snorkeling at Elephant Beach',
            duration: '2 hours',
            openingHours: 'Activities till 3:00 PM',
            bestTime: 'Morning',
            description: 'Shallow coral reefs perfect for snorkeling, colorful fish and corals.',
            tips: 'Snorkeling gear on rent, underwater photography available, don\'t touch corals'
          },
          {
            time: '10:30 AM',
            place: 'Scuba Diving',
            duration: '2-3 hours',
            openingHours: 'Dives till afternoon',
            bestTime: 'Late morning',
            description: 'Discover scuba diving or certified dives with professional instructors.',
            tips: 'Book with certified operators (Dive India, Andaman Bubbles), medical certificate required'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Beach Lunch',
            description: 'Packed lunch or beach shack meals'
          },
          {
            time: '02:00 PM',
            place: 'Return to Havelock',
            duration: '30 minutes',
            openingHours: 'Return boats',
            bestTime: 'Afternoon',
            description: 'Boat back to Havelock main jetty.',
            tips: 'Last boats around 3:00 PM'
          },
          {
            time: '04:00 PM',
            place: 'Kalapathar Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Late afternoon',
            description: 'Black rocks contrasting with blue water, peaceful beach.',
            tips: 'Sunrise spot, less crowded, photography paradise'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Beachside BBQ Dinner',
            description: 'Fresh seafood BBQ at beach resort with bonfire.'
          }
        ]
      },
      {
        day: 5,
        title: 'Neil Island day trip',
        activities: [
          {
            time: '06:30 AM',
            place: 'Ferry to Neil Island',
            duration: '1 hour',
            openingHours: 'Morning ferry',
            bestTime: 'Early morning',
            description: 'Short ferry ride to Neil Island (Shaheed Dweep).',
            tips: 'Book return ferry tickets in advance'
          },
          {
            time: '08:00 AM',
            place: 'Bharatpur Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Morning',
            description: 'Shallow beach perfect for swimming and snorkeling.',
            tips: 'Glass-bottom boat rides available, coral viewing'
          },
          {
            time: '10:30 AM',
            place: 'Natural Bridge (Howrah Bridge)',
            duration: '1 hour',
            openingHours: 'Accessible during low tide',
            bestTime: 'Late morning',
            description: 'Natural rock formation resembling a bridge, visible during low tide.',
            tips: 'Check tide timings, slippery rocks, wear proper footwear'
          },
          {
            time: '12:00 PM',
            type: 'meal',
            place: 'Chand Restaurant',
            description: 'Local seafood and vegetarian meals'
          },
          {
            time: '01:30 PM',
            place: 'Laxmanpur Beach',
            duration: '2 hours',
            openingHours: 'Open 24 hours',
            bestTime: 'Afternoon',
            description: 'Long stretch of white sand beach with sunset views.',
            tips: 'Sunset point, peaceful atmosphere, shell collecting'
          },
          {
            time: '04:00 PM',
            place: 'Return Ferry to Havelock',
            duration: '1 hour',
            openingHours: 'Afternoon ferry',
            bestTime: 'Late afternoon',
            description: 'Ferry back to Havelock Island.',
            tips: 'Evening ferry around 4:00 PM'
          },
          {
            time: '07:00 PM',
            type: 'evening',
            place: 'Farewell Dinner at Anju Coco',
            description: 'Final seafood feast at Havelock\'s popular restaurant.'
          }
        ]
      },
      {
        day: 6,
        title: 'Return to Port Blair and departure',
        activities: [
          {
            time: '07:00 AM',
            place: 'Ferry to Port Blair',
            duration: '2-3 hours',
            openingHours: 'Morning ferry',
            bestTime: 'Morning',
            description: 'Return ferry to Port Blair.',
            tips: 'Book early ferry for same-day flight connections'
          },
          {
            time: '10:00 AM',
            type: 'meal',
            place: 'Breakfast at New Lighthouse',
            description: 'South Indian breakfast in Port Blair'
          },
          {
            time: '11:00 AM',
            place: 'Samudrika Naval Marine Museum',
            duration: '1-2 hours',
            openingHours: '9:00 AM - 1:00 PM, 2:00 PM - 5:00 PM',
            bestTime: 'Late morning',
            description: 'Marine life exhibits, coral displays, and island history.',
            tips: 'Closed Mondays, informative about Andaman ecology'
          },
          {
            time: '01:00 PM',
            type: 'meal',
            place: 'Farewell Lunch at Annapurna',
            description: 'Final meal with South Indian and seafood options'
          },
          {
            time: '02:30 PM',
            place: 'Last Minute Shopping',
            duration: '2 hours',
            openingHours: 'Market open',
            bestTime: 'Afternoon',
            description: 'Shop for pearls, shells, and local handicrafts at Aberdeen Bazaar.',
            tips: 'Bargain expected, check authenticity of pearls'
          },
          {
            time: '05:00 PM',
            place: 'Airport Transfer',
            duration: '30 minutes',
            openingHours: 'Departure',
            bestTime: 'Evening',
            description: 'Transfer to Veer Savarkar Airport for departure.',
            tips: 'Reach airport 2 hours before flight, limited flights daily'
          }
        ]
      }
    ]
  }
];