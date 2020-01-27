import { interval, range, of } from "rxjs";
import { take, takeWhile } from "rxjs/operators";

of(0, 2, 4, 6, 8, 10, 11, 12).pipe(
    takeWhile(num => num % 2 === 0, true)
).subscribe(console.log);