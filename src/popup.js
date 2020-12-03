import "./popup.css";

const enableDom = document.getElementById("enable");
const timeoutDom = document.getElementById("timeout");
const click_countDom = document.getElementById("click_count");

chrome.storage.sync.get(
  { enable: true, timeout: 1000, click_count: 3 },
  function (config) {
    const { enable, timeout, click_count } = config;
    enableDom.checked = enable;
    timeoutDom.value = timeout;
    click_countDom.value = click_count;
  }
);

enableDom.onchange = (e) => {
  chrome.storage.sync.set({ enable: e.target.checked });
};

timeoutDom.onchange = (e) => {
  chrome.storage.sync.set({ timeout: e.target.value || 500 });
};
click_countDom.onchange = (e) => {
  chrome.storage.sync.set({ click_count: e.target.value || 2 });
};
