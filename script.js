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