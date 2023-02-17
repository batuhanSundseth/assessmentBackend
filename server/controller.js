let listItems = []
let globalId = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      const fortunes = ["You will win the lottery if you play just one more time!", "It's time to turn yourself off and on again.", "Don't eat the yellow snow.", "Every machine is a smoke machine if you operate it wrong enough.", "Just because a famous person said it doesn't mean it's true!"]
      
      let i = Math.floor(Math.random() * fortunes.length)
      let fortune = fortunes[i]

      res.status(200).send(fortune)
    },

    addListItem: (req, res) => {
      let {item} = req.body
      let newListItem = {
        id: globalId,
        item: item
      }
      listItems.push(newListItem)
      globalId++

      res.status(200).send(listItems)
    },

    removeListItem: (req, res) => {
      let {id} = req.body
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].id === id) {
          listItems.splice(i, 1)
          res.status(200).send(listItems)
          return
        }
        res.status(400).send("Unable to remove list item")
      }
    },

    updateListItem: (req, res) => {
      let {id} = req.body
      let {item} = req.body
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].id === id) {
          listItems[i].item = item
          res.status(200).send(listItems)
          return
        }
      }
      res.status(400).send("Unable to update list item")
    }
}