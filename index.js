var data = [];
var divTbody = document.querySelector("tbody");
fetch("./people.json")
  .then((res) => {
    return res.json();
  })
  .then((data1) => {
    data = data1;
    fdata(data);
  })
  .catch((error) => {
    console.log(error);
  });
let divCards = document.querySelector(".cards");
//function decalaration using arrow

let fdata = (data) => {
  console.log(data);
  data.forEach((element, index) => {
    let { id, Name, skills, project, HCM, gender } = element;
    let divCard = document.createElement("div");
    divCard.id = id;
    let divName = document.createElement("div");
    divName.innerHTML = "Name :" + Name;
    console.log(index);

    let divSkills = document.createElement("div");
    let inpt = document.createElement("input");
    inpt.value = skills;
    divSkills.innerHTML = "Skills :";
    divSkills.appendChild(inpt);
    inpt.className = id;
    inpt.addEventListener("keyup", (eventt) => {
      inpt.value = eventt.target.value;
      inpt2.value = eventt.target.value;
      data[index].skills = eventt.target.value;
      console.log(data[index].skills);
    });
    let btn = document.createElement("button");
    btn.textContent = "remove";
    btn.addEventListener("click", (eventt) => {
      removeEle(id, data);
      document.getElementById(value).className = "remove";
    });

    let divProject = document.createElement("div");
    divProject.innerHTML = project;
    divProject.innerHTML = "project :" + project;
    let divHcm = document.createElement("div");
    divHcm.innerHTML = "HCM  :" + HCM;

    let img = document.createElement("img");
    img.className = "rrr";
    gender == "male" ? (img.src = "./boy.jpg") : (img.src = "./girl.jpg");
    divCard.appendChild(img);
    divCard.appendChild(divName);
    divCard.appendChild(divSkills);
    divCard.appendChild(divProject);
    divCard.appendChild(divHcm);
    divCard.appendChild(btn);
    divCards.appendChild(divCard);

    divCard.className = "card";

    let divTr = document.createElement("tr");
    divTr.id = id + "tr";
    let value = id + "tr";
    let divTd1 = document.createElement("td");
    divTd1.textContent = Name;

    let inpt2 = document.createElement("input");
    inpt2.value = skills;
    inpt2.className = id;
    inpt2.addEventListener("keyup", (eventt) => {
      inpt2.value = eventt.target.value;
      inpt.value = eventt.target.value;
      data[index].skills = eventt.target.value;
      console.log(data[index].skills);
    });

    let divTd2 = document.createElement("td");
    divTd2.appendChild(inpt2);

    let divTd3 = document.createElement("td");
    divTd3.textContent = project;
    let divTd4 = document.createElement("td");
    divTd4.textContent = HCM;
    let divTd5 = document.createElement("td");
    divTd5.textContent = gender;
    let btn2 = document.createElement("button");
    btn2.textContent = "remove";

    btn2.addEventListener("click", (eventt) => {
      removeEle(id, data);
      console.log(`${value}`);
      document.getElementById(value).className = "remove";
    });

    let divTd6 = document.createElement("td");
    divTd6.appendChild(btn2);
    divTr.appendChild(divTd1);
    divTr.appendChild(divTd2);
    divTr.appendChild(divTd3);
    divTr.appendChild(divTd4);
    divTr.appendChild(divTd5);
    divTr.appendChild(divTd6);
    divTbody.appendChild(divTr);
  });
};

function removeEle(id, data) {
  console.log(id);
  data.filter((d) => {
    console.log(d.id == id);
    return d.id != id;
  });
  console.log(data);
  let divCard = document.getElementById(id);
  divCard.className = "remove";
}
