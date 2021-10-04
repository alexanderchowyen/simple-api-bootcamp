console.log('its linked')
const jokes = document.querySelector('#getJokes')
const button = document.querySelector('button')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist'
const display = document.querySelector('#display')

button.addEventListener('click',function(){
fetch(url)
  .then(res => res.json())
  .then(data => {
   console.log(data);
   if (data.setup){ 
    document.querySelector('#display').innerHTML = `${data.setup} ${data.delivery}`
   }else{
      document.querySelector('#display').innerHTML = `${data.joke}`
   }
  
  })
})