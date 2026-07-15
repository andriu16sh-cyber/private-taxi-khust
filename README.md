# Private Taxi Khust

Готовий статичний сайт для GitHub Pages.

## Файли

- `index.html` — структура сайту
- `style.css` — дизайн і адаптація під телефон
- `script.js` — контакти, мобільне меню та дрібна логіка
- `assets/` — логотип та графіка

## Що змінити перед публікацією

Відкрийте `script.js` і замініть:

```js
const SITE_CONFIG = {
  phoneDisplay: "+38 (000) 000-00-00",
  phoneHref: "+380000000000",
  telegramUrl: "https://t.me/your_username"
};
```

Також перевірте тексти маршрутів і послуг в `index.html`.

## Публікація через GitHub Pages

1. Створіть репозиторій, наприклад `private-taxi-khust`.
2. Завантажте всі файли з цієї папки в корінь репозиторію.
3. Відкрийте `Settings` → `Pages`.
4. У `Source` виберіть `Deploy from a branch`.
5. Виберіть гілку `main` і папку `/(root)`.
6. Натисніть `Save`.

Після публікації адреса буде приблизно така:

`https://ВАШ-ЛОГІН.github.io/private-taxi-khust/`

## Власний домен

Коли домен буде куплений, його можна додати в `Settings` → `Pages` → `Custom domain`.
