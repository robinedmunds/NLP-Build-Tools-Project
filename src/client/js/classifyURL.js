// validate form data, post to /api/classify, update page elements

function classifyURL() {
  
  function validURL(url) {
    const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    return REGEX_URL.test(url);
  };

  const classifyURLHandler = (event) => {
    const formURL = document.getElementById("url").value;
    if (validURL(formURL)) {
      // do stuff
      console.log(formURL)
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
