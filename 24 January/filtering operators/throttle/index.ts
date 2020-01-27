import { fromStdIn } from "../../utility";
import { throttle, startWith } from "rxjs/operators";
import { timer } from "rxjs";

fromStdIn().pipe(
    throttle(key => {
        return timer(4000)
    }, {leading: true, trailing: true}),
    startWith('Started')
).subscribe(console.log)