const container = document.querySelector('.container');
const img = document.querySelector('img');
const text = document.querySelector('.text');
const username = document.querySelector('.username');

const testimonails = [
    {
        name: '- Avi Q',
        color: 'lightyellow',
        image: '../image/1.jpg',
        text: "We've seen amazing results already. Apple saved my business. Apple was worth a fortune to my company."
    },
    {
        name: '- Gabriella P',
        color: 'lightpink',
        image: '../image/2.png',
        text: "We're loving it. I will recommend you to my colleagues. Apple should be nominated for service of the year. Needless to say we are extremely satisfied with the results."
    },
    {
        name: '- Erastus X',
        color: 'lightsteelblue',
        image: '../image/3.png',
        text: "I have gotten at least 50 times the value from apple. Thank you for making it painless, pleasant and most of all hassle free! You won't regret it. I didn't even need training."
    },
];

let i = 0;

change();

function change() {
    const {name, color, image, text} = testimonails[i];
    container.style.background = color;
    img.src = image;
    text.innerHTML = text;
    username.innerHTML = name;

    //Change the testimonial
    i++;

    //Reusing the it again
    if (i == testimonails.length) {
        i = 0;
    }
    setTimeout(() => {
        change();
    }, 5000)
}


