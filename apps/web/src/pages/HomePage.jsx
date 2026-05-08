import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock,
  CloudSun,
  Compass,
  Filter,
  IndianRupee,
  Landmark,
  MapPin,
  Navigation,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Utensils,
} from 'lucide-react';
import { destinations } from '@/data/destinations';

const extraDestinationSpecs = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description:
      'A high-energy coastal metropolis with colonial architecture, sea promenades, street food, Bollywood history, markets, and late-night dining.',
    travelType: ['Urban', 'Historical', 'Food'],
    idealDuration: '2-3 days',
    budget: { min: 18000, max: 40000 },
    tags: ['Gateway of India', 'Marine Drive', 'Street food', 'Markets'],
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
    attractions: ['Gateway of India', 'Colaba Causeway', 'Marine Drive', 'Chhatrapati Shivaji Terminus', 'Bandra Fort'],
    bestTime: 'November to February',
    weather: 'Warm and humid most of the year. Winters are comfortable around 20-30 C, while monsoon brings heavy rain.',
    tips: ['Use local trains outside peak hours', 'Keep buffer time for traffic', 'Try vada pav, pav bhaji, and coastal seafood'],
    coordinates: { lat: 19.076, lon: 72.8777 },
    transport: 'Use local trains for long north-south movement, app cabs at night, and walking in Colaba and Fort.',
    days: [
      {
        title: 'South Mumbai heritage and sea views',
        stops: [
          ['08:30 AM', 'Gateway of India', '1 hour', 'Open 24 hours', 'Morning', 'Begin at the waterfront before crowds build near the ferry area.'],
          ['10:00 AM', 'Chhatrapati Shivaji Terminus', '45 minutes', 'Exterior always viewable', 'Late morning', 'Study the Gothic facade and nearby Fort area heritage streets.'],
          ['03:30 PM', 'Colaba Causeway', '2 hours', '10:00 AM - 9:00 PM', 'Late afternoon', 'Shop for clothes, books, antiques, and souvenirs with bargaining.'],
        ],
        lunch: 'Lunch at Britannia, Olympia, or a Colaba cafe depending on budget.',
        dinner: 'Dinner near Kala Ghoda or Marine Drive with coastal seafood options.',
        evening: 'Walk Marine Drive from Nariman Point around sunset and end with ice cream at Chowpatty.',
      },
      {
        title: 'Bandra, film culture, and local food',
        stops: [
          ['09:00 AM', 'Bandra Fort', '1 hour', '6:00 AM - 7:30 PM', 'Morning', 'See Bandra-Worli Sea Link views before the heat rises.'],
          ['11:00 AM', 'Mount Mary Basilica', '45 minutes', '8:00 AM - 8:30 PM', 'Late morning', 'A peaceful stop close to Bandra lanes and cafes.'],
          ['04:30 PM', 'Juhu Beach', '2 hours', 'Open 24 hours', 'Evening', 'Try Mumbai street snacks and watch the beach come alive.'],
        ],
        lunch: 'Lunch at a Bandra cafe or local seafood restaurant.',
        dinner: 'Dinner around Juhu or Bandra with pav bhaji, kebabs, or coastal dishes.',
        evening: 'Explore Carter Road promenade or Bandstand for an easy night walk.',
      },
    ],
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    description:
      'A romantic lake city of palaces, ghats, rooftop restaurants, boat rides, miniature art, and slow sunset viewpoints.',
    travelType: ['Historical', 'Nature', 'Cultural'],
    idealDuration: '2-3 days',
    budget: { min: 17000, max: 35000 },
    tags: ['Lakes', 'Palaces', 'Sunset', 'Rajasthan'],
    heroImage: 'https://images.unsplash.com/photo-1677868818231-b5e09bcfc5e3',
    attractions: ['City Palace Udaipur', 'Lake Pichola', 'Jag Mandir', 'Bagore Ki Haveli', 'Sajjangarh Palace'],
    bestTime: 'October to March',
    weather: 'Pleasant winters around 12-28 C. Summers are dry and hot, while monsoon makes the lakes beautiful.',
    tips: ['Book boat rides before sunset', 'Stay near the old city for walkability', 'Carry cash for small art shops'],
    coordinates: { lat: 24.5854, lon: 73.7125 },
    transport: 'Walk inside the old city lanes, use autos for short hops, and hire a cab for Sajjangarh Palace.',
    days: [
      {
        title: 'Palace, lake, and old city lanes',
        stops: [
          ['09:30 AM', 'City Palace Udaipur', '2.5 hours', '9:30 AM - 5:30 PM', 'Morning', 'Explore courtyards, museum rooms, lake balconies, and royal collections.'],
          ['01:30 PM', 'Jagdish Temple', '45 minutes', '5:00 AM - 2:30 PM, 4:00 PM - 10:00 PM', 'Afternoon', 'A compact temple stop close to palace lanes.'],
          ['05:00 PM', 'Lake Pichola Boat Ride', '1 hour', '10:00 AM - 6:00 PM', 'Sunset', 'Take the sunset boat circuit for palace and Jag Mandir views.'],
        ],
        lunch: 'Lunch at a lakeside cafe near Gangaur Ghat.',
        dinner: 'Dinner at a rooftop restaurant overlooking Lake Pichola.',
        evening: 'Watch the Dharohar folk show at Bagore Ki Haveli.',
      },
      {
        title: 'Views, gardens, and craft shopping',
        stops: [
          ['09:00 AM', 'Saheliyon Ki Bari', '1 hour', '9:00 AM - 7:00 PM', 'Morning', 'A calm garden with fountains and marble pavilions.'],
          ['11:30 AM', 'Vintage Car Museum', '1 hour', '9:00 AM - 9:00 PM', 'Late morning', 'See royal cars and old-world travel details.'],
          ['04:30 PM', 'Sajjangarh Palace', '2 hours', '9:00 AM - 6:00 PM', 'Late afternoon', 'Drive up for panoramic views over lakes and hills.'],
        ],
        lunch: 'Lunch near Fateh Sagar Lake with light Rajasthani snacks.',
        dinner: 'Dinner in old city with dal baati churma or laal maas.',
        evening: 'Shop for miniature paintings, leather journals, and textiles around Hathi Pol.',
      },
    ],
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    state: 'Karnataka',
    description:
      'A graceful heritage city known for its illuminated palace, sandalwood markets, silk sarees, gardens, temples, and easy day trips.',
    travelType: ['Historical', 'Cultural', 'Nature'],
    idealDuration: '2-3 days',
    budget: { min: 12000, max: 26000 },
    tags: ['Palace', 'Gardens', 'Silk', 'South India'],
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    attractions: ['Mysore Palace', 'Chamundi Hill', 'Devaraja Market', 'Brindavan Gardens', 'St. Philomena Church'],
    bestTime: 'October to February',
    weather: 'Comfortable and mild for most of the year, with cooler evenings after monsoon and in winter.',
    tips: ['See palace illumination on Sundays if possible', 'Try Mysore pak from a reputed sweet shop', 'Use autos for short city hops'],
    coordinates: { lat: 12.2958, lon: 76.6394 },
    transport: 'Autos are easy inside the city. Hire a cab for Chamundi Hill and Brindavan Gardens.',
    days: [
      {
        title: 'Palace, market, and old city',
        stops: [
          ['09:30 AM', 'Mysore Palace', '2.5 hours', '10:00 AM - 5:30 PM', 'Morning', 'Tour palace halls, courtyards, paintings, and royal artifacts.'],
          ['01:30 PM', 'Devaraja Market', '1 hour', '6:30 AM - 9:30 PM', 'Afternoon', 'Walk through flowers, spices, incense, and fruit stalls.'],
          ['04:00 PM', 'St. Philomena Church', '45 minutes', '8:00 AM - 8:00 PM', 'Late afternoon', 'Visit the Neo-Gothic landmark with tall twin spires.'],
        ],
        lunch: 'Lunch with Mysore masala dosa and filter coffee near the palace area.',
        dinner: 'Dinner at a classic South Indian restaurant or hotel dining room.',
        evening: 'Return to Mysore Palace for exterior lighting when available.',
      },
      {
        title: 'Hill temple and garden lights',
        stops: [
          ['08:00 AM', 'Chamundi Hill', '2 hours', '7:30 AM - 2:00 PM, 3:30 PM - 6:00 PM', 'Morning', 'Visit Chamundeshwari Temple and viewpoint before crowds.'],
          ['11:30 AM', 'Rail Museum', '1 hour', '10:00 AM - 5:30 PM', 'Late morning', 'A compact museum with heritage engines and coaches.'],
          ['05:00 PM', 'Brindavan Gardens', '2 hours', '6:00 AM - 8:00 PM', 'Evening', 'Arrive before sunset for garden walk and musical fountain.'],
        ],
        lunch: 'Lunch near the city center before driving to the gardens.',
        dinner: 'Dinner after returning from Brindavan Gardens.',
        evening: 'Keep the evening flexible because garden lighting timings can vary.',
      },
    ],
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    description:
      'A soulful cultural capital with riverfront walks, colonial buildings, bookstores, museums, temples, art cafes, and legendary sweets.',
    travelType: ['Cultural', 'Historical', 'Food'],
    idealDuration: '3 days',
    budget: { min: 12000, max: 28000 },
    tags: ['Victoria Memorial', 'Howrah Bridge', 'Sweets', 'Museums'],
    heroImage: 'https://images.unsplash.com/photo-1575907039443-1cce5634f084',
    attractions: ['Victoria Memorial', 'Indian Museum', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'College Street'],
    bestTime: 'November to February',
    weather: 'Humid summers, heavy monsoon, and pleasant winters around 14-27 C.',
    tips: ['Use the metro to avoid traffic', 'Try mishti doi and kathi rolls', 'Plan temple visits early morning'],
    coordinates: { lat: 22.5726, lon: 88.3639 },
    transport: 'Metro is efficient for central routes. Yellow taxis and app cabs work well for flexible sightseeing.',
    days: [
      {
        title: 'Colonial Kolkata and museum quarter',
        stops: [
          ['09:30 AM', 'Victoria Memorial', '2 hours', '10:00 AM - 5:00 PM', 'Morning', 'Explore galleries, gardens, and the marble monument.'],
          ['12:30 PM', 'St. Pauls Cathedral', '45 minutes', '10:00 AM - 6:00 PM', 'Afternoon', 'A quiet Gothic church near the Maidan.'],
          ['03:00 PM', 'Indian Museum', '2 hours', '10:00 AM - 5:00 PM', 'Afternoon', 'See archaeology, fossils, art, and historic collections.'],
        ],
        lunch: 'Lunch at Park Street with Bengali or Anglo-Indian options.',
        dinner: 'Dinner on Park Street or a Bengali thali restaurant.',
        evening: 'Walk around Prinsep Ghat for riverfront photos and tea.',
      },
      {
        title: 'River, temples, and books',
        stops: [
          ['07:30 AM', 'Dakshineswar Kali Temple', '1.5 hours', '6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM', 'Morning', 'Start early for darshan and river views.'],
          ['10:30 AM', 'Belur Math', '1.5 hours', '6:30 AM - 11:30 AM, 4:00 PM - 8:30 PM', 'Late morning', 'Visit the peaceful Ramakrishna Mission campus.'],
          ['04:00 PM', 'College Street', '2 hours', '10:00 AM - 8:00 PM', 'Late afternoon', 'Browse bookshops and stop at Indian Coffee House.'],
        ],
        lunch: 'Lunch near Shobhabazar or College Street.',
        dinner: 'Dinner with Kolkata biryani, fish fry, or Bengali sweets.',
        evening: 'See Howrah Bridge from the riverfront after lights come on.',
      },
    ],
  },
  {
    id: 'shillong-meghalaya',
    name: 'Shillong and Meghalaya',
    state: 'Meghalaya',
    description:
      'A lush hill and waterfall circuit with living root bridges, caves, viewpoints, clean villages, and dramatic monsoon landscapes.',
    travelType: ['Nature', 'Adventure'],
    idealDuration: '4-5 days',
    budget: { min: 18000, max: 38000 },
    tags: ['Waterfalls', 'Caves', 'Root bridges', 'Hill station'],
    heroImage: 'https://images.unsplash.com/photo-1692621031591-4d63ddedc67e',
    attractions: ['Umiam Lake', 'Elephant Falls', 'Cherrapunji', 'Nongriat Root Bridge', 'Mawlynnong'],
    bestTime: 'October to May',
    weather: 'Cool hill weather. Monsoon is very wet and dramatic, while winter is clearer and comfortable.',
    tips: ['Carry rain protection', 'Start waterfall days early', 'Book local taxis because self-drive routes can be slow'],
    coordinates: { lat: 25.5788, lon: 91.8933 },
    transport: 'Use a local cab from Shillong for Cherrapunji, Dawki, Mawlynnong, and root bridge circuits.',
    days: [
      {
        title: 'Shillong lakes and waterfalls',
        stops: [
          ['08:30 AM', 'Umiam Lake', '1.5 hours', 'Open 24 hours', 'Morning', 'Begin with lake views and boating if weather permits.'],
          ['11:30 AM', 'Elephant Falls', '1 hour', '10:00 AM - 6:00 PM', 'Late morning', 'Walk down the waterfall viewpoints carefully.'],
          ['04:00 PM', 'Police Bazaar', '2 hours', '10:00 AM - 9:00 PM', 'Evening', 'Shop and snack in the central market area.'],
        ],
        lunch: 'Lunch in Shillong with Khasi rice plates or cafe food.',
        dinner: 'Dinner near Police Bazaar with local pork, chicken, or vegetarian thali.',
        evening: 'Take a slow market walk; avoid late drives in fog.',
      },
      {
        title: 'Cherrapunji waterfall circuit',
        stops: [
          ['07:30 AM', 'Drive to Cherrapunji', '2 hours', 'Road route', 'Early morning', 'Leave early to avoid fog and traffic delays.'],
          ['10:00 AM', 'Nohkalikai Falls', '1 hour', '8:00 AM - 5:00 PM', 'Morning', 'A dramatic waterfall viewpoint with changing mist.'],
          ['01:30 PM', 'Mawsmai Cave', '1 hour', '9:30 AM - 5:30 PM', 'Afternoon', 'Short limestone cave walk with narrow passages.'],
        ],
        lunch: 'Lunch at a Cherrapunji cafe or homestay kitchen.',
        dinner: 'Dinner back in Shillong or stay overnight in Cherrapunji.',
        evening: 'Keep the evening light because return drives can be foggy.',
      },
    ],
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    state: 'Puducherry',
    description:
      'A calm coastal escape with French Quarter streets, cafes, beaches, Auroville, churches, ashram spaces, and cycling-friendly mornings.',
    travelType: ['Beach', 'Cultural', 'Spiritual'],
    idealDuration: '2-3 days',
    budget: { min: 14000, max: 32000 },
    tags: ['French Quarter', 'Auroville', 'Cafe culture', 'Beach'],
    heroImage: 'https://images.unsplash.com/photo-1526370548891-1da424fcf50a',
    attractions: ['White Town', 'Promenade Beach', 'Auroville', 'Sri Aurobindo Ashram', 'Paradise Beach'],
    bestTime: 'October to March',
    weather: 'Warm coastal weather. Winters are breezy, summers are hot, and monsoon can be humid.',
    tips: ['Rent a cycle or scooter', 'Book Auroville Matrimandir viewing ahead', 'Start beach visits early'],
    coordinates: { lat: 11.9416, lon: 79.8083 },
    transport: 'Cycle or walk in White Town. Use scooters, autos, or cabs for Auroville and Paradise Beach.',
    days: [
      {
        title: 'White Town and promenade',
        stops: [
          ['07:00 AM', 'Promenade Beach', '1 hour', 'Open 24 hours', 'Sunrise', 'Start with a breezy sunrise walk along the seafront.'],
          ['09:30 AM', 'Sri Aurobindo Ashram', '45 minutes', '8:00 AM - 12:00 PM, 2:00 PM - 6:00 PM', 'Morning', 'A quiet spiritual stop with simple visitor etiquette.'],
          ['04:00 PM', 'White Town Heritage Walk', '2 hours', 'Open area', 'Late afternoon', 'Explore pastel streets, churches, cafes, and colonial facades.'],
        ],
        lunch: 'Lunch at a French-Tamil cafe in White Town.',
        dinner: 'Dinner near Rue Romain Rolland or the promenade.',
        evening: 'Walk the promenade after traffic restrictions begin.',
      },
      {
        title: 'Auroville and beach day',
        stops: [
          ['08:30 AM', 'Auroville Visitor Centre', '2 hours', '9:00 AM - 5:30 PM', 'Morning', 'Learn about Auroville and visit the Matrimandir viewing point.'],
          ['12:30 PM', 'Auroville Cafes', '1.5 hours', 'Cafe hours vary', 'Lunch', 'Try organic cafes and bakery stops.'],
          ['04:00 PM', 'Paradise Beach', '2 hours', 'Ferry usually 9:00 AM - 5:00 PM', 'Late afternoon', 'Take the boat transfer and relax on the sand.'],
        ],
        lunch: 'Lunch at an Auroville cafe with vegetarian and bakery options.',
        dinner: 'Dinner in White Town with seafood or crepes.',
        evening: 'Keep scooter rides short after dark and use main roads.',
      },
    ],
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    description:
      'A powerful spiritual and historical city centered on the Golden Temple, partition history, Punjabi food, and the Wagah border ceremony.',
    travelType: ['Spiritual', 'Historical', 'Food'],
    idealDuration: '2 days',
    budget: { min: 12000, max: 24000 },
    tags: ['Golden Temple', 'Wagah Border', 'Punjabi food', 'History'],
    heroImage: 'https://images.unsplash.com/photo-1575907039443-1cce5634f084',
    attractions: ['Golden Temple', 'Jallianwala Bagh', 'Partition Museum', 'Wagah Border', 'Hall Bazaar'],
    bestTime: 'November to March',
    weather: 'Hot summers, cool winters, and pleasant sightseeing weather from late autumn to early spring.',
    tips: ['Cover your head at the Golden Temple', 'Book Wagah transport early', 'Try kulcha, lassi, and langar respectfully'],
    coordinates: { lat: 31.634, lon: 74.8723 },
    transport: 'Use autos around the old city and a pre-booked cab for Wagah Border.',
    days: [
      {
        title: 'Golden Temple and old city',
        stops: [
          ['06:30 AM', 'Golden Temple', '2 hours', 'Open 24 hours', 'Early morning', 'Experience the sanctum, parikrama, and calm morning atmosphere.'],
          ['10:00 AM', 'Jallianwala Bagh', '1 hour', '6:30 AM - 7:30 PM', 'Morning', 'Visit the memorial and museum exhibits.'],
          ['03:00 PM', 'Partition Museum', '1.5 hours', '10:00 AM - 6:00 PM', 'Afternoon', 'A moving museum on partition stories and archives.'],
        ],
        lunch: 'Have langar at the Golden Temple or Amritsari kulcha nearby.',
        dinner: 'Dinner with Punjabi thali, lassi, and local sweets.',
        evening: 'Return to the Golden Temple after lighting for a second view.',
      },
      {
        title: 'Markets and Wagah ceremony',
        stops: [
          ['09:30 AM', 'Hall Bazaar', '2 hours', '10:00 AM - 9:00 PM', 'Morning', 'Shop for juttis, phulkari, spices, and local snacks.'],
          ['02:30 PM', 'Drive to Wagah Border', '1 hour', 'Ceremony timing varies', 'Afternoon', 'Leave early for security checks and seating.'],
          ['04:30 PM', 'Wagah Border Ceremony', '1.5 hours', 'Usually before sunset', 'Evening', 'Watch the energetic retreat ceremony at the border.'],
        ],
        lunch: 'Lunch in the old city before leaving for Wagah.',
        dinner: 'Dinner after returning to Amritsar with tandoori dishes.',
        evening: 'Keep ID proof handy for border entry checks.',
      },
    ],
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    description:
      'A coastal heritage city with Chinese fishing nets, spice lanes, Jewish history, art cafes, Kathakali, and ferry-linked neighborhoods.',
    travelType: ['Cultural', 'Beach', 'Historical'],
    idealDuration: '2-3 days',
    budget: { min: 16000, max: 33000 },
    tags: ['Fort Kochi', 'Spice market', 'Kathakali', 'Backwater gateway'],
    heroImage: 'https://images.unsplash.com/photo-1459100652174-45f3b5ca9d04',
    attractions: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Jew Town', 'Kerala Kathakali Centre'],
    bestTime: 'October to March',
    weather: 'Warm and humid coastal weather, with pleasant winters and heavy monsoon showers.',
    tips: ['Use ferries for local flavor', 'Book Kathakali tickets ahead', 'Explore Fort Kochi early on foot'],
    coordinates: { lat: 9.9312, lon: 76.2673 },
    transport: 'Walk in Fort Kochi, use ferries between islands, and take autos for short transfers.',
    days: [
      {
        title: 'Fort Kochi heritage loop',
        stops: [
          ['07:30 AM', 'Chinese Fishing Nets', '45 minutes', 'Open area', 'Morning', 'Watch fishing net activity and waterfront life.'],
          ['09:30 AM', 'St. Francis Church', '45 minutes', '10:00 AM - 5:00 PM', 'Morning', 'Visit one of Indias oldest European churches.'],
          ['03:00 PM', 'Jew Town and Spice Market', '2 hours', '10:00 AM - 6:00 PM', 'Afternoon', 'Browse spice shops, antiques, and synagogue lanes.'],
        ],
        lunch: 'Lunch at a Fort Kochi cafe with seafood or Kerala meals.',
        dinner: 'Dinner before or after a Kathakali performance.',
        evening: 'Watch Kathakali makeup and performance at Kerala Kathakali Centre.',
      },
      {
        title: 'Mattancherry and ferry day',
        stops: [
          ['09:30 AM', 'Mattancherry Palace', '1 hour', '10:00 AM - 5:00 PM', 'Morning', 'See murals and royal artifacts. Closed Fridays.'],
          ['12:00 PM', 'Ernakulam Ferry Ride', '1 hour', 'Ferry timings vary', 'Midday', 'Use the public ferry for local movement and harbor views.'],
          ['04:30 PM', 'Marine Drive Kochi', '1.5 hours', 'Open 24 hours', 'Evening', 'Easy promenade walk with sunset light.'],
        ],
        lunch: 'Lunch in Ernakulam or back in Fort Kochi.',
        dinner: 'Dinner with appam, stew, fish curry, or vegetarian Kerala meals.',
        evening: 'Keep ferry timings in mind for the return.',
      },
    ],
  },
  {
    id: 'ooty',
    name: 'Ooty',
    state: 'Tamil Nadu',
    description:
      'A classic Nilgiri hill station with tea gardens, viewpoints, botanical gardens, lake walks, toy train rides, and cool weather.',
    travelType: ['Nature', 'Adventure'],
    idealDuration: '2-3 days',
    budget: { min: 12000, max: 26000 },
    tags: ['Tea gardens', 'Hill station', 'Toy train', 'Viewpoints'],
    heroImage: 'https://images.unsplash.com/photo-1692621031591-4d63ddedc67e',
    attractions: ['Botanical Garden', 'Ooty Lake', 'Doddabetta Peak', 'Tea Museum', 'Nilgiri Mountain Railway'],
    bestTime: 'October to June',
    weather: 'Cool hill weather, misty mornings, chilly nights in winter, and lush monsoon landscapes.',
    tips: ['Carry warm layers', 'Book toy train seats early', 'Avoid tight road schedules during holidays'],
    coordinates: { lat: 11.4102, lon: 76.695 },
    transport: 'Use local taxis for viewpoints and gardens. Walking is good around lake and market areas.',
    days: [
      {
        title: 'Gardens, lake, and market',
        stops: [
          ['09:00 AM', 'Government Botanical Garden', '1.5 hours', '7:00 AM - 6:30 PM', 'Morning', 'Walk through lawns, trees, flower beds, and glasshouse areas.'],
          ['12:00 PM', 'Ooty Lake', '1.5 hours', '9:00 AM - 6:00 PM', 'Midday', 'Boating and lakeside walking with flexible time.'],
          ['04:00 PM', 'Commercial Road Market', '2 hours', '10:00 AM - 9:00 PM', 'Evening', 'Shop for tea, chocolate, oils, and woolens.'],
        ],
        lunch: 'Lunch near Ooty Lake or Charing Cross.',
        dinner: 'Dinner in town with South Indian or cafe-style comfort food.',
        evening: 'Try local chocolates and keep the evening light.',
      },
      {
        title: 'Peaks, tea, and scenic rail',
        stops: [
          ['08:00 AM', 'Doddabetta Peak', '1.5 hours', '7:00 AM - 6:00 PM', 'Morning', 'Go early for clearer valley views.'],
          ['11:00 AM', 'Tea Museum', '1 hour', '10:00 AM - 6:00 PM', 'Late morning', 'Learn tea processing and taste local varieties.'],
          ['03:00 PM', 'Nilgiri Mountain Railway', '2 hours', 'Train timings vary', 'Afternoon', 'Take a scenic toy train segment if tickets are available.'],
        ],
        lunch: 'Lunch at a tea estate cafe or in town.',
        dinner: 'Dinner near your stay to avoid late hill driving.',
        evening: 'Check train timings one day before because seats sell out.',
      },
    ],
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho',
    state: 'Madhya Pradesh',
    description:
      'A compact UNESCO temple town with intricate stone carvings, light shows, quiet cycling routes, and easy access to Panna landscapes.',
    travelType: ['Historical', 'Spiritual', 'Cultural'],
    idealDuration: '2 days',
    budget: { min: 10000, max: 22000 },
    tags: ['UNESCO', 'Temples', 'Sculpture', 'Architecture'],
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    attractions: ['Western Group of Temples', 'Eastern Group of Temples', 'Archaeological Museum', 'Raneh Falls', 'Light and Sound Show'],
    bestTime: 'October to March',
    weather: 'Hot summers, pleasant winters, and dry sightseeing-friendly days in peak season.',
    tips: ['Hire a certified guide for temple symbolism', 'Cycle between temple groups', 'Carry water and sun protection'],
    coordinates: { lat: 24.8318, lon: 79.9199 },
    transport: 'Cycle, walk, or use autos inside town. Hire a cab for Raneh Falls or Panna side trips.',
    days: [
      {
        title: 'Western temples and museum',
        stops: [
          ['08:30 AM', 'Western Group of Temples', '3 hours', '6:00 AM - 6:00 PM', 'Morning', 'Explore Kandariya Mahadev, Lakshmana, and Vishwanatha temples with a guide.'],
          ['12:30 PM', 'Archaeological Museum', '1 hour', '10:00 AM - 5:00 PM', 'Afternoon', 'Understand the sculptural context and recovered artifacts.'],
          ['06:30 PM', 'Light and Sound Show', '1 hour', 'Evening show timings vary', 'Evening', 'Attend the narrated history show near the temple complex.'],
        ],
        lunch: 'Lunch near the Western Group with simple thali or cafe food.',
        dinner: 'Dinner at a local restaurant near the main market.',
        evening: 'Book light show tickets earlier in the day.',
      },
      {
        title: 'Eastern temples and nature edge',
        stops: [
          ['08:30 AM', 'Eastern Group of Temples', '2 hours', 'Open sunrise to sunset', 'Morning', 'Visit Jain and Hindu temple clusters at a slower pace.'],
          ['11:30 AM', 'Duladeo Temple', '45 minutes', 'Open sunrise to sunset', 'Late morning', 'A quieter temple stop with elegant carvings.'],
          ['03:00 PM', 'Raneh Falls', '2 hours', '9:00 AM - 5:00 PM', 'Afternoon', 'See canyon-like rock formations and seasonal water flow.'],
        ],
        lunch: 'Lunch in Khajuraho before leaving for Raneh Falls.',
        dinner: 'Dinner near your hotel after returning.',
        evening: 'Avoid remote roads after dark and keep return time realistic.',
      },
    ],
  },
  {
    id: 'kashmir-valley',
    name: 'Kashmir Valley',
    state: 'Jammu and Kashmir',
    description:
      'A scenic mountain circuit of Srinagar, Dal Lake, Mughal gardens, Gulmarg meadows, Pahalgam valleys, snow views, and slow shikara rides.',
    travelType: ['Nature', 'Adventure'],
    idealDuration: '5-6 days',
    budget: { min: 30000, max: 60000 },
    tags: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Mountains'],
    heroImage: 'https://images.unsplash.com/photo-1686747169711-66fb0489a80c',
    attractions: ['Dal Lake', 'Mughal Gardens', 'Gulmarg Gondola', 'Pahalgam', 'Betaab Valley'],
    bestTime: 'April to October, December to February for snow',
    weather: 'Cool to cold mountain weather. Spring and autumn are mild, winter brings snow in higher areas.',
    tips: ['Keep ID proof handy', 'Confirm road and weather status daily', 'Book gondola tickets early'],
    coordinates: { lat: 34.0837, lon: 74.7973 },
    transport: 'Use a trusted local cab for day trips and a shikara for Dal Lake movement.',
    days: [
      {
        title: 'Srinagar lake and gardens',
        stops: [
          ['08:30 AM', 'Shankaracharya Temple', '1.5 hours', '8:00 AM - 5:00 PM', 'Morning', 'Start with city and lake views from the hilltop.'],
          ['11:30 AM', 'Mughal Gardens', '2 hours', '9:00 AM - 7:00 PM', 'Late morning', 'Visit Nishat and Shalimar gardens with lake backdrops.'],
          ['05:00 PM', 'Dal Lake Shikara Ride', '1.5 hours', 'Sunrise to evening', 'Sunset', 'Take a relaxed shikara ride through floating markets and houseboats.'],
        ],
        lunch: 'Lunch near Boulevard Road or at a houseboat kitchen.',
        dinner: 'Dinner with Kashmiri wazwan or vegetarian Kashmiri dishes.',
        evening: 'Stay close to Dal Lake or Lal Chowk depending on your hotel.',
      },
      {
        title: 'Gulmarg snow and meadow day',
        stops: [
          ['07:30 AM', 'Drive to Gulmarg', '2 hours', 'Road route', 'Early morning', 'Leave early for gondola slots and snow activity time.'],
          ['10:00 AM', 'Gulmarg Gondola', '3 hours', '9:00 AM - 5:00 PM', 'Morning', 'Ride the gondola and choose snow activities based on weather.'],
          ['03:30 PM', 'Gulmarg Meadows', '1.5 hours', 'Open area', 'Afternoon', 'Walk the meadows or pony trail before returning.'],
        ],
        lunch: 'Lunch at a Gulmarg cafe or hotel restaurant.',
        dinner: 'Dinner back in Srinagar.',
        evening: 'Keep warm layers accessible and confirm return road conditions.',
      },
    ],
  },
  {
    id: 'gangtok-sikkim',
    name: 'Gangtok and East Sikkim',
    state: 'Sikkim',
    description:
      'A Himalayan city base for monasteries, viewpoints, MG Marg, Tsomgo Lake, mountain passes, and calm nature-led travel.',
    travelType: ['Nature', 'Spiritual', 'Adventure'],
    idealDuration: '4-5 days',
    budget: { min: 22000, max: 48000 },
    tags: ['Monasteries', 'Tsomgo Lake', 'Himalayas', 'Viewpoints'],
    heroImage: 'https://images.unsplash.com/photo-1692621031591-4d63ddedc67e',
    attractions: ['Rumtek Monastery', 'Tsomgo Lake', 'Nathula Pass', 'MG Marg', 'Tashi View Point'],
    bestTime: 'March to June and October to December',
    weather: 'Cool mountain weather with mist, rain spells, and cold high-altitude day trips.',
    tips: ['Permits are needed for Nathula and Tsomgo', 'Carry warm layers', 'Keep a buffer day for weather changes'],
    coordinates: { lat: 27.3314, lon: 88.6138 },
    transport: 'Use shared or private local taxis. Permit routes must be arranged through local operators.',
    days: [
      {
        title: 'Gangtok orientation and monastery day',
        stops: [
          ['08:00 AM', 'Tashi View Point', '45 minutes', '5:00 AM - 6:00 PM', 'Morning', 'Try for Kanchenjunga views before clouds build.'],
          ['10:00 AM', 'Rumtek Monastery', '2 hours', '9:00 AM - 6:00 PM', 'Morning', 'Visit the monastery complex and prayer halls respectfully.'],
          ['05:00 PM', 'MG Marg', '2 hours', 'Pedestrian street', 'Evening', 'Walk the central promenade, cafes, and shops.'],
        ],
        lunch: 'Lunch with momos, thukpa, or Nepali thali.',
        dinner: 'Dinner on MG Marg with local or Tibetan food.',
        evening: 'Book next day permit documents with your operator.',
      },
      {
        title: 'Tsomgo Lake and high-altitude route',
        stops: [
          ['07:00 AM', 'Depart for Tsomgo Lake', '2 hours', 'Permit route', 'Early morning', 'Leave early because weather changes quickly.'],
          ['09:30 AM', 'Tsomgo Lake', '1.5 hours', 'Daylight hours', 'Morning', 'Walk near the glacial lake and enjoy mountain views.'],
          ['12:00 PM', 'Nathula Pass', '1 hour', 'Permit and weather dependent', 'Midday', 'Visit only if permits and weather allow.'],
        ],
        lunch: 'Simple lunch at route-side stalls or packed food.',
        dinner: 'Dinner back in Gangtok after rest.',
        evening: 'Avoid planning late activities after a high-altitude day.',
      },
    ],
  },
];

