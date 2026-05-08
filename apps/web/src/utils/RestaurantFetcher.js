const OVERPASS_API_URL = 'https://overpass-api.de/api/interpreter';

// Destination-specific fallback restaurant lists
const FALLBACK_RESTAURANTS = {
  jaipur: [
    {
      name: 'Laxmi Misthan Bhandar',
      rating: 4.3,
      address: 'Johari Bazaar, Jaipur',
      isOpen: 'Hours unavailable',
      cuisine: 'Traditional Rajasthani'
    },
    {
      name: 'Peacock Rooftop Restaurant',
      rating: 4.5,
      address: 'Near Amber Fort, Jaipur',
      isOpen: 'Hours unavailable',
      cuisine: 'Mughlai, North Indian'
    },
    {
      name: 'Rawat Mishtan Bhandar',
      rating: 4.4,
      address: 'Station Road, Jaipur',
      isOpen: 'Hours unavailable',
      cuisine: 'Sweets, Snacks'
    },
    {
      name: 'Chokhi Dhani',
      rating: 4.6,
      address: 'Tonk Road, Jaipur',
      isOpen: 'Hours unavailable',
      cuisine: 'Rajasthani Village Theme'
    }
  ],
  goa: [
    {
      name: 'Souza Lobo',
      rating: 4.4,
      address: 'Calangute Beach, Goa',
      isOpen: 'Hours unavailable',
      cuisine: 'Goan Seafood'
    },
    {
      name: 'Britto\'s',
      rating: 4.3,
      address: 'Baga Beach, Goa',
      isOpen: 'Hours unavailable',
      cuisine: 'Seafood, Continental'
    },
    {
      name: 'Viva Panjim',
      rating: 4.5,
      address: 'Panjim, Goa',
      isOpen: 'Hours unavailable',
      cuisine: 'Authentic Goan'
    },
    {
      name: 'Martin\'s Corner',
      rating: 4.6,
      address: 'Betalbatim, Goa',
      isOpen: 'Hours unavailable',
      cuisine: 'Goan, Seafood'
    }
  ],
  varanasi: [
    {
      name: 'Kashi Chat Bhandar',
      rating: 4.2,
      address: 'Godowlia, Varanasi',
      isOpen: 'Hours unavailable',
      cuisine: 'Street Food, Chaat'
    },
    {
      name: 'Deena Chat Bhandar',
      rating: 4.3,
      address: 'Lahurabir, Varanasi',
      isOpen: 'Hours unavailable',
      cuisine: 'Chaat, Snacks'
    },
    {
      name: 'Pizzeria Vaatika Cafe',
      rating: 4.4,
      address: 'Assi Ghat, Varanasi',
      isOpen: 'Hours unavailable',
      cuisine: 'Multi-cuisine, Rooftop'
    },
    {
      name: 'Blue Lassi',
      rating: 4.5,
      address: 'Kachori Gali, Varanasi',
      isOpen: 'Hours unavailable',
      cuisine: 'Lassi, Beverages'
    }
  ],
  rishikesh: [
    {
      name: 'Little Buddha Cafe',
      rating: 4.4,
      address: 'Laxman Jhula, Rishikesh',
      isOpen: 'Hours unavailable',
      cuisine: 'Israeli, Continental'
    },
    {
      name: 'Cafe Delmar',
      rating: 4.3,
      address: 'Tapovan, Rishikesh',
      isOpen: 'Hours unavailable',
      cuisine: 'Multi-cuisine, Live Music'
    },
    {
      name: 'Bistro Nirvana',
      rating: 4.5,
      address: 'Ram Jhula, Rishikesh',
      isOpen: 'Hours unavailable',
      cuisine: 'Organic, Healthy'
    },
    {
      name: 'Chotiwala Restaurant',
      rating: 4.2,
      address: 'Swarg Ashram, Rishikesh',
      isOpen: 'Hours unavailable',
      cuisine: 'North Indian, Thali'
    }
  ],
  'kerala-backwaters': [
    {
      name: 'Thaff Restaurant',
      rating: 4.3,
      address: 'Alleppey, Kerala',
      isOpen: 'Hours unavailable',
      cuisine: 'Kerala Meals'
    },
    {
      name: 'Harbour Restaurant',
      rating: 4.4,
      address: 'Alleppey, Kerala',
      isOpen: 'Hours unavailable',
      cuisine: 'Seafood, Kerala'
    },
    {
      name: 'Coconut Lagoon Resort',
      rating: 4.6,
      address: 'Kumarakom, Kerala',
      isOpen: 'Hours unavailable',
      cuisine: 'Kerala Specialties'
    },
    {
      name: 'Marari Beach Resort',
      rating: 4.5,
      address: 'Mararikulam, Kerala',
      isOpen: 'Hours unavailable',
      cuisine: 'Seafood, Multi-cuisine'
    }
  ],
  'leh-ladakh': [
    {
      name: 'Gesmo Restaurant',
      rating: 4.3,
      address: 'Main Bazaar, Leh',
      isOpen: 'Hours unavailable',
      cuisine: 'Tibetan, Continental'
    },
    {
      name: 'Tibetan Kitchen',
      rating: 4.4,
      address: 'Fort Road, Leh',
      isOpen: 'Hours unavailable',
      cuisine: 'Authentic Tibetan'
    },
    {
      name: 'Bon Appetit',
      rating: 4.5,
      address: 'Changspa, Leh',
      isOpen: 'Hours unavailable',
      cuisine: 'Continental, Indian'
    },
    {
      name: 'Chopsticks Noodle Bar',
      rating: 4.2,
      address: 'Main Market, Leh',
      isOpen: 'Hours unavailable',
      cuisine: 'Asian, Noodles'
    }
  ],
  agra: [
    {
      name: 'Joney\'s Place',
      rating: 4.4,
      address: 'Taj Ganj, Agra',
      isOpen: 'Hours unavailable',
      cuisine: 'Rooftop, Multi-cuisine'
    },
    {
      name: 'Pinch of Spice',
      rating: 4.5,
      address: 'Fatehabad Road, Agra',
      isOpen: 'Hours unavailable',
      cuisine: 'Mughlai, North Indian'
    },
    {
      name: 'Dasaprakash',
      rating: 4.3,
      address: 'Gwalior Road, Agra',
      isOpen: 'Hours unavailable',
      cuisine: 'South Indian'
    },
    {
      name: 'Peshawri',
      rating: 4.6,
      address: 'ITC Mughal, Agra',
      isOpen: 'Hours unavailable',
      cuisine: 'North-West Frontier'
    }
  ],
  hampi: [
    {
      name: 'Mango Tree Restaurant',
      rating: 4.4,
      address: 'Hampi Bazaar, Hampi',
      isOpen: 'Hours unavailable',
      cuisine: 'Multi-cuisine, Riverside'
    },
    {
      name: 'Laughing Buddha',
      rating: 4.3,
      address: 'Virupapur Gaddi, Hampi',
      isOpen: 'Hours unavailable',
      cuisine: 'Israeli, Continental'
    },
    {
      name: 'Gopi Guesthouse Restaurant',
      rating: 4.2,
      address: 'Hampi Bazaar, Hampi',
      isOpen: 'Hours unavailable',
      cuisine: 'South Indian, Thali'
    },
    {
      name: 'Tamarind Tree',
      rating: 4.5,
      address: 'Virupapur Gaddi, Hampi',
      isOpen: 'Hours unavailable',
      cuisine: 'Healthy, Multi-cuisine'
    }
  ],
  darjeeling: [
    {
      name: 'Keventers',
      rating: 4.5,
      address: 'Mall Road, Darjeeling',
      isOpen: 'Hours unavailable',
      cuisine: 'English Breakfast, Cafe'
    },
    {
      name: 'Glenary\'s',
      rating: 4.4,
      address: 'Nehru Road, Darjeeling',
      isOpen: 'Hours unavailable',
      cuisine: 'Bakery, Continental'
    },
    {
      name: 'Sonam\'s Kitchen',
      rating: 4.6,
      address: 'Dr. Zakir Hussain Road, Darjeeling',
      isOpen: 'Hours unavailable',
      cuisine: 'Tibetan, Continental'
    },
    {
      name: 'Kunga Restaurant',
      rating: 4.3,
      address: 'Gandhi Road, Darjeeling',
      isOpen: 'Hours unavailable',
      cuisine: 'Authentic Tibetan'
    }
  ],
  andaman: [
    {
      name: 'Anju Coco Resto',
      rating: 4.4,
      address: 'Havelock Island, Andaman',
      isOpen: 'Hours unavailable',
      cuisine: 'Seafood, Multi-cuisine'
    },
    {
      name: 'Full Moon Cafe',
      rating: 4.5,
      address: 'Radhanagar Beach, Havelock',
      isOpen: 'Hours unavailable',
      cuisine: 'Beachside, Seafood'
    },
    {
      name: 'Amaya',
      rating: 4.3,
      address: 'Port Blair, Andaman',
      isOpen: 'Hours unavailable',
      cuisine: 'Seafood, Indian'
    },
    {
      name: 'New Lighthouse',
      rating: 4.2,
      address: 'Aberdeen Bazaar, Port Blair',
      isOpen: 'Hours unavailable',
      cuisine: 'South Indian, Seafood'
    }
  ]
};

