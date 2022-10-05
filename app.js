let favNum = Math.floor(Math.random() * 100);

function randomNum(){
    let num = Math.floor(Math.random() * 100);
    return num;
};

let baseURL = "http://numbersapi.com/";

let randomNumFact = new Promise((resolve, reject) => {    
    resolve(resp = axios.get(`${baseURL}${randomNum()},${randomNum()},${randomNum()}?json`));
});

randomNumFact
.then(numData => {
    console.log(numData.data);
    let body = document.querySelector('body');
    let newUl = document.createElement('ul');
    
    for(let info of Object.values(numData.data)){
        let newLi = document.createElement('li');
        newLi.innerHTML = info;
        newUl.append(newLi);
    };

    body.append(newUl);
});

let body = document.querySelector('body')
let favNumFactUl = document.createElement('ul');
body.append(favNumFactUl)

let favNumFact = new Promise((resolve, reject) => {
    resolve(resp = axios.get(`${baseURL}${favNum}?json`));
})

favNumFact
.then(numData => {
    console.log(numData.data);;
    let newLi = document.createElement('li');
    let info = numData.data.text

    newLi.innerHTML = info;
    favNumFactUl.append(newLi);

    return axios.get(`${baseURL}${favNum}?json`)
})
.then(numData2 => {
    console.log(numData2.data);
    let newLi = document.createElement('li');
    let info = numData2.data.text

    newLi.innerHTML = info;
    favNumFactUl.append(newLi);

    return axios.get(`${baseURL}${favNum}?json`)
})
.then(numData3 => {
    console.log(numData3.data);
    let newLi = document.createElement('li');
    let info = numData3.data.text

    newLi.innerHTML = info;
    favNumFactUl.append(newLi);

    return axios.get(`${baseURL}${favNum}?json`)
})
.then(numData4 => {
    console.log(numData4.data);
    let newLi = document.createElement('li');
    let info = numData4.data.text

    newLi.innerHTML = info;
    favNumFactUl.append(newLi);

})




