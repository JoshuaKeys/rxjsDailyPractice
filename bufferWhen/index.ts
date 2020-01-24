import { fromStdIn } from "../utility";
import { bufferWhen } from "rxjs/operators";
import { timer } from "rxjs";

fromStdIn().pipe(
    bufferWhen(()=>timer(2000))
).subscribe(console.log);