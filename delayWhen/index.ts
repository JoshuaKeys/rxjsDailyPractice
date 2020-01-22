import { range, timer } from "rxjs";
import { delayWhen, delay } from "rxjs/operators";

range(1, 10).pipe(
    delayWhen(n => timer(n * 1000))
).subscribe(console.log)