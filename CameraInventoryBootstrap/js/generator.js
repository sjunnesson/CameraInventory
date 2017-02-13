// Connect to deepstreamHub
var deepClient = deepstream('wss://154.deepstreamhub.com?apiKey=7e9f4dc2-3ea1-4e76-81d3-f6eb9f8cc443');
// Login
deepClient.on('error', () => {
});
deepClient.login({}, (success) => {
    console.log("Log in ", success);
// addEquipment("Canon", "6D", "Full frame camera, great for photo");
});
const list = deepClient.record.getList('equipment');

// list.removeEntry("camera1", 0)


// const recordName = `user/${deepClient.getUid()}` // "user/iqaphzxy-2o1pnsvcnbo"
// console.log(recordName);


list.whenReady((list) => {
    // interact with the list
    var entries = list.getEntries();
    console.log(entries);


    for (var i = 0; i < entries.length; i++) {
        const record = deepClient.record.getRecord(entries[i]);

        record.whenReady(() => {
            console.log(record.get("brand"));

            var columWrapper = $("<div></div>").addClass("col-sm-3");

            var card = $("<div></div>").addClass("card");
            $(card).prepend($('<img>', {
                id: 'theImg',
                src: '../images/Canon_5D_Mark_III.jpg',
                class: "card-img-top"
            }));
            var cardBlock = $("<div></div>").addClass("card-block");

            $(cardBlock).append($('<h4>', {
                text: record.get("brand") + " " + record.get("model"),
                class: "card-title"
            }));

            $(cardBlock).append($('<p>', {
                text: record.get("description"),
                class: "card-text"
            }));

            $(cardBlock).append($('<p>', {
                text: "Loaned to: " + record.get("owner"),
                class: "card-text"
            }));

            $(card).append(cardBlock);
            $(columWrapper).append(card);

            $("#cardWrapper").append(columWrapper);
        });
    }
});





// function createCards() {



//     for (var i = 10 - 1; i >= 0; i--) {
//         var columWrapper = $("<div></div>").addClass("col-sm-3");

//         var card = $("<div></div>").addClass("card");
//         $(card).prepend($('<img>', {
//             id: 'theImg',
//             src: '../images/Canon_5D_Mark_III.jpg',
//             class: "card-img-top"
//         }));
//         var cardBlock = $("<div></div>").addClass("card-block");

//         $(cardBlock).append($('<h4>', {
//             text: 'Some text',
//             class: "card-title"
//         }));

//         $(cardBlock).append($('<p>', {
//             text: 'A 5D is a great camera for filming and taking high quality photos with',
//             class: "card-text"
//         }));

//         $(card).append(cardBlock);
//         $(columWrapper).append(card);

//         $("#cardWrapper").append(columWrapper);
//     }
// }

