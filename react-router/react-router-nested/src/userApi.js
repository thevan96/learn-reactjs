// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const userApi = {
  listUser: [
    { id: 1, name: "Ben Blocker", genre: "Male" },
    { id: 2, name: "Dave Defender", genre: "Female" },
    { id: 3, name: "Sam Sweeper", genre: "Female" },
    { id: 4, name: "Matt Midfielder", genre: "Male" },
    { id: 5, name: "William Winger", genre: "Female" },
    { id: 6, name: "Fillipe Forward", genre: "Other" }
  ],

  all: function() {
    return this.listUser;
  },

  get: function(id) {
    return this.listUser.find(element => element.id === id);
  }
};

export default userApi;
