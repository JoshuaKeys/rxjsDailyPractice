import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

interval(500).pipe(
    take(10),
    tap(()=> console.log('tick')),
    reduce((acc, val)=> acc + val, 0)
).subscribe(a => console.log(a));