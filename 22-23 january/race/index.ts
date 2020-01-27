import { timer, race } from "rxjs";
import { map } from "rxjs/operators";

const apiA = timer(3000, 100).pipe(map(n=> `API A => ${n}`));

const apiB = timer(2000, 100).pipe(map(n=> `API B => ${n}`));

race(apiA, apiB).subscribe(console.log);