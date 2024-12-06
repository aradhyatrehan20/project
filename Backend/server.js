// import app from "./app.js";
// app.listen(process.env.PORT,()=>{
//     console.log('Server Running On Port ${process.env.PORT} ');
// });
// import app from "./app.js";
// app.listen(process.env.PORT, () => {
//     console.log(`Server Running On Port ${process.env.PORT}`);
// });
import app from "./app.js";

// Use the environment variable PORT, or fallback to 4000 if it's not defined
const port = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
