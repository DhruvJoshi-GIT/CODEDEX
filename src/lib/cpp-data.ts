import { Category, Construct } from './types';

export const cppCategories: Category[] = [
  {
    id: 'cpp-basics',
    name: 'Basics',
    color: '#4a7abf',
    icon: 'Code',
    description: 'The foundational building blocks of C++. Variables, data types, I/O, operators, and core language features.',
  },
  {
    id: 'cpp-control-flow',
    name: 'Control Flow',
    color: '#bf7a4a',
    icon: 'GitBranch',
    description: 'Direct program execution with conditionals, loops, and branching statements.',
  },
  {
    id: 'cpp-functions',
    name: 'Functions',
    color: '#7a4abf',
    icon: 'FunctionSquare',
    description: 'Organize code with functions, overloading, templates, and functional programming concepts.',
  },
  {
    id: 'cpp-oop',
    name: 'OOP',
    color: '#4abf7a',
    icon: 'Box',
    description: 'Object-oriented programming with classes, inheritance, polymorphism, and encapsulation.',
  },
  {
    id: 'cpp-memory',
    name: 'Memory',
    color: '#bf4a7a',
    icon: 'Cpu',
    description: 'Pointers, references, smart pointers, RAII, and memory management fundamentals.',
  },
  {
    id: 'cpp-stl',
    name: 'STL',
    color: '#7abf4a',
    icon: 'Library',
    description: 'The Standard Template Library: containers, iterators, algorithms, and utility types.',
  },
  {
    id: 'cpp-modern',
    name: 'Modern C++',
    color: '#4a90bf',
    icon: 'Sparkles',
    description: 'Modern C++ features from C++11 through C++23 including lambdas, concepts, and ranges.',
  },
  {
    id: 'cpp-error-handling',
    name: 'Error Handling',
    color: '#bf904a',
    icon: 'ShieldAlert',
    description: 'Exception handling, error codes, assertions, and robust error management patterns.',
  },
];

