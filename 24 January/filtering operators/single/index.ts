import { range } from "rxjs";
import { single } from "rxjs/operators";

range(1, 2).pipe(
    single()
).subscribe(console.log, console.error)