export interface ResortItem {
  id: string;
  name: string;
  destination: string;
  description: string;
  contact: string;
  rating: number;
  reviews: number;
  image: string;
}

export const resortData: ResortItem[] = [
  {
    id: 'ubud-jungle-retreat',
    name: 'Ubud Jungle Retreat',
    destination: 'Bali, Indonesia',
    description:
      'Perched above the Ayung River valley, this tranquil sanctuary pairs open-air teak pavilions with a heated emerald infinity pool overlooking the rainforest canopy.',
    contact: '+62 361 555 0142',
    rating: 4.9,
    reviews: 124,
    image: '/resort-bali.jpg',
  },
  {
    id: 'matterhorn-timber-chalet',
    name: 'Matterhorn Timber Chalet',
    destination: 'Zermatt, Switzerland',
    description:
      'A classic alpine lodge crafted from aged larch wood with panoramic glacier views, fireside lounges, and ski-in access to high-altitude mountain trails.',
    contact: '+41 27 555 0189',
    rating: 4.9,
    reviews: 98,
    image: '/resort-swiss.jpg',
  },
  {
    id: 'coral-reef-water-villas',
    name: 'Coral Reef Water Villas',
    destination: 'South Ari Atoll, Maldives',
    description:
      'Private thatched-roof bungalows suspended directly above a crystalline turquoise lagoon with sunset decks and direct ladder access to vibrant coral reefs.',
    contact: '+960 668 0154',
    rating: 5.0,
    reviews: 156,
    image: '/resort-maldives.jpg',
  },
  {
    id: 'villa-san-lorenzo-estate',
    name: 'Villa San Lorenzo Estate',
    destination: 'Chianti, Tuscany',
    description:
      'A restored seventeenth-century limestone manor surrounded by cypress avenues, olive groves, and sunlit Sangiovese vineyards overlooking rolling Tuscan hills.',
    contact: '+39 055 555 0198',
    rating: 4.8,
    reviews: 87,
    image: '/resort-tuscany.jpg',
  },
];
