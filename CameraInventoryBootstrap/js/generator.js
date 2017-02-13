// Connect to deepstreamHub
var deepClient = deepstream('wss://154.deepstreamhub.com?apiKey=7e9f4dc2-3ea1-4e76-81d3-f6eb9f8cc443');
// Login
deepClient.on('error', () => {});
deepClient.login({}, (success) => {
    console.log("Log in ", success);
    // refreshAllEquipment();
});
const list = deepClient.record.getList('equipment');

// list.delete();


list.whenReady((list) => {
    var entries = list.getEntries();
    // console.log(entries);


    for (var i = 0; i < entries.length; i++) {
        const record = deepClient.record.getRecord(entries[i]);

        record.whenReady(() => {
            var imgURL = record.get("image");
            if (imgURL == undefined) {
                imgURL = "placeholder.png";
            }
            var columWrapper = $("<div></div>").addClass("col-sm-3");

            var card = $("<div></div>").addClass("card");

            $(card).prepend($('<img>', {
                id: 'theImg',
                src: '../images/' + imgURL,
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


            if (record.get("owner") != "unknown") {
                var loaner = $('<p>', {
                    text: "Loaned to: " + record.get("owner"),
                    class: "card-loaner"
                });
                loaner.addClass("status-unavailable");
                $(cardBlock).append(loaner);
            }


            $(card).append(cardBlock);
            $(columWrapper).append(card);

            $("#cardWrapper").append(columWrapper);
        });
    }
    const record = deepClient.record.getRecord(entries[0]);
    record.set("rfid", 54321);
    console.log(record);

});
