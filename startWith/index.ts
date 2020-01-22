import { timer } from "rxjs";
import { map, startWith, take } from "rxjs/operators";

timer(10000, 1000).pipe(
    map(n => n + 1),
    startWith('Waiting for Timer to Start'),
    take(5)
).subscribe(console.log)