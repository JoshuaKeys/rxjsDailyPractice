import { interval, zip } from "rxjs";
import { map } from "rxjs/operators";

const slowNumObs = interval(2000).pipe(map(n=> `Slow Numb Obs #${n}`));
const slowSquareObs = interval(4000).pipe(map(n => `Slow Square Obs #${n*n}`))

zip(slowNumObs, slowSquareObs).subscribe(console.log);