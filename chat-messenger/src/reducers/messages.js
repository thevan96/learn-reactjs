const messagesDefault = [
  {
    id: 1,
    idSender: 0,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. In eu mi bibendum neque egestas congue quisque egestas. Diam quis enim lobortis scelerisque.",
    idRoom: 1,
  },
  {
    id: 2,
    idSender: 0,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 1,
  },
  {
    id: 3,
    idSender: 1,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 1,
  },
  {
    id: 4,
    idSender: 1,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 1,
  },
  {
    id: 5,
    idSender: 1,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 1,
  },
  {
    id: 4,
    idSender: 0,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 1,
  },
  {
    id: 5,
    idSender: 2,
    content:
      "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.",
    idRoom: 2,
  },
];

const messages = (state = messagesDefault, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      const lastId = state[state.length - 1].id;
      return [...state, { id: lastId + 1, idSender: 0, content: action.text, idRoom: action.idRoom }];
    default:
      return state;
  }
};

export default messages;