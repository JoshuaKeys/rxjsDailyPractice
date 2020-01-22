import { interval, timer } from "rxjs";
import { takeWhile } from "rxjs/operators";

interval(1000).pipe(
    takeWhile(i => i <= 7)
).subscribe(console.log)