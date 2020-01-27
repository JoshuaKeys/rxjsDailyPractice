import { range } from "rxjs";
import { take } from "rxjs/operators";

range(1, 10).pipe(
    take(5)
).subscribe(console.log)