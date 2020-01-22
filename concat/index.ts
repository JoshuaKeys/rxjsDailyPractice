import { range } from "rxjs";
import { concat, skip } from "rxjs/operators";

range(1, 10).pipe(
    concat(range(1, 10)),
    skip(10)
).subscribe(console.log)