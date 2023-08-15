const API = "http://localhost:3000/goods";

async function getOneGood(id) {
  const res = await fetch(`${API}/${id}`);
  const data = res.json();
  console.log(data);
}

const id = localStorage.getItem("detaill-id");
getOneGood(id);

const detailBlock = document.getElementById("detail");
