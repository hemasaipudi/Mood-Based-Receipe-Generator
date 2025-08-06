
const recipes = {
    happy: [
        "Strawberry Cheesecake",
        "Chocolate Chip Cookies",
        "Mango Smoothie"
    ],
    sad: [
        "Chicken Noodle Soup",
        "Mac & Cheese",
        "Hot Chocolate"
    ],
    energetic: [
        "Protein Smoothie",
        "Quinoa Salad",
        "Avocado Toast"
    ],
    relaxed: [
        "Herbal Tea",
        "Cucumber Sandwiches",
        "Vanilla Pudding"
   
const buttons = document.querySelectorAll(".mood-buttons button");
const recipeDisplay = document.querySelector(".recipe-display");

// Function to display recipes
function showRecipes(mood) {
    recipeDisplay.innerHTML = ""; // Clear previous recipes

    if (recipes[mood]) {
        recipes[mood].forEach(recipe => {
            const p = document.createElement("p");
            p.textContent = recipe;
            recipeDisplay.appendChild(p);
        });
    } else {
        recipeDisplay.textContent = "No recipes found for this mood.";
    }
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.getAttribute("data-mood");
        showRecipes(mood);
    });
});
