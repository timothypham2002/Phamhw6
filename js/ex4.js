const newLink = () => {
  const busnNew = document.createElement('li');

  const COB = document.createElement('a');
  COB.href = 'https://www.csulb.edu/college-of-business';
  COB.textContent = 'College of Business';

  busnNew.appendChild(COB);

  const home = document.getElementById('links');

  const infosystem = document.getElementById('is');
  home.insertBefore(busnNew, infosystem);
};

newLink();
