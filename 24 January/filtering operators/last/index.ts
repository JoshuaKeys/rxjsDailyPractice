import { fromStdIn } from "../../utility";
import { take, last } from "rxjs/operators";

fromStdIn().pipe(
    take(5),
    last(key => key === 'p')
).subscribe(console.log);