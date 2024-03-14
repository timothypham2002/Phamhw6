const newFormat = () => {
  const paragraphs = document.querySelectorAll('p');

  paragraphs.forEach(para => {
    para.style.fontWeight = 'bold';
    para.style.backgroundColor = 'yellow';
  });
};

newFormat();
