import { createClient } from "contentful";

console.log(process.env.REACT_APP_API_SPACE);
console.log(process.env.REACT_APP_ACCESS_TOKEN);

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
