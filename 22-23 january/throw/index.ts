import { throwError, timer, asyncScheduler } from "rxjs";

throwError('Error Was encountered', asyncScheduler).subscribe(n=> console.log("N value was emitted", n), error=> console.log(error));