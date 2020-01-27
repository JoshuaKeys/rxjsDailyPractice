import { ThrottleConfig } from "rxjs/internal/operators/throttle";
import { throttleTime, startWith } from "rxjs/operators";
import { asyncScheduler } from "rxjs";
import { fromStdIn } from "../../utility";

const throttleConfig: ThrottleConfig = {
    leading: false,
    trailing: true
}

fromStdIn().pipe(
    throttleTime(2000, asyncScheduler, throttleConfig),
    startWith('Started')
).subscribe(evt=> console.log(`Double-typed! ${evt}`))