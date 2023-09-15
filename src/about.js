let makeAboutPage = () => {
  let contentAbout = document.createElement('div');
  contentAbout.setAttribute('id', 'about-card');
  
  
  let aboutContent = document.createElement('div');
  aboutContent.setAttribute('id', 'about-card-content');
  aboutContent.innerHTML += '<h1>About Us</h1>';
  aboutContent.innerHTML += '<p>Selamat datang di Restoran Delightful Bites! Kami adalah destinasi kuliner yang memadukan cita rasa autentik dengan pengalaman bersantap yang menyenangkan. Dengan komitmen untuk menyajikan hidangan berkualitas tinggi dari bahan-bahan segar dan berkualitas, Restoran Delightful Bites telah menjadi bagian integral dari komunitas kuliner kami sejak tahun 2005.</p>';
  aboutContent.innerHTML += '<p>Didirikan oleh pasangan suami-istri, David dan Sarah Mitchell, restoran kami telah berupaya untuk menciptakan ruang di mana tamu dapat menikmati makanan lezat dalam atmosfer yang santai dan bersahabat. Kami percaya bahwa makanan adalah pengalaman yang menghubungkan, dan setiap hidangan yang kami sajikan adalah manifestasi dari dedikasi kami untuk keahlian kuliner dankerajinan tangan.</p>';
  aboutContent.innerHTML += '<p>Dapur kami dipimpin oleh Chef Emma Williams, yang memiliki pengalaman luas di berbagai koki terkemuka di seluruh dunia. Chef Emma selalu berusaha untuk menciptakan hidangan yang tidak hanya memanjakan lidah, tetapi juga memuaskan hati dan jiwa. Kami memahami pentingnya keberlanjutan dalam industri makanan, itulah sebabnya kami berkomitmen untuk menggunakan bahan-bahan lokal dan organik sebanyak mungkin. Kami juga bekerja sama dengan petani dan produsen setempat untuk memastikan bahwa setiap hidangan yang kami sajikan adalah sebuah pengalaman yang memuaskan dan ramah lingkungan.</p>';
  aboutContent.innerHTML += '<p>Selamat datang di Restoran Delightful Bites. Kami tidak sabar untuk berbagi pengalaman kuliner kami dengan Anda!</p><p>Terima kasih atas dukungan Anda.</p>';

  contentAbout.appendChild(aboutContent);

  return contentAbout;
}

export { makeAboutPage };