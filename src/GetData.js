import React from "react"
 
async function GetData() {
  const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
  const posts = await (await fetch ("https://jsonplaceholder.typicode.com/posts/1")).json()

  console.log(users,posts);
 }
 GetData();

 export default GetData