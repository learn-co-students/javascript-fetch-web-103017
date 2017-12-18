const app = "I don't do much.";
const token = '85272460f6fdfe6df8ab39edf471a44fbbd7e506';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`;
  }
}).then(res => res.json()).then(json => console.log(json));
