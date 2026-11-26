export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: 'Book Now' | 'Learn More';
  tone: 'blue' | 'orange' | 'darkblue';
  image: string;
}

export interface CategoryItem {
  id: string;
  label: 'Visa' | 'Resorts' | 'Cottages' | 'Hotels';
  iconName: 'file-check' | 'palmtree' | 'home' | 'building';
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface DestinationPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  price: string;
  category: 'Family Friendly' | 'Mountain';
  tabGroup: 'Family Holidays' | 'Mountains' | 'Beaches' | 'Luxury Stays';
  image: string;
  images: string[];
  description: string[];
  itinerary: ItineraryDay[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  image: string;
}

export interface SwitzerlandHighlight {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_moody_mountains_1795615523285.jpg';
export const CTA_IMAGE = '/src/assets/images/cta_glacier_water_1795602105630.jpg';
export const FEATURED_TRAVELER_IMAGE = '/src/assets/images/traveler_portrait_1795588100142.jpg';

export const promoBanners: PromoBanner[] = [
  {
    id: 'promo-1',
    title: 'Walking up somewhere beautifully',
    subtitle: 'Coastal mornings & sun-washed Mediterranean terraces.',
    ctaLabel: 'Book Now',
    tone: 'blue',
    image: '/src/assets/images/dest_amalfi_coast_1795588099378.jpg',
  },
  {
    id: 'promo-2',
    title: 'Enjoy Upto 40% Off on Your Booking',
    subtitle: 'Limited seasonal savings on curated island resorts.',
    ctaLabel: 'Book Now',
    tone: 'orange',
    image: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
  },
  {
    id: 'promo-3',
    title: '25% Discount on Your Tour to Turkey',
    subtitle: 'Sunrise hot air balloons and ancient valleys in Cappadocia.',
    ctaLabel: 'Learn More',
    tone: 'darkblue',
    image: '/src/assets/images/dest_turkey_cappadocia_1795602104193.jpg',
  },
];

export const featureCollageImages = [
  {
    src: '/src/assets/images/dest_amalfi_coast_1795588099378.jpg',
    alt: 'Cliffside Mediterranean villas overlooking turquoise sea',
  },
  {
    src: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
    alt: 'Boutique tropical resort infinity pool in Bali',
  },
  {
    src: '/src/assets/images/dest_swiss_alps_1795588097229.jpg',
    alt: 'Cozy timber mountain cottages in the Swiss Alps',
  },
];

export const categories: CategoryItem[] = [
  { id: 'cat-visa', label: 'Visa', iconName: 'file-check' },
  { id: 'cat-resorts', label: 'Resorts', iconName: 'palmtree' },
  { id: 'cat-cottages', label: 'Cottages', iconName: 'home' },
  { id: 'cat-hotels', label: 'Hotels', iconName: 'building' },
];

export const destinations: DestinationPackage[] = [
  {
    id: 'california-sunset-cruise',
    title: 'California Sunset/Twilight Cruise',
    location: 'Los Angeles, USA',
    duration: '3 Days 2 Nights',
    rating: 4.8,
    price: '$950/Person',
    category: 'Family Friendly',
    tabGroup: 'Beaches',
    image: '/src/assets/images/dest_california_cruise_1795588097404.jpg',
    images: [
      '/src/assets/images/dest_california_cruise_1795588097404.jpg',
      '/src/assets/images/cta_coastal_horizon_1795588097121.jpg',
      '/src/assets/images/hero_tropical_beach_1795588096031.jpg',
    ],
    description: [
      'Set sail along the sun-drenched Southern California shoreline aboard a private catamaran designed for unhurried coastal exploration. From Marina del Rey out toward the Santa Monica bay and Malibu coves, you will watch sea lions bask on harbor buoys while the Pacific sky shifts from bright cobalt to warm coral.',
      'Between sailing excursions, enjoy two nights in a boutique oceanfront hotel, guided coastal cliff walks, and locally sourced seafood dinners overlooking the water. Everything from harbor transfers to twilight deck refreshments is arranged before you step aboard.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Marina Check-in',
        description:
          'Arrive in Los Angeles, settle into your oceanfront suite, and enjoy a welcome coastal walk along the Venice canals before dinner.',
      },
      {
        day: 'Day 2',
        title: 'Malibu Cove Sail & Twilight Cruise',
        description:
          'Spend the morning kayaking sheltered coves, then board the catamaran at golden hour for a three-hour twilight sail with seasonal tapas.',
      },
      {
        day: 'Day 3',
        title: 'Sunrise Promenade & Departure',
        description:
          'Wake up to fresh Pacific coffee on the terrace, browse the Santa Monica morning market, and transfer comfortably to your departure gate.',
      },
    ],
  },
  {
    id: 'swiss-alpine-retreat',
    title: 'Lauterbrunnen Valley Alpine Escape',
    location: 'Bernese Oberland, Switzerland',
    duration: '5 Days 4 Nights',
    rating: 4.9,
    price: '$1,450/Person',
    category: 'Mountain',
    tabGroup: 'Mountains',
    image: '/src/assets/images/dest_swiss_alps_1795588097229.jpg',
    images: [
      '/src/assets/images/dest_swiss_alps_1795588097229.jpg',
      '/src/assets/images/swiss_scenic_train_1795588098439.jpg',
      '/src/assets/images/dest_banff_lake_1795588099205.jpg',
    ],
    description: [
      'Tucked between sheer limestone cliffs and 72 cascading waterfalls, Lauterbrunnen offers one of the most dramatic alpine landscapes in Europe. This five-day retreat pairs first-class panoramic rail travel with four nights in a traditional timber chalet.',
      'Your itinerary balances scenic mountain cogwheel trains and glacial ridge viewpoints with quiet afternoons beside emerald valley lakes. Local hosts prepare hearty Bernese breakfasts each morning so you can explore every trail at an easy pace.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Zurich Arrival & Scenic Rail Transfer',
        description:
          'Board the Swiss express train directly from Zurich through lakeside valleys to your family-run chalet in Lauterbrunnen.',
      },
      {
        day: 'Day 2',
        title: 'Waterfall Valley & Murren Ridge',
        description:
          'Walk beneath Staubbach Falls before riding the cable car up to car-free Murren for sweeping views of the Eiger and Jungfrau peaks.',
      },
      {
        day: 'Day 3',
        title: 'Glacier Viaduct Panoramic Excursion',
        description:
          'Travel aboard classic red alpine carriages across historic stone viaducts and pause at a high-altitude mountain inn for lunch.',
      },
      {
        day: 'Day 4',
        title: 'Alpine Lake Picnic & Departure Prep',
        description:
          'Spend a relaxed final full day boating on Lake Brienz and browsing artisan woodcarving workshops before a farewell fondue evening.',
      },
    ],
  },
  {
    id: 'bali-ubud-sanctuary',
    title: 'Ubud Rice Terrace Villa Stay',
    location: 'Bali, Indonesia',
    duration: '6 Days 5 Nights',
    rating: 4.9,
    price: '$1,120/Person',
    category: 'Family Friendly',
    tabGroup: 'Luxury Stays',
    image: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
    images: [
      '/src/assets/images/dest_bali_resort_1795588098417.jpg',
      '/src/assets/images/hero_tropical_beach_1795588096031.jpg',
      '/src/assets/images/blog_hidden_cove_1795588396711.jpg',
    ],
    description: [
      'Surrounded by emerald terraced rice paddies and fragrant frangipani trees, this six-day sanctuary in Ubud invites families and travelers to slow down. Private pool villas open directly onto jungle canyon mist at sunrise.',
      'Alongside restorative spa rituals and quiet poolside afternoons, local guides lead morning market tastings, silver-smithing workshops, and serene water temple visits away from the busiest tourist routes.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Private Villa Welcome in Ubud',
        description:
          'Meet your driver in Denpasar, settle into your terrace villa, and enjoy a chilled coconut welcome overlooking the valley.',
      },
      {
        day: 'Day 2',
        title: 'Tegallalang Trails & Spice Tasting',
        description:
          'Walk shaded rice-terrace footpaths early in the morning before visiting a family-owned organic coffee and spice garden.',
      },
      {
        day: 'Day 3',
        title: 'Sacred Water Temple & Cooking Class',
        description:
          'Experience a traditional purification blessing followed by an afternoon courtyard cooking session using fresh market herbs.',
      },
      {
        day: 'Day 4',
        title: 'Southern Peninsula Coastal Cove',
        description:
          'Spend a sunlit day swimming in calm limestone coves along the southern coast before returning for a candlelit dinner.',
      },
    ],
  },
  {
    id: 'kyoto-heritage-walk',
    title: 'Old Town Canal & Culinary Walk',
    location: 'Annecy, France',
    duration: '4 Days 3 Nights',
    rating: 4.8,
    price: '$1,280/Person',
    category: 'Family Friendly',
    tabGroup: 'Family Holidays',
    image: '/src/assets/images/dest_european_city_1795602106394.jpg',
    images: [
      '/src/assets/images/dest_european_city_1795602106394.jpg',
      '/src/assets/images/dest_amalfi_coast_1795588099378.jpg',
      '/src/assets/images/blog_travel_journal_1795588397107.jpg',
    ],
    description: [
      'Wander cobblestone canal bridges, pastel limestone squares, and sunlit riverside cafes in one of Europe’s most picturesque alpine old towns. This four-day journey blends slow cultural walking tours with regional lakeside gastronomy.',
      'Stay in a boutique townhouse steps from the historic market, enjoy guided boat cruises on crystal-clear waters, and taste artisan cheeses and pastries sourced directly from local family producers.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Old Town Check-in & Canal Stroll',
        description:
          'Arrive in Annecy, settle into your boutique suite, and enjoy an evening walk across lantern-lit stone bridges.',
      },
      {
        day: 'Day 2',
        title: 'Morning Market & Lake Boat Cruise',
        description:
          'Sample fresh alpine cheeses at the street market before boarding a quiet afternoon cruise across the emerald lake.',
      },
      {
        day: 'Day 3',
        title: 'Hilltop Castle & Bistro Tasting',
        description:
          'Explore medieval ramparts overlooking the rooftops and finish with a chef-led evening tasting along the water.',
      },
    ],
  },
  {
    id: 'amalfi-coast-getaway',
    title: 'Cappadocia Balloons & Desert Safari',
    location: 'Göreme, Turkey',
    duration: '4 Days 3 Nights',
    rating: 4.9,
    price: '$1,390/Person',
    category: 'Mountain',
    tabGroup: 'Luxury Stays',
    image: '/src/assets/images/dest_turkey_cappadocia_1795602104193.jpg',
    images: [
      '/src/assets/images/dest_turkey_cappadocia_1795602104193.jpg',
      '/src/assets/images/promo_desert_glamping_1795588099828.jpg',
      '/src/assets/images/dest_amalfi_coast_1795588099378.jpg',
    ],
    description: [
      'Rise before dawn to watch hundreds of colorful hot air balloons drift over ancient volcanic valleys and stone fairy chimneys in Cappadocia. Your stay in a restored stone cave suite pairs timeless character with modern comfort.',
      'Spend sunlit afternoons exploring canyon trails, pottery ateliers, and desert campfires beneath crisp Anatolian skies.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cave Suite Welcome & Sunset Ridge',
        description:
          'Transfer into Göreme, unwind on your stone terrace, and watch sunset paint the Red Valley.',
      },
      {
        day: 'Day 2',
        title: 'Sunrise Hot Air Balloon Flight',
        description:
          'Soar gently above sculpted rock spires at first light followed by a celebratory valley breakfast.',
      },
      {
        day: 'Day 3',
        title: 'Underground Cities & Desert Camp',
        description:
          'Tour historic subterranean passages and enjoy a traditional Anatolian dinner around glowing desert lanterns.',
      },
    ],
  },
  {
    id: 'banff-emerald-peaks',
    title: 'Riverbank Elephant & Wildlife Safari',
    location: 'Chitwan & Valley, Nepal',
    duration: '5 Days 4 Nights',
    rating: 4.8,
    price: '$1,180/Person',
    category: 'Family Friendly',
    tabGroup: 'Family Holidays',
    image: '/src/assets/images/dest_elephant_safari_1795602104976.jpg',
    images: [
      '/src/assets/images/dest_elephant_safari_1795602104976.jpg',
      '/src/assets/images/dest_banff_lake_1795588099205.jpg',
      '/src/assets/images/dest_street_food_1795602105782.jpg',
    ],
    description: [
      'Experience ethical wildlife observation along misty river grasslands where wild elephant herds roam freely at golden hour. Guided by certified conservation naturalists, every excursion prioritizes respectful distance and habitat care.',
      'Evenings bring warm riverside lodge hospitality, cultural storytelling, and fresh farm-to-table regional dining.',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Riverside Eco-Lodge Arrival',
        description:
          'Arrive at the reserve lodge and join an introductory sunset walk along the tranquil riverbank.',
      },
      {
        day: 'Day 2',
        title: 'Dawn Grasslands Wildlife Safari',
        description:
          'Head out in open-air electric jeeps through morning mist to observe wild elephant herds and native birdlife.',
      },
      {
        day: 'Day 3',
        title: 'Dugout Canoe & Forest Conservation Walk',
        description:
          'Glide quietly downstream in a carved wooden canoe before learning about local ranger conservation efforts.',
      },
      {
        day: 'Day 4',
        title: 'Village Market & Farewell Fireside',
        description:
          'Visit neighborhood craft cooperatives and enjoy a lantern-lit farewell dinner under the stars.',
      },
    ],
  },
];

