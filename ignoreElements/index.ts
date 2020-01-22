import { range, interval } from "rxjs";
import { ignoreElements, tap, take } from "rxjs/operators";

interval(1000).pipe(
    take(10),
    tap(i=> console.log('count #-', i)),
    ignoreElements()
).subscribe({
    next: a=> console.log(a),
    complete: () => console.log('Compleeeeeeeeeeete')
})