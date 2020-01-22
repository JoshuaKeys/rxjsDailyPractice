import { fromStdIn } from "../utility";
import { timeout } from "rxjs/operators";

fromStdIn().pipe(
    timeout(2000)
).subscribe(console.log);