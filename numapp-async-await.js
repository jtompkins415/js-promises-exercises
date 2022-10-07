let favNum = Math.floor(Math.random() * 100);

function randomNum(){
    let num = Math.floor(Math.random() * 100);
    return num;
};

let baseURL = "http://numbersapi.com/";

let favUl = document.querySelector('.fav-num-facts');

async function getFavNumFacts() {
    let res = await Promise.all([
        axios.get(`${baseURL}${favNum}/?json`),
        axios.get(`${baseURL}${favNum}/?json`),
        axios.get(`${baseURL}${favNum}/?json`),
        axios.get(`${baseURL}${favNum}/?json`)
    ])

    let newLi1 = document.createElement('li')
    let newLi2 = document.createElement('li')
    let newLi3 = document.createElement('li')
    let newLi4 = document.createElement('li')

    let info1 = res[0].data.text
    let info2 = res[1].data.text
    let info3 = res[2].data.text
    let info4 = res[3].data.text

    newLi1.innerHTML = info1;
    favUl.append(newLi1);
    newLi2.innerHTML = info2;
    favUl.append(newLi2);
    newLi3.innerHTML = info3;
    favUl.append(newLi3);
    newLi4.innerHTML = info4;
    favUl.append(newLi4);
}

getFavNumFacts()

async function getMultiNumFacts() {
    let res = await axios.get(`${baseURL}${randomNum()},${randomNum()},${randomNum()}/?json`)
    console.log(res.data)

    let randoUl = document.querySelector('.random-num-facts');

    for(let info of Object.values(res.data)){
        let newLi = document.createElement('li');
        newLi.innerHTML = info;
        randoUl.append(newLi);
    };

}

getMultiNumFacts()

