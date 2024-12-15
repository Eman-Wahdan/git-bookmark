let siteNameInput = document.querySelector(".siteNameInput");
let siteUrlInput = document.querySelector(".siteUrlInput");
let btn = document.querySelector("button");
let boxcontainer = document.querySelector(".boxcontainer");
let btnVisit;

let allwebsite = [];
let myIndex;
// let myURL;

if (localStorage.getItem("Websites") == null) {
  allwebsite = [];
} else {
  allwebsite = JSON.parse(localStorage.getItem("Websites"));
  display(allwebsite);
}

function addWebsite() {
  if (siteNameInput) {
  }
  if (
    siteNameInput.classList.contains("is-valid") &&
    siteUrlInput.classList.contains("is-valid")
  ) {
    let website = {
      name: capitalize(siteNameInput.value),
      url: siteUrlInput.value,
    };

    allwebsite.push(website);
    localStorage.setItem("Websites", JSON.stringify(allwebsite));
    display(allwebsite);
    clear();
    siteNameInput.classList.remove("is-valid");
    siteUrlInput.classList.remove("is-valid");
  } else {
    boxcontainer.classList.replace("d-none", "d-flex");
  }
}

function display(arr) {
  let cartona = "";
  for (let i = 1; i < arr.length; i++) {
    cartona += `
      <div class="foot bg-light d-flex justify-content-around mt-4">
          <span class="index">${i}</span>
          <span class="WebsiteName">${arr[i].name} </span>
          <button onclick ="visitWebsite(${i})"  class="Visit bg-info">Visit</button>
          <button onclick="deleteItem(${i})" class="Delete bg-danger">Delete</button>
        </div>`;
  }
  document.getElementById("footer").innerHTML = cartona;
}

function deleteItem(deletedIndex) {
  allwebsite.splice(deletedIndex, 1);
  display(allwebsite);
  localStorage.setItem("Websites", JSON.stringify(allwebsite));
}

function clear() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
}
function capitalize(str) {
  let strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("");
}


function visitWebsite(websiteIndex) {
  open(allwebsite[websiteIndex].url);
}

////////////////validation function////////

function validation(element) {
  let rejex = {
    siteNameId: /^[a-zA-z0-9_]{3,}$/i,
    siteUrlId: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,
  };
  if (rejex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
function closedIcon() {
  boxcontainer.classList.replace("d-flex", "d-none");
}
document.addEventListener("click", function (e) {
  if (e.target.id == "boxcont") {
    boxcontainer.classList.replace("d-flex", "d-none");
  }
});
