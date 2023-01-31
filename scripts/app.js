"use strict";

const start = async () => {
  const algoValue = Number(document.querySelector(".algo-menu").value) || 0;
  let speedValue = Number(document.querySelector(".speed-menu").value) || 0;
  const sizemenu = Number(document.querySelector(".size-menu").value) || 0;

  if (!speedValue) {
    speedValue = 1;
  }
  if (!algoValue) {
    alert("No Algorithm Selected");
    return;
  }

  if (!sizemenu) {
    alert("No Array Size Selected!");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  switch (algoValue) {
    case 1:
      await algorithm.BubbleSort();
      break;
    case 2:
      await algorithm.SelectionSort();
      break;
    case 3:
      await algorithm.InsertionSort();
      break;
    case 4:
      await algorithm.MergeSort();
      break;
    case 5:
      await algorithm.QuickSort();
      break;
    default:
      break;
  }
};

const RenderScreen = async () => {
  await RenderList();
};

const RenderList = async () => {
  const sizeValue = Number(document.querySelector(".size-menu").value) || 0;
  await clearScreen();

  const list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", element);
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = async (sorted) => {
  const sizeValue = Number(document.querySelector(".size-menu").value) || 0;
  if (!sizeValue) alert('select array size');
  await clearScreen();

  let list = await randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);
  console.lof(list);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
  const list = [];
  const lowerBound = 1;
  const upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    const randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(randomNumber);
  }
  return list;
};


const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  const Navbar = document.querySelector(".navbar");
  Navbar.classList.toggle("responsive");
};

document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
