# Benchmark for the routes of the server

For the benchmark it was used the ApacheBench, to test how the number of child process and the size of its threadpool affects the software's performance.

## Base case
For a base case, it was firs set up a threadpool size of 1 and the app runs only with one child process, the results for the base case was:

ApacheBench hit only 1 request

Time taken for tests: 0.604 seconds
Time per request:       604.332 \[ms] (mean)
Complete requests:      1
Failed requests:        0

## Results

### Threadpool size 1, ab(ApacheBench) made 2 requests at the same time:

Time taken for tests:   1.219 seconds
Time per request:       1219.039 \[ms] (mean)
Complete requests:      2
Failed requests:        0

Percentage of the requests served within a certain time (ms)
  50%    618
  66%    618
  75%    618
  80%    618
  90%    618
  95%    618
  98%    618
  99%    618
 100%    618 (longest request)

### Threadpool size 1, 2 children process, ab(ApacheBench) made 2 requests at the same time:

Time taken for tests:   1.115 seconds
Time per request:       1114.790 \[ms] (mean)
Complete requests:      2
Failed requests:        0

Percentage of the requests served within a certain time (ms)
  50%    558
  66%    558
  75%    558
  80%    558
  90%    558
  95%    558
  98%    558
  99%    558
 100%    558 (longest request)

### Threadpool size 1, 6 children process, ab(ApacheBench) made 6 requests at the same time:

Time taken for tests:   1.652 seconds
Time per request:       1651.801 \[ms] (mean)

Complete requests:      6
Failed requests:        0

Percentage of the requests served within a certain time (ms)
  50%    864
  66%    864
  75%   1016
  80%   1016
  90%   1059
  95%   1059
  98%   1059
  99%   1059
 100%   1059 (longest request)

### Threadpool size 1, 12 children process, ab(ApacheBench) made 12 requests at the same time:

Time taken for tests:   2.492 seconds
Time per request:       2491.531 \[ms] (mean)
Complete requests:      12
Failed requests:        0

Connection Times (ms)
              min  mean\[+/-sd] median   max
Connect:        0    0   0.1      0       0
Processing:   607 1651 357.6   1763    1889
Waiting:      602 1649 358.6   1762    1888
Total:        607 1651 357.6   1763    1889


Percentage of the requests served within a certain time (ms)
  50%   1763
  66%   1835
  75%   1883
  80%   1883
  90%   1888
  95%   1889
  98%   1889
  99%   1889
 100%   1889 (longest request)

 ## Conclusion

 As we can see, increasing the number of children process doesn't garantee a costant time of processing even though the number of request was proportional to the number of processess.





