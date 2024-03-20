// (() => {
//   function submitContactUsForm() {
//     const username = document.getElementById("wknd-contact-us-form-username").value;
//     const time = Date.now();
//     const myRequest = new Request("/us/en/about-us.html?username=" + username + "&time=" + time);

//     fetch(myRequest)
//         .then((response) => {
//             if (!response.ok) {
//                 console.log(response);
//                 document.getElementById("cmp-contactus-error").innerHTML = "Error: " + response.status;
//             } else {
//                 console.log(response.status);
//                 window.location.href = "/us/en/about-us.html?username=" + username + "&time=" + time;
//             }

//             return response.blob();
//         });
//     }

//     console.log("loaded");
//     document.getElementById("wknd-contact-us-form-submit").onclick = submitContactUsForm;
// })();

import jQuery from "jquery";

jQuery(function($) {
    "use strict";

    $( "#wknd-contact-us-form-submit" ).on( "click", function( event ) {
        event.preventDefault();
        const username = $( "#wknd-contact-us-form-username" ).val();
        const time = Date.now();
        $.get( `/us/en/about-us.html?username=${username}&time=${time}`, function(data) {
            console.log(data);
            window.location.href = `/us/en/about-us.html?username=${username}&time=${time}`;
          })
        .fail(function(err) {
            console.log(err);
            $( "#cmp-contactus-error" ).html(`Error: ${err.status}`);
        });
    });
});

// Stylesheets
import './main.scss';

// Typescript/Javascript
// import './util.js';
// import './scroll-indicator';
// import '../components/languagenavigation/languagenavigation.js';
// import '../components/layout-container/modal.js';
// import '../components/navigation/navigation.js';
// import '../components/form/sign-in-buttons/sign-in-buttons.js';
// import '../components/form/sign-in-form/sign-in-form.js';
// import '../components/contentfragment/js/contributor.js';
// import '../components/contactus/js/contactus.js';
