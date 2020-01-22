import { of } from "rxjs";
import { tap, delay } from "rxjs/operators";

of(42).pipe(
    tap(()=>console.log('What is the meaning of life, the universe, and everything?')),
    delay(1200),
    tap(()=> console.log('We do not know')),
    delay(1200)
).subscribe(console.log)