export const blogs: BlogPost[] = [
  {
    id: 'top-10-beaches',
    title: 'Top 10 Hidden Beaches to Visit in 2026',
    excerpt:
      'Skip the crowded boardwalks and discover tranquil limestone coves, calm turquoise bays, and sunlit coastal trails.',
    author: 'Sarah Jenkins',
    date: 'October 15, 2026',
    image: '/src/assets/images/blog_hidden_cove_1795588396711.jpg',
    content: [
      'The most memorable coastlines rarely appear on oversized tour posters. Often they sit at the end of a pine-shaded footpath or around a limestone headland accessible only by morning ferry or wooden boat.',
      'From sheltered coves along Spain’s Costa Brava to crescent bays tucked beneath Bali’s southern cliffs, traveling in the early morning hours rewards you with glassy water and local fishermen hauling in the first catch of the day.',
      'When planning a coastal itinerary in 2026, look for small family-run guesthouses a mile inland rather than mega-resorts directly on the sand. You will enjoy quieter evenings, fresher neighborhood bakeries, and easy access to multiple bays along the coast.',
      'Pack reef-safe sunscreen, water shoes for rocky entries, and a light linen towel—and leave room in your schedule for an unhurried afternoon picnic watching the tide roll out.',
    ],
  },
  {
    id: 'kyoto-slow-travel-guide',
    title: 'Night Markets & Street Food Classics Across Southeast Asia',
    excerpt:
      'Where to find sizzling wok stalls, lantern-lit culinary alleys, and fresh neighborhood specialties after dusk.',
    author: 'Kenji Takahashi',
    date: 'September 28, 2026',
    image: '/src/assets/images/dest_street_food_1795602105782.jpg',
    content: [
      'Some of the finest meals in your travel memory will never come from white-tablecloth dining rooms—they happen on low wooden stools beside a glowing street stall with sizzling woks and fragrant herbs.',
      'Arriving just after sunset lets you see local families queuing at their favorite neighborhood stalls, ensuring fresh ingredients and brisk turnover.',
      'Ask vendors what single dish they have perfected over decades, pair it with chilled herbal tea, and save room for warm coconut sweets down the block.',
    ],
  },
  {
    id: 'packing-light-for-alpine-rails',
    title: 'How to Pack Light for Scenic European Rail Journeys',
    excerpt:
      'Practical capsule layering tips for moving effortlessly between cobbled old towns and alpine valleys.',
    author: 'Elena Rostova',
    date: 'September 10, 2026',
    image: '/src/assets/images/dest_european_city_1795602106394.jpg',
    content: [
      'Rail travel across Switzerland, France, and northern Italy is purest when you can step onto a train platform with a single lightweight weekender bag rather than wrestling oversized rolling trunks up stone steps.',
      'The secret to alpine versatility lies in breathable merino base layers, one wind-resistant outer shell, and supportive walking shoes that feel equally comfortable on cobbled town squares and gravel valley trails.',
      'Keep a small leather notebook, rail pass, and compact camera within reach in a crossbody daypack so you never miss sudden viaduct views or sunlit valley reflections from the carriage window.',
    ],
  },
  {
    id: 'amalfi-coast-off-season',
    title: 'Ethical Wildlife Safaris: Traveling Respectfully in Nature',
    excerpt:
      'How small-group conservation tours protect river habitats while creating unforgettable morning encounters.',
    author: 'Marco Bellini',
    date: 'August 22, 2026',
    image: '/src/assets/images/dest_elephant_safari_1795602104976.jpg',
    content: [
      'Responsible wildlife travel begins by choosing guides and lodges that prioritize animal autonomy, quiet observation distances, and community-led conservation funding.',
      'Heading out at dawn along river plains allows travelers to witness herds moving naturally through mist without crowding or noise.',
      'Every ticket booked through certified eco-partners helps preserve wild migration corridors for future generations.',
    ],
  },
];

