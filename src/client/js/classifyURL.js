// validate form data, post to /api/classify, update page elements

function classifyURL() {
  
  function validURL(url) {
    const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    return REGEX_URL.test(url);
  };

  async function fetchClassifyAPI(url) {
    const endpoint = "/api/classify";
    const postData = JSON.stringify({url: url});
    try {
      const response = await fetch(endpoint, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: postData // body data type must match "Content-Type" header
      })
      return response;
    } catch (err) {
      console.log("Error: " + err);
    };
  };

  function updateResultsView(classifyResponse) {
    const resultsDiv = document.getElementById("results");
    const docFragment = document.createDocumentFragment();
    for (let key in classifyResponse) {
      const h2 = document.createElement("h2");
      h2.innerText = key;
      docFragment.appendChild(h2);
      const p = document.createElement("p");
      p.innerText = classifyResponse[key];
      docFragment.appendChild(p);
    };
    resultsDiv.appendChild(docFragment);
  };

  async function classifyURLHandler(event) {
    try {
      const formURL = document.getElementById("url").value;
      if (validURL(formURL)) {
        const response = await fetchClassifyAPI(formURL);
        const body = await response.json();
        console.log(body);
        updateResultsView(body);
      };

    } catch (err) {
      console.log(err);
    }
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
