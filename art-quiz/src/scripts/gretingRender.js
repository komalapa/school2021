export default function greetingRender() {
  const greetingContainer = document.createElement('div');
  greetingContainer.classList.add('greeting-wrp');
  greetingContainer.id = 'greeting';
  const greetingHeader = document.createElement('h2');
  greetingHeader.innerText = 'Добро пожаловать в Art Quiz';

  const greetingTextSound = document.createElement('span');
  greetingTextSound.innerText = 'Приложение содержит звуки и музыку. Вы можете включить и выключить их в меню.';

  const greetingTextAnswers = document.createElement('span');
  greetingTextAnswers.innerText = 'Так же в меню можно изменить количество вариантов ответа';

  const greetingTextTimer = document.createElement('span');
  greetingTextTimer.innerText = 'И включить игру на время.';

  const greetingTextEnd = document.createElement('span');
  greetingTextEnd.innerText = 'Приятной игры!';

  const greetingBtnClose = document.createElement('button');
  greetingBtnClose.classList.add('greeting-btn');
  greetingBtnClose.dataset.action = 'closeGreeting';
  greetingBtnClose.innerText = 'Продолжить';

  greetingContainer.append(
    greetingHeader,
    greetingTextSound,
    greetingTextAnswers,
    greetingTextTimer,
    greetingTextEnd,
    greetingBtnClose,
  );

  document.documentElement.append(greetingContainer);
}
