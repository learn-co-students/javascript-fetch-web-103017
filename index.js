const app = "I don't do much.";
const token = "25346b36694da2e45b92943ffcabe50bbbb14ec5";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
