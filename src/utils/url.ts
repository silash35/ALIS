// eslint-disable-next-line no-undef
let url = process.env.VERCEL_URL;
if (url == undefined) {
  url = "http://localhost:3000";
} else {
  url = "https://" + url;
}

export default url;
