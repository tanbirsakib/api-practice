const loadData = function(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => buddy(data) )
}

loadData()

function buddy(data){
    const result = data.result;
    console.log(result)
}