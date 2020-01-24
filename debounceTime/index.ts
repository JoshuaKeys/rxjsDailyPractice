import { interval } from "rxjs";
import { debounce, debounceTime } from "rxjs/operators";
import { fromStdIn } from "../utility";

fromStdIn().pipe(
    debounceTime(1000)
).subscribe(console.log)