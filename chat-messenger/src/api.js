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
    {
      id: 1,
      idSender: 1,
      content: 'Hello world 1',
      idRoom: 1
    },
    {
      id: 2,
      idSender: 2,
      content: 'Hello world 2',
      idRoom: 2
    },
    {
      id: 3,
      idSender: 2,
      content: 'Abc',
      idRoom: 2
    },
    {
      id: 3,
      idSender: 1,
      content: 'CDE',
      idRoom: 2
    },
  ],

  getMessageByRoom: function (idRoom) {
    return this.messages.filter(e => e.idRoom === idRoom);
  }
}

