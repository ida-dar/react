export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultImage: 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  defaultHeaderIcon: 'user-astronaut',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const searchData = {
  title: 'Search results',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Places I want to visit <sup>soon!</sup>',
    description: 'Interesting places I want to check out!',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: 'list-3',
    title: 'Food I want to try <sup>soon!</sup>',
    description: 'Food I want to check out!',
    image: 'https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Europe',
    icon: 'plane',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Australia',
    icon: 'plane',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Asia',
    icon: 'plane',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Vege',
    icon: 'utensils',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Meat',
    icon: 'utensils',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Pasta',
    icon: 'utensils',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Denmark',
  },
  {
    id: 'card-8',
    columnId: 'column-5',
    title: 'Sydney',
  },
  {
    id: 'card-9',
    columnId: 'column-6',
    title: 'Japan',
  },
];

export const infoText = {
  imageTitle: 'Some info about the app',
  title: 'Info',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};

export const faqContent = {
  imageTitle: 'Have some questions?',
  title: 'FAQ',
  image: 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  faq: [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
  ],
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  search: {...searchData},
};

export default initialStoreData;
