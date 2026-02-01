// thème jour et nuit
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
// commande whatsapp
function orderWhatsApp(modelName) {
    const phoneNumber = '22946617514'; // Remplacez par le numéro de téléphone souhaité
    const message = `Bonjour, je souhaite commander le modèle : ${modelName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
