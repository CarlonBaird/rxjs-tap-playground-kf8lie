import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

of(1, 7, 3, 6, 2, 8)
  .pipe(
    filter((value) => value > 3),
    tap({
      next: (value) => console.log('Next:', value),
      error: (err) => console.log('Error:', err),
      complete: () => console.log('Complete'),
      subscribe: () => console.log('Subscribed'),
      unsubscribe: () => console.log('Unsubscribed'),
      finalize: () => console.log('Finalize'),
    }),
    map((value) => value * 2)
  )
  .subscribe();

//Read: https://jaywoz.medium.com/information-is-king-tap-how-to-console-log-in-rxjs-7fc09db0ad5a
