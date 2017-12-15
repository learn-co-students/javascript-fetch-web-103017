const app = "I don't do much.";
const token = '668dd7fc2fc850b68e55f9cbec67f3b0a28cccc3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
