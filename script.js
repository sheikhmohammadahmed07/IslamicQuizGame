const questions = [
    {
        question: "What is the first pillar of Islam?",
        options: ["Tauheed", "Haj", "Zakat", "Roza"],
        answer: "Tauheed"
    },
    {
        question: "How many times do Muslims pray each day?",
        options: ["Three", "Four", "Five", "Six"],
        answer: "Five"
    },
    {
        question: "Which month do Muslims fast during?",
        options: ["Ramadan", "Muharram", "Safar", "Rajab"],
        answer: "Ramadan"
    },
    {
        question: "What is the holy book of Islam called?",
        options: ["Bible", "Torah", "Quran", "Vedas"],
        answer: "Quran"
    },
    {
        question: "Who is the final prophet in Islam?",
        options: ["Moses", "Jesus", "Muhammad", "Abraham"],
        answer: "Muhammad"
    },
    {
        question: "What is the language of the Quran?",
        options: ["English", "Urdu", "Arabic", "Hindi"],
        answer: "Arabic"
    },
    {
        question: "Who is the first prophet in Islam?",
        options: ["Ibrahim", "Adam", "Ishaq", "Nuh"],
        answer: "Adam"
    },
    {
        question: "What is the total number of pillars in Islam?",
        options: ["2", "3", "4", "5"],
        answer: "5"
    },
    {
        question: "What is Abu Bakr ’s full name?",
        options: ["Abdur Rahman ibn Usman", "Usman ibn Abdullah", "Abdullah ibn Usman", "Abdullah ibn Abdur Rahman"],
        answer: "Abdullah ibn Usman"
    },
    {
        question: "What is 'Hijab' refer to?",
        options: ["Islamic dress for men", "Islamic dress for women", "Islamic prayer", "Islamic dietary guidelines"],
        answer: "Islamic dress for women"
    },
    {
        question: "How many Surah are in The Quran?",
        options: ["100", "114", "124", "134"],
        answer: "114"
    },
    {
        question: "What is the name of the First Month in Islamic Calender?",
        options: ["Ramadan", "Muharram", "Safar", "Rajab"],
        answer: "Muharram"
    },
    {
        question: "What is the fifth pillar of Islam??",
        options: ["Tauheed", "Haj", "Zakat", "Roza"],
        answer: "Haj"
    },
    {
        question: "What is the fourth pillar of Islam??",
        options: ["Tauheed", "Haj", "Zakat", "Roza"],
        answer: "Zakat"
    },
    {
        question: "What is the third pillar of Islam??",
        options: ["Tauheed", "Haj", "Zakat", "Roza"],
        answer: "Roza"
    },
    {
        question: "What is the second pillar of Islam??",
        options: ["Namaz", "Haj", "Zakat", "Roza"],
        answer: "Namaz"
    },
    {
        question: "What is the name of the Last Month in Islamic Calender?",
        options: ["Ramadan", "Zil-Qa'ad", "Zil-Haj", "Rajab"],
        answer: "Zil-Haj"
    },
    {
        question: "Which month do Muslims perform Haj?",
        options: ["Zil-Haj", "Zil-Qa'ad", "Shabaan", "Rajab"],
        answer: "Zil-Haj"
    },
    {
        question: "What is the name of the last surah in the Quran?",
        options: ["Al-Fatiha", "Al-Kahf", "Al-Naas", "Al-Yaseen"],
        answer: "Al-Naas"
    },
    {
        question: "What does Zam Zam mean??",
        options: ["Holy water", "Water well", "Stop", "Drink"],
        answer: "Stop"
    },
    {
        question: "Which Prophet is mentioned the most in the Quran by name?",
        options: ["Prophet Muhammad", "Prophet Isa", "Prophet Musa", "Prophet Adam"],
        answer: "Prophet Musa"
    },
    {
        question: "What was the first masjid Prophet Muhammad built?",
        options: ["Masjid Quba", "Masjid an Nabawi", "Masjid al Haram", "Masjid al Aqsa"],
        answer: "Masjid Quba"
    },
    {
        question: "What was the name of the flying animal on which Prophet Muhammad travelled to the Mairaj?",
        options: ["Mikaeel", "Buraaq", "Miraaj", "Suraaq"],
        answer: "Buraaq"
    },
    {
        question: "Which Angel is Hell’s gatekeeper?",
        options: ["Mikaeel", "Jibrael", "Maalik", "Israfeel"],
        answer: "Maalik"
    },
    {
        question: "Which fruit is mentioned in the Quran?",
        options: ["Grapes", "Apples", "Mangoes", "Oranges"],
        answer: "Grapes"
    },
    {
        question: "Which Surah doesn’t begin with the bismallah?",
        options: ["Surah Rahman", "Surah Yasin", "Surah Fatihah", "Surah Tawbah"],
        answer: "Surah Tawbah"
    },
    {
        question: "Which Prophet addressed the ruler King Nimrud?",
        options: ["Prophet Ibrahim", "Prophet Isa", "Prophet Yusuf", "Prophet Lut"],
        answer: "Prophet Ibrahim"
    },
    {
        question: "What is Az-Zaqqum?",
        options: ["Drink for the people of hellfire", "Food for the people of hellfire", "Home for the people of hellfire", "Clothes for the people of hellfire"],
        answer: "Food for the people of hellfire"
    },
    {
        question: "What is the name of Madinah in the Quran?",
        options: ["Bakkah", "Quds", "Marwah", "Yasrab"],
        answer: "Yasrab"
    },
    {
        question: "Which Surah is called The Heart of the Quran?",
        options: ["Ar-Rehman", "Al-Yaseen", "Al-Fatiha", "Al-Yusuf"],
        answer: "Al-Yaseen"
    },
    {
        question: "How many Surahs are named after animals?",
        options: ["3", "4", "5", "6"],
        answer: "6"
    },
    {
        question: "How many Surahs are named after Prophets?",
        options: ["6", "7", "8", "9"],
        answer: "6"
    },
    {
        question: "How many Surahs were revealed in Makkah?",
        options: ["86", "28", "18", "56"],
        answer: "86"
    },
    {
        question: "How many ayaat are there in Quran?",
        options: ["5690", "7006", "6666", "5555"],
        answer: "6666"
    },
    {
        question: "Which angel is known for delivering messages to the prophets?",
        options: ["Mika'il", "Israfil", "Jibril", "Azrael"],
        answer: "Jibril"
    },
    {
        question: "Where do Muslims go for pilgrimage?",
        options: ["Jerusalem", "Medina", "Mecca", "Baghdad"],
        answer: "Mecca"
    },
    {
        question: "What is the holy day of the week for Muslims?",
        options: ["Saturday", "Sunday", "Monday", "Friday"],
        answer: "Friday"
    },
    {
        question: "Who was the first caliph after Prophet Muhammad?",
        options: ["Umar", "Ali", "Abu Bakr", "Usman"],
        answer: "Abu Bakr"
    },
    {
        question: "What is the Arabic term for the migration of Muhammad from Mecca to Medina?",
        options: ["Hijra", "Umrah", "Tawaf", "Sa'i"],
        answer: "Hijra"
    },
    {
        question: "What is the name of the night when the Quran was revealed to Muhammad?",
        options: ["Lailat al-Qadr", "Lailat al-Miraj", "Lailat al-Bara'at", "Lailat al-Isra"],
        answer: "Lailat al-Qadr"
    },
    {
        question: "What is the Arabic word for prayer?",
        options: ["Zakat", "Hajj", "Sawm", "Salat"],
        answer: "Salat"
    },
    {
        question: "Who is considered the father of the prophets?",
        options: ["Isa", "Yusuf", "Ishmael", "Ibrahim"],
        answer: "Ibrahim"
    },
    {
        question: "What is the Islamic term for the permissible actions?",
        options: ["Haram", "Makruh", "Halal", "Mubah"],
        answer: "Halal"
    },
    {
        question: "What is the Arabic word for fasting?",
        options: ["Sadaqah", "Salat", "Zakat", "Sawm"],
        answer: "Sawm"
    },
    {
        question: "Which prophet is known for building the Kaaba with his son?",
        options: ["Musa", "Ibrahim", "Noah", "Dawood"],
        answer: "Ibrahim"
    },
    {
        question: "Which city was the Prophet Muhammad born in?",
        options: ["Medina", "Jerusalem", "Mecca", "Cairo"],
        answer: "Mecca"
    },
    {
        question: "What is the Arabic term for the pilgrimage to Mecca?",
        options: ["Hajj", "Umrah", "Ziyarah", "Safar"],
        answer: "Hajj"
    },
    {
        question: "How many times is the word 'Bismillah' written in the Quran?",
        options: ["113", "114", "115", "116"],
        answer: "114"
    },
    {
        question: "What is the name of the mother of Prophet Isa (Jesus)?",
        options: ["Hajar", "Sarah", "Maryam", "Aminah"],
        answer: "Maryam"
    },
    {
        question: "What is the name of the well in Mecca that sprang up for Hagar and her son Ishmael?",
        options: ["Zamzam", "Hudaybiyyah", "Badr", "Yathrib"],
        answer: "Zamzam"
    },
    {
        question: "Which prophet was swallowed by a whale?",
        options: ["Yusuf", "Yunus", "Yahya", "Isa"],
        answer: "Yunus"
    },
    {
        question: "What is the name of the cave where Prophet Muhammad received his first revelation?",
        options: ["Sawr", "Hira", "Qubbat al-Sakhrah", "Shuhada"],
        answer: "Hira"
    },
    {
        question: "Which angel is known as the angel of death?",
        options: ["Jibril", "Mika'il", "Israfil", "Azrael"],
        answer: "Izrael"
    },
    {
        question: "How many times is the name 'Muhammad' mentioned in the Quran?",
        options: ["2", "4", "6", "8"],
        answer: "4"
    },
    {
        question: "Which Islamic month comes after Ramadan?",
        options: ["Rajab", "Sha'ban", "Dhul-Hijjah", "Shawwal"],
        answer: "Shawwal"
    },
    {
        question: "What is the Arabic term for the Friday prayer?",
        options: ["Fajr", "Isha", "Jumu'ah", "Taraweeh"],
        answer: "Jumu'ah"
    },
    {
        question: "Which companion was known as 'The Truthful'?",
        options: ["Ali", "Umar", "Abu Bakr", "Uthman"],
        answer: "Abu Bakr"
    },
    {
        question: "Which prophet could speak to animals?",
        options: ["Musa", "Suleman", "Dawood", "Noah"],
        answer: "Suleman"
    },
    {
        question: "How many months are in the Islamic calendar?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "What is the Arabic term for the pilgrimage performed at any time of the year?",
        options: ["Hajj", "Umrah", "Ziyarah", "Safar"],
        answer: "Umrah"
    },
    {
        question: "Who was the first woman to convert to Islam?",
        options: ["Aisha", "Khadijah", "Fatimah", "Zainab"],
        answer: "Khadijah"
    },
    {
        question: "Which battle is known as the first major battle of Islam?",
        options: ["Badr", "Uhud", "Khandaq", "Tabuk"],
        answer: "Badr"
    },
    {
        question: "What is the term for the sayings of Prophet Muhammad?",
        options: ["Sharia", "Hadith", "Sunnah", "Fiqh"],
        answer: "Hadith"
    },
    {
        question: "Which prophet was known for his patience?",
        options: ["Isa", "Musa", "Ayyub", "Ibrahim"],
        answer: "Ayyub"
    },
    {
        question: "What is the name of the mountain where the ark of Noah is believed to have rested?",
        options: ["Mount Sinai", "Mount Ararat", "Mount Hira", "Mount Arafat"],
        answer: "Mount Ararat"
    },
    {
        question: "Which surah of the Quran is entirely about women?",
        options: ["Al-Imran", "An-Nisa'", "Al-Maidah", "Al-Baqarah"],
        answer: "An-Nisa'"
    },
    {
        question: "Which prayer is performed before sunrise?",
        options: ["Fajr", "Dhuhr", "Asr", "Maghrib"],
        answer: "Fajr"
    },
    {
        question: "What is the term for the Islamic greeting?",
        options: ["Shukran", "Ma'a Salama", "Assalamu Alaikum", "Bismillah"],
        answer: "Assalamu Alaikum"
    },
    {
        question: "What is the Arabic term for the five daily prayers?",
        options: ["Salat", "Zakat", "Sawm", "Hajj"],
        answer: "Salat"
    },
    {
        question: "Who built the first house of worship (Kaaba) in Mecca?",
        options: ["Muhammad", "Ibrahim and Ismail", "Musa", "Isa"],
        answer: "Ibrahim and Ismail"
    },
    {
        question: "Which angel is responsible for blowing the trumpet to signal the Day of Judgment?",
        options: ["Jibril", "Mika'il", "Israfil", "Azrael"],
        answer: "Israfil"
    },
    {
        question: "What is the Arabic word for paradise?",
        options: ["Jannah", "Jahannam", "Barzakh", "Alam al-Arwah"],
        answer: "Jannah"
    },
    {
        question: "What is the name of the river in Jannah mentioned in the Quran?",
        options: ["Kawsar", "Salsabil", "Tasnim", "Rizwan"],
        answer: "Kawsar"
    },
    {
        question: "What is the significance of the city of Jerusalem in Islam?",
        options: ["It is the birthplace of Muhammad", "It is the site of Al-Aqsa Mosque", "It is the burial place of the first caliph", "It is where the Quran was revealed"],
        answer: "It is the site of Al-Aqsa Mosque"
    },
    {
        question: "Which prophet is known for interpreting dreams?",
        options: ["Yusuf", "Musa", "Ibrahim", "Isa"],
        answer: "Yusuf"
    },
    {
        question: "How many times do Muslims circle the Kaaba during Hajj?",
        options: ["3", "5", "7", "9"],
        answer: "7"
    },
    {
        question: "What is the name of the bridge that all people must cross on the Day of Judgment?",
        options: ["As-Sirāt", "Pul-e-Sirat", "Al-Haq", "Salsabil"],
        answer: "Pul-e-Sirat"
    },
    {
        question: "Who is the first martyr in Islam?",
        options: ["Sumayyah", "Fathima", "Ayesha", "Khadeejah"],
        answer: "Sumayyah"
    },
    {
        question: "Why did Abu Bakr (r.a.) want to send an army to some of the neighboring tribes?",
        options: ["Some of the tribes had given up on Islam after the Prophet's death because they thought Islam would come to an end.", "The tribes were planning an attack", "The people of the tribes refused to convert to Islam", "None of the above"],
        answer: "Some of the tribes had given up on Islam after the Prophet's death because they thought Islam would come to an end."
    },
    {
        question: "What is a Mahram ?",
        options: ["One who is forbidden to marry with", "One who is allowed to marry to", "The NAme od dress while performing Hajj", "None of the above"],
        answer: "One who is forbidden to marry with"
    },
    {
        "question": "What was the name of the treaty between the Prophet Muhammad and the Quraysh tribe, and what were its key terms?",
        "options": ["Treaty of Hudaibiyyah", "Treaty of Hudaybiyyah", "Treaty of Medina", "Treaty of Mecca"],
        "answer": "Treaty of Hudaibiyyah"
    },
    {
        "question": "Which Surah in the Quran is known as the 'Chapter of Light,' and what is its primary theme?",
        "options": ["Surah Al-Fatiha", "Surah An-Nur", "Surah Al-Baqarah", "Surah Al-Imran"],
        "answer": "Surah An-Nur"
    },
    {
        "question": "What is the significance of the Treaty of Hudaibiyyah in Islamic history?",
        "options": ["It led to the immediate conquest of Mecca", "It marked a turning point in relations with the Quraysh tribe", "It was a treaty with the Byzantine Empire", "It established the first Islamic state in Medina"],
        "answer": "It marked a turning point in relations with the Quraysh tribe"
    },
    {
        "question": "In which battle was the famous 'Incident of the Black Banners' observed, and what was its outcome?",
        "options": ["Battle of Badr", "Battle of Uhud", "Battle of Al-Khandaq", "Battle of Tabuk"],
        "answer": "Battle of Al-Khandaq"
    },
    {
        "question": "What is the 'Maqamat' in Islamic mysticism, and who is credited with its development?",
        "options": ["Stages of spiritual progress", "Islamic legal terms", "Theological debates", "Sufi practices"],
        "answer": "Stages of spiritual progress"
    },
    {
        "question": "What is the 'Hadith of the Golden Chain' and which chain is considered most authoritative in Hadith literature?",
        "options": ["Chain of Al-Bukhari", "Chain of Al-Muslim", "Chain of Al-Sahihayn", "Chain of Al-Sanad"],
        "answer": "Chain of Al-Sanad"
    },
    {
        "question": "Which classical Islamic scholar wrote 'The Book of Healing,' and what is its main focus?",
        "options": ["Ibn Sina; philosophy and natural sciences", "Al-Ghazali; theology and philosophy", "Ibn Rushd; jurisprudence and philosophy", "Al-Shafi'i; Islamic jurisprudence"],
        "answer": "Ibn Sina; philosophy and natural sciences"
    },
    {
        "question": "What is the 'Fajr al-Kabir' and its relevance in the context of Islamic eschatology?",
        "options": ["It is the final hour before the Day of Judgment", "It is the beginning of the Islamic calendar year", "It refers to the first light of dawn in daily prayers", "It denotes the beginning of Ramadan"],
        "answer": "It is the final hour before the Day of Judgment"
    },
    {
        "question": "What is the significance of the Battle of Mu'tah in early Islamic history, and who were the key commanders?",
        "options": ["It was a confrontation with the Byzantine Empire", "It was a defense against the Quraysh tribe; Abu Bakr, Umar, Ali", "It was a naval battle against the Romans", "It was a siege of Mecca"],
        "answer": "It was a confrontation with the Byzantine Empire"
    },
    {
        "question": "In Islamic theology, what is the distinction between 'Tafsir al-Qalb' and 'Tafsir al-Lisan'?",
        "options": ["Tafsir al-Qalb is spiritual interpretation", "Tafsir al-Qalb is historical analysis", "Tafsir al-Qalb is legal interpretation", "Tafsir al-Qalb is literal translation;"],
        "answer": "Tafsir al-Qalb is spiritual interpretation"
    }
];

