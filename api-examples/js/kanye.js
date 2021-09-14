function loadQuote(){
    fetch("https://api.kanye.rest/")
  .then((res) => res.json())
  .then((data) => quote(data));
}

  function quote(qt){
     const el = document.getElementById('quote');
     el.innerText = qt.quote;
    console.log(qt)
  }