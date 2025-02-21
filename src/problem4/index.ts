// Complexity: O(n) (linear) – The loop runs from 1 to n, requiring n computation steps.
// Advantages: Easy to understand and debug.
// Disadvantages: Not optimal if n is very large

function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Complexity: O(1)
// Advantages: Fast computation, optimal.
// Disadvantages: May encounter integer overflow if n is large.
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// Complexity: O(n)
// Advantages: Concise and readable code.
// Disadvantages: May cause stack overflow if n is too large.
function sum_to_n_c(n: number): number {
    if (n <= 1) return n;
    return n + sum_to_n_c(n - 1);
}
