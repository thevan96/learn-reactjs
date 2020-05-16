export const contactApi = {
  listContact: [
    {
      id: 2,
      name: 'Hoa',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
      id: 3,
      name: 'Vu',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
      id: 4,
      name: 'Quy',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    },
    {
      id: 5,
      name: 'Thao',

      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
    },
    {
      id: 6,
      name: 'Minh',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    },
    {
      id: 7,
      name: 'Thanh',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    },
    {
      id: 8,
      name: 'Thien',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    },
    {
      id: 9,
      name: 'Tu',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    },
    {
      id: 10,
      name: 'Thinh',
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    }
  ],

  all: function () {
    return this.listContact
  },

}

export const messagesApi = {
  messages: [
    // 1-2
    {
      id: 1,
      idSender: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. In eu mi bibendum neque egestas congue quisque egestas. Diam quis enim lobortis scelerisque.',
      idRoom: 1
    },
    {
      id: 2,
      idSender: 2,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 2
    },
    {
      id: 3,
      idSender: 2,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 2
    },
    {
      id: 4,
      idSender: 1,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 2
    },
    {
      id: 4,
      idSender: 2,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 2
    },
    {
      id: 4,
      idSender: 2,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 2
    },

    // 1-3
    {
      id: 5,
      idSender: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. In eu mi bibendum neque egestas congue quisque egestas. Diam quis enim lobortis scelerisque.',
      idRoom: 3
    },
    {
      id: 6,
      idSender: 3,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 3
    },
    {
      id: 7,
      idSender: 3,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 3
    },
    {
      id: 8,
      idSender: 1,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 3
    },
    {
      id: 9,
      idSender: 2,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 3
    },
    {
      id: 10,
      idSender: 3,
      content: 'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Elementum eu facilisis sed odio morbi quis.',
      idRoom: 3
    },

  ],

  getMessageByRoom: function (idRoom) {
    const messages = this.messages.filter(e => e.idRoom === idRoom);
    if (messages) return messages;
    return [];
  }
}

