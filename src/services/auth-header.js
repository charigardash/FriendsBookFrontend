export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.headers && user.headers.authorization) {
    // return { Authorization: "Bearer " + user.accessToken };
    return { Authorization: user.headers.authorization };
  } else {
    return {};
  }
}
