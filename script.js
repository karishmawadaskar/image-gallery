const imagesArr = [
    "./images/somnath.jpg",
    "./images/trimbakeshwar.jpg",
    "./images/rameshwaram.jpg",
    "./images/omkareshwar.jpg",
    "./images/nageshwar.jpg",
    "./images/mallikarjuna.jpg",
    "./images/mahakaleshwar.jpg",
    "./images/Kedarnath.jpg",
    "./images/Kashi-Vishwanath.jpg",
    "./images/Grishneshwar.jpg",
    "./images/bhimashankar.jpg",
    "./images/Baidyanath-Dham-Jyotirlinnga.jpg"
  ];
  let imgIndex = 0;
  
  const imgElement = document.getElementById('image');

  function prev(){
    if (imgIndex == 0) {
      imgIndex = imagesArr.length - 1;
    } else {
      imgIndex--;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  function next(){
    if (imgIndex == imagesArr.length - 1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  setInterval(next,5000);

  function themeToggle() {
    const body = document.body;
    const button = document.getElementById('themeToggle');

    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
        button.classList.remove('day');
        button.classList.add('night');

    } else {
        body.classList.remove('night');
        body.classList.add('day');
        button.classList.remove('night');
        button.classList.add('day');

    }

}