## JavaScript Работни Рамки

# Упражнение 7

### Задача 1

Създайте приложение на **React**, което използва https://jsonplaceholder.typicode.com/ и имплементира следните
функционалности

1. Визуализиране на 20 [поста](https://jsonplaceholder.typicode.com/posts) на страницата.

* Имплементирайте [pagination](https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5) (бутон следваща и предишна страница), като при натискането на съответния бутон
  зареждате следващите / предходните 20 поста.
* За всеки пост трябва да се вижда неговият `title` и да има стрелка, която да го 'разширява надолу', така че да се
  вижда и неговото `body`.
    * Също така трябва да се
      зредят [коментарите за съответния пост](https://jsonplaceholder.typicode.com/posts/1/comments) и да се
      визуалзират.
* За стилизиране може да използвате [styled-components](https://www.npmjs.com/package/styled-components).

### Задача 2

Добавете механизъм за автентикация.

* Създайте **Login Page** с полета `email*` и `password*`.
* За 'валидни регистрации' считаме всички [потребители](https://jsonplaceholder.typicode.com/users), като `email*` си
  е `email`, а `password*` е `username` 
* Ако потребителят въведе невалидна комбинация `email/password` трябва да се икзара подходящо съобщение.
* Ако потребителят въведе валидна комбинация `email/password` трябва да бъде отведен на екрана от [Задача 1](###-Задача-1)
* Съхранявайте `state`-a за автентикацията (`email` и `isAuthenticated`) в `UserContext`.
* Изкарайте `email`-a на потребителя над постовете в `<h3 />`

### Задача 3
Използвайте [formik](https://www.npmjs.com/package/formik) за формата от [Задача 2](###-Задача-2)
