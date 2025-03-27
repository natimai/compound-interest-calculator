# מחשבון ריבית דריבית
# עודכן לאחרונה: 21.11.2023

אתר מחשבון ריבית דריבית והשקעות פיננסיות

## תוכן העניינים

- [התקנה](#התקנה)
- [שימוש](#שימוש)
- [פיתוח](#פיתוח)
- [API](#api)
  - [API פוסטים](#api-פוסטים)
  - [API תוכן](#api-תוכן)

## התקנה

```bash
npm install
```

## שימוש

### פיתוח

```bash
npm run dev
```

### בנייה

```bash
npm run build
```

### הפעלה

```bash
npm start
```

## API

### API פוסטים

#### הוספת פוסט חדש

```
POST /api/addPost
```

נדרש: `x-api-key` בכותרות הבקשה

גוף הבקשה:
```json
{
  "title": "כותרת הפוסט",
  "content": "תוכן הפוסט",
  "type": "post",
  "metadata": {}
}
```

#### קבלת כל הפוסטים

```
GET /api/getPosts
```

#### קבלת פוסט לפי מזהה

```
GET /api/getPostById?id=123
```

#### עדכון פוסט

```
PUT /api/updatePost
```

נדרש: `x-api-key` בכותרות הבקשה

גוף הבקשה:
```json
{
  "id": "123",
  "title": "כותרת מעודכנת",
  "content": "תוכן מעודכן",
  "type": "post",
  "metadata": {}
}
```

#### מחיקת פוסט

```
DELETE /api/deletePost?id=123
```

נדרש: `x-api-key` בכותרות הבקשה

### API תוכן

#### קבלת תוכן

```
GET /api/content
```

לסינון לפי סוג:
```
GET /api/content?type=מדריך
```

#### עדכון תוכן

```
PUT /api/updateContent
```

נדרש: `x-api-key` בכותרות הבקשה

גוף הבקשה:
```json
{
  "key": "welcome_message",
  "content": "ברוכים הבאים לאתר!",
  "type": "general",
  "metadata": {}
}
```

#### מחיקת תוכן

```
DELETE /api/deleteContent?key=welcome_message
```

נדרש: `x-api-key` בכותרות הבקשה

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
   - URL: https://your-site.com/api/addPost
   - Headers: 
     ```
     Content-Type: application/json
     x-api-key: your-secure-api-key
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
   - URL: https://your-site.com/api/getPosts?type=post&limit=10

### אבטחה

- הנקודות `addPost`, `updatePost` ו-`deletePost` דורשות מפתח API.
- מומלץ להגדיר את מפתח ה-API כמשתנה סביבה בקובץ `.env`:
  ```
  MAKE_API_KEY=your-secure-api-key
  ```
