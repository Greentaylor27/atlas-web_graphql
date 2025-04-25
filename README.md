# 🕸️ Atlas Web GraphQL

A backend GraphQL API powered by Express and MongoDB. This project was built to explore how flexible and efficient GraphQL can be when designing developer-friendly APIs. It features a custom schema, root queries, resolvers, and a connection to a MongoDB database, all tested and explored using GraphiQL.

![Screenshot of GraphiQL interface](./screenshot/Capture.png)

---

## 👋 About Me

Hi, I'm Taylor Green — a full-stack web developer who loves building APIs, painting miniatures, and learning by doing. You can usually find me experimenting with new technologies or diving deep into side projects that help me grow.  
Connect with me here:
- [LinkedIn](https://www.linkedin.com/in/greentaylor27/)
- [Portfolio Projects](https://github.com/Greentaylor27?tab=repositories)

---

## 📖 Project Overview

The goal of this project was to build a backend-only GraphQL API from scratch. I used **Express.js** for the server, **GraphQL** for the query language, and **MongoDB** as the database. I designed a schema with multiple types and relationships, implemented resolvers to fetch and return data, and tested everything through the **GraphiQL** interface.

This project helped me understand the power of GraphQL's flexible queries and how to build more efficient, clean APIs that give clients exactly what they need—no more, no less.

---

## 🔧 Features

✅ Set up an Express server  
✅ Designed and implemented GraphQL schema  
✅ Created root queries and resolvers  
✅ Integrated MongoDB with Mongoose  
✅ Used GraphiQL to test and validate queries  

---

## 🧠 Development Story

This project really opened my eyes to how GraphQL works under the hood. Setting up resolvers and managing nested data was a new challenge, especially when connecting everything to MongoDB. It forced me to slow down, trace my logic, and understand how GraphQL resolves each request.

One of the trickiest parts was figuring out how to model relationships between types in the schema and correctly resolve nested fields. Once I got it working, testing in GraphiQL felt like magic—being able to write one query and get exactly what I wanted.

---

## 🔮 Still To Do

- [ ] Build a front-end client using React and Apollo  
- [ ] Add mutation support for creating, updating, and deleting data  
- [ ] Implement authentication and authorization  
- [ ] Write unit tests for resolvers  

---

## 🚀 Getting Started

### 🧱 Prerequisites

- Node.js & npm  
- MongoDB installed locally or a cloud database like MongoDB Atlas  

### ⚙️ Installation

```bash
git clone https://github.com/Greentaylor27/atlas-web_graphql.git
cd atlas-web_graphql
npm install