export const switzerlandHighlights: SwitzerlandHighlight[] = [
  {
    id: 'sw-1',
    title: "Discover Switzerland's breathtaking trails",
    subtitle: 'Alpine passes & wildflower ridges',
    image: '/src/assets/images/dest_swiss_alps_1795588097229.jpg',
  },
  {
    id: 'sw-2',
    title: 'Trek panoramic mountain viaducts',
    subtitle: 'Glacier Express & scenic rail routes',
    image: '/src/assets/images/swiss_scenic_train_1795588098439.jpg',
  },
  {
    id: 'sw-3',
    title: 'Paddle mirror-calm emerald lakes',
    subtitle: 'Guided morning glacier water tours',
    image: '/src/assets/images/dest_banff_lake_1795588099205.jpg',
  },
  {
    id: 'sw-4',
    title: 'Stay in starlit alpine retreats',
    subtitle: 'Warm timber lodges at high altitude',
    image: '/src/assets/images/promo_desert_glamping_1795588099828.jpg',
  },
];

export const trustPolicies = [
  {
    title: 'Transport Policies',
    description: 'Flexible airport transfers and itinerary changes up to 48 hours before departure.',
  },
  {
    title: 'Security Assurance',
    description: 'Encrypted checkout, verified operators, and full booking protection on every trip.',
  },
  {
    title: 'Customer Support',
    description: 'Dedicated human travel specialists available 24/7 in every destination timezone.',
  },
  {
    title: 'Reputable Affiliates',
    description: 'Hand-vetted boutique hotels, regional rail partners, and certified local guides.',
  },
];

