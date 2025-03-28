const btn = document.querySelector("button")
const input = document.querySelector("h2")
const h3 = document.querySelector("h3")


btn.addEventListener("click", () => {
    {
        fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            input.textContent = `"${data.quote}"`; 
            h3.textContent = `- ${data.author}`;
        })
        .catch(error => console.log(error))
    }
});


function ColorChange(){
    const colors = [
        "#E6A57D",
        "#A0C4A8", 
        "#81A4CD",
        "#EEC170", 
        "#D59BF6",
        "#C08497", 
        "#8E9AAF", 
        "#A2B29F",
        "#C3A29E", 
        "#748CAB",
    ];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    
    document.body.style.backgroundColor = randomColor;
    input.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
    h3.style.color = randomColor;
}