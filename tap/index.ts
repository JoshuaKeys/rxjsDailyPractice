import { interval } from "rxjs";
import { tap, take } from "rxjs/operators";

interval(1000)
.pipe(
    take(5),
    tap(next=>{console.log(next)}, error => console.log(error), ()=> console.log('Completed'))
).subscribe()