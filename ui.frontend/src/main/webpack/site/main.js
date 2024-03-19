(() => {
  function submitContactUsForm() {
    const username = document.getElementById("wknd-contact-us-form-username").value;
    const time = Date.now();
    const myRequest = new Request("/us/en/about-us.html?username=" + username + "&time=" + time);

    fetch(myRequest)
        .then((response) => {
            if (!response.ok) {
                console.log(response);
                document.getElementById("cmp-contactus-error").innerHTML = "Error: " + response.status;
            } else {
                console.log(response.status);
                window.location.href = "/us/en/about-us.html?username=" + username + "&time=" + time;
            }

            return response.blob();
        });
    }

    console.log("loaded");
    document.getElementById("wknd-contact-us-form-submit").onclick = submitContactUsForm;
})();

// Stylesheets
import './main.scss';

// Typescript/Javascript
import './util.js';
import './scroll-indicator';
import '../components/languagenavigation/languagenavigation.js';
import '../components/layout-container/modal.js';
import '../components/navigation/navigation.js';
import '../components/form/sign-in-buttons/sign-in-buttons.js';
import '../components/form/sign-in-form/sign-in-form.js';
import '../components/contentfragment/js/contributor.js';
// import '../components/contactus/js/contactus.js';
