import { forkJoin, of, timer } from "rxjs";
import { take } from "rxjs/operators";

forkJoin({
    foo: of(1, 2, 3, 4),
    bar: Promise.resolve(8),
    baz: timer(4000, 1000).pipe(take(2))
}).subscribe({
    next: console.log,
    complete: ()=> console.log('This is how it ends!')
})