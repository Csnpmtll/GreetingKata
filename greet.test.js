const greet = require("./greet");
test("Write a method greet(name)",()=>{
    expect(greet("bob")).toBe("Hello, bob.");
});
test("Write a method greet(name)",()=>{
    expect(greet(null)).toBe("Hello, my friend.");
});
test("Write a method greet(name)",()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});
test("Write a method greet(name)",()=>{
    var name=["Jill", "Jane"]
    expect(greet(name)).toBe("Hello, Jill and Jane.");
});
test("Write a method greet(name)",()=>{
    var name=["Amy", "Brian", "Charlotte"]
    expect(greet(name)).toBe("Hello, Amy, Brian, and Charlotte.");
});
test("Write a method greet(name)",()=>{
    var name=["Amy", "BRIAN", "Charlotte"]
    expect(greet(name)).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});
// test("Write a method greet(name)",()=>{
//     var name=["Bob", "Charlie, Dianne"]
//     expect(greet(name)).toBe("Hello, Bob, Charlie, and Dianne.");
// });
// test("Write a method greet(name)",()=>{
//     var name=["Bob", "Charlie, Dianne"]
//     expect(greet(name)).toBe("Hello, Bob and Charlie, Dianne.");
// });
    
    