export const trustCollageImages = [
  {
    src: '/src/assets/images/dest_european_city_1795602106394.jpg',
    alt: 'European canal bridge and historic old town cafes',
  },
  {
    src: '/src/assets/images/dest_elephant_safari_1795602104976.jpg',
    alt: 'Wild elephants walking beside misty river grasslands',
  },
  {
    src: '/src/assets/images/dest_street_food_1795602105782.jpg',
    alt: 'Vibrant night street food market stall',
  },
  {
    src: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
    alt: 'Infinity pool overlooking terraced rice paddies in Bali',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Noah Johnson',
    role: 'Creative Director · Swiss Alps & Italy',
    rating: 5.0,
    quote:
      'Every rail transfer, lakeside hotel check-in, and guided mountain trail was effortless. GoVibe turned a multi-country itinerary into our smoothest vacation yet.',
    image: '/src/assets/images/traveler_avatar_couple_1795588148136.jpg',
  },
  {
    id: 'test-2',
    name: 'Henry Collins',
    role: 'Product Lead · Cappadocia & Coast',
    rating: 5.0,
    quote:
      'From sunrise balloon rides in Turkey to private coastal boat charters, every local partner exceeded expectations. Support answered within minutes whenever we had a question.',
    image: '/src/assets/images/dest_california_cruise_1795588097404.jpg',
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Architectural Photographer · Amalfi Coast',
    rating: 5.0,
    quote:
      'GoVibe gave us quiet local spots and cliffside terraces we never would have discovered on our own.',
    image: '/src/assets/images/traveler_portrait_1795588100142.jpg',
  },
  {
    id: 'test-4',
    name: 'Sofia Alvarez',
    role: 'Solo Explorer · Bali Sanctuary',
    rating: 5.0,
    quote:
      'Having 24/7 support when my flight shifted by two hours saved my entire weekend tour schedule.',
    image: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
  },
];

export const instagramPosts = [
  {
    id: 'ig-1',
    src: '/src/assets/images/dest_amalfi_coast_1795588099378.jpg',
    alt: 'Amalfi Coast cliffside harbor view',
  },
  {
    id: 'ig-2',
    src: '/src/assets/images/dest_bali_resort_1795588098417.jpg',
    alt: 'Bali infinity pool morning sunlight',
  },
  {
    id: 'ig-3',
    src: '/src/assets/images/dest_turkey_cappadocia_1795602104193.jpg',
    alt: 'Cappadocia hot air balloons at dawn',
  },
  {
    id: 'ig-4',
    src: '/src/assets/images/swiss_scenic_train_1795588098439.jpg',
    alt: 'Swiss mountain railway crossing stone viaduct',
  },
];
