
function addEquipment(brand, model, description) {
    const record = deepClient.record.getRecord('equipment/' + deepClient.getUid());

    record.set({
        brand: brand,
        model: model,
        description: description,
        owner: "unknown"
    });
    list.addEntry(record.name);
}
