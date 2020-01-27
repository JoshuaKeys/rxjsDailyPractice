import { range } from "rxjs";
import { every, map } from "rxjs/operators";

range(1, 10).pipe(
    map(n=> n * 2),
    every(n => n %2 === 0)
).subscribe(console.log)