import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

interval(100).pipe(
    takeUntil(timer(2000))
).subscribe(console.log)