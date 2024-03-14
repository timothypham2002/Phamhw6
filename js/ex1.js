//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  nodes = document.body.childNodes;
  nodes.forEach((node) => {
    console.log(node);
  });
}

bodyNodes();