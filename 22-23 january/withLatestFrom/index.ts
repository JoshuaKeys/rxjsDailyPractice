import { interval } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import { fromStdIn } from "../../utility";

interval(1000).pipe(
    withLatestFrom(fromStdIn())
).subscribe(console.log);