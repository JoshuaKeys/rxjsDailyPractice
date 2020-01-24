import { fromStdIn } from "../utility";
import { debounce } from "rxjs/operators";
import { timer } from "rxjs";

fromStdIn().pipe(
    debounce(()=> timer(1000))
).subscribe(console.log);