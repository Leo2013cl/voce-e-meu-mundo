const elogios = [
    "maravilhosa! 💖", "linda! 😍", "inteligente! 🧠", "carinhosa! 💕", "encantadora! ✨",
    "radiante como um girassol! 🌻", "a melhor pessoa do mundo! 🌎", "dona do meu coração! ❤️",
    "simplesmente incrível! 🌟", "a mulher mais especial da minha vida! 🥰",
    "o amor da minha vida! 💘", "minha alegria diária! 😊", "única e insubstituível! 💫",
    "minha inspiração! 🌈", "minha paz! ☀️", "perfeita em todos os sentidos! 💎",
    "minha melhor escolha! 💞", "minha razão de sorrir! 😁", "minha princesa! 👑",
    "minha alma gêmea! 🔥", "minha estrela guia! 🌠", "meu porto seguro! ⚓",
    "minha luz nos dias escuros! 💡", "a dona dos meus melhores momentos! 📸",
    "minha rainha! 👸", "o meu sonho realizado! ✨", "a mulher mais especial! 💐",
    "minha felicidade! 🎈", "o meu mundo! 🌍", "a melhor parte da minha vida! 💗",
    "meu coração bate por você! 💓", "minha força! 💪", "meu anjo! 😇", "minha musa inspiradora! 🎨",
    "minha aventura favorita! 🌎", "a poesia da minha vida! 📖", "o sol do meu dia! ☀️",
    "o meu para sempre! ⏳", "minha joia mais rara! 💍", "a batida do meu coração! 🎵",
    "minha melhor história de amor! 📖❤️", "o brilho dos meus olhos! ✨", "minha outra metade! 🧩",
    "minha felicidade sem fim! 🚀", "minha razão de existir! 🌱", "minha companheira perfeita! 💕",
    "a menina dos meus sonhos! 🌙", "meu amor infinito! ♾️", "o abraço mais gostoso! 🤗",
    "o melhor presente da minha vida! 🎁", "o doce da minha vida! 🍬", "meu universo inteiro! 🌌",
    "a cor no meu mundo cinza! 🎨", "a música da minha vida! 🎶", "minha ternura infinita! 🥰",
    "a melhor namorada do mundo! 🌟", "a melhor decisão que tomei! 🤞", "o meu lar! 🏡",
    "o amor que sempre sonhei! 🌈", "minha cura nos dias difíceis! 🛡️", "minha magia! ✨",
    "minha princesa encantada! 🏰", "meu raio de sol! ☀️", "a minha alegria! 🎊",
    "minha brisa suave! 🍃", "minha estrela cadente! 🌠", "o sorriso mais lindo do mundo! 😃",
    "meu doce refúgio! 🏕️", "a flor mais bela do jardim! 🌷", "a razão do meu coração acelerar! 💗",
    "minha melhor escolha da vida! 💞", "o abraço mais aconchegante! 🤗", "meu doce amor! 🍯",
    "meu eterno encanto! ✨", "a dona do meu coração! 💝", "a mulher mais perfeita! 👑",
    "minha fada encantada! 🧚", "a paz do meu coração! 🕊️", "minha paixão eterna! 🔥",
    "a alegria da minha vida! 🎉", "meu presente de Deus! 🎁", "minha única e insubstituível! 💖",
    "o amor mais lindo que existe! 🥰", "meu doce anjo! 😇", "meu pedacinho do céu! ☁️",
    "minha felicidade em forma de gente! 😍", "o meu destino! 💞", "a batida do meu coração! 💓"
];

function exibirElogio() {
    const indice = Math.floor(Math.random() * elogios.length);
    document.getElementById("elogio").innerText = elogios[indice];
}

window.onload = exibirElogio;
