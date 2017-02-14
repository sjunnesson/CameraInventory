var filterCategories = ["camera", "lens", "videoCamera", "specialCamera", "accessory", "studio"];
var filterCategoriesNice = ["Camera", "Lens", "Video camera", "Special camera", "Accessory", "Studio"];

// Connect to deepstreamHub
var deepClient = deepstream('wss://154.deepstreamhub.com?apiKey=7e9f4dc2-3ea1-4e76-81d3-f6eb9f8cc443');
// Login
deepClient.on('error', () => {
});
deepClient.login({}, (success) => {
    console.log("Log in ", success);
// refreshAllEquipment();
});
const list = deepClient.record.getList('equipment');

// list.delete();


list.whenReady((list) => {
    var entries = list.getEntries();

    for (var i = 0; i < entries.length; i++) {
        const record = deepClient.record.getRecord(entries[i]);

        record.whenReady(() => {
            var imgURL = record.get("image");
            if (imgURL == undefined) {
                imgURL = "placeholder.png";
            }
            var columWrapper = $("<div></div>").addClass("col-sm-3");
            $(columWrapper).data("category", record.get("category"));


            var card = $("<div></div>").addClass("card card-custom");

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

            // if (record.get("owner") != "unknown") {
            var loaner = $('<div></div>', {

                class: "card-foot"
            });
            var loanerContent = $('<small></small>', {
                text: "Loaned to: " + record.get("owner"),
                class: "text-muted"
            });
            loaner.append(loanerContent);

            // loaner.addClass("status-unavailable");
            $(cardBlock).append(loaner);
            // }

            $(card).append(cardBlock);
            $(columWrapper).append(card);

            $("#cardWrapper").append(columWrapper);
            record.subscribe(statusChanged);

        });
    }
// const record = deepClient.record.getRecord(entries[0]);
// record.set("rfid", 54321);
// console.log(record);
});

function statusChanged(status) {
    console.log(status);
// if()
}


function createFilterButtons() {
    for (var i = filterCategories.length - 1; i >= 0; i--) {
        var button = $("<button></button>").addClass("btn btn-info btn-sm ds_btn-custom-filter");
        button.text(filterCategoriesNice[i]);
        button.data("id", filterCategories[i]);
        $("#filterSection").prepend(button);
    }
    var button = $("<button></button>").addClass("btn btn-info btn-sm ds_btn-custom-filter");
    button.text("All");
    button.data("id", "all");
    $("#filterSection").prepend(button);
}
createFilterButtons();

$("button").click(function() {
    filterOnCategory($(this).data("id"));
});

function filterOnCategory(category) {
    $('#cardWrapper').children().each(function() {
        if (category != "all") {
            if ($(this).data("category") != category) {
                $(this).hide();
            } else {
                $(this).show();
            }
        } else {
            $(this).show();
        }
    });
}
