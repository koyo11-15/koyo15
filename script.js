const appOrder = [
  "camera",
  "gallery",
  "memo",
  "instagram",
  "twitter",
  "calendar",
  "csmi",
  "eter"
];

const dockApps = ["phone", "message", "music"];

const appInfo = {
  camera: { name: "카메라", icon: "◉", className: "camera" },
  gallery: { name: "갤러리", icon: "▣", className: "gallery" },
  memo: { name: "메모", icon: "✎", className: "memo" },
  instagram: { name: "인스타그램", icon: "◎", className: "instagram" },
  twitter: { name: "트위터", icon: "✦", className: "twitter" },
  calendar: { name: "캘린더", icon: "◫", className: "calendar" },
  csmi: { name: "씨미", icon: "☆", className: "csmi" },
  eter: { name: "닥지지", icon: "⚑", className: "eter" },
  phone: { name: "전화", icon: "☎", className: "" },
  message: { name: "문자", icon: "✉", className: "" },
  music: { name: "애플뮤직", icon: "♪", className: "" }
};

const lockScreen = document.getElementById("lockScreen");
const homeScreen = document.getElementById("homeScreen");
const appSheet = document.getElementById("appSheet");
const sheetTitle = document.getElementById("sheetTitle");
const sheetContent = document.getElementById("sheetContent");
const appGrid = document.getElementById("appGrid");
const closeAppBtn = document.getElementById("closeApp");

const lockTime = document.getElementById("lockTime");
const lockClock = document.getElementById("lockClock");
const statusTime = document.getElementById("statusTime");
const lockDate = document.getElementById("lockDate");

let password = [];
const correctPass = ["1", "1", "1", "5"];

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  lockTime.textContent = timeString;
  lockClock.textContent = timeString;
  statusTime.textContent = timeString;

  const dayNames = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = dayNames[now.getDay()];

  lockDate.textContent = `${month}월 ${date}일 ${day}`;
}

function renderDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < password.length);
  });
}

function unlockDevice() {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}

function handleDigitClick(value) {
  if (password.length >= 4) return;
  password.push(value);
  renderDots();

  if (password.length === 4) {
    const pass = password.join("");
    if (pass === correctPass.join("")) {
      setTimeout(unlockDevice, 220);
    } else {
      password = [];
      renderDots();
      alert("비밀번호가 올바르지 않습니다.");
    }
  }
}

document.querySelectorAll(".digit").forEach(button => {
  button.addEventListener("click", () => {
    const digit = button.dataset.digit;
    const action = button.dataset.action;

    if (digit) handleDigitClick(digit);
    if (action === "delete") {
      password.pop();
      renderDots();
    }
    if (action === "unlock") {
      if (password.join("") === correctPass.join("")) {
        unlockDevice();
      } else {
        password = [];
        renderDots();
        alert("비밀번호가 올바르지 않습니다.");
      }
    }
  });
});

document.getElementById("unlockSwipe").addEventListener("click", () => {
  if (password.length === 4 && password.join("") === correctPass.join("")) {
    unlockDevice();
  } else {
    password = [];
    renderDots();
    alert("비밀번호를 입력해 주세요.");
  }
});

function renderApps() {
  appGrid.innerHTML = "";

  appOrder.forEach(key => {
    const config = appInfo[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app";
    btn.dataset.app = key;

    const icon = document.createElement("div");
    icon.className = `app-icon ${config.className}`;
    icon.textContent = config.icon;

    const name = document.createElement("div");
    name.className = "app-name";
    name.textContent = config.name;

    btn.appendChild(icon);
    btn.appendChild(name);
    btn.addEventListener("click", () => openApp(key));
    appGrid.appendChild(btn);
  });

  document.querySelectorAll(".dock-app").forEach(btn => {
    btn.addEventListener("click", () => openApp(btn.dataset.app));
  });
}

function openApp(appKey) {
  const app = appContent[appKey];
  if (!app) return;

  appSheet.classList.remove("hidden");
  homeScreen.classList.add("hidden");

  sheetTitle.textContent = app.title;
  sheetContent.innerHTML = app.content;

  if (app.kind === "gallery") {
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        const title = item.dataset.title;
        const desc = item.dataset.desc;
        alert(`${title}\n${desc}`);
      });
    });
  }

  if (app.kind === "notes") {
    const textarea = sheetContent.querySelector("textarea");
    const saveBtn = sheetContent.querySelectorAll(".small-btn")[0];
    const resetBtn = sheetContent.querySelectorAll(".small-btn")[1];

    saveBtn.addEventListener("click", () => {
      alert("메모가 저장되었습니다.");
    });

    resetBtn.addEventListener("click", () => {
      textarea.value = "기록은 생각을 정리해주고, 시간이 지나도 다시 돌아갈 수 있는 길이 된다.";
    });
  }
}

document.getElementById("closeApp").addEventListener("click", () => {
  appSheet.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

updateTime();
setInterval(updateTime, 1000 * 30);

renderApps();

document.addEventListener("touchstart", (e) => {
  if (lockScreen.classList.contains("hidden")) return;
  // 스와이프 잠금 해제용
}, { passive: true });

renderDots();