let currentQuestionIndex = 0;
let lifelines = 5;

const startButton = document.getElementById('start-btn');
const landingPage = document.getElementById('landing-page');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupCloseButton = document.getElementById('popup-close-btn');
const lifelineCount = document.getElementById('lifeline-count');
const restartMessage = document.createElement('div');
const restartButton = document.createElement('button');

restartMessage.id = 'restart-message';
restartMessage.innerHTML = `
    <h1>Your lifelines have ended!</h1>
    <p>The game is restarting. Please wait...</p>
`;

restartButton.id = 'restart-btn';
restartButton.innerText = 'Restart Game';
restartButton.addEventListener('click', startGame);
restartMessage.appendChild(restartButton);
document.body.appendChild(restartMessage);

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
popupCloseButton.addEventListener('click', hidePopup);

function startGame() {
    restartMessage.style.display = 'none';
    landingPage.classList.add('hide');
    quizContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    lifelines = 5;
    lifelineCount.innerText = lifelines;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    questionElement.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        if (option === question.answer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    const answerButtonsElement = document.getElementById('answer-buttons');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    clearStatusClass(popupText);
    popup.classList.add('hide');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (!correct) {
        lifelines--;
        lifelineCount.innerText = lifelines;
        showPopup(`You have ${lifelines} lifelines left. The correct answer was ${questions[currentQuestionIndex].answer}`);
        if (lifelines === 0) {
            showPopup('You have answered 5 questions wrong. The game will restart.');
            setTimeout(showRestartMessage, 3000); // Show the restart message after 3 seconds
        }
    }

    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        restartGame();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showPopup(message) {
    popupText.innerText = message;
    popup.classList.remove('hide');
}

function hidePopup() {
    popup.classList.add('hide');
}

function showRestartMessage() {
    quizContainer.classList.add('hide');
    restartMessage.style.display = 'block';
    setTimeout(restartGame, 3000); // Restart the game after 3 seconds
}

function restartGame() {
    lifelines = 5;
    lifelineCount.innerText = lifelines;
    startGame();
}