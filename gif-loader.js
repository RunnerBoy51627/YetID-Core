const gifs = [
    "./gifs/1.gif",
    "./gifs/2.gif",
    "./gifs/3.gif"
];

// Pick random GIF on load
const img = document.getElementById("welcome-gif");
img.src = gifs[Math.floor(Math.random() * gifs.length)];

img.onerror = () => {
    img.alt = "❌ GIF failed — check filenames";
    img.style.border = "2px solid red";
    console.log("GIF NOT FOUND: Check /gifs/ folder name & file names.");
};
