import { interval } from "rxjs";
import { first } from "rxjs/operators";

// interval(1000).pipe(
//     first(n => n === 10)
// ).subscribe(console.log)

interval(1000).pipe(
    first()
).subscribe(console.log)