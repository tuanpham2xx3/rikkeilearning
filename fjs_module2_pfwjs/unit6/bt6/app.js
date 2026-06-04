import { fetchUsers } from "./apiService.js";

const app = document.getElementById("app");

async function init() {
  try {
    const users = await fetchUsers();
    const usersCopy = [...users];
    const html = usersCopy
      .map(({ name, email, website }) => {
        return `
          <div class="card">
            <h3>${name}</h3>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Website: <a href="http://${website}" target="_blank">${website}</a></p>
          </div>
        `;
      })
      .join("");

    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

init();