export const cppConstructs: Construct[] = [
  // ===== BASICS =====
  {
    id: 'cpp-variables',
    name: 'Variables',
    category: 'cpp-basics',
    description: 'Variables in C++ must be declared with a type before use. C++ is statically typed, meaning the type is checked at compile time. Variables can be initialized at declaration or assigned later.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Variable declarations
    int age = 25;
    double price = 19.99;
    char grade = 'A';
    string name = "Alice";
    bool is_active = true;

    // Multiple declarations
    int x = 1, y = 2, z = 3;

    // Constant
    const double PI = 3.14159;

    cout << name << " is " << age << " years old" << endl;
    cout << "Price: $" << price << endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-data-types',
    name: 'Data Types',
    category: 'cpp-basics',
    description: 'C++ provides fundamental types (int, float, double, char, bool), modifiers (short, long, unsigned), and derived types. Understanding sizes and ranges is crucial for performance and correctness.',
    codeExample: `#include <iostream>
#include <limits>
#include <cstdint>
using namespace std;

int main() {
    // Fundamental types
    int i = 42;              // typically 4 bytes
    short s = 100;           // typically 2 bytes
    long l = 100000L;        // typically 4 or 8 bytes
    long long ll = 1e18;     // at least 8 bytes
    float f = 3.14f;         // 4 bytes, ~7 digits
    double d = 3.14159265;   // 8 bytes, ~15 digits
    char c = 'A';            // 1 byte
    bool b = true;           // 1 byte

    // Fixed-width integers (C++11)
    int32_t exact = 42;
    uint64_t big = 18446744073709551615ULL;

    // Size and limits
    cout << "int size: " << sizeof(int) << " bytes" << endl;
    cout << "int max: " << numeric_limits<int>::max() << endl;
    cout << "double min: " << numeric_limits<double>::min() << endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-cout-cin',
    name: 'Cout / Cin',
    category: 'cpp-basics',
    description: 'cout and cin are stream objects for console output and input respectively. They use the insertion (<<) and extraction (>>) operators. The iostream library also provides cerr for error output.',
    codeExample: `#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    // Output with cout
    cout << "Hello, World!" << endl;
    cout << "Value: " << 42 << ", Pi: " << 3.14 << endl;

    // Input with cin
    int age;
    cout << "Enter age: ";
    cin >> age;

    // String input (single word)
    string name;
    cout << "Enter name: ";
    cin >> name;

    // Full line input
    cin.ignore();  // clear newline from buffer
    string line;
    cout << "Enter full name: ";
    getline(cin, line);

    // Formatting output
    double price = 29.5;
    cout << fixed << setprecision(2) << price << endl;  // 29.50
    cout << setw(10) << setfill('*') << 42 << endl;     // ********42

    // Error output
    cerr << "Error: something went wrong" << endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-comments',
    name: 'Comments',
    category: 'cpp-basics',
    description: 'C++ supports single-line comments with // and multi-line comments with /* */. Comments document code intent, explain complex logic, and can temporarily disable code during debugging.',
    codeExample: `#include <iostream>

// Single-line comment

/*
 * Multi-line comment
 * Useful for longer explanations
 */

/**
 * @brief Calculate the area of a circle.
 * @param radius The radius of the circle.
 * @return The area as a double.
 */
double circle_area(double radius) {
    return 3.14159 * radius * radius;
}

int main() {
    // TODO: add input validation
    double r = 5.0;
    double area = circle_area(r);

    // Temporarily disabled code:
    // std::cout << "Debug: r = " << r << std::endl;

    std::cout << "Area: " << area << std::endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-operators',
    name: 'Operators',
    category: 'cpp-basics',
    description: 'C++ provides arithmetic, relational, logical, bitwise, assignment, and special operators. Operator precedence determines evaluation order. Understanding operators is key to writing correct expressions.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    // Arithmetic
    cout << 10 + 3 << endl;   // 13
    cout << 10 - 3 << endl;   // 7
    cout << 10 * 3 << endl;   // 30
    cout << 10 / 3 << endl;   // 3 (integer division)
    cout << 10 % 3 << endl;   // 1 (modulus)
    cout << 10.0 / 3 << endl; // 3.33333

    // Increment / Decrement
    int x = 5;
    cout << x++ << endl;  // 5 (post-increment)
    cout << ++x << endl;  // 7 (pre-increment)

    // Relational
    cout << (5 == 5) << endl;  // 1 (true)
    cout << (5 != 3) << endl;  // 1

    // Logical
    cout << (true && false) << endl;  // 0
    cout << (true || false) << endl;  // 1
    cout << (!true) << endl;          // 0

    // Bitwise
    cout << (5 & 3) << endl;   // 1  (AND)
    cout << (5 | 3) << endl;   // 7  (OR)
    cout << (5 ^ 3) << endl;   // 6  (XOR)
    cout << (5 << 1) << endl;  // 10 (left shift)
    cout << (5 >> 1) << endl;  // 2  (right shift)

    // Ternary
    int age = 20;
    string status = (age >= 18) ? "adult" : "minor";
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-auto',
    name: 'Auto',
    category: 'cpp-basics',
    description: 'The auto keyword (C++11) lets the compiler deduce the variable type from its initializer. It reduces verbosity, especially with complex template types, while maintaining full type safety.',
    codeExample: `#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    // Basic auto
    auto x = 42;         // int
    auto pi = 3.14;      // double
    auto name = "Alice"s; // std::string (with s suffix)
    auto flag = true;     // bool

    // Auto with containers (avoid verbose types)
    vector<int> nums = {1, 2, 3, 4, 5};
    auto it = nums.begin();  // vector<int>::iterator

    map<string, vector<int>> scores;
    scores["Alice"] = {95, 87, 92};
    for (auto& [name, vals] : scores) {  // structured binding
        for (auto v : vals) {
            cout << name << ": " << v << endl;
        }
    }

    // Auto with lambda
    auto add = [](int a, int b) { return a + b; };
    cout << add(3, 4) << endl;  // 7

    // Auto return type (C++14)
    auto multiply = [](auto a, auto b) { return a * b; };
    cout << multiply(3, 4.5) << endl;  // 13.5
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-const',
    name: 'Const',
    category: 'cpp-basics',
    description: 'The const qualifier declares that a value cannot be modified after initialization. It applies to variables, pointers, references, and member functions, enabling the compiler to enforce immutability.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Const variables
    const int MAX_SIZE = 100;
    const double PI = 3.14159265;
    // MAX_SIZE = 200;  // ERROR: cannot modify const

    // Const with pointers
    int x = 10, y = 20;
    const int* ptr1 = &x;    // pointer to const int
    // *ptr1 = 30;            // ERROR: can't modify value
    ptr1 = &y;                // OK: can change pointer

    int* const ptr2 = &x;    // const pointer to int
    *ptr2 = 30;              // OK: can modify value
    // ptr2 = &y;             // ERROR: can't change pointer

    const int* const ptr3 = &x;  // both const

    // Const references
    const string& ref = "Hello";  // binds to temporary
    // ref = "World";             // ERROR

    cout << *ptr1 << ", " << *ptr2 << endl;
    return 0;
}

// Const member function
class Circle {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const {  // won't modify object
        return 3.14159 * radius * radius;
    }
};`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-typedef',
    name: 'Typedef & Using',
    category: 'cpp-basics',
    description: 'typedef and using create type aliases, making complex types more readable. The using keyword (C++11) is preferred as it supports templates. Type aliases improve code clarity and maintainability.',
    codeExample: `#include <iostream>
#include <vector>
#include <map>
#include <functional>
using namespace std;

// Old style: typedef
typedef unsigned long ulong;
typedef vector<int> IntVec;
typedef map<string, vector<int>> ScoreMap;

// Modern style: using (C++11)
using uint = unsigned int;
using StringVec = vector<string>;
using Callback = function<void(int)>;

// Template aliases (only possible with using)
template<typename T>
using Vec = vector<T>;

template<typename K, typename V>
using Dict = map<K, V>;

int main() {
    IntVec numbers = {1, 2, 3, 4, 5};
    StringVec names = {"Alice", "Bob"};
    Vec<double> prices = {9.99, 19.99, 29.99};
    Dict<string, int> ages = {{"Alice", 30}, {"Bob", 25}};

    Callback print_double = [](int x) {
        cout << x * 2 << endl;
    };
    print_double(21);  // 42

    cout << "Count: " << numbers.size() << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-namespaces',
    name: 'Namespaces',
    category: 'cpp-basics',
    description: 'Namespaces group related declarations to prevent naming conflicts. The std namespace contains the standard library. You can create custom namespaces and nest them for modular organization.',
    codeExample: `#include <iostream>
#include <string>

// Custom namespace
namespace math {
    const double PI = 3.14159265;

    double circle_area(double radius) {
        return PI * radius * radius;
    }

    namespace geometry {
        struct Point {
            double x, y;
        };

        double distance(const Point& a, const Point& b) {
            double dx = a.x - b.x;
            double dy = a.y - b.y;
            return std::sqrt(dx * dx + dy * dy);
        }
    }
}

// Namespace alias
namespace geo = math::geometry;

int main() {
    // Fully qualified name
    double area = math::circle_area(5.0);
    std::cout << "Area: " << area << std::endl;

    // Using declaration (specific name)
    using math::PI;
    std::cout << "PI: " << PI << std::endl;

    // Using namespace (all names)
    using namespace math::geometry;
    Point p1{0, 0}, p2{3, 4};
    std::cout << "Distance: " << distance(p1, p2) << std::endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== CONTROL FLOW =====
  {
    id: 'cpp-if-else',
    name: 'If / Else',
    category: 'cpp-control-flow',
    description: 'Conditional statements evaluate boolean expressions to choose execution paths. C++ supports if, else if, and else blocks. C++17 added init-statements in if for scoped variable declarations.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int score = 85;

    // Basic if/else if/else
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }

    // C++17: if with init-statement
    if (auto len = string("hello").length(); len > 3) {
        cout << "Long string: " << len << " chars" << endl;
    }

    // Nested if
    int age = 20;
    bool has_license = true;
    if (age >= 18) {
        if (has_license) {
            cout << "Can drive" << endl;
        } else {
            cout << "Need a license" << endl;
        }
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-switch',
    name: 'Switch',
    category: 'cpp-control-flow',
    description: 'The switch statement selects one of many code blocks based on a value. It compares against constant expressions and uses break to prevent fall-through. C++17 adds [[fallthrough]] attribute.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    int day = 3;

    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
        case 5:
            cout << "Thursday or Friday" << endl;
            break;
        case 6:
        case 7:
            cout << "Weekend!" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
    }

    // C++17: switch with init-statement
    switch (auto ch = getchar(); ch) {
        case 'y':
        case 'Y':
            cout << "Yes" << endl;
            break;
        case 'n':
        case 'N':
            cout << "No" << endl;
            break;
        default:
            cout << "Unknown: " << ch << endl;
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-for-loop',
    name: 'For Loop',
    category: 'cpp-control-flow',
    description: 'The for loop provides a compact way to iterate with initialization, condition, and increment expressions. It is the most common loop for counted iterations and index-based array access.',
    codeExample: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Basic for loop
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;  // 0 1 2 3 4

    // Counting backwards
    for (int i = 10; i > 0; i -= 2) {
        cout << i << " ";
    }
    cout << endl;  // 10 8 6 4 2

    // Nested loops
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            cout << "(" << i << "," << j << ") ";
        }
        cout << endl;
    }

    // Multiple variables
    for (int i = 0, j = 10; i < j; i++, j--) {
        cout << i << "-" << j << " ";
    }
    cout << endl;  // 0-10 1-9 2-8 3-7 4-6

    // Iterating over array
    int arr[] = {10, 20, 30, 40, 50};
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-while-loop',
    name: 'While Loop',
    category: 'cpp-control-flow',
    description: 'The while loop repeats a block of code as long as its condition is true. It checks the condition before each iteration, making it suitable when the number of iterations is unknown.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    // Basic while loop
    int count = 0;
    while (count < 5) {
        cout << "Count: " << count << endl;
        count++;
    }

    // Sentinel value pattern
    int sum = 0;
    int num;
    cout << "Enter numbers (-1 to stop): ";
    cin >> num;
    while (num != -1) {
        sum += num;
        cin >> num;
    }
    cout << "Sum: " << sum << endl;

    // Processing digits
    int number = 12345;
    while (number > 0) {
        int digit = number % 10;
        cout << digit << " ";
        number /= 10;
    }
    // Output: 5 4 3 2 1
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-do-while',
    name: 'Do-While Loop',
    category: 'cpp-control-flow',
    description: 'The do-while loop executes the body at least once before checking the condition. It is ideal for input validation and menu-driven programs where the body must run before the test.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    // Input validation
    int age;
    do {
        cout << "Enter age (0-150): ";
        cin >> age;
    } while (age < 0 || age > 150);
    cout << "Valid age: " << age << endl;

    // Menu-driven program
    int choice;
    do {
        cout << "\\n=== Menu ===" << endl;
        cout << "1. New Game" << endl;
        cout << "2. Load Game" << endl;
        cout << "3. Settings" << endl;
        cout << "0. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;

        switch (choice) {
            case 1: cout << "Starting new game..." << endl; break;
            case 2: cout << "Loading game..." << endl; break;
            case 3: cout << "Opening settings..." << endl; break;
            case 0: cout << "Goodbye!" << endl; break;
            default: cout << "Invalid choice" << endl;
        }
    } while (choice != 0);
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-break-continue',
    name: 'Break & Continue',
    category: 'cpp-control-flow',
    description: 'break exits the innermost loop or switch immediately. continue skips the rest of the current iteration and proceeds to the next. Both alter the normal flow of loops.',
    codeExample: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Break: find first negative
    vector<int> nums = {5, 3, -1, 7, -2, 8};
    for (int n : nums) {
        if (n < 0) {
            cout << "First negative: " << n << endl;
            break;
        }
    }

    // Continue: skip even numbers
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;
        cout << i << " ";
    }
    cout << endl;  // 1 3 5 7 9

    // Break from nested loops (using flag)
    bool found = false;
    for (int i = 0; i < 10 && !found; i++) {
        for (int j = 0; j < 10 && !found; j++) {
            if (i * j == 42) {
                cout << "Found: " << i << " * " << j << endl;
                found = true;
            }
        }
    }

    // Continue to filter input
    for (int i = 1; i <= 20; i++) {
        if (i % 3 != 0) continue;
        cout << i << " is divisible by 3" << endl;
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-goto',
    name: 'Goto',
    category: 'cpp-control-flow',
    description: 'The goto statement provides an unconditional jump to a labeled statement. While generally discouraged, it has legitimate uses for breaking out of deeply nested loops and cleanup in C-style code.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    // Breaking out of nested loops (legitimate use)
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 100; j++) {
            for (int k = 0; k < 100; k++) {
                if (i + j + k == 150) {
                    cout << i << "+" << j << "+" << k << "=150" << endl;
                    goto done;  // exit all three loops
                }
            }
        }
    }
    done:
    cout << "Search complete" << endl;

    // Error handling / cleanup pattern (C-style)
    int* data = new int[100];
    if (!data) goto cleanup;

    // ... use data ...
    cout << "Processing data..." << endl;

    cleanup:
    delete[] data;
    cout << "Cleanup done" << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-range-based-for',
    name: 'Range-Based For',
    category: 'cpp-control-flow',
    description: 'Range-based for loops (C++11) iterate over all elements in a container or array automatically. They are cleaner than index-based loops and work with any type that provides begin() and end() iterators.',
    codeExample: `#include <iostream>
#include <vector>
#include <map>
#include <string>
using namespace std;

int main() {
    // Iterate over vector
    vector<int> nums = {1, 2, 3, 4, 5};
    for (int n : nums) {
        cout << n << " ";
    }
    cout << endl;

    // By reference (modifiable)
    for (int& n : nums) {
        n *= 2;
    }
    // nums is now {2, 4, 6, 8, 10}

    // Const reference (read-only, no copy)
    vector<string> names = {"Alice", "Bob", "Charlie"};
    for (const auto& name : names) {
        cout << name << endl;
    }

    // Iterate over map
    map<string, int> ages = {{"Alice", 30}, {"Bob", 25}};
    for (const auto& [name, age] : ages) {
        cout << name << ": " << age << endl;
    }

    // Over C-style array
    int arr[] = {10, 20, 30, 40, 50};
    for (auto val : arr) {
        cout << val << " ";
    }

    // Over initializer list
    for (auto x : {1, 2, 3, 4, 5}) {
        cout << x << " ";
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },

  // ===== FUNCTIONS =====
  {
    id: 'cpp-functions-basic',
    name: 'Functions',
    category: 'cpp-functions',
    description: 'Functions in C++ encapsulate reusable code blocks. They have a return type, name, and parameter list. Functions must be declared before use (via prototype or definition). Pass by value is the default.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Function prototype (declaration)
int add(int a, int b);
void greet(const string& name);

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(const string& name) {
    cout << "Hello, " << name << "!" << endl;
}

// Pass by value vs reference
void swap_val(int a, int b) {
    int temp = a; a = b; b = temp;  // no effect outside
}

void swap_ref(int& a, int& b) {
    int temp = a; a = b; b = temp;  // modifies originals
}

int main() {
    cout << add(3, 4) << endl;  // 7
    greet("Alice");

    int x = 5, y = 10;
    swap_val(x, y);
    cout << x << " " << y << endl;  // 5 10 (unchanged)

    swap_ref(x, y);
    cout << x << " " << y << endl;  // 10 5 (swapped)
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-overloading',
    name: 'Function Overloading',
    category: 'cpp-functions',
    description: 'C++ allows multiple functions with the same name but different parameter types or counts. The compiler selects the correct overload based on the arguments. Return type alone cannot distinguish overloads.',
    codeExample: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Overloaded print functions
void print(int value) {
    cout << "Integer: " << value << endl;
}

void print(double value) {
    cout << "Double: " << value << endl;
}

void print(const string& value) {
    cout << "String: " << value << endl;
}

void print(const vector<int>& values) {
    cout << "Vector: [";
    for (size_t i = 0; i < values.size(); i++) {
        if (i > 0) cout << ", ";
        cout << values[i];
    }
    cout << "]" << endl;
}

// Overloaded with different param count
int max(int a, int b) { return (a > b) ? a : b; }
int max(int a, int b, int c) { return max(max(a, b), c); }

int main() {
    print(42);                          // Integer: 42
    print(3.14);                        // Double: 3.14
    print(string("Hello"));            // String: Hello
    print(vector<int>{1, 2, 3});       // Vector: [1, 2, 3]
    cout << max(3, 7) << endl;         // 7
    cout << max(3, 7, 5) << endl;      // 7
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-default-params',
    name: 'Default Parameters',
    category: 'cpp-functions',
    description: 'Default parameters provide fallback values for function arguments that are not supplied by the caller. They must be specified from right to left and are typically declared in the function prototype.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Default parameters
void log(const string& message,
         const string& level = "INFO",
         bool timestamp = true) {
    if (timestamp) cout << "[12:00] ";
    cout << "[" << level << "] " << message << endl;
}

// Default with overloading
struct Color {
    int r, g, b, a;
    Color(int r = 0, int g = 0, int b = 0, int a = 255)
        : r(r), g(g), b(b), a(a) {}
};

string repeat(const string& str, int times = 1,
              const string& sep = " ") {
    string result;
    for (int i = 0; i < times; i++) {
        if (i > 0) result += sep;
        result += str;
    }
    return result;
}

int main() {
    log("Server started");               // [12:00] [INFO] Server started
    log("Disk full", "WARN");            // [12:00] [WARN] Disk full
    log("Crash!", "ERROR", false);       // [ERROR] Crash!

    Color red(255);
    Color white(255, 255, 255);

    cout << repeat("ha", 3) << endl;     // ha ha ha
    cout << repeat("na", 4, "-") << endl; // na-na-na-na
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-inline',
    name: 'Inline Functions',
    category: 'cpp-functions',
    description: 'Inline functions suggest the compiler replace calls with the function body to avoid overhead. Modern compilers make their own inlining decisions. The inline keyword also allows definitions in headers.',
    codeExample: `#include <iostream>
using namespace std;

// Inline function suggestion
inline int square(int x) {
    return x * x;
}

inline int max_of(int a, int b) {
    return (a > b) ? a : b;
}

// Inline in class (implicit)
class Circle {
    double radius;
public:
    Circle(double r) : radius(r) {}

    // Defined in-class: implicitly inline
    double area() const { return 3.14159 * radius * radius; }

    // Declaration only (not inline unless specified)
    double circumference() const;
};

// Can be defined inline in header
inline double Circle::circumference() const {
    return 2 * 3.14159 * radius;
}

int main() {
    // Compiler may replace these with direct computation
    cout << square(5) << endl;         // 25
    cout << max_of(10, 20) << endl;    // 20

    Circle c(5);
    cout << c.area() << endl;          // 78.5398
    cout << c.circumference() << endl; // 31.4159
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-recursion',
    name: 'Recursion',
    category: 'cpp-functions',
    description: 'Recursive functions call themselves to solve problems by breaking them into smaller subproblems. Each call must move toward a base case. Excessive recursion can cause stack overflow.',
    codeExample: `#include <iostream>
#include <vector>
using namespace std;

// Factorial
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci with memoization
long long fib(int n, vector<long long>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// Binary search (recursive)
int binary_search(const vector<int>& arr, int target,
                  int low, int high) {
    if (low > high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target)
        return binary_search(arr, target, mid + 1, high);
    return binary_search(arr, target, low, mid - 1);
}

int main() {
    cout << "5! = " << factorial(5) << endl;  // 120

    vector<long long> memo(50, -1);
    cout << "fib(40) = " << fib(40, memo) << endl;

    vector<int> sorted = {1, 3, 5, 7, 9, 11};
    cout << "Index of 7: "
         << binary_search(sorted, 7, 0, sorted.size() - 1) << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-function-pointers',
    name: 'Function Pointers',
    category: 'cpp-functions',
    description: 'Function pointers store the address of a function and can invoke it indirectly. They enable callbacks, strategy patterns, and dynamic dispatch. Modern C++ often prefers std::function and lambdas.',
    codeExample: `#include <iostream>
#include <functional>
using namespace std;

// Regular functions
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

// Function pointer type
typedef int (*Operation)(int, int);
// or: using Operation = int(*)(int, int);

// Higher-order function
int apply(Operation op, int a, int b) {
    return op(a, b);
}

// Callback pattern
void process(const int* data, int size,
             void (*callback)(int)) {
    for (int i = 0; i < size; i++) {
        callback(data[i]);
    }
}

void print_square(int n) {
    cout << n * n << " ";
}

int main() {
    // Using function pointers
    Operation op = add;
    cout << op(3, 4) << endl;       // 7
    cout << apply(multiply, 3, 4) << endl;  // 12

    // Array of function pointers
    Operation ops[] = {add, subtract, multiply};
    for (auto fn : ops) {
        cout << fn(10, 3) << " ";
    }
    cout << endl;  // 13 7 30

    // Callback
    int data[] = {1, 2, 3, 4, 5};
    process(data, 5, print_square);  // 1 4 9 16 25
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-templates',
    name: 'Templates',
    category: 'cpp-functions',
    description: 'Templates enable generic programming by parameterizing functions and classes with types. The compiler generates specialized code for each type used. Templates are the foundation of the STL.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Function template
template<typename T>
T max_val(T a, T b) {
    return (a > b) ? a : b;
}

// Template with multiple types
template<typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {
    return a + b;
}

// Class template
template<typename T, int Size>
class Array {
    T data[Size];
    int count = 0;
public:
    void push(const T& item) {
        if (count < Size) data[count++] = item;
    }
    T& operator[](int index) { return data[index]; }
    int size() const { return count; }
};

// Template specialization
template<typename T>
string type_name() { return "unknown"; }

template<>
string type_name<int>() { return "int"; }

template<>
string type_name<double>() { return "double"; }

int main() {
    cout << max_val(3, 7) << endl;        // 7
    cout << max_val(3.14, 2.72) << endl;  // 3.14
    cout << add(3, 4.5) << endl;          // 7.5

    Array<int, 5> arr;
    arr.push(10); arr.push(20); arr.push(30);
    cout << arr[1] << endl;               // 20

    cout << type_name<int>() << endl;     // int
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-variadic-templates',
    name: 'Variadic Templates',
    category: 'cpp-functions',
    description: 'Variadic templates (C++11) accept a variable number of template arguments. Combined with parameter packs and fold expressions (C++17), they enable type-safe variadic functions and recursive template patterns.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Recursive variadic template
template<typename T>
void print(const T& value) {
    cout << value << endl;  // base case
}

template<typename T, typename... Args>
void print(const T& first, const Args&... rest) {
    cout << first << ", ";
    print(rest...);  // recursive expansion
}

// C++17 fold expressions
template<typename... Args>
auto sum(Args... args) {
    return (args + ...);  // unary right fold
}

template<typename... Args>
void print_all(const Args&... args) {
    ((cout << args << " "), ...);  // fold with comma operator
    cout << endl;
}

// Variadic class (tuple-like)
template<typename... Types>
struct TypeList {
    static constexpr size_t size = sizeof...(Types);
};

int main() {
    print(1, "hello", 3.14, true);   // 1, hello, 3.14, true
    cout << sum(1, 2, 3, 4, 5) << endl;  // 15
    print_all("a", 42, 3.14, "z");  // a 42 3.14 z

    cout << "Types: " << TypeList<int, double, string>::size << endl; // 3
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },

  // ===== OOP =====
  {
    id: 'cpp-class',
    name: 'Class',
    category: 'cpp-oop',
    description: 'Classes in C++ define custom types that bundle data members and member functions. They support access control (public, private, protected), and provide the foundation for object-oriented design.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

class Dog {
private:
    string name;
    string breed;
    int age;

public:
    // Static member
    static int count;

    // Constructor
    Dog(const string& n, const string& b, int a)
        : name(n), breed(b), age(a) {
        count++;
    }

    // Member functions
    void bark() const {
        cout << name << " says: Woof!" << endl;
    }

    string description() const {
        return name + " is a " + to_string(age) +
               "-year-old " + breed;
    }

    // Getter
    const string& get_name() const { return name; }
};

int Dog::count = 0;  // static member initialization

int main() {
    Dog rex("Rex", "German Shepherd", 3);
    Dog buddy("Buddy", "Golden Retriever", 5);

    rex.bark();
    cout << buddy.description() << endl;
    cout << "Total dogs: " << Dog::count << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-constructor',
    name: 'Constructor & Destructor',
    category: 'cpp-oop',
    description: 'Constructors initialize objects when created. C++ supports default, parameterized, copy, and move constructors. Destructors clean up when objects are destroyed. Initializer lists are preferred for initialization.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

class Resource {
    string name;
    int* data;
    int size;

public:
    // Default constructor
    Resource() : name("default"), data(nullptr), size(0) {
        cout << "Default constructor: " << name << endl;
    }

    // Parameterized constructor
    Resource(const string& n, int s) : name(n), size(s) {
        data = new int[size];
        cout << "Parameterized constructor: " << name << endl;
    }

    // Copy constructor
    Resource(const Resource& other)
        : name(other.name + "_copy"), size(other.size) {
        data = new int[size];
        copy(other.data, other.data + size, data);
        cout << "Copy constructor: " << name << endl;
    }

    // Destructor
    ~Resource() {
        delete[] data;
        cout << "Destructor: " << name << endl;
    }

    const string& get_name() const { return name; }
};

int main() {
    Resource r1;                     // Default
    Resource r2("buffer", 100);      // Parameterized
    Resource r3 = r2;               // Copy
    cout << r3.get_name() << endl;  // buffer_copy
    return 0;  // destructors called in reverse order
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-inheritance',
    name: 'Inheritance',
    category: 'cpp-oop',
    description: 'Inheritance creates new classes from existing ones, inheriting members and behaviors. C++ supports public, protected, and private inheritance. Multiple inheritance is allowed but requires careful design.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

class Shape {
protected:
    string color;
public:
    Shape(const string& c) : color(c) {}
    virtual double area() const = 0;
    string get_color() const { return color; }
    virtual ~Shape() = default;
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r, const string& c = "black")
        : Shape(c), radius(r) {}
    double area() const override {
        return 3.14159 * radius * radius;
    }
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h, const string& c = "black")
        : Shape(c), width(w), height(h) {}
    double area() const override {
        return width * height;
    }
};

// Multiple inheritance
class Drawable {
public:
    virtual void draw() const = 0;
    virtual ~Drawable() = default;
};

class DrawableCircle : public Circle, public Drawable {
public:
    DrawableCircle(double r) : Circle(r, "red") {}
    void draw() const override {
        cout << "Drawing circle with area " << area() << endl;
    }
};

int main() {
    DrawableCircle dc(5);
    dc.draw();  // Drawing circle with area 78.5398
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-virtual',
    name: 'Virtual Functions',
    category: 'cpp-oop',
    description: 'Virtual functions enable runtime polymorphism through dynamic dispatch. When called via a base pointer/reference, the derived class version executes. Pure virtual functions (=0) create abstract classes.',
    codeExample: `#include <iostream>
#include <vector>
#include <memory>
using namespace std;

class Animal {
public:
    // Virtual function (can be overridden)
    virtual void speak() const {
        cout << "..." << endl;
    }

    // Pure virtual (must be overridden)
    virtual string type() const = 0;

    // Virtual destructor (essential for polymorphism)
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override { cout << "Woof!" << endl; }
    string type() const override { return "Dog"; }
};

class Cat : public Animal {
public:
    void speak() const override { cout << "Meow!" << endl; }
    string type() const override { return "Cat"; }
};

class Duck : public Animal {
public:
    void speak() const override { cout << "Quack!" << endl; }
    string type() const override { return "Duck"; }
};

int main() {
    // Polymorphism via base pointer
    vector<unique_ptr<Animal>> animals;
    animals.push_back(make_unique<Dog>());
    animals.push_back(make_unique<Cat>());
    animals.push_back(make_unique<Duck>());

    for (const auto& animal : animals) {
        cout << animal->type() << ": ";
        animal->speak();
    }
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-polymorphism',
    name: 'Polymorphism',
    category: 'cpp-oop',
    description: 'Polymorphism allows objects of different types to be treated through a common interface. C++ supports compile-time polymorphism (templates, overloading) and runtime polymorphism (virtual functions).',
    codeExample: `#include <iostream>
#include <vector>
#include <memory>
using namespace std;

// Runtime polymorphism
class Logger {
public:
    virtual void log(const string& msg) const = 0;
    virtual ~Logger() = default;
};

class ConsoleLogger : public Logger {
public:
    void log(const string& msg) const override {
        cout << "[CONSOLE] " << msg << endl;
    }
};

class FileLogger : public Logger {
public:
    void log(const string& msg) const override {
        cout << "[FILE] " << msg << endl;
    }
};

// Compile-time polymorphism (CRTP)
template<typename Derived>
class Printable {
public:
    void print() const {
        static_cast<const Derived*>(this)->print_impl();
    }
};

class MyClass : public Printable<MyClass> {
public:
    void print_impl() const {
        cout << "MyClass instance" << endl;
    }
};

// Use both kinds
void process(const Logger& logger) {
    logger.log("Processing started");
    logger.log("Processing complete");
}

int main() {
    ConsoleLogger console;
    FileLogger file;
    process(console);
    process(file);

    MyClass obj;
    obj.print();
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-abstract-class',
    name: 'Abstract Class',
    category: 'cpp-oop',
    description: 'Abstract classes have at least one pure virtual function and cannot be instantiated directly. They define interfaces that derived classes must implement, enabling the template method pattern.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Abstract base class (interface)
class Serializable {
public:
    virtual string serialize() const = 0;
    virtual void deserialize(const string& data) = 0;
    virtual ~Serializable() = default;
};

// Abstract class with partial implementation
class Document : public Serializable {
protected:
    string title;
    string content;

public:
    Document(const string& t) : title(t) {}

    // Template method pattern
    void save() {
        string data = serialize();
        cout << "Saving: " << data << endl;
    }

    void set_content(const string& c) { content = c; }
    virtual ~Document() = default;
};

class TextDocument : public Document {
public:
    TextDocument(const string& t) : Document(t) {}

    string serialize() const override {
        return "TEXT|" + title + "|" + content;
    }

    void deserialize(const string& data) override {
        // Parse TEXT|title|content format
        cout << "Loaded text: " << data << endl;
    }
};

int main() {
    // Document doc("test");  // ERROR: abstract class
    TextDocument doc("readme");
    doc.set_content("Hello World");
    doc.save();  // Saving: TEXT|readme|Hello World
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-operator-overloading',
    name: 'Operator Overloading',
    category: 'cpp-oop',
    description: 'C++ allows redefining how operators work with custom types. You can overload arithmetic, comparison, stream, and subscript operators to make classes intuitive and expressive.',
    codeExample: `#include <iostream>
using namespace std;

class Vector2D {
    double x, y;
public:
    Vector2D(double x = 0, double y = 0) : x(x), y(y) {}

    // Arithmetic operators
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }

    Vector2D operator*(double scalar) const {
        return Vector2D(x * scalar, y * scalar);
    }

    // Comparison
    bool operator==(const Vector2D& other) const {
        return x == other.x && y == other.y;
    }

    // Unary minus
    Vector2D operator-() const {
        return Vector2D(-x, -y);
    }

    // Compound assignment
    Vector2D& operator+=(const Vector2D& other) {
        x += other.x; y += other.y;
        return *this;
    }

    // Stream insertion (friend)
    friend ostream& operator<<(ostream& os, const Vector2D& v) {
        return os << "(" << v.x << ", " << v.y << ")";
    }
};

int main() {
    Vector2D a(3, 4), b(1, 2);
    cout << "a + b = " << a + b << endl;     // (4, 6)
    cout << "a * 3 = " << a * 3 << endl;     // (9, 12)
    cout << "-a = " << -a << endl;            // (-3, -4)
    cout << "a == b: " << (a == b) << endl;   // 0
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-friend',
    name: 'Friend',
    category: 'cpp-oop',
    description: 'The friend keyword grants a function or class access to private and protected members of another class. It enables operator overloading for non-member functions and tightly coupled helper classes.',
    codeExample: `#include <iostream>
using namespace std;

class Matrix;  // forward declaration

class Vector {
    double x, y;
public:
    Vector(double x, double y) : x(x), y(y) {}

    // Friend function
    friend double dot_product(const Vector& a, const Vector& b);

    // Friend class
    friend class Matrix;

    // Friend operator
    friend ostream& operator<<(ostream& os, const Vector& v);
};

double dot_product(const Vector& a, const Vector& b) {
    return a.x * b.x + a.y * b.y;  // access private members
}

ostream& operator<<(ostream& os, const Vector& v) {
    return os << "(" << v.x << ", " << v.y << ")";
}

class Matrix {
public:
    Vector transform(const Vector& v) {
        // Can access Vector's private members
        return Vector(v.x * 2, v.y * 2);
    }
};

int main() {
    Vector a(3, 4), b(1, 2);
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "a . b = " << dot_product(a, b) << endl;  // 11

    Matrix m;
    cout << "transform(a) = " << m.transform(a) << endl;  // (6, 8)
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-encapsulation',
    name: 'Encapsulation',
    category: 'cpp-oop',
    description: 'Encapsulation bundles data and methods together while restricting direct access to internal state. C++ uses public, private, and protected access specifiers. Getters and setters provide controlled access.',
    codeExample: `#include <iostream>
#include <string>
#include <stdexcept>
using namespace std;

class BankAccount {
private:
    string owner;
    double balance;
    int transaction_count;

    // Private helper
    void log_transaction(const string& type, double amount) {
        transaction_count++;
        cout << "[" << transaction_count << "] "
             << type << ": $" << amount << endl;
    }

public:
    BankAccount(const string& owner, double initial = 0)
        : owner(owner), balance(initial), transaction_count(0) {
        if (initial < 0) throw invalid_argument("Negative balance");
    }

    // Controlled access via methods
    double get_balance() const { return balance; }
    const string& get_owner() const { return owner; }

    void deposit(double amount) {
        if (amount <= 0) throw invalid_argument("Invalid deposit");
        balance += amount;
        log_transaction("DEPOSIT", amount);
    }

    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        log_transaction("WITHDRAW", amount);
        return true;
    }
};

int main() {
    BankAccount acc("Alice", 1000);
    acc.deposit(500);
    acc.withdraw(200);
    cout << "Balance: $" << acc.get_balance() << endl;
    // acc.balance = 999999;  // ERROR: private
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== MEMORY =====
  {
    id: 'cpp-pointers',
    name: 'Pointers',
    category: 'cpp-memory',
    description: 'Pointers store memory addresses of other variables. They enable dynamic memory allocation, pass-by-reference semantics, polymorphism, and data structure implementation. Understanding pointers is essential in C++.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
    // Basic pointer usage
    int x = 42;
    int* ptr = &x;       // ptr holds address of x

    cout << "Value: " << x << endl;        // 42
    cout << "Address: " << ptr << endl;     // 0x7fff...
    cout << "Deref: " << *ptr << endl;      // 42

    *ptr = 100;          // modify x through pointer
    cout << "x is now: " << x << endl;     // 100

    // Pointer arithmetic
    int arr[] = {10, 20, 30, 40, 50};
    int* p = arr;
    cout << *p << endl;       // 10
    cout << *(p + 2) << endl; // 30
    cout << p[3] << endl;     // 40

    // Null pointer
    int* null_ptr = nullptr;
    if (null_ptr == nullptr) {
        cout << "Pointer is null" << endl;
    }

    // Pointer to pointer
    int** pp = &ptr;
    cout << **pp << endl;  // 100

    // Void pointer (generic)
    void* generic = &x;
    cout << *static_cast<int*>(generic) << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-references',
    name: 'References',
    category: 'cpp-memory',
    description: 'References are aliases for existing variables. Unlike pointers, they must be initialized and cannot be reseated. They provide cleaner syntax for pass-by-reference and avoid null issues.',
    codeExample: `#include <iostream>
#include <string>
using namespace std;

// Pass by reference (modifies original)
void increment(int& value) {
    value++;
}

// Const reference (read-only, avoids copy)
void print_info(const string& name, const int& age) {
    cout << name << " is " << age << " years old" << endl;
}

// Return by reference
class Container {
    int data[10] = {};
public:
    int& at(int index) {
        return data[index];  // return reference for assignment
    }
    const int& at(int index) const {
        return data[index];  // const version
    }
};

int main() {
    // Basic reference
    int x = 42;
    int& ref = x;    // ref is an alias for x
    ref = 100;
    cout << x << endl;  // 100

    // Pass by reference
    int count = 0;
    increment(count);
    increment(count);
    cout << count << endl;  // 2

    // Const reference
    print_info("Alice", 30);

    // Reference from method
    Container c;
    c.at(0) = 42;
    c.at(1) = 84;
    cout << c.at(0) << endl;  // 42
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-new-delete',
    name: 'New / Delete',
    category: 'cpp-memory',
    description: 'new allocates memory on the heap and constructs objects. delete frees that memory. Array forms (new[] / delete[]) handle arrays. Mismatched new/delete or forgetting delete causes leaks.',
    codeExample: `#include <iostream>
using namespace std;

class Widget {
    string name;
public:
    Widget(const string& n) : name(n) {
        cout << "Created: " << name << endl;
    }
    ~Widget() {
        cout << "Destroyed: " << name << endl;
    }
    void use() { cout << "Using: " << name << endl; }
};

int main() {
    // Single object
    int* p = new int(42);
    cout << *p << endl;  // 42
    delete p;

    // Array allocation
    int* arr = new int[5]{10, 20, 30, 40, 50};
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    delete[] arr;  // MUST use delete[] for arrays

    // Object on heap
    Widget* w = new Widget("MyWidget");
    w->use();
    delete w;  // calls destructor, then frees memory

    // Danger: memory leak if we forget delete
    // int* leaked = new int(100);
    // ... forgot to delete! Memory leaked.

    // Prefer smart pointers instead (see smart_ptr)
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-smart-pointers',
    name: 'Smart Pointers',
    category: 'cpp-memory',
    description: 'Smart pointers (C++11) automatically manage heap memory. unique_ptr has sole ownership, shared_ptr allows shared ownership with reference counting, and weak_ptr breaks circular references.',
    codeExample: `#include <iostream>
#include <memory>
using namespace std;

class Resource {
    string name;
public:
    Resource(const string& n) : name(n) {
        cout << "Created: " << name << endl;
    }
    ~Resource() { cout << "Destroyed: " << name << endl; }
    void use() { cout << "Using: " << name << endl; }
};

int main() {
    // unique_ptr: exclusive ownership
    {
        auto res = make_unique<Resource>("UniqueRes");
        res->use();
        // auto copy = res;  // ERROR: can't copy unique_ptr
        auto moved = move(res);  // OK: transfer ownership
        moved->use();
    }  // automatically destroyed

    // shared_ptr: shared ownership
    shared_ptr<Resource> shared1;
    {
        auto shared2 = make_shared<Resource>("SharedRes");
        shared1 = shared2;
        cout << "Count: " << shared1.use_count() << endl;  // 2
    }
    cout << "Count: " << shared1.use_count() << endl;  // 1
    shared1->use();  // still alive

    // weak_ptr: non-owning observer
    weak_ptr<Resource> weak;
    {
        auto shared = make_shared<Resource>("WeakTarget");
        weak = shared;
        if (auto locked = weak.lock()) {
            locked->use();
        }
    }
    cout << "Expired: " << weak.expired() << endl;  // 1
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-raii',
    name: 'RAII',
    category: 'cpp-memory',
    description: 'Resource Acquisition Is Initialization ties resource lifetimes to object lifetimes. Resources are acquired in constructors and released in destructors, ensuring exception-safe cleanup.',
    codeExample: `#include <iostream>
#include <fstream>
#include <mutex>
using namespace std;

// RAII file handle
class FileHandle {
    FILE* file;
public:
    FileHandle(const char* path, const char* mode)
        : file(fopen(path, mode)) {
        if (!file) throw runtime_error("Cannot open file");
        cout << "File opened" << endl;
    }

    ~FileHandle() {
        if (file) {
            fclose(file);
            cout << "File closed" << endl;
        }
    }

    // Non-copyable
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;

    // Movable
    FileHandle(FileHandle&& other) noexcept : file(other.file) {
        other.file = nullptr;
    }

    void write(const string& data) {
        fputs(data.c_str(), file);
    }
};

// RAII lock guard
class LockGuard {
    mutex& mtx;
public:
    LockGuard(mutex& m) : mtx(m) { mtx.lock(); }
    ~LockGuard() { mtx.unlock(); }
    LockGuard(const LockGuard&) = delete;
};

int main() {
    // File automatically closed when scope exits
    try {
        FileHandle file("/tmp/test.txt", "w");
        file.write("Hello RAII!\\n");
        // even if an exception occurs, destructor runs
    } catch (const exception& e) {
        cerr << e.what() << endl;
    }

    // STL already uses RAII: fstream, lock_guard, unique_ptr
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-move-semantics',
    name: 'Move Semantics',
    category: 'cpp-memory',
    description: 'Move semantics (C++11) transfer resources from temporary objects instead of copying them. Move constructors and move assignment operators use rvalue references (&&) for efficient resource transfer.',
    codeExample: `#include <iostream>
#include <string>
#include <utility>
using namespace std;

class Buffer {
    int* data;
    size_t size;
    string name;

public:
    Buffer(const string& n, size_t s) : size(s), name(n) {
        data = new int[size];
        cout << "Constructed: " << name << endl;
    }

    // Copy constructor (expensive)
    Buffer(const Buffer& other)
        : size(other.size), name(other.name + "_copy") {
        data = new int[size];
        copy(other.data, other.data + size, data);
        cout << "Copied: " << name << endl;
    }

    // Move constructor (cheap - steal resources)
    Buffer(Buffer&& other) noexcept
        : data(other.data), size(other.size),
          name(move(other.name)) {
        other.data = nullptr;
        other.size = 0;
        cout << "Moved: " << name << endl;
    }

    ~Buffer() {
        delete[] data;
    }

    size_t get_size() const { return size; }
};

Buffer create_buffer() {
    return Buffer("temp", 1000);  // move, not copy
}

int main() {
    Buffer b1("original", 100);
    Buffer b2 = move(b1);         // explicit move
    Buffer b3 = create_buffer();  // move from return

    cout << "b2 size: " << b2.get_size() << endl;
    cout << "b1 size: " << b1.get_size() << endl;  // 0 (moved from)
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-memory-leaks',
    name: 'Memory Leaks',
    category: 'cpp-memory',
    description: 'Memory leaks occur when dynamically allocated memory is never freed. They cause programs to consume increasing amounts of memory. Prevention strategies include RAII, smart pointers, and tools like Valgrind.',
    codeExample: `#include <iostream>
#include <memory>
using namespace std;

// BAD: Memory leak examples
void leak_example() {
    // Leak 1: Forgot to delete
    int* p = new int(42);
    // ... missing delete p;

    // Leak 2: Exception before delete
    int* arr = new int[100];
    // if something throws here, delete[] never runs
    delete[] arr;

    // Leak 3: Overwritten pointer
    int* q = new int(1);
    q = new int(2);  // first allocation leaked!
    delete q;
}

// GOOD: Leak-proof patterns
void safe_example() {
    // Pattern 1: Smart pointers
    auto p = make_unique<int>(42);
    // automatically freed when scope exits

    // Pattern 2: RAII containers
    auto arr = make_unique<int[]>(100);

    // Pattern 3: Stack allocation when possible
    int local_arr[100];  // no heap, no leak

    // Pattern 4: std containers
    vector<int> vec(100);  // manages its own memory
}

// Detection: compile with address sanitizer
// g++ -fsanitize=address -g program.cpp
// Or use: valgrind --leak-check=full ./program

int main() {
    safe_example();
    cout << "No leaks!" << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== STL =====
  {
    id: 'cpp-vector',
    name: 'Vector',
    category: 'cpp-stl',
    description: 'std::vector is a dynamic array that grows automatically. It provides O(1) random access, amortized O(1) push_back, and contiguous memory layout. It is the most commonly used STL container.',
    codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Creation
    vector<int> v1;                     // empty
    vector<int> v2 = {1, 2, 3, 4, 5};  // initializer list
    vector<int> v3(10, 0);             // 10 zeros

    // Adding elements
    v1.push_back(10);
    v1.push_back(20);
    v1.emplace_back(30);  // construct in-place

    // Access
    cout << v2[0] << endl;      // 1 (no bounds check)
    cout << v2.at(1) << endl;   // 2 (with bounds check)
    cout << v2.front() << endl; // 1
    cout << v2.back() << endl;  // 5

    // Size and capacity
    cout << "Size: " << v2.size() << endl;
    cout << "Capacity: " << v2.capacity() << endl;

    // Sorting
    sort(v2.begin(), v2.end());
    sort(v2.begin(), v2.end(), greater<int>());  // descending

    // Removing elements
    v2.erase(v2.begin() + 2);  // remove at index 2
    v2.pop_back();               // remove last

    // Range-based iteration
    for (const auto& val : v2) {
        cout << val << " ";
    }
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-array',
    name: 'Array',
    category: 'cpp-stl',
    description: 'std::array (C++11) is a fixed-size container that wraps C-style arrays. It provides bounds checking with at(), knows its own size, and integrates with STL algorithms while having zero overhead.',
    codeExample: `#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

int main() {
    // Creation
    array<int, 5> arr = {10, 20, 30, 40, 50};
    array<double, 3> doubles{};  // zero-initialized

    // Access
    cout << arr[0] << endl;       // 10
    cout << arr.at(2) << endl;    // 30 (bounds checked)
    cout << arr.front() << endl;  // 10
    cout << arr.back() << endl;   // 50

    // Size (known at compile time)
    cout << "Size: " << arr.size() << endl;

    // Fill
    array<int, 4> filled;
    filled.fill(42);

    // Sort
    array<int, 5> unsorted = {5, 3, 1, 4, 2};
    sort(unsorted.begin(), unsorted.end());

    // Comparison (element-wise)
    array<int, 3> a = {1, 2, 3};
    array<int, 3> b = {1, 2, 4};
    cout << (a < b) << endl;  // 1 (true)

    // Structured bindings (C++17)
    auto [x, y, z] = a;
    cout << x << " " << y << " " << z << endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-map',
    name: 'Map',
    category: 'cpp-stl',
    description: 'std::map is an ordered associative container that stores key-value pairs in a red-black tree. Keys are sorted, and operations are O(log n). It supports unique keys with automatic ordering.',
    codeExample: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // Creation
    map<string, int> ages = {
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35}
    };

    // Insert and access
    ages["Dave"] = 28;
    ages.insert({"Eve", 22});
    ages.emplace("Frank", 40);

    // Safe access
    cout << ages["Alice"] << endl;  // 30
    auto it = ages.find("Bob");
    if (it != ages.end()) {
        cout << it->first << ": " << it->second << endl;
    }

    // Check existence
    if (ages.count("Charlie") > 0) {
        cout << "Charlie found" << endl;
    }

    // Iterate (ordered by key)
    for (const auto& [name, age] : ages) {
        cout << name << ": " << age << endl;
    }

    // Erase
    ages.erase("Dave");

    // Size
    cout << "Count: " << ages.size() << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-unordered-map',
    name: 'Unordered Map',
    category: 'cpp-stl',
    description: 'std::unordered_map uses a hash table for O(1) average-case lookups. It trades ordering for speed compared to std::map. Custom types need a hash function to be used as keys.',
    codeExample: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    // Creation
    unordered_map<string, int> freq;

    // Count word frequencies
    string words[] = {"the", "cat", "sat", "on", "the", "mat", "the"};
    for (const auto& word : words) {
        freq[word]++;
    }

    // Access and iteration (unordered)
    for (const auto& [word, count] : freq) {
        cout << word << ": " << count << endl;
    }

    // O(1) average lookup
    cout << "the: " << freq["the"] << endl;  // 3

    // Check and access
    if (auto it = freq.find("cat"); it != freq.end()) {
        cout << "Found cat: " << it->second << endl;
    }

    // Bucket info (hash table internals)
    cout << "Buckets: " << freq.bucket_count() << endl;
    cout << "Load factor: " << freq.load_factor() << endl;

    // Reserve for performance
    unordered_map<int, string> big;
    big.reserve(1000);  // pre-allocate buckets
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-set',
    name: 'Set',
    category: 'cpp-stl',
    description: 'std::set stores unique elements in sorted order using a balanced binary tree. Operations are O(log n). std::unordered_set provides O(1) average with hash table. Both enforce uniqueness.',
    codeExample: `#include <iostream>
#include <set>
#include <unordered_set>
using namespace std;

int main() {
    // Ordered set
    set<int> s = {5, 3, 1, 4, 2, 3, 1};  // duplicates removed
    // Contents: {1, 2, 3, 4, 5}

    s.insert(6);
    s.erase(3);

    // Iteration (sorted)
    for (int val : s) {
        cout << val << " ";
    }
    cout << endl;  // 1 2 4 5 6

    // Lookup
    if (s.count(4) > 0) cout << "4 found" << endl;
    auto it = s.find(5);
    if (it != s.end()) cout << "Found: " << *it << endl;

    // Set operations
    set<int> a = {1, 2, 3, 4};
    set<int> b = {3, 4, 5, 6};
    set<int> result;

    set_intersection(a.begin(), a.end(), b.begin(), b.end(),
                     inserter(result, result.begin()));
    cout << "Intersection: ";
    for (int v : result) cout << v << " ";  // 3 4
    cout << endl;

    // Unordered set (O(1) average)
    unordered_set<string> words = {"hello", "world", "hello"};
    cout << "Unique words: " << words.size() << endl;  // 2
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-stack-queue',
    name: 'Stack & Queue',
    category: 'cpp-stl',
    description: 'std::stack provides LIFO (Last-In-First-Out) access, while std::queue provides FIFO (First-In-First-Out). Both are container adapters built on top of deque by default.',
    codeExample: `#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    // Stack (LIFO)
    stack<int> stk;
    stk.push(10);
    stk.push(20);
    stk.push(30);

    cout << "Stack top: " << stk.top() << endl;  // 30
    stk.pop();
    cout << "Stack top: " << stk.top() << endl;  // 20
    cout << "Size: " << stk.size() << endl;       // 2

    // Queue (FIFO)
    queue<string> q;
    q.push("Alice");
    q.push("Bob");
    q.push("Charlie");

    cout << "Front: " << q.front() << endl;  // Alice
    cout << "Back: " << q.back() << endl;    // Charlie
    q.pop();
    cout << "Front: " << q.front() << endl;  // Bob

    // Process queue
    while (!q.empty()) {
        cout << "Processing: " << q.front() << endl;
        q.pop();
    }

    // Balanced parentheses check (stack use case)
    string expr = "((a+b)*(c-d))";
    stack<char> paren;
    bool valid = true;
    for (char c : expr) {
        if (c == '(') paren.push(c);
        else if (c == ')') {
            if (paren.empty()) { valid = false; break; }
            paren.pop();
        }
    }
    valid = valid && paren.empty();
    cout << expr << " is " << (valid ? "valid" : "invalid") << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-deque',
    name: 'Deque',
    category: 'cpp-stl',
    description: 'std::deque (double-ended queue) supports O(1) insertion and removal at both ends. Unlike vector, it does not guarantee contiguous memory but allows efficient front operations.',
    codeExample: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq = {3, 4, 5};

    // Add to both ends
    dq.push_front(2);
    dq.push_front(1);
    dq.push_back(6);
    dq.push_back(7);
    // dq: {1, 2, 3, 4, 5, 6, 7}

    // Remove from both ends
    dq.pop_front();
    dq.pop_back();
    // dq: {2, 3, 4, 5, 6}

    // Random access
    cout << dq[0] << endl;    // 2
    cout << dq.at(2) << endl;  // 4

    // Iterate
    for (const auto& val : dq) {
        cout << val << " ";
    }
    cout << endl;

    // Sliding window example
    deque<int> window;
    int data[] = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;
    for (int i = 0; i < 8; i++) {
        window.push_back(data[i]);
        if (window.size() > k) window.pop_front();
        if (window.size() == k) {
            cout << "Window: ";
            for (int v : window) cout << v << " ";
            cout << endl;
        }
    }
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-priority-queue',
    name: 'Priority Queue',
    category: 'cpp-stl',
    description: 'std::priority_queue is a max-heap by default that provides O(log n) insertion and O(1) access to the largest element. Custom comparators create min-heaps or use custom ordering.',
    codeExample: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    // Max-heap (default)
    priority_queue<int> maxHeap;
    maxHeap.push(30);
    maxHeap.push(10);
    maxHeap.push(50);
    maxHeap.push(20);

    cout << "Max: " << maxHeap.top() << endl;  // 50
    maxHeap.pop();
    cout << "Max: " << maxHeap.top() << endl;  // 30

    // Min-heap
    priority_queue<int, vector<int>, greater<int>> minHeap;
    minHeap.push(30);
    minHeap.push(10);
    minHeap.push(50);
    cout << "Min: " << minHeap.top() << endl;  // 10

    // Custom comparator (task scheduling)
    struct Task {
        string name;
        int priority;
    };

    auto cmp = [](const Task& a, const Task& b) {
        return a.priority < b.priority;  // higher priority first
    };
    priority_queue<Task, vector<Task>, decltype(cmp)> tasks(cmp);

    tasks.push({"Low task", 1});
    tasks.push({"Critical task", 10});
    tasks.push({"Medium task", 5});

    while (!tasks.empty()) {
        cout << tasks.top().name << " (p=" << tasks.top().priority << ")" << endl;
        tasks.pop();
    }
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-string',
    name: 'String',
    category: 'cpp-stl',
    description: 'std::string is a dynamic character array with rich methods for manipulation. It handles memory automatically, supports concatenation, comparison, searching, and integrates with streams and algorithms.',
    codeExample: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    // Creation
    string s1 = "Hello";
    string s2("World");
    string s3(5, 'x');     // "xxxxx"

    // Concatenation
    string greeting = s1 + ", " + s2 + "!";
    s1 += " there";

    // Access
    cout << greeting[0] << endl;     // H
    cout << greeting.at(7) << endl;  // W

    // Methods
    cout << greeting.length() << endl;
    cout << greeting.substr(0, 5) << endl;   // Hello
    cout << greeting.find("World") << endl;  // 7
    greeting.replace(7, 5, "C++");
    cout << greeting << endl;  // Hello, C++!

    // Comparison
    cout << ("abc" < "abd") << endl;  // 1

    // Conversion
    int num = stoi("42");
    double pi = stod("3.14");
    string ns = to_string(123);

    // Iterate characters
    string text = "Hello, World!";
    for (char& c : text) {
        c = toupper(c);
    }
    cout << text << endl;  // HELLO, WORLD!

    // Reverse
    reverse(text.begin(), text.end());
    cout << text << endl;  // !DLROW ,OLLEH
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-pair-tuple',
    name: 'Pair & Tuple',
    category: 'cpp-stl',
    description: 'std::pair holds two values, std::tuple holds any number. They are useful for returning multiple values, composite keys, and temporary groupings without defining a struct.',
    codeExample: `#include <iostream>
#include <tuple>
#include <utility>
#include <string>
using namespace std;

// Return multiple values with pair
pair<int, int> min_max(const int* arr, int n) {
    int lo = arr[0], hi = arr[0];
    for (int i = 1; i < n; i++) {
        lo = min(lo, arr[i]);
        hi = max(hi, arr[i]);
    }
    return {lo, hi};
}

// Return multiple values with tuple
tuple<string, int, double> get_student() {
    return {"Alice", 20, 3.95};
}

int main() {
    // Pair
    pair<string, int> p = {"Alice", 30};
    cout << p.first << ": " << p.second << endl;

    auto [lo, hi] = min_max(new int[]{3, 1, 7, 2, 9}, 5);
    cout << "Min: " << lo << " Max: " << hi << endl;

    // Tuple
    auto student = get_student();
    cout << get<0>(student) << endl;  // Alice

    // Structured bindings (C++17)
    auto [name, age, gpa] = get_student();
    cout << name << ", " << age << ", " << gpa << endl;

    // Make pair/tuple
    auto mp = make_pair("key", 42);
    auto mt = make_tuple(1, "hello", 3.14);

    // Tie for unpacking
    string n; int a; double g;
    tie(n, a, g) = get_student();
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-iterators',
    name: 'Iterators',
    category: 'cpp-stl',
    description: 'Iterators are generalized pointers that provide a uniform way to traverse containers. They come in categories: input, output, forward, bidirectional, and random access, each with different capabilities.',
    codeExample: `#include <iostream>
#include <vector>
#include <list>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};

    // Iterator traversal
    for (auto it = nums.begin(); it != nums.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    // Reverse iterator
    for (auto it = nums.rbegin(); it != nums.rend(); ++it) {
        cout << *it << " ";
    }
    cout << endl;  // 50 40 30 20 10

    // Const iterator
    for (auto it = nums.cbegin(); it != nums.cend(); ++it) {
        cout << *it << " ";
        // *it = 99;  // ERROR: const
    }
    cout << endl;

    // Iterator arithmetic (random access)
    auto mid = nums.begin() + nums.size() / 2;
    cout << "Middle: " << *mid << endl;

    // Find with iterators
    auto found = find(nums.begin(), nums.end(), 30);
    if (found != nums.end()) {
        cout << "Found at index: " << distance(nums.begin(), found) << endl;
    }

    // Erase using iterator
    nums.erase(nums.begin() + 1);  // remove 20

    // Insert using iterator
    nums.insert(nums.begin() + 1, 15);
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-algorithms',
    name: 'Algorithms',
    category: 'cpp-stl',
    description: 'The <algorithm> header provides generic functions for searching, sorting, transforming, and manipulating ranges. They work with iterators, making them container-agnostic and highly reusable.',
    codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {5, 3, 8, 1, 9, 2, 7, 4, 6};

    // Sorting
    sort(v.begin(), v.end());
    // v: {1, 2, 3, 4, 5, 6, 7, 8, 9}

    // Binary search (on sorted range)
    bool found = binary_search(v.begin(), v.end(), 5);

    // Min/Max
    auto [mn, mx] = minmax_element(v.begin(), v.end());
    cout << "Min: " << *mn << " Max: " << *mx << endl;

    // Transform
    vector<int> doubled(v.size());
    transform(v.begin(), v.end(), doubled.begin(),
              [](int x) { return x * 2; });

    // Accumulate (sum)
    int total = accumulate(v.begin(), v.end(), 0);

    // Count and find
    int count = count_if(v.begin(), v.end(),
                         [](int x) { return x > 5; });
    auto it = find_if(v.begin(), v.end(),
                      [](int x) { return x > 5; });

    // Remove-erase idiom
    v.erase(remove_if(v.begin(), v.end(),
            [](int x) { return x % 2 == 0; }), v.end());

    // For each
    for_each(v.begin(), v.end(), [](int x) {
        cout << x << " ";
    });
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== MODERN C++ =====
  {
    id: 'cpp-lambda',
    name: 'Lambda Expressions',
    category: 'cpp-modern',
    description: 'Lambdas (C++11) are anonymous function objects defined inline. They capture variables from the enclosing scope by value or reference. C++14 added generic lambdas, and C++20 added template lambdas.',
    codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Basic lambda
    auto greet = []() { cout << "Hello!" << endl; };
    greet();

    // Lambda with parameters and return
    auto add = [](int a, int b) -> int { return a + b; };
    cout << add(3, 4) << endl;  // 7

    // Capture by value
    int factor = 3;
    auto multiply = [factor](int x) { return x * factor; };
    cout << multiply(5) << endl;  // 15

    // Capture by reference
    int total = 0;
    auto accumulate = [&total](int x) { total += x; };
    accumulate(10);
    accumulate(20);
    cout << total << endl;  // 30

    // Capture all by value [=] or reference [&]
    int a = 1, b = 2;
    auto sum_all = [=]() { return a + b; };
    auto inc_all = [&]() { a++; b++; };

    // Generic lambda (C++14)
    auto print = [](const auto& x) { cout << x << endl; };
    print(42);
    print("hello");
    print(3.14);

    // Lambda with STL
    vector<int> nums = {5, 2, 8, 1, 9};
    sort(nums.begin(), nums.end(), [](int a, int b) {
        return a > b;  // descending
    });
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-constexpr',
    name: 'Constexpr',
    category: 'cpp-modern',
    description: 'constexpr declares that a value or function can be evaluated at compile time. C++14 relaxed restrictions on constexpr functions. C++17 added if constexpr for compile-time branching.',
    codeExample: `#include <iostream>
#include <array>
using namespace std;

// Constexpr function (evaluated at compile time)
constexpr int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Constexpr class
class Point {
    double x, y;
public:
    constexpr Point(double x, double y) : x(x), y(y) {}
    constexpr double get_x() const { return x; }
    constexpr double get_y() const { return y; }
};

// If constexpr (C++17) - compile-time branching
template<typename T>
auto process(T value) {
    if constexpr (is_integral_v<T>) {
        return value * 2;
    } else if constexpr (is_floating_point_v<T>) {
        return value + 0.5;
    } else {
        return value;
    }
}

int main() {
    // Compile-time computation
    constexpr int fact5 = factorial(5);  // computed at compile time
    static_assert(fact5 == 120, "5! should be 120");

    constexpr Point origin(0, 0);
    constexpr Point p(3, 4);

    // Compile-time array size
    constexpr int N = factorial(4);
    array<int, N> arr{};  // array of 24 elements

    cout << "5! = " << fact5 << endl;
    cout << process(42) << endl;      // 84
    cout << process(3.14) << endl;    // 3.64
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-nullptr',
    name: 'Nullptr',
    category: 'cpp-modern',
    description: 'nullptr (C++11) is a type-safe null pointer constant that replaces the ambiguous NULL macro. It has its own type (std::nullptr_t) and resolves overload ambiguities that NULL caused.',
    codeExample: `#include <iostream>
using namespace std;

// Overloaded functions
void process(int value) {
    cout << "Integer: " << value << endl;
}

void process(int* ptr) {
    if (ptr) {
        cout << "Pointer to: " << *ptr << endl;
    } else {
        cout << "Null pointer" << endl;
    }
}

class Node {
    int data;
    Node* next;
public:
    Node(int d) : data(d), next(nullptr) {}

    void set_next(Node* n) { next = n; }

    void print_chain() const {
        const Node* current = this;
        while (current != nullptr) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "null" << endl;
    }
};

int main() {
    // nullptr vs NULL
    // process(NULL);     // ambiguous! int or int*?
    process(nullptr);     // clearly calls process(int*)

    int x = 42;
    process(&x);         // calls process(int*)
    process(0);          // calls process(int)

    // Null check
    int* ptr = nullptr;
    if (ptr == nullptr) {
        cout << "ptr is null" << endl;
    }

    // Linked list example
    Node a(1), b(2), c(3);
    a.set_next(&b);
    b.set_next(&c);
    a.print_chain();  // 1 -> 2 -> 3 -> null
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-structured-bindings',
    name: 'Structured Bindings',
    category: 'cpp-modern',
    description: 'Structured bindings (C++17) decompose objects into named variables. They work with arrays, tuples, pairs, and structs, making code more readable when working with composite types.',
    codeExample: `#include <iostream>
#include <map>
#include <tuple>
using namespace std;

struct Point {
    double x, y, z;
};

tuple<string, int, double> get_student() {
    return {"Alice", 20, 3.95};
}

int main() {
    // Array decomposition
    int arr[] = {1, 2, 3};
    auto [a, b, c] = arr;
    cout << a << " " << b << " " << c << endl;

    // Pair decomposition
    pair<string, int> p = {"age", 25};
    auto [key, value] = p;
    cout << key << " = " << value << endl;

    // Tuple decomposition
    auto [name, age, gpa] = get_student();
    cout << name << ", " << age << ", " << gpa << endl;

    // Struct decomposition
    Point pt{3.0, 4.0, 5.0};
    auto [x, y, z] = pt;
    cout << "(" << x << ", " << y << ", " << z << ")" << endl;

    // Map iteration
    map<string, int> scores = {{"Alice", 95}, {"Bob", 87}};
    for (const auto& [student, score] : scores) {
        cout << student << ": " << score << endl;
    }

    // With references
    auto& [px, py, pz] = pt;
    px = 10.0;  // modifies pt.x
    cout << pt.x << endl;  // 10
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-optional',
    name: 'Optional',
    category: 'cpp-modern',
    description: 'std::optional (C++17) represents a value that may or may not be present. It is a safer alternative to using pointers or sentinel values to represent missing data, making intent explicit.',
    codeExample: `#include <iostream>
#include <optional>
#include <string>
#include <vector>
using namespace std;

// Return optional instead of null/sentinel
optional<int> find_index(const vector<int>& v, int target) {
    for (size_t i = 0; i < v.size(); i++) {
        if (v[i] == target) return i;
    }
    return nullopt;  // no value
}

optional<string> get_env(const string& name) {
    const char* val = getenv(name.c_str());
    if (val) return string(val);
    return nullopt;
}

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};

    // Check if value exists
    auto result = find_index(nums, 30);
    if (result.has_value()) {
        cout << "Found at index: " << result.value() << endl;
    }

    // Shorthand with *
    if (auto idx = find_index(nums, 30)) {
        cout << "Found at: " << *idx << endl;
    }

    // Value or default
    auto missing = find_index(nums, 99);
    cout << missing.value_or(-1) << endl;  // -1

    // Transform chain
    auto env = get_env("HOME");
    cout << "HOME: " << env.value_or("not set") << endl;

    // Construction
    optional<string> name = "Alice";
    optional<string> empty;
    optional<int> answer = 42;
    cout << answer.value() << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-variant',
    name: 'Variant',
    category: 'cpp-modern',
    description: 'std::variant (C++17) is a type-safe union that holds one of several specified types. It prevents undefined behavior from C unions and supports visitation patterns for type-safe access.',
    codeExample: `#include <iostream>
#include <variant>
#include <string>
#include <vector>
using namespace std;

// Type-safe union
using JsonValue = variant<int, double, string, bool>;

// Visitor pattern
struct JsonPrinter {
    void operator()(int v) const { cout << "int: " << v; }
    void operator()(double v) const { cout << "double: " << v; }
    void operator()(const string& v) const { cout << "string: " << v; }
    void operator()(bool v) const { cout << "bool: " << (v ? "true" : "false"); }
};

int main() {
    // Basic usage
    variant<int, double, string> v;
    v = 42;
    cout << get<int>(v) << endl;  // 42

    v = 3.14;
    cout << get<double>(v) << endl;  // 3.14

    v = "hello"s;
    cout << get<string>(v) << endl;

    // Check which type is active
    cout << "Index: " << v.index() << endl;  // 2 (string)
    cout << holds_alternative<string>(v) << endl;  // 1

    // Visit pattern
    vector<JsonValue> values = {42, 3.14, "hello"s, true};
    for (const auto& val : values) {
        visit(JsonPrinter{}, val);
        cout << endl;
    }

    // Lambda visitor
    for (const auto& val : values) {
        visit([](const auto& v) { cout << v << " "; }, val);
    }
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-concepts',
    name: 'Concepts',
    category: 'cpp-modern',
    description: 'Concepts (C++20) define named constraints on template parameters. They produce clear error messages, enable function overloading based on type properties, and replace SFINAE patterns.',
    codeExample: `#include <iostream>
#include <concepts>
#include <string>
using namespace std;

// Define a concept
template<typename T>
concept Numeric = is_arithmetic_v<T>;

template<typename T>
concept Printable = requires(T t) {
    { cout << t } -> same_as<ostream&>;
};

template<typename T>
concept Container = requires(T c) {
    c.begin();
    c.end();
    c.size();
    typename T::value_type;
};

// Use concepts to constrain templates
template<Numeric T>
T add(T a, T b) {
    return a + b;
}

template<Container C>
void print_all(const C& container) {
    for (const auto& item : container) {
        cout << item << " ";
    }
    cout << endl;
}

// Shorthand syntax (C++20)
void print_value(Printable auto const& value) {
    cout << "Value: " << value << endl;
}

// Requires clause
template<typename T>
requires Numeric<T> && (sizeof(T) >= 4)
T safe_add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(3, 4) << endl;       // 7
    cout << add(3.14, 2.72) << endl; // 5.86
    // add("a", "b");  // ERROR: string is not Numeric

    vector<int> v = {1, 2, 3};
    print_all(v);
    print_value(42);
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-ranges',
    name: 'Ranges',
    category: 'cpp-modern',
    description: 'Ranges (C++20) provide composable, lazy operations on sequences. Views transform data without copying. The pipe operator (|) chains operations for readable data processing pipelines.',
    codeExample: `#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>
using namespace std;
namespace rv = std::ranges::views;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Filter and transform with pipe syntax
    auto result = nums
        | rv::filter([](int n) { return n % 2 == 0; })
        | rv::transform([](int n) { return n * n; });

    for (int val : result) {
        cout << val << " ";
    }
    cout << endl;  // 4 16 36 64 100

    // Take and drop
    auto first_five = nums | rv::take(5);
    auto skip_three = nums | rv::drop(3);

    // Reverse
    for (int val : nums | rv::reverse | rv::take(3)) {
        cout << val << " ";
    }
    cout << endl;  // 10 9 8

    // Generate a range
    for (int val : rv::iota(1, 6)) {
        cout << val << " ";
    }
    cout << endl;  // 1 2 3 4 5

    // Chained pipeline
    auto pipeline = rv::iota(1, 100)
        | rv::filter([](int n) { return n % 3 == 0; })
        | rv::transform([](int n) { return n * n; })
        | rv::take(5);

    for (int val : pipeline) {
        cout << val << " ";
    }
    cout << endl;  // 9 36 81 144 225
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },

  // ===== ERROR HANDLING =====
  {
    id: 'cpp-try-catch',
    name: 'Try / Catch',
    category: 'cpp-error-handling',
    description: 'C++ exception handling uses try blocks to wrap code that may throw, catch blocks to handle exceptions by type, and throw to raise exceptions. Multiple catch blocks handle different exception types.',
    codeExample: `#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

double safe_divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero");
    }
    return a / b;
}

int parse_int(const string& s) {
    try {
        return stoi(s);
    } catch (const invalid_argument& e) {
        throw runtime_error("Invalid number: " + s);
    } catch (const out_of_range& e) {
        throw runtime_error("Number too large: " + s);
    }
}

int main() {
    // Basic try/catch
    try {
        double result = safe_divide(10, 0);
        cout << result << endl;
    } catch (const runtime_error& e) {
        cerr << "Error: " << e.what() << endl;
    }

    // Multiple catch blocks
    try {
        int n = parse_int("not_a_number");
    } catch (const runtime_error& e) {
        cerr << e.what() << endl;
    }

    // Catch all
    try {
        throw 42;  // throwing non-standard type
    } catch (...) {
        cerr << "Unknown exception caught" << endl;
    }

    cout << "Program continues after handling" << endl;
    return 0;
}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'cpp-throw',
    name: 'Throw',
    category: 'cpp-error-handling',
    description: 'The throw keyword raises an exception of any type, typically a std::exception subclass. throw without an argument re-throws the current exception. Thrown objects are caught by matching catch handlers.',
    codeExample: `#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

// Custom exception class
class InsufficientFunds : public runtime_error {
    double amount;
    double balance;
public:
    InsufficientFunds(double amt, double bal)
        : runtime_error("Insufficient funds"),
          amount(amt), balance(bal) {}
    double get_amount() const { return amount; }
    double get_balance() const { return balance; }
};

class Account {
    double balance;
public:
    Account(double b) : balance(b) {}

    void withdraw(double amount) {
        if (amount <= 0)
            throw invalid_argument("Amount must be positive");
        if (amount > balance)
            throw InsufficientFunds(amount, balance);
        balance -= amount;
    }

    double get_balance() const { return balance; }
};

void process_withdrawal(Account& acc, double amount) {
    try {
        acc.withdraw(amount);
    } catch (const InsufficientFunds& e) {
        cerr << e.what() << ": tried " << e.get_amount()
             << " but only have " << e.get_balance() << endl;
        throw;  // re-throw
    }
}

int main() {
    Account acc(100);
    try {
        process_withdrawal(acc, 150);
    } catch (const exception& e) {
        cerr << "Caught: " << e.what() << endl;
    }
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-exception-hierarchy',
    name: 'Exception Hierarchy',
    category: 'cpp-error-handling',
    description: 'C++ standard exceptions form a hierarchy under std::exception. runtime_error and logic_error are the two main branches, each with specialized subclasses for common error conditions.',
    codeExample: `#include <iostream>
#include <stdexcept>
#include <new>
#include <typeinfo>
using namespace std;

/*
std::exception
  |-- std::logic_error
  |     |-- std::invalid_argument
  |     |-- std::domain_error
  |     |-- std::length_error
  |     |-- std::out_of_range
  |-- std::runtime_error
  |     |-- std::overflow_error
  |     |-- std::underflow_error
  |     |-- std::range_error
  |-- std::bad_alloc
  |-- std::bad_cast
*/

void demonstrate_exceptions() {
    // invalid_argument
    // stoi("abc");

    // out_of_range
    string s = "hello";
    try {
        char c = s.at(100);
    } catch (const out_of_range& e) {
        cout << "out_of_range: " << e.what() << endl;
    }

    // overflow_error
    try {
        throw overflow_error("Integer overflow detected");
    } catch (const runtime_error& e) {
        cout << "runtime_error: " << e.what() << endl;
    }

    // Catch by base class (catch-all for std exceptions)
    try {
        throw domain_error("Invalid domain");
    } catch (const exception& e) {
        cout << "exception: " << e.what() << endl;
    }
}

int main() {
    demonstrate_exceptions();
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-noexcept',
    name: 'Noexcept',
    category: 'cpp-error-handling',
    description: 'noexcept specifies that a function will not throw exceptions. It enables compiler optimizations and is important for move operations. If a noexcept function does throw, std::terminate is called.',
    codeExample: `#include <iostream>
#include <vector>
#include <type_traits>
using namespace std;

// Function that guarantees no exceptions
int add(int a, int b) noexcept {
    return a + b;
}

// Conditional noexcept
template<typename T>
void safe_swap(T& a, T& b) noexcept(is_nothrow_move_constructible_v<T>) {
    T temp = move(a);
    a = move(b);
    b = move(temp);
}

// Important for move operations (vector optimization)
class Widget {
    int* data;
    size_t size;
public:
    Widget(size_t n) : size(n), data(new int[n]) {}

    // Move constructor MUST be noexcept for vector optimization
    Widget(Widget&& other) noexcept
        : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }

    ~Widget() { delete[] data; }
};

int main() {
    // Check at compile time
    static_assert(noexcept(add(1, 2)), "add should be noexcept");

    cout << "add is noexcept: " << noexcept(add(1, 2)) << endl;

    // Vector uses move when noexcept
    vector<Widget> widgets;
    widgets.reserve(10);
    widgets.emplace_back(100);  // uses move constructor
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'cpp-static-assert',
    name: 'Static Assert',
    category: 'cpp-error-handling',
    description: 'static_assert (C++11) checks conditions at compile time and produces a compiler error with a custom message if the condition is false. It catches type errors, size assumptions, and configuration issues early.',
    codeExample: `#include <iostream>
#include <type_traits>
using namespace std;

// Compile-time type checks
template<typename T>
class NumericContainer {
    static_assert(is_arithmetic_v<T>,
                  "NumericContainer requires an arithmetic type");
    T data[100];
public:
    void fill(T value) {
        for (auto& d : data) d = value;
    }
};

// Platform assumptions
static_assert(sizeof(int) >= 4,
              "int must be at least 4 bytes");
static_assert(sizeof(void*) == 8,
              "This code requires a 64-bit platform");

// Configuration validation
constexpr int MAX_CONNECTIONS = 100;
constexpr int MAX_THREADS = 16;
static_assert(MAX_CONNECTIONS > MAX_THREADS,
              "Need more connections than threads");

// Template constraints
template<typename T, typename U>
auto safe_cast(U value) {
    static_assert(is_convertible_v<U, T>,
                  "Types are not convertible");
    return static_cast<T>(value);
}

int main() {
    NumericContainer<int> ic;      // OK
    NumericContainer<double> dc;   // OK
    // NumericContainer<string> sc; // ERROR at compile time

    auto x = safe_cast<double>(42);  // OK
    cout << x << endl;
    return 0;
}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'cpp-error-codes',
    name: 'Error Codes vs Exceptions',
    category: 'cpp-error-handling',
    description: 'C++ supports both exception-based and error-code-based error handling. Error codes avoid the overhead of exceptions and are preferred in performance-critical code, embedded systems, and across API boundaries.',
    codeExample: `#include <iostream>
#include <system_error>
#include <expected>  // C++23
#include <optional>
using namespace std;

// Error code approach
enum class FileError {
    None = 0,
    NotFound,
    PermissionDenied,
    DiskFull,
};

struct ReadResult {
    string data;
    FileError error;
    explicit operator bool() const { return error == FileError::None; }
};

ReadResult read_file(const string& path) {
    if (path.empty()) {
        return {"", FileError::NotFound};
    }
    return {"file contents", FileError::None};
}

// Optional for "maybe no value"
optional<int> parse_int(const string& s) {
    try {
        return stoi(s);
    } catch (...) {
        return nullopt;
    }
}

int main() {
    // Error code style
    auto result = read_file("test.txt");
    if (result) {
        cout << "Data: " << result.data << endl;
    } else {
        cout << "Error reading file" << endl;
    }

    // Optional style
    auto num = parse_int("42");
    cout << num.value_or(-1) << endl;  // 42

    auto bad = parse_int("abc");
    cout << bad.value_or(-1) << endl;  // -1

    // std::error_code (system errors)
    error_code ec = make_error_code(errc::no_such_file_or_directory);
    cout << ec.message() << endl;
    return 0;
}`,
    difficulty: 'advanced',
    xpValue: 30,
  },
];
