function addEquipment(brand, model, description, imageURL) {
    const record = deepClient.record.getRecord('equipment/' + deepClient.getUid());

    record.set({
        brand: brand,
        model: model,
        description: description,
        owner: "unknown",
        image: imageURL
    });
    list.addEntry(record.name);
}

function refreshAllEquipment() {
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg");
    addEquipment("Canon", "5D Mark iii", "Workhorse for both video and photo", "canon5diii.jpg");
    addEquipment("Canon", "5D Mark ii", "Workhorse for both video and photo. Getting a bit old now. Get it's updated sibbling if you can", "canon5dii.jpg");
    addEquipment("Canon", "5D SR", "Extra high resolution, primarily still photo such as landscape and studio", "canon5dsr.jpg");
    addEquipment("Canon", "6D", "Smaller and more nimble full frame, GPS and wifi built in", "canon6d.jpg");
    addEquipment("Canon", "6D", "Smaller and more nimble full frame, GPS and wifi built in", "canon6d.jpg");
    addEquipment("Polaroid", "Z2300", "Polaroid printer built-in. Fun camera but do not expect stellar image quality", "polaroidz2300.jpg");
    addEquipment("Ricoh", "Theta S", "360 degrees camera", "ricoh_theta_s.jpg");
    addEquipment("GoPro", "Hero 3+", "Action camera which is easy to mount to anything", "hero3.jpg");
    addEquipment("GoPro", "Hero 2", "Action camera which is easy to mount to anything, older version", "hero2.jpg");
    addEquipment("GoPro", "Hero 2", "Action camera which is easy to mount to anything, older version", "hero2.jpg");
    addEquipment("Brinno", "Garden Watch camera", "Timelapse camera", "brinno_garden.jpg");
    addEquipment("Sigma", "35mm f/1.4", "Fixed lens good for capturing a scene or when darker", "sigma_35.jpg");
}

function updateData(record) {
    if (record.get("model") == "EF 24-70mm f/2.8L II USM") {
        record.set("image", "canon24-70.jpg");
    }

}
