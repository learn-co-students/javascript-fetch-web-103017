// const app = "I don't do much.";
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log('Booo');
// };
//
//
//
// xhr.send();
const token = 'eb27bcdc6e6703cd68a0d79a5f1c2f366a6fe260'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
