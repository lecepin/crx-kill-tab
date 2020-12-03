window.addEventListener("click", (e) => {
  chrome.storage.sync.get(
    { enable: true, timeout: 1000, click_count: 3 },
    function (config) {
      const { enable, timeout, click_count } = config;

      if (!enable) {
        return;
      }

      window.__kill_tab_c_count = (window.__kill_tab_c_count || 0) + 1;
      if (window.__kill_tab_c_count >= click_count) {
        // window.close();
        chrome.runtime.sendMessage({ close: true });
      }

      setTimeout(() => {
        window.__kill_tab_c_count = 0;
      }, timeout);
    }
  );
});
