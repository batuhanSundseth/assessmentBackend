const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const toDoList = document.getElementById("toDoList")
const addListItemBox = document.getElementById("addListItemBox")
const addListItemBtn = document.getElementById("addListItemButton")
const idSelectorBox = document.getElementById("idSelectorBox")
const deleteListItemBtn = document.getElementById("deleteListItemButton")
const updateListItemBtn = document.getElementById("updateListItemButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

const addItemSubmitHandler = (element) => {
  element.preventDefault()

  let bodyObj = {
    item: addListItemBox.value
  }

  addListItem(bodyObj)

  addListItemBox.value = ''
}

const removeItemSubmitHandler = (element) => {
  element.preventDefault()

  let id = idSelectorBox.value
  removeListItem(id)

  idSelectorBox.value = ''
}

const updateItemSubmitHandler = (element) => {
  element.preventDefault()

  let bodyObj = {
    item: addListItemBox.value
  }

  let id = idSelectorBox.value
  removeListItem(bodyObj)

  idSelectorBox.value = ''
}

const addListItem = (body) => {
  axios.post("http://localhost:4000/api/listItems/", body)
    .then(res => {
      toDoList.innerHTML = res.data
    })
}

const removeListItem = (bodyObj) => {
  axios.delete("http://localhost:4000/api/listItems/" + id, bodyObj)
    .then(res => {
      toDoList.innerHTML = res.data
    })
}

const updateListItem = (id) => {
  axios.put("http://localhost:4000/api/listItems/" + id, id)
    .then(res => {
      toDoList.innerHTML = res.data
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addListItemBtn.addEventListener('click', addItemSubmitHandler)
deleteListItemBtn.addEventListener('click', removeListItem)
updateListItemBtn.addEventListener('click', updateListItem)