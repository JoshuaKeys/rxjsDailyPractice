import { range } from "rxjs";
import { last } from "rxjs/operators";

range(1, 10).pipe(
    last(n => n % 2 !== 0)
)
.subscribe(console.log)