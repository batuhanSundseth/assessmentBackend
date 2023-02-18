let complimentBtn = document.getElementById("complimentButton")
let fortuneBtn = document.getElementById("fortuneButton")
let form = document.getElementById("editToDoList")
let addListItemBox = document.getElementById("addListItemBox")

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

const submitHandler = (evt) => {
  evt.preventDefault()

  let bodyObj = {
    item: addListItemBox.value,
  }

  addListItem(bodyObj)
}

const listItemsCallback = ({data: listItems}) => {
  printListItems(listItems)
}

const addListItem = (body) => {
  axios.post("http://localhost:4000/api/listItems", body)
    .then(res => {
      listItemsCallback(res)
    })
}

const removeListItem = (id) => {
  axios.delete(`http://localhost:4000/api/listItems/${id}`)
    .then(res => {
      listItemsCallback(res)
    })
}

const updateListItem = (id, body) => {
  axios.put(`http://localhost:4000/api/listItems/${id}`, body)
    .then(res => {
      listItemsCallback(res)
    })
}

function printListItems(arr) {
  let toDoList = document.getElementById("toDoList")
  toDoList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createListDisplay(arr[i])
    }
}

function createListDisplay(item) {
  let listItem = document.createElement('p')
  let val = String(addListItemBox.value + ' ')
  listItem.innerHTML =
  `<div>
    <p>${item.item}</p>
    <button onClick="removeListItem(${item.id})">Delete Goal</>
    <button onClick="updateListItem(${item.id}, ${item})">Edit Goal</>
   </div`

  toDoList.appendChild(listItem)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)