const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById('change-cat');
// const catImg = document.getElementById('cat');

const getCats = async function()
{
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));
    // return data.webpurl;
    return "https://thatcopy.github.io/catAPI/imgs/webp/2b74f7c.webp";
};

const loadImg = async () =>
{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener("click", loadImg);
loadImg();