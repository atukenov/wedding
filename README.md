# Almaz & Nuray — свадебное приглашение

Next.js 14 (App Router, TypeScript). Готово к деплою на Vercel.

## Запуск

```bash
npm install
npm run dev
```

## Что менять

- **Все данные свадьбы** — `lib/wedding.ts`: имена, дата, место, адрес, ссылка на карту, дедлайн ответа.
- **Видео в героя** — положите файл в `public/` (например `public/hero.mp4`, вертикальный 9:16) и укажите
  `heroVideo: "/hero.mp4"` в `lib/wedding.ts`. Пока путь пустой — на месте видео показывается плейсхолдер.
  Желательно также кадр-постер: `heroPoster: "/hero.jpg"`.
- **Цвета** — CSS-переменные в `app/globals.css`.

## Ответы гостей (RSVP)

`POST /api/rsvp` принимает `{ name, who }`. Если в переменных окружения заданы
`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`, ответ приходит в Telegram; иначе пишется в логи.

1. Создайте бота через @BotFather, получите токен.
2. Напишите боту любое сообщение, откройте `https://api.telegram.org/bot<TOKEN>/getUpdates` и возьмите `chat.id`.
3. Добавьте обе переменные в Vercel → Project → Settings → Environment Variables.

## Деплой

```bash
git push
```

Импортируйте репозиторий на vercel.com — настройки по умолчанию подходят.
