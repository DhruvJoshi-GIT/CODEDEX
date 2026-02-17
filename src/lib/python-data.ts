import { Category, Construct } from './types';

export const pythonCategories: Category[] = [
  {
    id: 'py-fundamentals',
    name: 'Fundamentals',
    color: '#3b8a7a',
    icon: 'Blocks',
    description: 'The building blocks of Python. Variables, data types, input/output, and basic operators.',
  },
  {
    id: 'py-control-flow',
    name: 'Control Flow',
    color: '#c4793a',
    icon: 'GitBranch',
    description: 'Direct the flow of your program with conditionals, loops, and branching logic.',
  },
  {
    id: 'py-data-structures',
    name: 'Data Structures',
    color: '#7a5bbf',
    icon: 'Database',
    description: 'Organize and manipulate collections of data with lists, dicts, sets, and more.',
  },
  {
    id: 'py-functions',
    name: 'Functions',
    color: '#bf5b7a',
    icon: 'FunctionSquare',
    description: 'Encapsulate reusable logic with functions, lambdas, decorators, and generators.',
  },
  {
    id: 'py-oop',
    name: 'OOP',
    color: '#4a90a4',
    icon: 'Box',
    description: 'Object-oriented programming in Python: classes, inheritance, polymorphism, and design patterns.',
  },
  {
    id: 'py-error-handling',
    name: 'Error Handling',
    color: '#a45b4a',
    icon: 'ShieldAlert',
    description: 'Handle errors gracefully with try/except, custom exceptions, and context managers.',
  },
  {
    id: 'py-modules-io',
    name: 'Modules & IO',
    color: '#5ba44a',
    icon: 'Package',
    description: 'Work with modules, packages, file I/O, and the Python standard library.',
  },
  {
    id: 'py-advanced',
    name: 'Advanced',
    color: '#8a7a3b',
    icon: 'Sparkles',
    description: 'Advanced Python features including itertools, async/await, type hints, and more.',
  },
];

