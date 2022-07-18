const initialState = {
  loading: false,
  error: false,
  dataResponse: [
    {
      id: 1,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 46837234,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=b7DxNXHmxmY",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 2,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=L0_hPoL0yM0",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 3,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 4683374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=sH_tyFTpvUI",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 4,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468323744,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=KePu2GTZlCE",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 5,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 46837234,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=b7DxNXHmxmY",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 6,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=L0_hPoL0yM0",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 7,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 4683374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=sH_tyFTpvUI",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 8,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468323744,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=KePu2GTZlCE",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 9,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 46837234,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=b7DxNXHmxmY",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 10,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=L0_hPoL0yM0",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 11,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 4683374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=sH_tyFTpvUI",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 12,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468323744,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=KePu2GTZlCE",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { action }) => {
  switch (action?.type) {
    case "GET_DATA_VIDEOS":
      return { ...state, dataResponse: action.videos };

    default:
      return state;
  }
};
