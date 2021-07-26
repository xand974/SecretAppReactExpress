export const Post = [
  {
    id: 1,
    title: "Pomme",
    content: "J'aime les pommes",
    date: "8 mins ago",
    userId: 1,
    likes: 30,
    comments: 2,
    postImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Bananes",
    content: "J'aime les bananes",
    date: "3 mins ago",
    userId: 1,
    likes: 320,
    comments: 21,
    postImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Poire",
    content: "J'aime les poires",
    date: "10 mins ago",
    userId: 2,
    likes: 3,
    comments: 92,
    postImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Melon",
    content: "J'aime pas les melons",
    date: "30 mins ago",
    userId: 2,
    likes: 4,
    comments: 9,
    postImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Letchi",
    content: "J'aime les letchis",
    date: "11 mins ago",
    userId: 3,
    likes: 9,
    comments: 23,
    postImage:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

export const User = [
  {
    id: 1,
    username: "xand974",
    profilePic:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    city: "Saint-Denis",
    from: "Montpellier",
    relationship: "en couple",
  },
  {
    id: 2,
    username: "momo",
    profilePic:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    city: "Budapest",
    from: "Port-Louis",
    relationship: "en couple",
    friend: [
      { id: 1, username: "xand974" },
      { username: "nomis", id: 3 },
    ],
    background_pic: "https://images7.alphacoders.com/877/thumb-1920-877062.jpg",
  },
  {
    id: 3,
    username: "nomis",
    profilePic:
      "https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635",
    city: "Belgique",
    from: "Luxembourg",
    relationship: "single",
  },
];
