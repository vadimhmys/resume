"use strict" 

const dictionary = {
    en: {
        'about': 'About me',
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'contacts': 'Contacts',
        'author': 'Vadim Hmys',
        'resume':'Resume for JS from Zero to Hero',
        'about-text-1':`My name is Vadim. I'm 33 years old. I graduated from the Military Academy of the Republic of Belarus in 2012. My major is a telecommunications engineer. Currently I'm not working in my specialty. I have good knowledge of HTML, CSS, preprocessors (SASS), understanding of BEM methodology, confident basic knowledge of JavaScript, I'm good at using Figma and Adobe Photoshop graphics editors, I'm able to work with the GIT version control system. I'm currently learning JavaScript in depth and have also started learning React. I successfully completed the course "Web Development with HTML, CSS and JavaScript" at IT-Academy, and also completed training at the online school RSSchool. I have certificates confirming this. I want to develop in the field of information technology, in the future I'd like to become a front-end developer.`,
        'about-text-2':`I'm hardworking, disciplined and purposeful. I always take a very responsible approach to the implementation of tasks.`,
        'about-text-3':`I live in Minsk. I'm married. I have a daughter. I like to walk in nature, read books and travel. On the slider, which is located on the page just below, there are several photos of places where I've been.`,
        'examples':'Examples of my projects',
        'contacts':'Contacts',
        'contacts-title':'You can contact me:',
        'github':'My GitHub profile',
        'codewars':'My Codewars profile'
    },
    ru: {
        'about': 'Обо мне',
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'contacts': 'Контакты',
        'author': 'Вадим Хмыз',
        'resume':'Резюме для JS from Zero to Hero',
        'about-text-1':`Меня зовут Вадим. Мне 33 года. В 2012 году я окончил Военную академию Республики Беларусь. Моя специальность - инженер по телекоммуникациям. В настоящее время я не работаю по специальности. Обладаю достаточно хорошими знаниями HTML, CSS, SASS(SCSS), пониманием методологии BEM, уверенными базовыми знаниями JavaScript, хорошо знаком с графическими редакторами Figma and Adobe Photoshop, умею работать с системой контроля версий GIT. В настоящее время углубленно изучаю JavaScript и начал изучение React. Успешно прошел курс  "Web Development with HTML, CSS and JavaScript" в IT-Academy,а также обучался в онлайн-школе RSSchool, есть соответстующие сертификаты. Хочу работать и развиваться в сфере информационных технологий, в частности, в области Front-end разработки.`, 
        'about-text-2':`Я трудолюбив, дисциплинирован и целеустремлен. Всегда ответственно подхожу к выполнению поставленных задач.`,
        'about-text-3':`Живу в Минске. Женат. воспитываю дочь. Мне нравится гулять на природе, читать книги и путешествовать. На слайдере, который находится на этой странице чуть ниже, есть несколько фотографий мест, где мне довелось побывать.`,
        'examples':'Примеры моих работ',
        'contacts':'Контакты',
        'contacts-title':'Вы можете связаться со мной:',
        'github':'Мой профиль на GitHub',
        'codewars':'Мой профиль на Codewars'
    }
};

let languageSwitcher = document.querySelector('.language-switcher');

languageSwitcher.onclick = function(e) {
    if(e.target.classList.contains('language-switcher__language')) {
        let activeLanguage = e.target.dataset.lang;
        let languages = document.querySelectorAll('.language-switcher__language');
        for(let lang of languages) {
            lang.classList.remove('language-switcher__language--active');
        }
        e.target.classList.add('language-switcher__language--active');
        getTranslate(activeLanguage);
    }
}

function getTranslate(language) {
    document.querySelectorAll('[data-i18n]').forEach(item => {
        item.textContent = dictionary[language][item.dataset.i18n];
    });
    
}