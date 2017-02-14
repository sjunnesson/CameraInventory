$("#triggerButton").click(function() {
    record.set("owner", "Test" + Math.random());

});

var deepClient = deepstream('wss://154.deepstreamhub.com?apiKey=7e9f4dc2-3ea1-4e76-81d3-f6eb9f8cc443');
// Login
deepClient.on('error', () => {
});
deepClient.login({}, (success) => {
    console.log("Log in ", success);
});
const list = deepClient.record.getList('equipment');
var record;


list.whenReady((list) => {
    var entries = list.getEntries();
    record = deepClient.record.getRecord(entries[0]);

});