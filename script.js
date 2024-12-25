document.addEventListener("DOMContentLoaded", () => {
    // Elementos HTML
    const menu = document.getElementById("menu");
    const howToPlaySection = document.getElementById("how-to-play-section");
    const gameSection = document.getElementById("game");

    const playButton = document.getElementById("play");
    const howToPlayButton = document.getElementById("how-to-play");
    const exitButton = document.getElementById("exit");
    const backToMenuButtonHtp = document.getElementById("back-to-menu-htp");
    const backToMenuButtonGame = document.getElementById("back-to-menu-game");
    const nextCardButton = document.getElementById("next-card");

    let cards = [];
    const categories = ["ACCION", "CASTIGOS", "EROTICOS", "PARATI", "MINIJUEGOS"];
    
    // Inicializar cartas
    function initializeCards() {
        cards = [];
        categories.forEach(category => {
            for (let i = 1; i <= 20; i++) {
                cards.push(`${category}/${i}.png`);
            }
        });
        cards = cards.sort(() => Math.random() - 0.5); // Barajar las cartas
    }

    // Variables para el contador de cartas
    let cardsShown = 0; // Contador de cartas mostradas
    const totalCardsElement = document.getElementById("total-cards"); // Elemento donde mostrar el total de cartas
    const cardsShownElement = document.getElementById("cards-shown"); // Elemento donde mostrar las cartas mostradas

    // Inicializar las cartas y actualizar el número total de cartas
    initializeCards();
    totalCardsElement.textContent = cards.length;

    // Funciones para cambiar de sección
    const showMenu = () => {
        menu.style.display = "flex"; // Muestra el menú
        howToPlaySection.style.display = "none"; // Oculta la sección de cómo jugar
        gameSection.style.display = "none"; // Oculta la sección de juego
        cardsShown = 0; // Reseteamos el contador de cartas
        cardsShownElement.textContent = cardsShown; // Mostramos que no hay cartas mostradas
    };

    const showHowToPlay = () => {
        menu.style.display = "none"; // Oculta el menú
        howToPlaySection.style.display = "block"; // Muestra la sección de cómo jugar
        gameSection.style.display = "none"; // Oculta la sección de juego
    };

    const showGame = () => {
        menu.style.display = "none"; // Oculta el menú
        howToPlaySection.style.display = "none"; // Oculta la sección de cómo jugar
        gameSection.style.display = "block"; // Muestra la sección de juego
        initializeCards(); // Re-inicializamos las cartas para asegurarnos de que estén bien barajadas
        cardsShown = 0; // Reiniciamos el contador de cartas
        cardsShownElement.textContent = cardsShown; // Mostramos las cartas mostradas desde cero
        showNextCard(); // Mostrar la primera carta
    };

    // Mostrar la siguiente carta
    const showNextCard = () => {
        if (cards.length === 0) {
            alert("Has terminado el juego.");
            showMenu(); // Mostrar el menú después de terminar el juego
            return;
        }

        const nextCard = cards.pop();
        document.getElementById("card-display").innerHTML = `
            <img src="${nextCard}" alt="Carta" class="game-card">
        `;

        // Incrementamos el contador de cartas mostradas
        cardsShown++; 
        cardsShownElement.textContent = cardsShown; // Actualizamos el contador en pantalla
    };

    exitButton.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas salir?")) {
            window.location.href = "https://www.google.com"; // Redirigir a una página de salida o cerrar sesión
        }
    });

    // Eventos del menú
    playButton.addEventListener("click", showGame);
    howToPlayButton.addEventListener("click", showHowToPlay);
    backToMenuButtonHtp.addEventListener("click", showMenu);
    backToMenuButtonGame.addEventListener("click", showMenu);
    nextCardButton.addEventListener("click", showNextCard);

    // Mostrar directamente el menú al cargar la página
    showMenu();
});
