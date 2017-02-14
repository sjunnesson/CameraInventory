function addEquipment(brand, model, description, imageURL, cat) {
    const record = deepClient.record.getRecord('equipment/' + deepClient.getUid());

    record.set({
        brand: brand,
        model: model,
        description: description,
        owner: "unknown",
        image: imageURL,
        category: cat,
        id: deepClient.getUid()
    });
    list.addEntry(record.name);
}

function refreshAllEquipment() {
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg", "lens");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg", "lens");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg", "lens");
    addEquipment("Canon", "EF 24-70mm f/2.8L II USM", "Good allround lens that covers a wide range of situation. High quality build and a jack of all trades", "canon24-70.jpg", "lens");
    addEquipment("Canon", "70-200 f/4", "Tele zoom to get those birds far far away", "canon_70-200_f4.jpg", "lens");
    addEquipment("Canon", "5D Mark iii", "Workhorse for both video and photo", "canon5diii.jpg", "camera");
    addEquipment("Canon", "5D Mark ii", "Workhorse for both video and photo. Getting a bit old now. Get it's updated sibbling if you can", "canon5dii.jpg", "camera");
    addEquipment("Canon", "5D SR", "Extra high resolution, primarily still photo such as landscape and studio", "canon5dsr.jpg", "camera");
    addEquipment("Canon", "6D", "Smaller and more nimble full frame, GPS and wifi built in", "canon6d.jpg", "camera");
    addEquipment("Canon", "6D", "Smaller and more nimble full frame, GPS and wifi built in", "canon6d.jpg", "camera");
    addEquipment("Polaroid", "Z2300", "Polaroid printer built-in. Fun camera but do not expect stellar image quality", "polaroidz2300.jpg", "specialCamera");
    addEquipment("Ricoh", "Theta S", "360 degrees camera", "ricoh_theta_s.jpg", "specialCamera");
    addEquipment("GoPro", "Hero 3+", "Action camera which is easy to mount to anything", "hero3.jpg", "specialCamera");
    addEquipment("GoPro", "Hero 2", "Action camera which is easy to mount to anything, older version", "hero2.jpg", "specialCamera");
    addEquipment("GoPro", "Hero 2", "Action camera which is easy to mount to anything, older version", "hero2.jpg", "specialCamera");
    addEquipment("Brinno", "Garden Watch camera", "Timelapse camera", "brinno_garden.jpg", "specialCamera");
    addEquipment("Sigma", "35mm f/1.4", "Fixed lens good for capturing a scene or when darker", "sigma_35.jpg", "lens");
    addEquipment("Metz", "48 AF-1", "On camera flash", "metz_48.jpg", "accessory");
    addEquipment("Proxistar", "PS-MF-48W", "Studio flash", "proxistar.jpg", "studio");
    addEquipment("Esprit", "GM 125", "Studio flash", "espritgm125.jpg", "studio");
    addEquipment("Canon", "HF20", "Handheld video camera, good to record more then 30min videos", "canon_hf20.jpg", "videoCamera");
}

function updateData(record) {
    if (record.get("model") == "EF 24-70mm f/2.8L II USM") {
        record.set("image", "canon24-70.jpg");
    }
}

function setRFID(record, ID) {
    record.set("rfid", ID);
}





