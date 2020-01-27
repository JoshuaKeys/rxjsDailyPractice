import { interval } from "rxjs";
import { take, skipLast, startWith } from "rxjs/operators";

interval(100).pipe(
    take(10),
    startWith('Hello'),
    startWith('World'),
    startWith('Hello'),
    skipLast(5)
).subscribe(console.log);