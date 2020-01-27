import { fromStdIn } from "../../utility";
import { sample } from "rxjs/operators";
import { interval } from "rxjs";

fromStdIn().pipe(
    sample(interval(1000))
).subscribe(console.log)