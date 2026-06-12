// import { error } from "console";
import fs from "fs/promises";

// fs.readFile("./notes.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readfile using fs.readFileSync()

// const file = fs.readFileSync("./notes.txt", "");
// console.log(file);

//Readingfile using the promise

// fs.readFile("./notes.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//   async and  await

// const fileRead = async () => {
//   try {
//     const data = await fs.readFile("./notes.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fileRead();

// Writing the file

const content = "Server Started ";

fs.writeFile("./logs/app.log", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Writing done");
  }
});
