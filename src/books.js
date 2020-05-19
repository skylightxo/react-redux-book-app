import {generate as id} from "shortid"

export const categories = [
  {_id: "1", title: "Fantastic"},
  {_id: "2", title: "Programming"},
]

export const defaultBooks = [
  {
    _id: id(),
    title: "Harry Potter",
    desc:
      "Harry Potter book lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur, odit qui iste eum iusto ut culpa aut labore quasi ab pariatur obcaecati voluptatum eveniet? Qui ab odio quae optio.",
    categoryId: "1",
  },
  {
    _id: id(),
    title: "Learn React",
    desc:
      "Learn React book consectetur adipisicing elit. Nobis totam incidunt distinctio dolor quibusdam! Non explicabo rerum sunt voluptate nihil laborum consequatur dolor sed ipsa",
    categoryId: "2",
  },
  {
    _id: id(),
    title: "Learn Redux",
    desc:
      "Learn Redux book dolorem accusamus, officia, exercitationem pariatur cumque, aspernatur rerum dolorum sunt saepe unde soluta atque quidem",

    categoryId: "2",
  },
  {
    _id: id(),
    title: "Using PHP for create CMS",
    desc:
      "Using PHP for create CMS sequi dolores unde, illo adipisci possimus assumenda alias repellendus sunt animi suscipit voluptates odit",

    categoryId: "2",
  },
]
