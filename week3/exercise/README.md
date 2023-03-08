## JavaScript Работни Рамки
# Упражнение 2

### Задача 1

Създайте WEB приложение за водене на бележки (TODOs)
<br />
Приложението трябва да бъде разделено на `FrontEnd` и `BackEnd`

#### Видове TODO-та
* BasicTODO: 
  * `description`: свободен текст
  * `finished`: булева стойност
* TimedTODO:
    * `description`: свободен текст
    * `finished`: булева стойност
    * `dateAndTime`: Date
* AdvancedTODO:
    * `description`: свободен текст
    * `finished`: булева стойност
    * `dateAndTime`: Date
    * `location`: свободен тескт

### Изисквания
#### Backend
* Express.js + Typescript
* `Endpoints`
  * POST /todos/basic - създаване на `BasicTODO`
  * PUT /todos/basic  - редакция на `BasicTODO`
  * POST /todos/timed - създаване на `TimedTODO`
  * PUT /todos/timed  - редакция на `TimedTODO`
  * POST /todos/advanced - създаване на `AdvancedTODO`
  * PUT /todos/advanced  - редакция на `AdvancedTODO`
  * GET /todos - взима всички TODO-та (`BasicTODO` + `TimedTODO` + `AdvancedTODO`)
* In memory DB - може да записвате TODO-тата в паметта (не е необходимо да използвате база данни)
* Всички методи трябва да работят с интерфейси/типове съответстващи на TODO-то което моделират.

#### Frontend
* Използвайте typescript + HTML + CSS (ако искате).
* Създайте страница на която се визуализират всички създадени TODO-та (`GET /todos`)
* Всяко TODO от списъкът трябва да може да се маркира като приключено както и да се редактира.
* Създайте форма, чрез която могат да се създават/редактират TODO-та (избор на тип TODO и на база на него необходимите полета)
* Използвайте типове/интерфейси, които съотвестват с тези от `Backend`-a

