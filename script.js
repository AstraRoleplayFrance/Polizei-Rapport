async function sendPoliceToDiscord() {
  const webhookURL = "https://discord.com/api/webhooks/1300819229250945044/E6CNKvvN8bqGjB3-S2aVDgafe_fxQa-1CIjls8kxcbJIo7E9pwnxK4c0Gc7dURdrc8K9";

  const agent = document.getElementById("agent_police").value;
  const badge = document.getElementById("badge_police").value;
  const lieu = document.getElementById("lieu_police").value;
  const date = document.getElementById("date_police").value;
  const telephone = document.getElementById("telephone_police").value;
  const natureIncident = document.getElementById("nature_incident").value;
  const description = document.getElementById("description_police").value;
  const nombreSuspects = document.getElementById("nombre_suspects").value;
  const infosSuspects = document.getElementById("infos_suspects").value;

  if (!agent || !badge || !lieu || !date || !telephone || !natureIncident || !description || !nombreSuspects || !infosSuspects) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  const data = {
    content: `📝 **Rapport Intervention Police** - Astra Roleplay V2 📝\n\n` +
             `👮 **Agent:** ${agent}\n` +
             `🆔 **Badge:** ${badge}\n` +
             `📍 **Lieu:** ${lieu}\n` +
             `📅 **Date:** ${date}\n` +
             `📞 **Téléphone:** ${telephone}\n` +
             `🔍 **Nature de l'Incident:** ${natureIncident}\n` +
             `📋 **Description:** ${description}\n\n` +
             `🚨 **Nombre de Suspects:** ${nombreSuspects}\n` +
             `📑 **Informations des Suspects:** ${infosSuspects}\n\n` +
             `✅ **Rapport envoyé avec succès !**`
  };

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Rapport envoyé avec succès !");
      document.getElementById("policeForm").reset();
    } else {
      alert("Erreur lors de l'envoi du rapport.");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue.");
  }
}
