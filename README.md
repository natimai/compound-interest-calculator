This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## API לניהול תוכן

האתר כולל מערכת API המאפשרת יצירה, עדכון, מחיקה וקבלה של תוכן באופן דינמי.

### נקודות קצה (Endpoints)

#### הוספת פוסט חדש
```
POST /api/addPost
```
דורש header: `x-api-key`

גוף הבקשה (JSON):
```json
{
  "title": "כותרת הפוסט",
  "content": "תוכן הפוסט",
  "type": "post", // אופציונלי, ברירת מחדל: "post"
  "metadata": {} // אופציונלי, מידע נוסף על הפוסט
}
```

#### קבלת כל הפוסטים
```
GET /api/getPosts
```

פרמטרים אופציונליים:
- `type`: סינון לפי סוג פוסט
- `limit`: הגבלת מספר התוצאות
- `offset`: דילוג על מספר תוצאות מסוים (לדפדוף)

#### קבלת פוסט בודד
```
GET /api/getPostById?id=123
```

#### עדכון פוסט
```
PUT /api/updatePost?id=123
```
דורש header: `x-api-key`

גוף הבקשה (JSON) - רק השדות שברצונך לעדכן:
```json
{
  "title": "כותרת מעודכנת",
  "content": "תוכן מעודכן"
}
```

#### מחיקת פוסט
```
DELETE /api/deletePost?id=123
```
דורש header: `x-api-key`

### דוגמה לשימוש ב-Make (Integromat)

1. **הוספת פוסט חדש**:
   - השתמש ב-HTTP > Make a request
   - Method: POST
   - URL: https://www.deribit.co.il/api/addPost
   - Headers: 
     ```
     Content-Type: application/json
     x-api-key: 1f0e27c26a029bb5985ef1e735d0673ed6b1456b08109bb38591302ea8b00b06
     ```
   - Body: 
     ```json
     {
       "title": "{{title}}",
       "content": "{{content}}",
       "type": "{{type}}",
       "metadata": {
         "source": "make",
         "author": "{{author}}"
       }
     }
     ```

2. **קבלת פוסטים**:
   - השתמש ב-HTTP > Make a request
   - Method: GET
   - URL: https://www.deribit.co.il/api/getPosts?type=post&limit=10

### אבטחה

- הנקודות `addPost`, `updatePost` ו-`deletePost` דורשות מפתח API.
- מומלץ להגדיר את מפתח ה-API כמשתנה סביבה בקובץ `.env`:
  ```
  MAKE_API_KEY=your-secure-api-key
  ```
