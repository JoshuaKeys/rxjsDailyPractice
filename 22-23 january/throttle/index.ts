import { fromStdIn } from "../../utility";
import { throttle, filter } from "rxjs/operators";

fromStdIn().pipe(
    throttle(
        ()=> fromStdIn().pipe(filter(key=> key === 'p'))
    )
).subscribe(console.log);