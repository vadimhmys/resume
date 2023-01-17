"use strict"

let skillsList = document.querySelector('.skills-list');

let technologies = [
    'HTML',
    'CSS',
    'SCSS',
    'BEM',
    'VSCode',
    'Photoshop',
    'Figma',
    'Git',
    'JS',
    'React'
];

let percents = [95,90,80,90,95,70,80,60,50,10];

for(let i = 0; i < 10; i++) {
    let skillsItem = document.createElement('div');
    skillsItem.className = 'skills-item';

    let skillsIcon = document.createElement('div');
    skillsIcon.className = 'skills-item__icon';
    skillsIcon.style.backgroundImage = `url(../assets/icons/${technologies[i]}_icon.svg)`;

    let skillsText = document.createElement('div');
    skillsText.className = 'skills-item__text';
    skillsText.textContent = `${technologies[i]}`;

    let skillsRange = document.createElement('div');
    skillsRange.className = 'skills-item__range';

    let skillsLevel = document.createElement('div');
    skillsLevel.className = 'skills-item__level';
    skillsLevel.style.width = `${percents[i]}%`;
    skillsRange.append(skillsLevel);

    let skillsPercent = document.createElement('div');
    skillsPercent.className = 'skills-item__percent';
    skillsPercent.textContent = `${percents[i]}%`;

    skillsItem.append(skillsIcon);
    skillsItem.append(skillsText);
    skillsItem.append(skillsRange);
    skillsItem.append(skillsPercent);

    skillsList.append(skillsItem);
}