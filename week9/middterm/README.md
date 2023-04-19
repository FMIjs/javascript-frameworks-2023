## JavaScript Работни Рамки

# Контролно 1

### Задача 1 - 10 точки

* Даден е шаблон на задачата, който вие трябва да доимплементирате.
* Трябва да създадете нещо като албум, който се контролира от един text input (type=number).
* Input-а трябва да е лимитиран да приема **само положителни** стойности.
* Албумът трябва да реагира реактивно на този input, като зарежда толкова на брой снимки от следния [ресурс](https://jsonplaceholder.typicode.com/photos), колкото е стойността на input-a.
* Трябва всяка снимка да е в отделен `Box.tsx` компонент.
* Използвайте [SWR](https://swr.vercel.app/docs/getting-started) за data fetching, като използвате **isLoading** променливата и на база на нея показвате текст, който индикира, че снимката се зарежда.

### Задача 2 - 10 точки
* За тази задача трябва да използвате client-side routing - [BrowserRouter](https://reactrouter.com/en/main/start/overview)
  * `/` - Home - Компонент без логика в него, който просто рендерира 'Welcome to the album app.' в `h2`
  * `/album` - Album - Тук трябва да е input-ът, който контролира броят снимки и ги рендерира, чрез `SlowAlbum`.
  * `/settings` - Settings - Чрез компонентът, който отговаряа на този route, използвайки `Context`, трябва да може да контролирате **максималната стойност** на input-a в албума (50 по default).
  * NotFound - За всички останали пътища, трябва да отговаря компонент, който просто рендерира "Page Not Found". 
* За всички компоненти, които използвате в рутирането трябва да е приложен `Code Splitting`.

### Задача 3 - 10 точки
* В `Album.tsx` има компонент `SlowAlbum` - Той е изкуствено забавен със 100 милисекунди. Това забавяне прави вашето приложение не интерактивно. Помислете как можете да избегнете този проблем и приложението да си остане интерактивно. 