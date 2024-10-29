function analyzePhrase() {
    const phrase = document.getElementById('phraseInput').value;

    if (phrase[phrase.length - 1] !== '.') {
        alert("La phrase doit se terminer par un point.");
        return;
    }

    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let isWord = false;
    const vowels = "aeiouyAEIOUY";

    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i];
        length++;

        if (char === ' ' || char === '.') {
            if (isWord) {
                wordCount++;
                isWord = false;
            }
        } else {
            isWord = true;
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }

    document.getElementById('length').textContent = "Longueur de la phrase : " + length;
    document.getElementById('wordCount').textContent = "Nombre de mots : " + wordCount;
    document.getElementById('vowelCount').textContent = "Nombre de voyelles : " + vowelCount;
}
