/* eslint-disable no-console */
export default function log() {
  console.log(`
Подробно: https://rolling-scopes-school.github.io/komalapa-JSFE2021Q3/art-quiz/readme.md

Коротко:

Анимации:
1 - таймер качается "звенит" последние 3 секунды
2 - Иконка бургер меню css анимация и градиенты
3 - Лоадер между вопросами
4 - Подсветка красным карточки после неверного ответа

Доп. функции:
- фоновая музыка с отключением +2
- смена цветовой схемы в зависимости от настроек браузера +2
- можно выбрать 2, 4 или 6 вариантов ответа   +5
- тень окна результатов зависит от результата +2
- Фраза зависит от результата раунда +2

213/220

1. **Стартовая страница и навигация +20**
Изменила:
  При выборе картины клик по самой картине, а не по варианту ответа как в макете
  Картины не обрезаются относительно меньших изображений
  Доступ к настройкам звука не только с главной страницы
  Т.к. раунды не отличаются друг от друга по смыслу не добавляла картину в фон т.к. это подсказка правильного ответа в одном из вопросов_

Навигация реализована как "хлебные крошки"
**2. Настройки +40** 
**3. Страница категорий +30**  

- карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась
  Выделяются цветом карточки где набрано больше 30%
  Если есть хотябы один правильный ответ - есть результат. По клику на него карточка результатов

**4. Страница с вопросами +50**
- после окончания раунда выводится уведомление об окончании раунда и его результат - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов +10
   'Далее' для непрерывной игры. Можно решать следующий раунд не выходя в меню. Есть кнопка 'К раундам' и 'Домой'
  
5. Страница с результатами +50
6. Плавная смена изображений; Появляется через transform:scale +10

**7. Реализована анимация отдельных деталей интерфейса, также анимированы переходы и взаимодействия, чтобы работа с приложением шла плавным и непрерывным потоком +20**  
1 - таймер качается "звенит" последние 3 секунды
2 - Иконка бургер меню css анимация и градиенты
3 - Лоадер между вопросами
4 - Подсветка красным карточки после неверного ответа
8. Дополнительный функционал на выбор +20
- фоновая музыка с отключением +2
- смена цветовой схемы в зависимости от настроек браузера +2
- можно выбрать 2, 4 или 6 вариантов ответа   +5
- тень окна результатов зависит от результата +2
- Фраза зависит от результата раунда +2
 **+13**

213/220

`);
}
/* eslint-enable no-alert */
