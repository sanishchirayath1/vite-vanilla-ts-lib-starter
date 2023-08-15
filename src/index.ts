import "./style.css";

export { sum } from "./sum";

import HttpClient from "./httpClient";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const posts = await HttpClient.get<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);

const appEl = document.getElementById("app");

const postButton = document.createElement("button");
postButton.innerText = "POST A POST";
postButton.addEventListener("click", async () => {
  const post = await HttpClient.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      body: JSON.stringify({
        title: "foo",
        body: "bar",
      }),
    }
  );
  console.log(post);
});

const putButton = document.createElement("button");
putButton.innerText = "PUT A POST";
putButton.addEventListener("click", async () => {
  const post = await HttpClient.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      body: JSON.stringify({
        title: "foo",
        body: "bar",
      }),
    }
  );
  console.log(post);
});

const patchButton = document.createElement("button");
patchButton.innerText = "PATCH A POST";

patchButton.addEventListener("click", async () => {
  const post = await HttpClient.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      body: JSON.stringify({
        title: "foo",
        body: "bar",
      }),
    }
  );
  console.log(post);
});

const deleteButton = document.createElement("button");
deleteButton.innerText = "DELETE A POST";

deleteButton.addEventListener("click", async () => {
  const post = await HttpClient.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      body: JSON.stringify({
        title: "foo",
        body: "bar",
      }),
    }
  );
  console.log(post);
});

if (appEl) {
  appEl.append(postButton);
  appEl.append(putButton);
  appEl.append(patchButton);
  appEl.append(deleteButton);
}

const postEls = posts.data.map(post => {
  const postEl = document.createElement("div");
  postEl.classList.add("post");
  postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
  return postEl;
});

if (appEl) {
  appEl.append(...postEls);
}
