import { range } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 100).pipe(
    filter(n => n % 2 === 0)
).subscribe(console.log);