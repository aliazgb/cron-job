import fetch from "node-fetch";

const usersblog = [
  { email: "user@test.com", password: "12345678" },
  { email: "user@test1.com", password: "12345678" },
  { email: "user@test2.com", password: "12345678" },
];

const userFreelancerApp = [
  { phoneNumber: "015222222222" },
  { phoneNumber: "015233333333" },
  { phoneNumber: "015211111111" },
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function run() {
  try {
    const randomUser = getRandomItem(usersblog);

    const signinRes = await fetch(
      "https://api.blog-app.online/api/user/signin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(randomUser),
      }
    );
    const signinData = await signinRes.json();

    const randomPhone = getRandomItem(userFreelancerApp);

    const otpRes = await fetch(
      "https://freelanceringapp-backend-feqf.onrender.com/api/user/get-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(randomPhone),
      }
    );

    const otpData = await otpRes.json();

    console.log("Signin:", signinData);
    console.log("OTP:", otpData);

    const getPostsRes = await fetch(
      "https://api.myblog-app.online/api/post/list"
    );
    const getFooterRes = await fetch("https://server-xb4n.onrender.com/footer");
    const posts = await getPostsRes.json();
    const footer = await getFooterRes.json();

    console.log("Posts:", posts);
    console.log("Footer:", footer);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

run();
