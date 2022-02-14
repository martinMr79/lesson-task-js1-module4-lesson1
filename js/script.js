const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultContainer = document.querySelector(".results");


async function fetchTeams() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const teams = json;

    resultContainer.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
      if (i === 15) {
        break;
      }

      const teamName = teams[i].teamName;
      const city = teams[i].location;

      if (teamName.startsWith("C") || teamName.startsWith("c")) {
        continue;
      }

      resultContainer.innerHTML += `<div class="card">
    <h4>${teamName}</h4>
    <p>${city}</p>
</div>`;
    }
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = message("error", error);
  }
}

fetchTeams();
