console.log("terminal.js loaded");

const overlay = document.getElementById(
  "command-palette-overlay"
);

const input = document.getElementById(
  "command-input"
);

const results = document.getElementById(
  "command-results"
);

let selectedIndex = 0;
let filteredCommands = [];

const commands = [
  {
    name: "about",
    description: "Go to About Section"
  },

  {
    name: "projects",
    description: "View Projects"
  },

  {
    name: "experience",
    description: "View Experience"
  },

  {
    name: "contact",
    description: "Contact Me"
  },

  {
    name: "github",
    description: "Open GitHub"
  },

  {
    name: "linkedin",
    description: "Open LinkedIn"
  },

  {
    name: "resume",
    description: "Open Resume"
  },

  {
    name: "theme",
    description: "Toggle Theme"
  }
];

function openPalette() {
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  input.value = "";
  selectedIndex = 0;

  renderCommands();

  setTimeout(() => {
    input.focus();
  }, 10);
}

function closePalette() {
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
}

function renderCommands(search = "") {

  filteredCommands = commands.filter(cmd =>
    cmd.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (
    selectedIndex >=
    filteredCommands.length
  ) {
    selectedIndex = 0;
  }

  results.innerHTML = "";

  filteredCommands.forEach(
    (cmd, index) => {

      results.innerHTML += `
        <button
          class="
            command-item
            w-full
            text-left
            text-[#0C343D]
            dark:text-[#DBC6A5]
            px-4
            py-3
            transition
            hover:bg-white/20
            dark:hover:bg-white/10
            ${
              index === selectedIndex
                ? "bg-white/20 dark:bg-white/10"
                : ""
            }
          "
          data-command="${cmd.name}"
        >
          <div class="font-medium">
            ${cmd.name}
          </div>

          <div class="text-xs opacity-60">
            ${cmd.description}
          </div>
        </button>
      `;
    }
  );
}

function runCommand(cmd) {

  switch (cmd) {

    case "about":
      document
        .querySelector("#about")
        ?.scrollIntoView({
          behavior: "smooth"
        });
      break;

    case "projects":
      document
        .querySelector("#projects")
        ?.scrollIntoView({
          behavior: "smooth"
        });
      break;

    case "experience":
      document
        .querySelector("#experience")
        ?.scrollIntoView({
          behavior: "smooth"
        });
      break;

    case "contact":
      window.location.href =
        "mailto:hadeedkhan8@outlook.com";
      break;

    case "github":
      window.open(
        "https://github.com/hadeedkhan1",
        "_blank"
      );
      break;

    case "linkedin":
      window.open(
        "https://linkedin.com/in/hadeedk",
        "_blank"
      );
      break;

    case "resume":
      window.open(
        "/resume.pdf",
        "_blank"
      );
      break;

    case "theme":
      document.documentElement.classList.toggle(
        "dark"
      );
      break;
  }

  closePalette();
}

document.addEventListener("keydown", (e) => {

  const typing =
    ["INPUT", "TEXTAREA"].includes(
      document.activeElement.tagName
    );

  if (
    (!typing && e.key === "s") ||
    (!typing &&
      e.shiftKey &&
      e.key.toLowerCase() === "k")
  ) {
    e.preventDefault();
    openPalette();
  }

  if (e.key === "Escape") {
    closePalette();
  }
});

overlay.addEventListener(
  "click",
  (e) => {
    if (e.target === overlay) {
      closePalette();
    }
  }
);

input.addEventListener(
  "input",
  () => {

    selectedIndex = 0;

    renderCommands(
      input.value
    );
  }
);


input.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "ArrowDown") {

      e.preventDefault();

      selectedIndex =
        Math.min(
          selectedIndex + 1,
          filteredCommands.length - 1
        );

      renderCommands(
        input.value
      );
    }

    if (e.key === "ArrowUp") {

      e.preventDefault();

      selectedIndex =
        Math.max(
          selectedIndex - 1,
          0
        );

      renderCommands(
        input.value
      );
    }

    if (e.key === "Enter") {

      e.preventDefault();

      if (
        filteredCommands[
          selectedIndex
        ]
      ) {
        runCommand(
          filteredCommands[
            selectedIndex
          ].name
        );
      }
    }
  }
);

results.addEventListener(
  "click",
  (e) => {

    const button =
      e.target.closest(
        ".command-item"
      );

    if (!button) return;

    runCommand(
      button.dataset.command
    );
  }
);

document
  .getElementById("open-command-palette")
  ?.addEventListener(
    "click",
    openPalette
  );