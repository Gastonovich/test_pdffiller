let params = {
  lines: [
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#FFF",
          width: 25
        },
        {
          background: "#000",
          width: 50
        },
        {
          background: "#FFF",
          width: 25
        }
      ]
    }
  ]
};


(function createLines() {
  for (let el = 0; el < params.lines.length; el++) {
    let line = document.createElement("div");

    //setting styles
    line.style.display = "flex";
    line.style.flexDirection = "row";
    line.style.width = "100vw";
    line.style.height = 100 / params.lines.length + "vh";
    line.style.background = params.lines[el].background;

    document.body.appendChild(line);
    line.id = el; //setting unique id for appending childs

    createLineDividers(el);
    setTimer(el, params.lines[el].updateTime);
  }
})();

function createLineDividers(el) {
  for (let k in params.lines[el].elements) {
    let divider = document.createElement("div");

    divider.style.zIndex = "10";
    divider.style.width = params.lines[el].elements[k].width + "%";
    divider.style.height = 100 / params.lines.length + "vh";
    divider.style.background = params.lines[el].elements[k].background;
    divider.style.transition = "all 1s";

    document.getElementById(el).appendChild(divider);
  }
}

function setTimer(id, interval) {
  let node = document.getElementById(id);

  setInterval(function() {
    for (let k = 0; k < node.childNodes.length; k++) {
      node.childNodes[k].style.background = colorGeneration();
    }
  }, interval);
}

function colorGeneration() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}






