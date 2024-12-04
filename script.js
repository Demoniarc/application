async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
        try {
            // Demande à l'utilisateur de se connecter avec Metamask
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const address = accounts[0]; // Récupère la première adresse
            document.getElementById("wallet-address").innerText = `Adresse: ${address}`;
        } catch (err) {
            console.error("Erreur lors de la connexion:", err);
            alert("Une erreur est survenue lors de la connexion.");
        }
    } else {
        alert("Metamask n'est pas installé. Veuillez l'installer pour continuer.");
    }
}

// Ajoute l'événement de clic pour connecter le wallet
document.getElementById("connect-wallet").addEventListener("click", connectWallet);
