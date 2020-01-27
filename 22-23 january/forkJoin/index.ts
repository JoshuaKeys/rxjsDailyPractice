import { timer, forkJoin } from "rxjs";
import { mapTo } from "rxjs/operators";

const friendAPI = timer(1000).pipe(
    mapTo({name: 'Hank'})
);

const preferencesAPI = timer(1700).pipe(
    mapTo({name: 'dark'})
)

forkJoin(friendAPI, preferencesAPI).subscribe(console.log);