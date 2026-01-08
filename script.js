document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const plate = document.getElementById("immatriculation").value.trim();
  const type = document.querySelector("select").value;

  if (!plate || !type) {
    alert(" Remplis tous les champs !");
    return;
  }

  const exists = data.vehicles.some(v => v.plateNumber === plate && v.exitTime === null);
  if (exists) {
    alert(" Ce véhicule est déjà dans le parking !");
    return;
  }

  const freeSlot = data.parkingSlots.find(slot => !slot.occupied);
  if (!freeSlot) {
    alert("Parking complet !");
    return;
  }

  const newVehicle = {
    id: data.vehicles.length + 1,
    plateNumber: plate,
    type: type,
    entryTime: new Date().toISOString(),
    exitTime: null,
    slotNumber: freeSlot.number
  };

  data.vehicles.push(newVehicle);
  freeSlot.occupied = true;

  alert(` Véhicule ajouté à la place ${freeSlot.number}`);
});