const extraDestinations = extraDestinationSpecs.map(createDestinationFromSpec);
const allDestinations = [...destinations, ...extraDestinations];
const totalItineraryStops = allDestinations.reduce(
  (total, destination) =>
    total + destination.dayWiseItinerary.reduce((dayTotal, day) => dayTotal + day.activities.length, 0),
  0,
);

const heroStats = [
  [`${allDestinations.length}+`, 'curated India guides'],
  [`${totalItineraryStops}+`, 'day-wise plan stops'],
  ['Custom', 'AI itinerary builder'],
];

function HomePage() {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [selectedId, setSelectedId] = useState(allDestinations[0]?.id);

  const states = useMemo(
    () => ['All', ...Array.from(new Set(allDestinations.map((destination) => destination.state))).sort()],
    [],
  );

  const travelTypes = useMemo(
    () => ['All', ...Array.from(new Set(allDestinations.flatMap((destination) => destination.travelType))).sort()],
    [],
  );

  const filteredDestinations = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return allDestinations.filter((destination) => {
      const searchable = [
        destination.name,
        destination.state,
        destination.description,
        destination.bestTime,
        ...destination.travelType,
        ...destination.tags,
        ...destination.attractions,
      ]
        .join(' ')
        .toLowerCase();

      return (
        (!searchText || searchable.includes(searchText)) &&
        (stateFilter === 'All' || destination.state === stateFilter) &&
        (budgetFilter === 'All' || getBudgetBand(destination.budget) === budgetFilter) &&
        (typeFilter === 'All' || destination.travelType.includes(typeFilter))
      );
    });
  }, [budgetFilter, search, stateFilter, typeFilter]);

  const selectedDestination =
    allDestinations.find((destination) => destination.id === selectedId) ||
    filteredDestinations[0] ||
    allDestinations[0];

  const chooseDestination = (destination) => {
    setSelectedId(destination.id);
    window.requestAnimationFrame(() => {
      document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${withImageParams(selectedDestination.heroImage, 'w=1800&q=85')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                <Compass size={22} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Tripcraft India</p>
                <p className="text-sm text-white/70">Itinerary planner</p>
              </div>
            </div>
            <a
              href="#destinations"
              className="hidden rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950 sm:inline-flex"
            >
              Browse guides
            </a>
          </header>

          <div className="grid min-h-[650px] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Plan India trips with exact days, timings, food, and local movement.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Search destinations across India, compare budgets and travel styles, then open a practical guide with
                attractions, weather, restaurant recommendations, and real day-wise plans.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#destinations"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-bold text-slate-950 shadow-xl shadow-amber-950/25 transition hover:-translate-y-0.5 hover:bg-amber-200"
                >
                  Start exploring <ArrowRight size={18} />
                </a>
                <a
                  href="#guide"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  View sample plan
                </a>
                <a
                  href="#ai-planner"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/45 bg-teal-300/10 px-6 py-3 font-bold text-teal-50 transition hover:bg-teal-300/20"
                >
                  <Sparkles size={18} /> Build custom AI plan
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {heroStats.map(([value, label]) => (
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur" key={label}>
                    <p className="text-2xl font-black text-amber-200">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/15 bg-white/12 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-[1.55rem] bg-white text-slate-950">
                <img
                  src={withImageParams(selectedDestination.heroImage, 'w=900&q=85')}
                  alt={selectedDestination.name}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.travelType.slice(0, 3).map((type) => (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700" key={type}>
                        {type}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-3xl font-black">{selectedDestination.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{selectedDestination.description}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                    <MiniFact icon={MapPin} label="State" value={selectedDestination.state} />
                    <MiniFact icon={CalendarDays} label="Duration" value={selectedDestination.idealDuration} />
                    <MiniFact icon={IndianRupee} label="Budget" value={formatBudget(selectedDestination.budget)} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 lg:grid-cols-[1.2fr_0.9fr_0.8fr_0.8fr]">
          <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100 focus-within:ring-2 focus-within:ring-amber-400">
            <Search size={19} className="text-slate-500" />
            <input
              className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search forts, beaches, spiritual trips..."
            />
          </label>
          <SelectFilter label="State" value={stateFilter} onChange={setStateFilter} options={states} />
          <SelectFilter label="Budget" value={budgetFilter} onChange={setBudgetFilter} options={['All', 'Budget', 'Mid-range', 'Premium']} />
          <SelectFilter label="Type" value={typeFilter} onChange={setTypeFilter} options={travelTypes} />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-teal-700">
              <Filter size={16} /> Explore destinations
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">Choose a complete travel guide</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Showing {filteredDestinations.length} destination{filteredDestinations.length === 1 ? '' : 's'} with
            matching trip style, budget, and planning details.
          </p>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                destination={destination}
                selected={destination.id === selectedDestination.id}
                onClick={() => chooseDestination(destination)}
                index={index}
                key={destination.id}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
            <Compass className="mx-auto text-slate-400" size={44} />
            <h3 className="mt-4 text-2xl font-black">No destinations found</h3>
            <p className="mt-2 text-slate-600">Try clearing one filter or searching a different travel theme.</p>
          </div>
        )}
      </section>

      <CustomItineraryGenerator destinations={allDestinations} selectedDestination={selectedDestination} />
      <DestinationGuide destination={selectedDestination} />
    </main>
  );
}

function SelectFilter({ label, value, onChange, options }) {
  return (
    <label className="block rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</span>
      <select
        className="mt-1 w-full bg-transparent text-sm font-bold outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function DestinationCard({ destination, selected, onClick, index }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`group overflow-hidden rounded-[1.6rem] bg-white text-left shadow-lg shadow-slate-200/80 ring-1 transition hover:-translate-y-1 hover:shadow-2xl ${
        selected ? 'ring-2 ring-teal-600' : 'ring-slate-200'
      }`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={withImageParams(destination.heroImage, 'w=800&q=85')}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
          <div className="flex flex-wrap gap-2">
            {destination.travelType.slice(0, 2).map((type) => (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-900" key={type}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <MapPin size={15} /> {destination.state}
          </span>
          <span>{getBudgetBand(destination.budget)}</span>
        </div>
        <h3 className="mt-3 text-2xl font-black">{destination.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{destination.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-slate-700">
          <span>{destination.idealDuration}</span>
          <span>{formatBudget(destination.budget)}</span>
        </div>
      </div>
    </motion.button>
  );
}

function CustomItineraryGenerator({ destinations, selectedDestination }) {
  const [form, setForm] = useState(() => ({
    destinationId: selectedDestination.id,
    days: '3',
    pace: 'Balanced',
    budget: 'Mid-range',
    interest: 'All',
    food: 'Local cuisine',
    startTime: '08:30 AM',
    comfortNeeds: 'Keep the trip comfortable with enough rest between major attractions.',
  }));
  const [submittedForm, setSubmittedForm] = useState(form);

  const interestOptions = useMemo(() => {
    const values = destinations.flatMap((destination) => [...destination.travelType, ...destination.tags]);
    return ['All', ...Array.from(new Set(values)).sort()];
  }, [destinations]);

  useEffect(() => {
    setForm((current) => ({ ...current, destinationId: selectedDestination.id }));
    setSubmittedForm((current) => ({ ...current, destinationId: selectedDestination.id }));
  }, [selectedDestination.id]);

  const generatedPlan = useMemo(
    () => buildComfortPlan(destinations, submittedForm),
    [destinations, submittedForm],
  );

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedForm(form);
  };

  return (
    <section id="ai-planner" className="bg-[#e7f0ea] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-teal-800">
              <Bot size={18} /> Custom AI itinerary generator
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Build a plan around your comfort, pace, and budget.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-650">
              This built-in planning engine uses the destination database, attraction timings, meal stops, and your
              comfort preferences to produce a custom day-wise route.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-[2rem] border border-teal-900/10 bg-white p-5 shadow-xl shadow-teal-900/10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <GeneratorSelect
                  label="Destination"
                  value={form.destinationId}
                  onChange={(value) => updateForm('destinationId', value)}
                  options={destinations.map((destination) => ({ label: destination.name, value: destination.id }))}
                />
                <label className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Trip days</span>
                  <input
                    type="number"
                    min="1"
                    max="7"
                    value={form.days}
                    onChange={(event) => updateForm('days', event.target.value)}
                    className="mt-2 w-full bg-transparent text-base font-black outline-none"
                  />
                </label>
                <GeneratorSelect
                  label="Comfort pace"
                  value={form.pace}
                  onChange={(value) => updateForm('pace', value)}
                  options={['Relaxed', 'Balanced', 'Packed']}
                />
                <GeneratorSelect
                  label="Budget style"
                  value={form.budget}
                  onChange={(value) => updateForm('budget', value)}
                  options={['Budget', 'Mid-range', 'Premium']}
                />
                <GeneratorSelect
                  label="Main interest"
                  value={form.interest}
                  onChange={(value) => updateForm('interest', value)}
                  options={interestOptions}
                />
                <GeneratorSelect
                  label="Food comfort"
                  value={form.food}
                  onChange={(value) => updateForm('food', value)}
                  options={['Local cuisine', 'Vegetarian friendly', 'Street food', 'Family dining', 'Premium dining']}
                />
                <GeneratorSelect
                  label="Preferred start"
                  value={form.startTime}
                  onChange={(value) => updateForm('startTime', value)}
                  options={['07:00 AM', '08:00 AM', '08:30 AM', '09:30 AM', '10:00 AM']}
                />
                <label className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 sm:col-span-2">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Comfort needs
                  </span>
                  <textarea
                    value={form.comfortNeeds}
                    onChange={(event) => updateForm('comfortNeeds', event.target.value)}
                    rows={3}
                    className="mt-2 w-full resize-none bg-transparent text-sm font-semibold leading-6 outline-none"
                    placeholder="Example: avoid very early mornings, include rest, family friendly, less walking..."
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-black text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-teal-900 sm:w-auto"
              >
                <Sparkles size={18} /> Generate my itinerary
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-teal-950/25">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
              <div>
                <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-amber-200">
                  <SlidersHorizontal size={16} /> Generated comfort plan
                </p>
                <h3 className="mt-2 text-3xl font-black">{generatedPlan.destination.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{generatedPlan.summary}</p>
              </div>
              <span className="rounded-full bg-teal-300 px-4 py-2 text-sm font-black text-slate-950">
                {generatedPlan.paceLabel}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {generatedPlan.badges.map((badge) => (
                <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10" key={badge.label}>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">{badge.label}</p>
                  <p className="mt-1 font-black text-white">{badge.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-4">
              {generatedPlan.days.map((day) => (
                <article className="rounded-[1.4rem] bg-white p-5 text-slate-950" key={`${day.day}-${day.title}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Day {day.day}</p>
                      <h4 className="mt-1 text-xl font-black">{day.title}</h4>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                      Start {day.startTime}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {day.stops.map((stop, index) => (
                      <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 sm:grid-cols-[34px_1fr]" key={`${stop.place}-${index}`}>
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-teal-700 text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                            <span>{stop.time}</span>
                            {stop.openingHours && <span>Open: {stop.openingHours}</span>}
                            {stop.duration && <span>Duration: {stop.duration}</span>}
                          </div>
                          <h5 className="mt-1 font-black">{stop.place}</h5>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{stop.description}</p>
                          {stop.bestTime && (
                            <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-teal-800">
                              Best time: {stop.bestTime}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <GeneratedPlanNote label="Lunch" value={day.lunch} />
                    <GeneratedPlanNote label="Dinner" value={day.dinner} />
                    <GeneratedPlanNote label="Evening" value={day.evening} />
                    <GeneratedPlanNote label="Comfort tip" value={day.comfortNote} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-amber-300/12 p-4 text-sm leading-6 text-amber-50 ring-1 ring-amber-200/20">
              <CheckCircle2 className="mb-2 text-amber-200" size={20} />
              {generatedPlan.personalNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GeneratorSelect({ label, value, onChange, options }) {
  const normalizedOptions = options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  );

  return (
    <label className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</span>
      <select
        className="mt-2 w-full bg-transparent text-sm font-black outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {normalizedOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function GeneratedPlanNote({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{value}</p>
    </div>
  );
}

function DestinationGuide({ destination }) {
  return (
    <section id="guide" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] bg-white text-slate-950">
              <img
                src={withImageParams(destination.heroImage, 'w=900&q=85')}
                alt={`${destination.name} travel guide`}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">{destination.state}</p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">{destination.name}</h2>
                <p className="mt-4 leading-7 text-slate-600">{destination.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <InfoBox icon={CloudSun} label="Best time" value={destination.bestTime} />
                  <InfoBox icon={IndianRupee} label="Budget" value={formatBudget(destination.budget)} />
                  <InfoBox icon={CalendarDays} label="Duration" value={destination.idealDuration} />
                  <InfoBox icon={Navigation} label="Travel type" value={destination.travelType.slice(0, 2).join(', ')} />
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <GuidePanel title="Famous attractions" icon={Landmark}>
              <div className="grid gap-3 sm:grid-cols-2">
                {destination.attractions.map((attraction) => (
                  <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10" key={attraction}>
                    <p className="font-bold">{attraction}</p>
                  </div>
                ))}
              </div>
            </GuidePanel>

            <GuidePanel title="Weather, movement, and local tips" icon={CloudSun}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Weather details</h3>
                  <p className="mt-2 leading-7 text-white/72">{destination.weather}</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Local travel guidance</h3>
                  <p className="mt-2 leading-7 text-white/72">{destination.transport}</p>
                </div>
              </div>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {destination.tips.map((tip) => (
                  <li className="rounded-2xl bg-amber-300/10 p-4 text-sm leading-6 text-amber-50 ring-1 ring-amber-200/15" key={tip}>
                    {tip}
                  </li>
                ))}
              </ul>
            </GuidePanel>

            <RestaurantRecommendations destination={destination} />

            <GuidePanel title="Detailed day-wise itinerary" icon={CalendarDays}>
              <div className="space-y-4">
                {destination.dayWiseItinerary.map((day) => (
                  <ItineraryDay day={day} key={day.day} />
                ))}
              </div>
            </GuidePanel>
          </div>
        </div>
      </div>
    </section>
  );
}

function RestaurantRecommendations({ destination }) {
  const [restaurants, setRestaurants] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRestaurants() {
      setStatus('loading');
      const fallback = buildFallbackRestaurants(destination);

      try {
        const overpassQuery = `
          [out:json][timeout:18];
          (
            node["amenity"~"restaurant|cafe|fast_food"](around:4500,${destination.coordinates.lat},${destination.coordinates.lon});
            way["amenity"~"restaurant|cafe|fast_food"](around:4500,${destination.coordinates.lat},${destination.coordinates.lon});
          );
          out center tags 12;
        `;
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error('Restaurant lookup failed');

        const data = await response.json();
        const liveResults = (data.elements || [])
          .map((element) => {
            const tags = element.tags || {};
            return {
              name: tags.name,
              address: formatAddress(tags, destination),
              rating: tags.rating || tags.stars || 'Rating unavailable',
              openStatus: formatOpeningStatus(tags.opening_hours),
            };
          })
          .filter((restaurant) => restaurant.name)
          .slice(0, 6);

        if (liveResults.length === 0) {
          setRestaurants(fallback);
          setStatus('fallback');
          return;
        }

        setRestaurants(liveResults);
        setStatus('live');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setRestaurants(fallback);
          setStatus('fallback');
        }
      }
    }

    fetchRestaurants();
    return () => controller.abort();
  }, [destination]);

  const visibleRestaurants = status === 'loading' ? buildFallbackRestaurants(destination).slice(0, 3) : restaurants;

  return (
    <GuidePanel title={`Restaurants near ${destination.name}`} icon={Utensils}>
      <p className="mb-4 text-sm leading-6 text-white/65">
        {status === 'live'
          ? 'Live nearby listings from OpenStreetMap. Ratings and hours appear when the source provides them.'
          : status === 'fallback'
            ? 'Live lookup is unavailable or sparse, so destination-specific restaurant suggestions are shown.'
            : 'Searching nearby restaurant data for this destination...'}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleRestaurants.map((restaurant) => (
          <article className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10" key={`${restaurant.name}-${restaurant.address}`}>
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-300 text-slate-950">
                <Utensils size={18} />
              </span>
              <div>
                <h3 className="font-black">{restaurant.name}</h3>
                <p className="mt-1 text-sm leading-6 text-white/62">{restaurant.address}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <Star size={14} /> {restaurant.rating}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <Clock size={14} /> {restaurant.openStatus}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </GuidePanel>
  );
}

function ItineraryDay({ day }) {
  const [open, setOpen] = useState(day.day === 1);

  return (
    <article className="overflow-hidden rounded-[1.5rem] bg-white text-slate-950">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">Day {day.day}</span>
          <span className="mt-1 block text-2xl font-black">{day.title}</span>
        </span>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold">{open ? 'Hide' : 'Open'}</span>
      </button>
      {open && (
        <div className="border-t border-slate-100 p-5">
          <div className="space-y-4">
            {day.activities.map((activity, index) => (
              <div className="grid gap-4 rounded-2xl bg-slate-50 p-4 md:grid-cols-[110px_1fr]" key={`${activity.time}-${activity.place}-${index}`}>
                <div>
                  <p className="font-black text-slate-950">{activity.time}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {activity.type === 'meal' ? 'Meal stop' : activity.type === 'evening' ? 'Evening' : 'Visit'}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-black">{activity.place}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                    {activity.openingHours && <span className="rounded-full bg-white px-3 py-1">Timings: {activity.openingHours}</span>}
                    {activity.duration && <span className="rounded-full bg-white px-3 py-1">Duration: {activity.duration}</span>}
                    {activity.bestTime && <span className="rounded-full bg-white px-3 py-1">Best: {activity.bestTime}</span>}
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{activity.description}</p>
                  {activity.tips && <p className="mt-2 text-sm font-semibold text-teal-800">Tip: {activity.tips}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function GuidePanel({ title, icon: Icon, children }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-400 text-slate-950">
          <Icon size={20} />
        </span>
        <h2 className="text-2xl font-black tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function MiniFact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <Icon size={18} className="text-teal-700" />
      <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <Icon size={18} className="text-teal-700" />
      <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}

function createDestinationFromSpec(spec) {
  return {
    id: spec.id,
    name: spec.name,
    state: spec.state,
    description: spec.description,
    travelType: spec.travelType,
    idealDuration: spec.idealDuration,
    budget: spec.budget,
    tags: spec.tags,
    heroImage: spec.heroImage,
    images: [spec.heroImage],
    attractions: spec.attractions,
    bestTime: spec.bestTime,
    weather: spec.weather,
    tips: spec.tips,
    coordinates: spec.coordinates,
    transport: spec.transport,
    dayWiseItinerary: spec.days.map((day, index) => ({
      day: index + 1,
      title: day.title,
      activities: [
        ...day.stops.map(([time, place, duration, openingHours, bestTime, description, tips]) => ({
          time,
          place,
          duration,
          openingHours,
          bestTime,
          description,
          tips,
        })),
        {
          time: '01:00 PM',
          type: 'meal',
          place: `${spec.name} lunch plan`,
          description: day.lunch,
        },
        {
          time: '07:30 PM',
          type: 'meal',
          place: `${spec.name} dinner plan`,
          description: day.dinner,
        },
        {
          time: '08:30 PM',
          type: 'evening',
          place: `${spec.name} evening plan`,
          description: day.evening,
        },
      ],
    })),
  };
}

function buildComfortPlan(destinationList, prefs) {
  const destination =
    destinationList.find((item) => item.id === prefs.destinationId) || destinationList[0];
  const dayCount = clamp(Number.parseInt(prefs.days, 10) || 3, 1, 7);
  const pace = getPaceSettings(prefs.pace);
  const sourceDays = destination.dayWiseItinerary.length
    ? destination.dayWiseItinerary
    : [{ day: 1, title: 'Custom exploration day', activities: [] }];

  const days = Array.from({ length: dayCount }, (_, index) => {
    const sourceDay = sourceDays[index % sourceDays.length];
    const visitActivities = sourceDay.activities.filter((activity) => activity.type !== 'meal' && activity.type !== 'evening');
    const interestMatches =
      prefs.interest === 'All'
        ? visitActivities
        : visitActivities.filter((activity) => matchesInterest(activity, destination, prefs.interest));
    const stopPool = interestMatches.length ? interestMatches : visitActivities;
    const stops = stopPool.slice(0, pace.maxStops);
    const meals = sourceDay.activities.filter((activity) => activity.type === 'meal');
    const eveningActivity =
      sourceDay.activities.find((activity) => activity.type === 'evening') ||
      stopPool[pace.maxStops] ||
      sourceDay.activities[sourceDay.activities.length - 1];

    return {
      day: index + 1,
      title: sourceDay.title,
      startTime: prefs.startTime,
      stops: stops.length
        ? stops
        : [
            {
              time: prefs.startTime,
              place: `${destination.name} local orientation`,
              duration: '2 hours',
              openingHours: 'Flexible',
              bestTime: 'Morning',
              description: `Start with a gentle orientation walk around ${destination.name}.`,
            },
          ],
      lunch: makeMealSuggestion(meals[0], destination, prefs, 'lunch'),
      dinner: makeMealSuggestion(meals[1], destination, prefs, 'dinner'),
      evening: eveningActivity?.description || `Keep the evening open for a relaxed walk near your stay in ${destination.name}.`,
      comfortNote: `${pace.restNote} ${budgetTravelAdvice(prefs.budget)} ${prefs.comfortNeeds}`,
    };
  });

  return {
    destination,
    days,
    paceLabel: `${prefs.pace} pace`,
    summary: `${dayCount} day plan for ${destination.name}, tuned for ${prefs.pace.toLowerCase()} travel, ${prefs.budget.toLowerCase()} spending, ${prefs.food.toLowerCase()}, and ${prefs.interest === 'All' ? 'mixed interests' : prefs.interest.toLowerCase()}.`,
    badges: [
      { label: 'Days', value: `${dayCount}` },
      { label: 'Budget', value: prefs.budget },
      { label: 'Interest', value: prefs.interest },
    ],
    personalNote: `Personal comfort instruction applied: ${prefs.comfortNeeds || 'Keep the trip practical and comfortable.'}`,
  };
}

function getPaceSettings(pace) {
  if (pace === 'Relaxed') {
    return {
      maxStops: 2,
      restNote: 'Keep only two major stops and add a cafe or hotel rest break between them.',
    };
  }

  if (pace === 'Packed') {
    return {
      maxStops: 4,
      restNote: 'Use early starts, pre-book tickets, and keep transport ready to cover more places.',
    };
  }

  return {
    maxStops: 3,
    restNote: 'Use a steady pace with one proper lunch break and one lighter evening activity.',
  };
}

function matchesInterest(activity, destination, interest) {
  const text = [
    activity.place,
    activity.description,
    activity.bestTime,
    activity.tips,
    ...destination.travelType,
    ...destination.tags,
    ...destination.attractions,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return text.includes(interest.toLowerCase());
}

function makeMealSuggestion(meal, destination, prefs, mealName) {
  const base = meal?.description || `Choose a ${prefs.food.toLowerCase()} ${mealName} near ${destination.name}.`;

  if (prefs.food === 'Vegetarian friendly') {
    return `${base} Prefer vegetarian thali, South Indian meals, momos, cafe bowls, or temple/community meals where available.`;
  }

  if (prefs.food === 'Street food') {
    return `${base} Keep it casual and choose popular, busy stalls with fast turnover.`;
  }

  if (prefs.food === 'Family dining') {
    return `${base} Pick a clean sit-down restaurant with AC seating and reliable washrooms.`;
  }

  if (prefs.food === 'Premium dining') {
    return `${base} Upgrade to a well-reviewed hotel restaurant, rooftop venue, or curated tasting menu.`;
  }

  return `${base} Prioritize local dishes and a realistic location close to the route.`;
}

function budgetTravelAdvice(budget) {
  if (budget === 'Budget') {
    return 'Use public transport, shared cabs, simple meals, and free viewpoints wherever practical.';
  }

  if (budget === 'Premium') {
    return 'Use private transfers, guided entries, reserved dining, and comfortable stays to reduce friction.';
  }

  return 'Mix app cabs or local taxis with selected guided entries and mid-range restaurants.';
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getBudgetBand(budget) {
  if (budget.max <= 22000) return 'Budget';
  if (budget.max <= 42000) return 'Mid-range';
  return 'Premium';
}

function formatBudget(budget) {
  return `Rs. ${budget.min.toLocaleString('en-IN')} - Rs. ${budget.max.toLocaleString('en-IN')}`;
}

function withImageParams(url, params) {
  return `${url}?auto=format&fit=crop&${params}`;
}

function buildFallbackRestaurants(destination) {
  const mealStops = destination.dayWiseItinerary
    .flatMap((day) => day.activities)
    .filter((activity) => activity.type === 'meal' && activity.place)
    .map((activity, index) => ({
      name: activity.place,
      address: `${destination.name}, ${destination.state}`,
      rating: `${(4.6 - (index % 4) * 0.1).toFixed(1)} curated`,
      openStatus: 'Hours unavailable',
    }));

  return uniqueBy(mealStops, 'name').slice(0, 6);
}

function uniqueBy(items, key) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item[key])) return false;
    seen.add(item[key]);
    return true;
  });
}

function formatAddress(tags, destination) {
  const parts = [
    tags['addr:housename'],
    tags['addr:street'],
    tags['addr:suburb'],
    tags['addr:city'],
    tags['addr:state'],
  ].filter(Boolean);

  return parts.length ? parts.join(', ') : `Near ${destination.name}, ${destination.state}`;
}

function formatOpeningStatus(openingHours) {
  if (!openingHours) return 'Hours unavailable';
  if (openingHours.includes('24/7')) return 'Open 24/7';
  return 'Hours listed';
}

export default HomePage;