export const pythonConstructs: Construct[] = [
  // ===== FUNDAMENTALS =====
  {
    id: 'py-variables',
    name: 'Variables',
    category: 'py-fundamentals',
    description: 'Variables store data values. Python has no command for declaring a variable — it is created the moment you first assign a value to it. Variable names are case-sensitive and must start with a letter or underscore.',
    codeExample: `# Assigning variables
name = "Alice"
age = 30
height = 5.6
is_student = False

# Multiple assignment
x, y, z = 1, 2, 3

# Swapping values
x, y = y, x
print(f"{name} is {age} years old")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-data-types',
    name: 'Data Types',
    category: 'py-fundamentals',
    description: 'Python has several built-in data types including int, float, str, bool, and NoneType. You can check the type of any object using the type() function. Python is dynamically typed, so variables can change type.',
    codeExample: `# Built-in data types
integer_val = 42          # int
float_val = 3.14          # float
string_val = "hello"      # str
bool_val = True           # bool
none_val = None           # NoneType

# Check types
print(type(integer_val))  # <class 'int'>
print(type(string_val))   # <class 'str'>

# isinstance check
print(isinstance(42, int))  # True`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-print',
    name: 'Print Function',
    category: 'py-fundamentals',
    description: 'The print() function outputs text to the console. It supports multiple arguments separated by a custom separator, custom end characters, and can write to file objects.',
    codeExample: `# Basic print
print("Hello, World!")

# Multiple arguments
print("Name:", "Alice", "Age:", 30)

# Custom separator and end
print("a", "b", "c", sep="-")       # a-b-c
print("Loading", end="...")
print("Done!")                        # Loading...Done!

# Print to file
with open("log.txt", "w") as f:
    print("Log entry", file=f)`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-input',
    name: 'User Input',
    category: 'py-fundamentals',
    description: 'The input() function reads a line of text from the user. It always returns a string, so you need to convert it to other types manually. You can provide a prompt string as an argument.',
    codeExample: `# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Converting input to numbers
age = int(input("Enter your age: "))
height = float(input("Enter height in meters: "))

# Input with validation
while True:
    try:
        number = int(input("Enter a number: "))
        break
    except ValueError:
        print("That's not a valid number!")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-comments',
    name: 'Comments',
    category: 'py-fundamentals',
    description: 'Comments are used to explain code and are ignored by the interpreter. Single-line comments start with #. Multi-line comments can use triple quotes, which also serve as docstrings.',
    codeExample: `# This is a single-line comment

# You can also comment out code
# print("This won't run")

"""
This is a multi-line comment
(technically a string literal).
Often used for documentation.
"""

def greet(name):
    """Return a greeting message.

    Args:
        name: The person's name.
    """
    return f"Hello, {name}!"`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-type-casting',
    name: 'Type Casting',
    category: 'py-fundamentals',
    description: 'Type casting converts a value from one data type to another. Python provides built-in functions like int(), float(), str(), bool(), and list() for explicit type conversion.',
    codeExample: `# String to number
age_str = "25"
age = int(age_str)         # 25
price = float("19.99")     # 19.99

# Number to string
count = str(42)            # "42"
pi = str(3.14)             # "3.14"

# To boolean
print(bool(0))             # False
print(bool(""))            # False
print(bool("hello"))       # True
print(bool(42))            # True

# List conversions
chars = list("hello")      # ['h', 'e', 'l', 'l', 'o']
unique = set([1, 2, 2, 3]) # {1, 2, 3}`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-fstrings',
    name: 'F-Strings',
    category: 'py-fundamentals',
    description: 'F-strings (formatted string literals) provide a concise way to embed expressions inside string literals. Introduced in Python 3.6, they are prefixed with f and use curly braces for expressions.',
    codeExample: `name = "Alice"
age = 30
balance = 1234.5678

# Basic f-string
print(f"Hello, {name}!")

# Expressions in f-strings
print(f"{name} will be {age + 5} in 5 years")

# Formatting numbers
print(f"Balance: {balance:.2f}")       # 1234.57
print(f"Balance: {balance:,.2f}")     # 1,234.57

# Padding and alignment
print(f"{'left':<20}|")              # left                |
print(f"{'right':>20}|")             #               right|
print(f"{'center':^20}|")            #        center       |

# Debug mode (Python 3.8+)
x = 42
print(f"{x = }")                      # x = 42`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-operators',
    name: 'Operators',
    category: 'py-fundamentals',
    description: 'Python supports arithmetic, comparison, logical, assignment, bitwise, identity, and membership operators. These form the foundation of all expressions and computations.',
    codeExample: `# Arithmetic operators
print(10 + 3)    # 13  Addition
print(10 - 3)    # 7   Subtraction
print(10 * 3)    # 30  Multiplication
print(10 / 3)    # 3.33 Division
print(10 // 3)   # 3   Floor division
print(10 % 3)    # 1   Modulus
print(10 ** 3)   # 1000 Exponent

# Comparison operators
print(5 == 5)    # True
print(5 != 3)    # True
print(5 > 3)     # True

# Logical operators
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# Membership operators
print("a" in "cat")    # True
print(5 not in [1,2])  # True`,
    difficulty: 'beginner',
    xpValue: 10,
  },

  // ===== CONTROL FLOW =====
  {
    id: 'py-if-elif-else',
    name: 'If / Elif / Else',
    category: 'py-control-flow',
    description: 'Conditional statements allow your program to make decisions. The if statement checks a condition, elif provides additional checks, and else handles the default case when no conditions are met.',
    codeExample: `score = 85

if score >= 90:
    grade = "A"
    print("Excellent!")
elif score >= 80:
    grade = "B"
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("Not bad")
else:
    grade = "F"
    print("Keep trying")

print(f"Your grade: {grade}")

# Nested conditions
age = 20
has_id = True
if age >= 18:
    if has_id:
        print("Access granted")
    else:
        print("Please show ID")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-for-loop',
    name: 'For Loop',
    category: 'py-control-flow',
    description: 'The for loop iterates over a sequence (list, tuple, string, range, etc.). It is the most common loop in Python and supports iteration over any iterable object.',
    codeExample: `# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop with range
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4

# Range with start, stop, step
for i in range(2, 10, 2):
    print(i, end=" ")  # 2 4 6 8

# Loop with index using enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-while-loop',
    name: 'While Loop',
    category: 'py-control-flow',
    description: 'The while loop repeatedly executes a block of code as long as the condition is True. It is useful when the number of iterations is not known in advance. Be careful to avoid infinite loops.',
    codeExample: `# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# While with user input
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# While with else
n = 10
while n > 0:
    n -= 3
    print(n, end=" ")
else:
    print("\\nLoop completed normally")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-break',
    name: 'Break',
    category: 'py-control-flow',
    description: 'The break statement exits the innermost enclosing loop immediately. It is commonly used to stop iteration when a specific condition is met, such as finding a target value.',
    codeExample: `# Find first even number
numbers = [1, 3, 5, 8, 9, 11]
for num in numbers:
    if num % 2 == 0:
        print(f"First even number: {num}")
        break
else:
    print("No even numbers found")

# Break in while loop
while True:
    command = input("Enter command (quit to exit): ")
    if command == "quit":
        break
    print(f"Executing: {command}")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-continue',
    name: 'Continue',
    category: 'py-control-flow',
    description: 'The continue statement skips the rest of the current iteration and moves to the next one. It is useful for filtering out certain values without breaking the entire loop.',
    codeExample: `# Skip odd numbers
for i in range(10):
    if i % 2 != 0:
        continue
    print(i, end=" ")  # 0 2 4 6 8

# Skip blank lines
lines = ["hello", "", "world", "", "python"]
for line in lines:
    if not line.strip():
        continue
    print(f"Processing: {line}")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-pass',
    name: 'Pass',
    category: 'py-control-flow',
    description: 'The pass statement is a null operation that does nothing. It is used as a placeholder in blocks where code is syntactically required but you have nothing to execute yet.',
    codeExample: `# Placeholder for future code
def process_data():
    pass  # TODO: implement later

class MyCustomError(Exception):
    pass

# Empty conditional branch
score = 85
if score >= 90:
    pass  # handle later
elif score >= 80:
    print("Good job!")

# Ignore specific exceptions
try:
    result = 10 / 0
except ZeroDivisionError:
    pass  # silently ignore`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-match-case',
    name: 'Match / Case',
    category: 'py-control-flow',
    description: 'Structural pattern matching (match/case) was introduced in Python 3.10. It matches values against patterns and supports destructuring, guards, and wildcard patterns. More powerful than switch statements.',
    codeExample: `# Basic match/case
command = "start"
match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "restart":
        print("Restarting...")
    case _:
        print(f"Unknown command: {command}")

# Pattern matching with destructuring
point = (3, 4)
match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"On x-axis at {x}")
    case (0, y):
        print(f"On y-axis at {y}")
    case (x, y) if x == y:
        print(f"On diagonal at {x}")
    case (x, y):
        print(f"Point at ({x}, {y})")`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-ternary',
    name: 'Ternary Expression',
    category: 'py-control-flow',
    description: 'The ternary (conditional) expression provides a compact way to choose between two values based on a condition. It is written as value_if_true if condition else value_if_false.',
    codeExample: `# Basic ternary
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

# Ternary in function call
score = 85
print(f"Result: {'Pass' if score >= 60 else 'Fail'}")

# Nested ternary (use sparingly)
x = 15
category = "high" if x > 20 else "medium" if x > 10 else "low"
print(category)  # medium

# Ternary in list comprehension
numbers = [1, -2, 3, -4, 5]
absolute = [x if x >= 0 else -x for x in numbers]
print(absolute)  # [1, 2, 3, 4, 5]`,
    difficulty: 'beginner',
    xpValue: 10,
  },

  // ===== DATA STRUCTURES =====
  {
    id: 'py-list',
    name: 'List',
    category: 'py-data-structures',
    description: 'Lists are ordered, mutable collections that can hold items of any type. They support indexing, slicing, and a rich set of methods for adding, removing, and sorting elements.',
    codeExample: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Accessing elements
print(fruits[0])     # apple
print(fruits[-1])    # cherry

# Modifying lists
fruits.append("date")
fruits.insert(1, "blueberry")
fruits.remove("banana")
popped = fruits.pop()

# List operations
print(len(fruits))
print(sorted(numbers, reverse=True))
numbers.reverse()
print(3 in numbers)  # True`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-tuple',
    name: 'Tuple',
    category: 'py-data-structures',
    description: 'Tuples are ordered, immutable collections. Once created, their elements cannot be changed. They are commonly used for fixed collections of related values and as dictionary keys.',
    codeExample: `# Creating tuples
coordinates = (3, 4)
rgb = (255, 128, 0)
single = (42,)  # trailing comma for single element

# Accessing elements
print(coordinates[0])  # 3
x, y = coordinates     # unpacking

# Tuple methods
numbers = (1, 2, 3, 2, 4, 2)
print(numbers.count(2))  # 3
print(numbers.index(3))  # 2

# Named tuples for readability
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(f"x={p.x}, y={p.y}")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-dict',
    name: 'Dictionary',
    category: 'py-data-structures',
    description: 'Dictionaries store key-value pairs with O(1) average lookup time. Keys must be hashable (immutable). Dicts preserve insertion order since Python 3.7 and offer powerful methods for data manipulation.',
    codeExample: `# Creating dictionaries
user = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
}

# Accessing and modifying
print(user["name"])
user["age"] = 31
user["phone"] = "555-0123"

# Safe access with get
city = user.get("city", "Unknown")

# Iterating
for key, value in user.items():
    print(f"{key}: {value}")

# Dictionary methods
keys = list(user.keys())
values = list(user.values())
user.update({"age": 32, "city": "NYC"})
removed = user.pop("phone")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-set',
    name: 'Set',
    category: 'py-data-structures',
    description: 'Sets are unordered collections of unique elements. They support mathematical set operations like union, intersection, and difference. Useful for removing duplicates and membership testing.',
    codeExample: `# Creating sets
colors = {"red", "green", "blue"}
numbers = set([1, 2, 2, 3, 3, 4])  # {1, 2, 3, 4}

# Adding and removing
colors.add("yellow")
colors.discard("red")  # no error if missing

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)    # Union: {1, 2, 3, 4, 5, 6}
print(a & b)    # Intersection: {3, 4}
print(a - b)    # Difference: {1, 2}
print(a ^ b)    # Symmetric diff: {1, 2, 5, 6}

# Membership testing (O(1) average)
print(3 in a)   # True

# Frozen set (immutable)
frozen = frozenset([1, 2, 3])`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-list-comprehension',
    name: 'List Comprehension',
    category: 'py-data-structures',
    description: 'List comprehensions provide a concise way to create lists by applying an expression to each item in an iterable, optionally filtering with conditions. They are more Pythonic than equivalent for loops.',
    codeExample: `# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition (filter)
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With transformation
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]

# Nested comprehension (flatten)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# With if/else
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-dict-comprehension',
    name: 'Dict Comprehension',
    category: 'py-data-structures',
    description: 'Dictionary comprehensions create dictionaries from iterables using a concise syntax. They follow the same pattern as list comprehensions but produce key-value pairs.',
    codeExample: `# Basic dict comprehension
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From two lists
keys = ["name", "age", "city"]
values = ["Alice", 30, "NYC"]
user = {k: v for k, v in zip(keys, values)}

# With condition
scores = {"Alice": 85, "Bob": 42, "Charlie": 91}
passing = {k: v for k, v in scores.items() if v >= 60}
print(passing)  # {'Alice': 85, 'Charlie': 91}

# Invert a dictionary
inverted = {v: k for k, v in scores.items()}

# Word frequency
text = "the cat sat on the mat"
freq = {word: text.split().count(word) for word in set(text.split())}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-set-comprehension',
    name: 'Set Comprehension',
    category: 'py-data-structures',
    description: 'Set comprehensions create sets from iterables using a concise syntax similar to list comprehensions. The result automatically removes duplicates since sets only contain unique elements.',
    codeExample: `# Basic set comprehension
squares = {x**2 for x in range(-5, 6)}
print(squares)  # {0, 1, 4, 9, 16, 25}

# Extract unique first letters
names = ["Alice", "Bob", "Anna", "Charlie", "Alex"]
first_letters = {name[0] for name in names}
print(first_letters)  # {'A', 'B', 'C'}

# Unique word lengths
sentence = "the quick brown fox jumps over the lazy dog"
lengths = {len(word) for word in sentence.split()}
print(lengths)  # {3, 4, 5}

# Filter and transform
numbers = [1, -2, 3, -4, 5, -2, 3]
positive_unique = {abs(n) for n in numbers}
print(positive_unique)  # {1, 2, 3, 4, 5}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-string-methods',
    name: 'String Methods',
    category: 'py-data-structures',
    description: 'Python strings are immutable sequences with a rich set of built-in methods for searching, transforming, splitting, and formatting text. Strings support indexing, slicing, and iteration.',
    codeExample: `text = "  Hello, World!  "

# Case methods
print(text.strip())          # "Hello, World!"
print(text.strip().lower())  # "hello, world!"
print(text.strip().upper())  # "HELLO, WORLD!"
print("hello world".title()) # "Hello World"

# Search methods
print("World" in text)       # True
print(text.find("World"))    # 9
print(text.count("l"))       # 3

# Split and join
csv = "apple,banana,cherry"
items = csv.split(",")       # ["apple", "banana", "cherry"]
joined = " | ".join(items)   # "apple | banana | cherry"

# Replace and check
clean = text.strip().replace("World", "Python")
print("123".isdigit())       # True
print("abc".isalpha())       # True
print("hello".startswith("he"))  # True`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-slicing',
    name: 'Slicing',
    category: 'py-data-structures',
    description: 'Slicing extracts portions of sequences (strings, lists, tuples) using the [start:stop:step] notation. It creates a new object without modifying the original. Negative indices count from the end.',
    codeExample: `# List slicing
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nums[2:5])     # [2, 3, 4]
print(nums[:3])      # [0, 1, 2]
print(nums[7:])      # [7, 8, 9]
print(nums[::2])     # [0, 2, 4, 6, 8]
print(nums[::-1])    # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# String slicing
text = "Hello, World!"
print(text[7:12])    # "World"
print(text[::-1])    # "!dlroW ,olleH"

# Slice assignment (lists only)
nums[2:5] = [20, 30, 40]
print(nums)  # [0, 1, 20, 30, 40, 5, 6, 7, 8, 9]

# Using slice objects
s = slice(1, 7, 2)
print(nums[s])       # [1, 30, 5]`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-unpacking',
    name: 'Unpacking',
    category: 'py-data-structures',
    description: 'Unpacking assigns elements of an iterable to individual variables. Extended unpacking with * captures remaining elements. It works with tuples, lists, dicts, and any iterable.',
    codeExample: `# Basic unpacking
x, y, z = [1, 2, 3]
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

# Star unpacking
first, *middle, last = [1, 2, 3, 4, 5]
print(middle)  # [2, 3, 4]

# Unpacking in function calls
def add(a, b, c):
    return a + b + c

args = [1, 2, 3]
print(add(*args))  # 6

# Dict unpacking
defaults = {"color": "blue", "size": 10}
custom = {"size": 20, "weight": 5}
merged = {**defaults, **custom}
print(merged)  # {'color': 'blue', 'size': 20, 'weight': 5}

# Swap with unpacking
a, b = 1, 2
a, b = b, a`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== FUNCTIONS =====
  {
    id: 'py-def',
    name: 'Function Definition',
    category: 'py-functions',
    description: 'Functions are defined with the def keyword and encapsulate reusable blocks of code. They can accept parameters, return values, and have docstrings for documentation.',
    codeExample: `# Basic function
def greet(name):
    """Return a personalized greeting."""
    return f"Hello, {name}!"

print(greet("Alice"))

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9
print(power(3, 3))   # 27

# Function with multiple returns
def divide(a, b):
    if b == 0:
        return None, "Division by zero"
    return a / b, "Success"

result, status = divide(10, 3)
print(f"{result:.2f} - {status}")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-return',
    name: 'Return Statement',
    category: 'py-functions',
    description: 'The return statement exits a function and optionally sends a value back to the caller. Functions without a return statement implicitly return None. You can return multiple values as a tuple.',
    codeExample: `# Single return value
def square(x):
    return x ** 2

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {lo}, Max: {hi}")

# Early return (guard clause)
def process_age(age):
    if age < 0:
        return "Invalid age"
    if age < 18:
        return "Minor"
    return "Adult"

# Returning functions
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
print(double(5))  # 10`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-args',
    name: '*args (Positional Arguments)',
    category: 'py-functions',
    description: 'The *args syntax allows a function to accept any number of positional arguments. Inside the function, args is a tuple containing all the extra positional arguments passed.',
    codeExample: `# Accept variable number of arguments
def total(*args):
    return sum(args)

print(total(1, 2, 3))       # 6
print(total(10, 20, 30, 40)) # 100

# Mixing regular and *args
def greet(greeting, *names):
    for name in names:
        print(f"{greeting}, {name}!")

greet("Hello", "Alice", "Bob", "Charlie")

# Passing args through
def wrapper(*args):
    print(f"Called with {len(args)} args")
    return total(*args)

print(wrapper(5, 10, 15))  # Called with 3 args \\n 30`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-kwargs',
    name: '**kwargs (Keyword Arguments)',
    category: 'py-functions',
    description: 'The **kwargs syntax allows a function to accept any number of keyword arguments. Inside the function, kwargs is a dictionary of all extra keyword arguments. Often combined with *args.',
    codeExample: `# Accept variable keyword arguments
def build_profile(**kwargs):
    profile = {}
    for key, value in kwargs.items():
        profile[key] = value
    return profile

user = build_profile(name="Alice", age=30, city="NYC")
print(user)  # {'name': 'Alice', 'age': 30, 'city': 'NYC'}

# Combining *args and **kwargs
def log(level, *args, **kwargs):
    message = " ".join(str(a) for a in args)
    extras = ", ".join(f"{k}={v}" for k, v in kwargs.items())
    print(f"[{level}] {message} ({extras})")

log("INFO", "User logged in", user="alice", ip="127.0.0.1")

# Forwarding arguments
def decorated_func(*args, **kwargs):
    print("Before call")
    result = original_func(*args, **kwargs)
    print("After call")
    return result`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-lambda',
    name: 'Lambda Functions',
    category: 'py-functions',
    description: 'Lambda functions are small anonymous functions defined with the lambda keyword. They can have any number of arguments but only one expression. Commonly used with map(), filter(), and sorted().',
    codeExample: `# Basic lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Sorting with lambda
students = [
    {"name": "Charlie", "grade": 85},
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 78},
]
by_grade = sorted(students, key=lambda s: s["grade"], reverse=True)
print([s["name"] for s in by_grade])

# Lambda with filter and map
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
doubled = list(map(lambda x: x * 2, numbers))`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-decorators',
    name: 'Decorators',
    category: 'py-functions',
    description: 'Decorators are functions that modify the behavior of other functions. They use the @decorator syntax and are widely used for logging, authentication, caching, and other cross-cutting concerns.',
    codeExample: `import functools
import time

# Basic decorator
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return "done"

# Decorator with arguments
def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Retry {attempt + 1}/{max_attempts}")
        return wrapper
    return decorator

@retry(max_attempts=3)
def flaky_api_call():
    pass`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-generators',
    name: 'Generators',
    category: 'py-functions',
    description: 'Generators are functions that yield values one at a time instead of returning them all at once. They are memory-efficient for large datasets because they produce items lazily on demand.',
    codeExample: `# Basic generator
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num, end=" ")  # 5 4 3 2 1

# Infinite generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Take first 10 Fibonacci numbers
fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]
print(first_10)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator expression (like list comp but lazy)
squares = (x**2 for x in range(1000000))
print(sum(squares))  # Memory efficient

# Generator pipeline
def read_lines(data):
    for line in data:
        yield line.strip()

def filter_comments(lines):
    for line in lines:
        if not line.startswith("#"):
            yield line`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-yield',
    name: 'Yield',
    category: 'py-functions',
    description: 'The yield keyword pauses a function and saves its state, returning a value to the caller. When resumed, execution continues from where it left off. yield from delegates to sub-generators.',
    codeExample: `# yield vs return
def get_squares_list(n):
    return [x**2 for x in range(n)]  # all in memory

def get_squares_gen(n):
    for x in range(n):
        yield x**2  # one at a time

# yield from (delegate to sub-generator)
def chain(*iterables):
    for it in iterables:
        yield from it

combined = list(chain([1, 2], [3, 4], [5, 6]))
print(combined)  # [1, 2, 3, 4, 5, 6]

# Two-way communication with send()
def accumulator():
    total = 0
    while True:
        value = yield total
        if value is None:
            break
        total += value

acc = accumulator()
next(acc)           # prime the generator
print(acc.send(10)) # 10
print(acc.send(20)) # 30
print(acc.send(5))  # 35`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-recursion',
    name: 'Recursion',
    category: 'py-functions',
    description: 'Recursion is when a function calls itself to solve a smaller subproblem. Every recursive function needs a base case to stop the recursion. Python has a default recursion limit of 1000.',
    codeExample: `# Factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# Binary search
def binary_search(arr, target, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, high)
    else:
        return binary_search(arr, target, low, mid - 1)

# Tree traversal
def flatten(nested):
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

print(flatten([1, [2, [3, 4], 5], 6]))  # [1, 2, 3, 4, 5, 6]`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-closures',
    name: 'Closures',
    category: 'py-functions',
    description: 'A closure is a nested function that captures variables from its enclosing scope. Even after the outer function returns, the inner function retains access to those variables. Closures enable data encapsulation.',
    codeExample: `# Basic closure
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

counter = make_counter()
print(counter())  # 1
print(counter())  # 2
print(counter())  # 3

# Closure for configuration
def make_formatter(prefix, suffix=""):
    def format_text(text):
        return f"{prefix}{text}{suffix}"
    return format_text

bold = make_formatter("<b>", "</b>")
italic = make_formatter("<i>", "</i>")
print(bold("hello"))     # <b>hello</b>
print(italic("world"))   # <i>world</i>

# Closure as lightweight class
def create_bank_account(initial_balance):
    balance = initial_balance
    def deposit(amount):
        nonlocal balance
        balance += amount
        return balance
    def withdraw(amount):
        nonlocal balance
        if amount > balance:
            raise ValueError("Insufficient funds")
        balance -= amount
        return balance
    def get_balance():
        return balance
    return deposit, withdraw, get_balance`,
    difficulty: 'advanced',
    xpValue: 30,
  },

  // ===== OOP =====
  {
    id: 'py-class',
    name: 'Class',
    category: 'py-oop',
    description: 'Classes are blueprints for creating objects. They bundle data (attributes) and functionality (methods) together. Python classes support multiple paradigms including encapsulation and composition.',
    codeExample: `class Dog:
    # Class attribute (shared by all instances)
    species = "Canis lupus familiaris"

    def __init__(self, name, breed, age):
        # Instance attributes
        self.name = name
        self.breed = breed
        self.age = age

    def bark(self):
        return f"{self.name} says: Woof!"

    def description(self):
        return f"{self.name} is a {self.age}-year-old {self.breed}"

# Creating instances
rex = Dog("Rex", "German Shepherd", 3)
buddy = Dog("Buddy", "Golden Retriever", 5)

print(rex.bark())          # Rex says: Woof!
print(buddy.description()) # Buddy is a 5-year-old Golden Retriever
print(Dog.species)         # Canis lupus familiaris`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-init',
    name: '__init__ Constructor',
    category: 'py-oop',
    description: 'The __init__ method is the constructor that initializes a new instance. It runs automatically when an object is created. Use it to set up instance attributes and perform validation.',
    codeExample: `class BankAccount:
    def __init__(self, owner, balance=0):
        if balance < 0:
            raise ValueError("Initial balance cannot be negative")
        self.owner = owner
        self._balance = balance  # convention: "private"
        self._transactions = []

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self._balance += amount
        self._transactions.append(f"+{amount}")
        return self._balance

    def withdraw(self, amount):
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        self._transactions.append(f"-{amount}")
        return self._balance

    def get_balance(self):
        return self._balance

account = BankAccount("Alice", 1000)
account.deposit(500)
account.withdraw(200)
print(f"Balance: {account.get_balance()}")  # 1300`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-inheritance',
    name: 'Inheritance',
    category: 'py-oop',
    description: 'Inheritance allows a class to derive from a parent class, inheriting its attributes and methods. The child class can override methods and add new functionality. Python supports multiple inheritance.',
    codeExample: `class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")
        self.breed = breed

    def fetch(self, item):
        return f"{self.name} fetches the {item}!"

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Meow")
        self.indoor = indoor

# Multiple inheritance
class Hybrid(Dog, Cat):
    def __init__(self, name):
        super().__init__(name, "Mixed")

rex = Dog("Rex", "Labrador")
print(rex.speak())           # Rex says Woof!
print(rex.fetch("ball"))     # Rex fetches the ball!

# Check inheritance
print(isinstance(rex, Animal))  # True
print(issubclass(Dog, Animal))  # True`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-super',
    name: 'Super',
    category: 'py-oop',
    description: 'The super() function returns a proxy object that delegates method calls to the parent class. It is essential for calling parent constructors and methods, especially with multiple inheritance and MRO.',
    codeExample: `class Shape:
    def __init__(self, color="black"):
        self.color = color

    def area(self):
        return 0

    def describe(self):
        return f"A {self.color} shape with area {self.area():.2f}"

class Rectangle(Shape):
    def __init__(self, width, height, color="black"):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side, color="black"):
        super().__init__(side, side, color)

# MRO (Method Resolution Order)
print(Square.__mro__)

sq = Square(5, "blue")
print(sq.describe())  # A blue shape with area 25.00
print(sq.area())      # 25`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-polymorphism',
    name: 'Polymorphism',
    category: 'py-oop',
    description: 'Polymorphism allows different classes to be used through the same interface. In Python, it is achieved through duck typing — if an object has the required method, it can be used regardless of its class.',
    codeExample: `class Circle:
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2
    def __str__(self):
        return f"Circle(r={self.radius})"

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height
    def __str__(self):
        return f"Rectangle({self.width}x{self.height})"

class Triangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def area(self):
        return 0.5 * self.base * self.height
    def __str__(self):
        return f"Triangle(b={self.base}, h={self.height})"

# Polymorphic function — works with any shape that has area()
def print_areas(shapes):
    for shape in shapes:
        print(f"{shape}: area = {shape.area():.2f}")

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
print_areas(shapes)`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-encapsulation',
    name: 'Encapsulation',
    category: 'py-oop',
    description: 'Encapsulation restricts direct access to an object\'s internal state. Python uses naming conventions: _single underscore for protected and __double underscore for name mangling. Properties provide controlled access.',
    codeExample: `class Employee:
    def __init__(self, name, salary):
        self._name = name        # protected (convention)
        self.__salary = salary   # name mangled

    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, value):
        if value < 0:
            raise ValueError("Salary cannot be negative")
        self.__salary = value

    @property
    def name(self):
        return self._name

    def give_raise(self, amount):
        self.salary = self.__salary + amount

emp = Employee("Alice", 50000)
print(emp.salary)         # 50000
emp.give_raise(5000)
print(emp.salary)         # 55000

# Name mangling in action
# emp.__salary           # AttributeError
# emp._Employee__salary  # Works but discouraged`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-dunder-methods',
    name: 'Dunder Methods',
    category: 'py-oop',
    description: 'Dunder (double underscore) methods like __str__, __repr__, __len__, __eq__ let you define how objects behave with built-in Python operations. They make custom classes feel native and Pythonic.',
    codeExample: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5

    def __len__(self):
        return 2

    def __getitem__(self, index):
        return (self.x, self.y)[index]

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)      # (4, 6)
print(v1 * 3)       # (9, 12)
print(abs(v1))       # 5.0`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-abstract-classes',
    name: 'Abstract Classes',
    category: 'py-oop',
    description: 'Abstract classes define interfaces that subclasses must implement. Created using the abc module, they cannot be instantiated directly. Abstract methods force derived classes to provide specific implementations.',
    codeExample: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        """Calculate the area of the shape."""
        pass

    @abstractmethod
    def perimeter(self) -> float:
        """Calculate the perimeter of the shape."""
        pass

    def describe(self) -> str:
        return f"{self.__class__.__name__}: area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return 3.14159 * self.radius ** 2

    def perimeter(self) -> float:
        return 2 * 3.14159 * self.radius

class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height

    def perimeter(self) -> float:
        return 2 * (self.width + self.height)

# shape = Shape()  # TypeError: Can't instantiate abstract class
circle = Circle(5)
print(circle.describe())  # Circle: area=78.54`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-dataclasses',
    name: 'Dataclasses',
    category: 'py-oop',
    description: 'Dataclasses (Python 3.7+) automatically generate __init__, __repr__, __eq__ and more. They reduce boilerplate for classes that primarily store data. Support defaults, ordering, immutability, and post-init processing.',
    codeExample: `from dataclasses import dataclass, field
from typing import List

@dataclass
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x)**2 + (self.y - other.y)**2) ** 0.5

@dataclass(order=True)
class Student:
    sort_index: float = field(init=False, repr=False)
    name: str
    grade: float
    courses: List[str] = field(default_factory=list)

    def __post_init__(self):
        self.sort_index = self.grade

# Auto-generated __init__, __repr__, __eq__
p1 = Point(3, 4)
p2 = Point(0, 0)
print(p1)                        # Point(x=3, y=4)
print(p1.distance_to(p2))       # 5.0

# Ordering works because of order=True
s1 = Student("Alice", 92)
s2 = Student("Bob", 85)
print(s1 > s2)                   # True

# Frozen (immutable) dataclass
@dataclass(frozen=True)
class Color:
    r: int
    g: int
    b: int`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-properties',
    name: 'Properties',
    category: 'py-oop',
    description: 'Properties allow you to define getter, setter, and deleter methods that are accessed like attributes. They enable computed attributes, validation on assignment, and lazy initialization.',
    codeExample: `class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

    @property
    def kelvin(self):
        return self._celsius + 273.15

temp = Temperature(25)
print(f"{temp.celsius}C = {temp.fahrenheit}F = {temp.kelvin}K")
# 25C = 77.0F = 298.15K

temp.fahrenheit = 212
print(f"{temp.celsius}C")  # 100.0C`,
    difficulty: 'advanced',
    xpValue: 30,
  },

  // ===== ERROR HANDLING =====
  {
    id: 'py-try-except',
    name: 'Try / Except',
    category: 'py-error-handling',
    description: 'try/except blocks catch and handle exceptions. You can catch specific exception types, use multiple except blocks, and access the exception object for error details.',
    codeExample: `# Basic try/except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple exception types
try:
    data = {"key": "value"}
    num = int(data["missing"])
except KeyError as e:
    print(f"Key not found: {e}")
except ValueError as e:
    print(f"Invalid value: {e}")
except (TypeError, AttributeError) as e:
    print(f"Type error: {e}")

# Catch-all (use sparingly)
try:
    risky_operation()
except Exception as e:
    print(f"Unexpected error: {type(e).__name__}: {e}")

# Exception with else (runs if no exception)
try:
    value = int("42")
except ValueError:
    print("Not a number")
else:
    print(f"Parsed successfully: {value}")`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-finally',
    name: 'Finally',
    category: 'py-error-handling',
    description: 'The finally block always executes, whether or not an exception occurred. It is used for cleanup operations like closing files, releasing resources, or resetting state.',
    codeExample: `# Finally for cleanup
file = None
try:
    file = open("data.txt", "r")
    content = file.read()
    process(content)
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("Permission denied!")
finally:
    if file is not None:
        file.close()
        print("File closed.")

# Finally always runs, even with return
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return float("inf")
    finally:
        print("Division attempted")  # always prints

print(safe_divide(10, 3))
print(safe_divide(10, 0))`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-raise',
    name: 'Raise',
    category: 'py-error-handling',
    description: 'The raise statement throws an exception explicitly. You can raise built-in exceptions, custom exceptions, or re-raise caught exceptions. Use raise to signal errors in your code.',
    codeExample: `# Raise built-in exceptions
def validate_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0 or age > 150:
        raise ValueError(f"Age {age} is out of valid range")
    return age

# Re-raise an exception
def process_data(data):
    try:
        result = parse(data)
    except ValueError:
        print("Logging: invalid data received")
        raise  # re-raise the same exception

# Raise with chaining
try:
    int("not_a_number")
except ValueError as original:
    raise RuntimeError("Data processing failed") from original

# Conditional raise
def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(
            f"Cannot withdraw {amount} from balance of {balance}"
        )
    return balance - amount`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-custom-exceptions',
    name: 'Custom Exceptions',
    category: 'py-error-handling',
    description: 'Custom exception classes inherit from Exception (or its subclasses). They provide meaningful error types specific to your application, improving error handling clarity and specificity.',
    codeExample: `# Basic custom exception
class InsufficientFundsError(Exception):
    pass

# Custom exception with extra data
class ValidationError(Exception):
    def __init__(self, field, message, value=None):
        self.field = field
        self.message = message
        self.value = value
        super().__init__(f"{field}: {message}")

# Exception hierarchy
class AppError(Exception):
    """Base exception for our application."""
    pass

class DatabaseError(AppError):
    pass

class ConnectionError(DatabaseError):
    pass

class QueryError(DatabaseError):
    pass

# Usage
def validate_email(email):
    if "@" not in email:
        raise ValidationError("email", "Must contain @", email)

try:
    validate_email("invalid")
except ValidationError as e:
    print(f"Field: {e.field}, Error: {e.message}")`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-assert',
    name: 'Assert',
    category: 'py-error-handling',
    description: 'The assert statement tests a condition and raises AssertionError if it is False. Assertions are used for debugging and internal checks. They can be disabled globally with the -O flag.',
    codeExample: `# Basic assertion
def calculate_average(numbers):
    assert len(numbers) > 0, "Cannot average empty list"
    return sum(numbers) / len(numbers)

print(calculate_average([1, 2, 3]))  # 2.0

# Type assertions
def process_name(name):
    assert isinstance(name, str), f"Expected str, got {type(name)}"
    assert len(name) > 0, "Name cannot be empty"
    return name.title()

# State assertions
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)
        assert len(self._items) > 0  # post-condition

    def pop(self):
        assert not self.is_empty(), "Cannot pop from empty stack"
        return self._items.pop()

    def is_empty(self):
        return len(self._items) == 0

# Testing with assert
result = calculate_average([10, 20, 30])
assert result == 20.0, f"Expected 20.0, got {result}"`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-context-managers',
    name: 'Context Managers (with)',
    category: 'py-error-handling',
    description: 'Context managers ensure resources are properly acquired and released using the with statement. They implement __enter__ and __exit__ methods, or can be created using the contextlib module.',
    codeExample: `# Built-in context manager for files
with open("data.txt", "w") as f:
    f.write("Hello, World!")
# File is automatically closed

# Custom context manager with class
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.time() - self.start
        print(f"Elapsed: {self.elapsed:.4f}s")
        return False  # don't suppress exceptions

with Timer() as t:
    sum(range(1000000))

# Context manager with contextlib
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Acquiring {name}")
    try:
        yield name
    finally:
        print(f"Releasing {name}")

with managed_resource("database") as db:
    print(f"Using {db}")`,
    difficulty: 'advanced',
    xpValue: 30,
  },

  // ===== MODULES & IO =====
  {
    id: 'py-import',
    name: 'Import',
    category: 'py-modules-io',
    description: 'The import statement loads modules and packages. You can import entire modules, specific names, or use aliases. Python searches for modules in sys.path directories.',
    codeExample: `# Import entire module
import math
print(math.pi)       # 3.141592653589793
print(math.sqrt(16)) # 4.0

# Import with alias
import numpy as np
import pandas as pd

# Import specific names
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)

# Import all (discouraged)
from os.path import *

# Conditional import
try:
    import ujson as json
except ImportError:
    import json

# Lazy import inside function
def read_csv(path):
    import csv
    with open(path) as f:
        return list(csv.reader(f))`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-from-import',
    name: 'From Import',
    category: 'py-modules-io',
    description: 'The from...import syntax imports specific attributes from a module directly into the current namespace. This avoids repeating the module name and makes code more concise.',
    codeExample: `# Import specific functions
from math import sqrt, ceil, floor
print(sqrt(25))   # 5.0
print(ceil(4.2))  # 5

# Import with alias
from collections import defaultdict as dd
word_count = dd(int)

# Import from subpackage
from os.path import join, exists, basename
path = join("/home", "user", "file.txt")

# Relative imports (inside packages)
# from . import sibling_module
# from .sibling_module import some_function
# from ..parent_package import something

# Import class from module
from dataclasses import dataclass, field
from typing import List, Dict, Optional

@dataclass
class Config:
    name: str
    values: List[str] = field(default_factory=list)
    metadata: Optional[Dict] = None`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-pip',
    name: 'Pip Package Manager',
    category: 'py-modules-io',
    description: 'Pip is the package installer for Python. It downloads and installs packages from PyPI (Python Package Index). Use virtual environments to isolate project dependencies.',
    codeExample: `# Install a package
# pip install requests

# Install specific version
# pip install requests==2.28.0

# Install from requirements.txt
# pip install -r requirements.txt

# Create requirements.txt
# pip freeze > requirements.txt

# Virtual environment workflow
# python -m venv myenv
# source myenv/bin/activate  (Linux/Mac)
# myenv\\Scripts\\activate    (Windows)
# pip install flask
# pip list
# deactivate

# Using installed package
import requests

response = requests.get("https://api.github.com")
print(f"Status: {response.status_code}")
data = response.json()`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-file-io',
    name: 'File Open / Read / Write',
    category: 'py-modules-io',
    description: 'Python provides built-in functions for file I/O. The open() function returns a file object with methods for reading and writing. Always use context managers (with) to ensure proper file closure.',
    codeExample: `# Write to a file
with open("output.txt", "w") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")
    f.writelines(["Line 3\\n", "Line 4\\n"])

# Read entire file
with open("output.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line (memory efficient)
with open("output.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines into list
with open("output.txt", "r") as f:
    lines = f.readlines()

# Append to file
with open("output.txt", "a") as f:
    f.write("Line 5\\n")

# Binary mode
with open("image.png", "rb") as f:
    header = f.read(8)`,
    difficulty: 'beginner',
    xpValue: 10,
  },
  {
    id: 'py-json',
    name: 'JSON',
    category: 'py-modules-io',
    description: 'The json module provides methods to serialize Python objects to JSON strings and deserialize JSON strings back to Python objects. Essential for working with web APIs and configuration files.',
    codeExample: `import json

# Python dict to JSON string
data = {
    "name": "Alice",
    "age": 30,
    "scores": [95, 87, 92],
    "active": True
}
json_str = json.dumps(data, indent=2)
print(json_str)

# JSON string to Python dict
parsed = json.loads(json_str)
print(parsed["name"])

# Write JSON to file
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON from file
with open("data.json", "r") as f:
    loaded = json.load(f)

# Custom serialization
from datetime import datetime

class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

json.dumps({"time": datetime.now()}, cls=DateEncoder)`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-os',
    name: 'OS Module',
    category: 'py-modules-io',
    description: 'The os module provides operating system interfaces for file and directory operations, environment variables, process management, and path manipulation.',
    codeExample: `import os

# Current directory
cwd = os.getcwd()
print(f"Current dir: {cwd}")

# List directory contents
files = os.listdir(".")
print(files)

# Create directories
os.makedirs("path/to/dir", exist_ok=True)

# Environment variables
home = os.environ.get("HOME", "/default")
os.environ["MY_VAR"] = "hello"

# Path operations
path = os.path.join("folder", "file.txt")
print(os.path.exists(path))
print(os.path.isfile(path))
print(os.path.isdir("folder"))
name = os.path.basename("/path/to/file.txt")  # file.txt
directory = os.path.dirname("/path/to/file.txt")

# Walk directory tree
for root, dirs, files in os.walk("."):
    for file in files:
        full_path = os.path.join(root, file)
        print(full_path)`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-sys',
    name: 'Sys Module',
    category: 'py-modules-io',
    description: 'The sys module provides access to Python interpreter variables and functions. It includes command-line arguments, module search path, standard I/O streams, and interpreter settings.',
    codeExample: `import sys

# Command line arguments
print(f"Script: {sys.argv[0]}")
if len(sys.argv) > 1:
    print(f"Args: {sys.argv[1:]}")

# Python version
print(f"Python {sys.version}")
print(f"Version info: {sys.version_info.major}.{sys.version_info.minor}")

# Module search path
for path in sys.path:
    print(path)

# Exit the program
# sys.exit(0)   # success
# sys.exit(1)   # error
# sys.exit("Error message")

# Memory and recursion
print(f"Recursion limit: {sys.getrecursionlimit()}")
sys.setrecursionlimit(2000)

# Object size
x = [1, 2, 3, 4, 5]
print(f"Size of list: {sys.getsizeof(x)} bytes")

# Standard streams
sys.stdout.write("Hello via stdout\\n")
sys.stderr.write("Error message\\n")`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-pathlib',
    name: 'Pathlib',
    category: 'py-modules-io',
    description: 'The pathlib module provides an object-oriented interface for filesystem paths. It is the modern replacement for os.path, offering cleaner syntax with operator overloading and method chaining.',
    codeExample: `from pathlib import Path

# Create path objects
home = Path.home()
project = Path("/home/user/project")
config = project / "config" / "settings.json"

# Path properties
print(config.name)       # settings.json
print(config.stem)       # settings
print(config.suffix)     # .json
print(config.parent)     # /home/user/project/config

# Check existence
print(config.exists())
print(config.is_file())
print(config.is_dir())

# Find files
py_files = list(project.glob("**/*.py"))
txt_files = list(project.rglob("*.txt"))

# Read and write
path = Path("example.txt")
path.write_text("Hello, World!")
content = path.read_text()

# Create directories
Path("new/nested/dir").mkdir(parents=True, exist_ok=True)

# Iterate directory
for item in Path(".").iterdir():
    prefix = "DIR " if item.is_dir() else "FILE"
    print(f"{prefix}: {item.name}")`,
    difficulty: 'intermediate',
    xpValue: 20,
  },

  // ===== ADVANCED =====
  {
    id: 'py-itertools',
    name: 'Itertools',
    category: 'py-advanced',
    description: 'The itertools module provides memory-efficient tools for creating and manipulating iterators. It includes combinatoric generators, infinite iterators, and iterator adapters for complex data pipelines.',
    codeExample: `from itertools import (
    chain, combinations, permutations,
    product, count, cycle, repeat,
    groupby, islice, starmap, accumulate
)

# Chain multiple iterables
combined = list(chain([1, 2], [3, 4], [5, 6]))
print(combined)  # [1, 2, 3, 4, 5, 6]

# Combinations and permutations
print(list(combinations("ABC", 2)))
# [('A','B'), ('A','C'), ('B','C')]
print(list(permutations("AB", 2)))
# [('A','B'), ('B','A')]

# Cartesian product
print(list(product("AB", "12")))
# [('A','1'), ('A','2'), ('B','1'), ('B','2')]

# Infinite iterators (use islice!)
evens = islice(count(0, 2), 5)
print(list(evens))  # [0, 2, 4, 6, 8]

# Group by
data = [("A", 1), ("A", 2), ("B", 3), ("B", 4)]
for key, group in groupby(data, key=lambda x: x[0]):
    print(f"{key}: {list(group)}")

# Running totals
print(list(accumulate([1, 2, 3, 4, 5])))  # [1, 3, 6, 10, 15]`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-map-filter-reduce',
    name: 'Map / Filter / Reduce',
    category: 'py-advanced',
    description: 'map() applies a function to each item, filter() selects items matching a condition, and reduce() cumulatively combines items. These functional programming tools process iterables without explicit loops.',
    codeExample: `from functools import reduce

# Map: transform each element
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# Map with multiple iterables
sums = list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30]))
print(sums)  # [11, 22, 33]

# Filter: select matching elements
evens = list(filter(lambda x: x % 2 == 0, range(10)))
print(evens)  # [0, 2, 4, 6, 8]

# Filter out None/falsy values
data = [0, 1, "", "hello", None, True, False]
truthy = list(filter(None, data))
print(truthy)  # [1, 'hello', True]

# Reduce: combine into single value
total = reduce(lambda acc, x: acc + x, numbers)
print(total)  # 15

# Reduce with initial value
product = reduce(lambda acc, x: acc * x, numbers, 1)
print(product)  # 120

# Find max with reduce
maximum = reduce(lambda a, b: a if a > b else b, numbers)`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-enumerate',
    name: 'Enumerate',
    category: 'py-advanced',
    description: 'enumerate() adds a counter to an iterable, returning (index, element) pairs. It replaces the common pattern of manually tracking an index variable in loops.',
    codeExample: `# Basic enumerate
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Custom start index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")

# With list comprehension
indexed = [(i, v) for i, v in enumerate(fruits)]

# Find indices matching condition
numbers = [10, 25, 30, 45, 50]
indices = [i for i, n in enumerate(numbers) if n > 30]
print(indices)  # [3, 4]

# Enumerate with unpacking
data = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
for rank, (name, score) in enumerate(data, start=1):
    print(f"#{rank}: {name} ({score})")

# Convert to dict
fruit_dict = dict(enumerate(fruits))
print(fruit_dict)  # {0: 'apple', 1: 'banana', 2: 'cherry'}`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-zip',
    name: 'Zip',
    category: 'py-advanced',
    description: 'zip() combines multiple iterables element-wise into tuples. It stops at the shortest iterable by default. itertools.zip_longest() pads shorter iterables. Commonly used for parallel iteration.',
    codeExample: `# Basic zip
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# Zip into dict
name_score = dict(zip(names, scores))
print(name_score)  # {'Alice': 95, 'Bob': 87, 'Charlie': 92}

# Zip three iterables
ages = [25, 30, 28]
for name, score, age in zip(names, scores, ages):
    print(f"{name} (age {age}): {score}")

# Unzip with *
pairs = [("a", 1), ("b", 2), ("c", 3)]
letters, numbers = zip(*pairs)
print(letters)  # ('a', 'b', 'c')
print(numbers)  # (1, 2, 3)

# Strict mode (Python 3.10+)
# zip(names, scores, strict=True)  # ValueError if lengths differ

# zip_longest
from itertools import zip_longest
a = [1, 2, 3]
b = [10, 20]
print(list(zip_longest(a, b, fillvalue=0)))
# [(1, 10), (2, 20), (3, 0)]`,
    difficulty: 'intermediate',
    xpValue: 20,
  },
  {
    id: 'py-async-await',
    name: 'Async / Await',
    category: 'py-advanced',
    description: 'Async/await enables asynchronous programming for I/O-bound tasks. Coroutines defined with async def can use await to pause execution while waiting for results, allowing other tasks to run concurrently.',
    codeExample: `import asyncio

# Basic coroutine
async def fetch_data(url, delay):
    print(f"Fetching {url}...")
    await asyncio.sleep(delay)  # simulate network delay
    return f"Data from {url}"

# Run multiple coroutines concurrently
async def main():
    # Sequential (slow)
    result1 = await fetch_data("api/users", 1)
    result2 = await fetch_data("api/posts", 1)

    # Concurrent (fast!)
    results = await asyncio.gather(
        fetch_data("api/users", 1),
        fetch_data("api/posts", 1),
        fetch_data("api/comments", 1),
    )
    print(results)

# Run the event loop
asyncio.run(main())

# Async context manager
async def get_connection():
    conn = await create_connection()
    try:
        yield conn
    finally:
        await conn.close()

# Async for loop
async def stream_data():
    async for chunk in read_stream():
        process(chunk)`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-type-hints',
    name: 'Type Hints',
    category: 'py-advanced',
    description: 'Type hints annotate function signatures and variables with expected types. They enable static analysis with tools like mypy, improve IDE support, and serve as documentation. They do not affect runtime.',
    codeExample: `from typing import (
    List, Dict, Tuple, Optional, Union,
    Callable, TypeVar, Generic
)

# Function annotations
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

# Variable annotations
count: int = 0
names: List[str] = ["Alice", "Bob"]
scores: Dict[str, float] = {"Alice": 95.5}

# Optional (can be None)
def find_user(user_id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(user_id)

# Union types
def process(value: Union[str, int]) -> str:
    return str(value)

# Python 3.10+ syntax
def process_new(value: str | int) -> str:
    return str(value)

# Callable type
def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

# TypeVar for generics
T = TypeVar("T")
def first(items: List[T]) -> T:
    return items[0]`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-walrus-operator',
    name: 'Walrus Operator',
    category: 'py-advanced',
    description: 'The walrus operator (:=) assigns values to variables as part of an expression (Python 3.8+). It reduces code duplication by combining assignment with condition checking in a single line.',
    codeExample: `# Without walrus operator
line = input("Enter text: ")
while line != "quit":
    print(f"You said: {line}")
    line = input("Enter text: ")

# With walrus operator
while (line := input("Enter text: ")) != "quit":
    print(f"You said: {line}")

# In list comprehension (filter and transform)
data = ["hello", "", "world", "", "python"]
non_empty = [upper for s in data if (upper := s.upper())]

# Avoid repeated computation
numbers = [2, 5, 8, 12, 3, 15, 7]
filtered = [
    y for x in numbers
    if (y := x ** 2) > 50
]
print(filtered)  # [64, 144, 225]

# With regex matching
import re
text = "Date: 2024-01-15"
if (match := re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", text)):
    year, month, day = match.groups()
    print(f"{month}/{day}/{year}")`,
    difficulty: 'advanced',
    xpValue: 30,
  },
  {
    id: 'py-slots',
    name: '__slots__',
    category: 'py-advanced',
    description: '__slots__ restricts instance attributes to a predefined set, reducing memory usage and improving attribute access speed. Classes with slots do not have a __dict__ for each instance.',
    codeExample: `# Without slots (uses __dict__)
class PointRegular:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# With slots (no __dict__)
class PointSlotted:
    __slots__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y

# Memory comparison
import sys
regular = PointRegular(1, 2)
slotted = PointSlotted(1, 2)
print(f"Regular: {sys.getsizeof(regular)} bytes + dict")
print(f"Slotted: {sys.getsizeof(slotted)} bytes")

# Slots prevent adding arbitrary attributes
# slotted.z = 3  # AttributeError!

# Inheritance with slots
class Point3D(PointSlotted):
    __slots__ = ("z",)  # only add new slots

    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z = z

p = Point3D(1, 2, 3)
print(f"({p.x}, {p.y}, {p.z})")`,
    difficulty: 'advanced',
    xpValue: 30,
  },
];
