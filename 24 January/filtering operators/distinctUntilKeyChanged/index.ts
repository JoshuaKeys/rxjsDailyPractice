import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Person {
    age: number;
    name: string;
}
of<Person>(
    {age: 4, name: 'Foo'},
    {age: 7, name: 'foo'},
    {age: 5, name: 'Foo'},
    {age: 6, name: 'foo'}
).pipe(
    distinctUntilKeyChanged('name', (x, y)=> x.toLowerCase() === y.toLowerCase())
).subscribe(console.log);
