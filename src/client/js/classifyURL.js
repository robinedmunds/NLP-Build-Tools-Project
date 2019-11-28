// validate form data, post to /api/classify, update page elements

function classifyURL() {
  
  function validateURL(url) {
    const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    if (REGEX_URL.test(url)) {
      return true;
    } else {
      return false;
    };
  };
  
  const classifyURLHandler = (event) => {
    console.log(event);
    event.preventDefault();
  };
  
  function addClassifyURLEvent() {
    const form = document.getElementById("classify-form");
    form.addEventListener("submit", classifyURLHandler);
  };
  
  addClassifyURLEvent();
  
}

export { classifyURL }