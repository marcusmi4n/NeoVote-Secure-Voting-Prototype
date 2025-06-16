use std::collections::HashMap;

fn main() {
    let votes = vec!["Alice", "Bob", "Alice", "Charlie", "Alice", "Bob"];
    let mut counts = HashMap::new();

    for vote in votes {
        *counts.entry(vote).or_insert(0) += 1;
    }

    println!("📊 Vote Tally:");
    for (candidate, count) in &counts {
        println!("{}: {}", candidate, count);
    }
}
