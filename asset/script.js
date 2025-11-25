// thème jour et nuit
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
// commande whatsapp
function oderWhatsApp(modelName) {
    const phoneNumber = '22946617514'; // Remplacez par le numéro de téléphone souhaité
    const message = `Bonjour, je souhaite commander le modèle : ${modelName}`;
    const url = `https://wa.me/${22946617514}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}