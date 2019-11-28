// validate form data, post to /api/classify, update page elements

function classifyURL() {
  
  function validURL(url) {
    const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    return REGEX_URL.test(url);
  };

  async function fetchClassifyAPI(url) {
    const endpoint = "/api/classify";
    // const data = {url: url};
    try {
      const response = await fetch(endpoint, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          // 'Content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: "url=" + url // body data type must match "Content-Type" header
      })
      return response;
    } catch (err) {
      console.log("Error: " + err);
    };
  };

  function classifyURLHandler(event) {
    const formURL = document.getElementById("url").value;
    if (validURL(formURL)) {
      fetchClassifyAPI(formURL);
      console.log(formURL);
    };
  };
  
  function addClassifyURLEvent() {
    const form = document.getElementById("classify-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      classifyURLHandler(event);
    });
  };
  
  addClassifyURLEvent();
  
};

export { classifyURL }
