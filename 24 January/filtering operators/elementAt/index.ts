import { fromStdIn } from "../../utility";
import { elementAt } from "rxjs/operators";

fromStdIn().pipe(
    elementAt(2)
).subscribe(console.log, console.error, ()=> console.log('End'));