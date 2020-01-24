import { fromStdIn } from "../utility";
import { bufferToggle, filter } from "rxjs/operators";

fromStdIn().pipe(
    bufferToggle(
        fromStdIn().pipe(filter(k => k === 'p')),
        (k)=> fromStdIn().pipe(
            filter(key => key === 'o')
        )
    )
).subscribe(console.log);