export async function fetchNearbyRestaurants(lat, lon, destinationId) {
  try {
    // Build Overpass API query for restaurants within 5km radius
    const query = `
      [out:json];
      node(around:5000,${lat},${lon})[amenity=restaurant];
      out;
    `;

    const response = await fetch(OVERPASS_API_URL, {
      method: 'POST',
      body: query,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Overpass API');
    }

    const data = await response.json();

    // Parse and format restaurant data
    const restaurants = data.elements.map(element => {
      const tags = element.tags || {};
      
      return {
        name: tags.name || 'Unnamed Restaurant',
        rating: tags['contact:phone'] ? 4.2 : null, // Placeholder rating logic
        address: formatAddress(tags),
        isOpen: parseOpeningHours(tags.opening_hours),
        cuisine: tags.cuisine || 'Not specified'
      };
    }).filter(r => r.name !== 'Unnamed Restaurant'); // Filter out unnamed restaurants

    // If we got results, return them
    if (restaurants.length > 0) {
      return restaurants.slice(0, 8); // Return top 8 results
    }

    // Otherwise, return destination-specific fallback
    return getFallbackRestaurants(destinationId);

  } catch (error) {
    console.error('Error fetching restaurants:', error);
    // Return destination-specific fallback on error
    return getFallbackRestaurants(destinationId);
  }
}

function formatAddress(tags) {
  const parts = [];
  
  if (tags['addr:street']) parts.push(tags['addr:street']);
  if (tags['addr:city']) parts.push(tags['addr:city']);
  if (tags['addr:state']) parts.push(tags['addr:state']);
  
  if (parts.length > 0) {
    return parts.join(', ');
  }
  
  return 'Address unavailable';
}

function parseOpeningHours(openingHours) {
  if (!openingHours) {
    return 'Hours unavailable';
  }

  // Simple parsing - in production, use a proper opening hours parser
  const now = new Date();
  const currentHour = now.getHours();
  
  // Very basic check - assumes format like "Mo-Su 09:00-22:00"
  if (openingHours.includes('24/7') || openingHours.includes('00:00-24:00')) {
    return 'Open 24 hours';
  }

  // Extract hours if possible (simplified)
  const hourMatch = openingHours.match(/(\d{2}):(\d{2})-(\d{2}):(\d{2})/);
  if (hourMatch) {
    const openHour = parseInt(hourMatch[1]);
    const closeHour = parseInt(hourMatch[3]);
    
    if (currentHour >= openHour && currentHour < closeHour) {
      return `Open until ${hourMatch[3]}:${hourMatch[4]}`;
    } else {
      return `Opens at ${hourMatch[1]}:${hourMatch[2]}`;
    }
  }

  return openingHours;
}

function getFallbackRestaurants(destinationId) {
  return FALLBACK_RESTAURANTS[destinationId] || [
    {
      name: 'Local Restaurant',
      rating: 4.0,
      address: 'City Center',
      isOpen: 'Hours unavailable',
      cuisine: 'Local Cuisine'
    }
  ];
}