document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const plate = document.getElementById("immatriculation").value.trim();
  const type = document.querySelector("select").value;

  if (!plate || !type) {
    alert(" Remplis tous les champs !");
    return;
  }

  const newVehicle = {
    plateNumber: plate,
    type: type,
    entryTime: new Date().toISOString(),
    exitTime: null,
    slotNumber: 1,
  };

  fetch("http://localhost:3000/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVehicle),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(" Véhicule ajouté :", data);
      alert(`Véhicule ${data.plateNumber} ajouté avec succès !`);

      document.getElementById("immatriculation").value = "";
      document.querySelector("select").value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout :", error);
      alert(" Une erreur est survenue !");
    });
});
