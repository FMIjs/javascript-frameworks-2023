## JavaScript Работни Рамки
# Упражнение 1


### Задача 1
Попълнете типовете и интерфейсите на типовете хора.
```ts
// interface User { ... }
// interface Admin { ... }

export type Person = unknown;

export const persons: any[] /* <- Person[] */ = [
    { // User
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    { // Admin
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    { // User
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    { // Admin
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


export function logPerson(user: unknown) {
    let additionalInformation: string;

    /* ! Задача 1.2
     * След като сте готови с базовите типове, може да разкоментирате долните редове
     * Като го направите ще видите как typescript-a не е доволен за някои неща
     * Оправете грешките
    */

    // if (person.role) {
    //     additionalInformation = person.role;
    // } else {
    //     additionalInformation = person.occupation;
    // }

    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Users:');
users.forEach(logPerson);
```


### Задача X (Advanced)

Нека си поиграем с typescript-a така, че в зависимост от подадените параметри на функцията, върната стойност да е или `string`, или `Date`, а не `string | Date`

```ts
const formatDate(timestamp: number, toDate?: boolean): string | Date {
  const date = new Date(timestamp);
  return toDate ? date : `${date.getHours()}:${date.getMinutes()}`;
}
```