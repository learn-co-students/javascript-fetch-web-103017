const app = "I don't do much.";
const token = 'f90d7accb0fcc80676bc3c819e108808c1a0e981'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
