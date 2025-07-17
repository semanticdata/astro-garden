---
title: JavaScript
description: "JavaScript is a versatile, dynamic programming language that enables interactive web experiences, from client-side DOM manipulation to server-side applications with Node.js."
compartir: true
tags: [web-development, language, programming]
aliases: [Javascript, JS]
---

JavaScript is a versatile, dynamic programming language that brings interactivity to web pages and powers modern web applications. Originally designed for client-side scripting, JavaScript has evolved into a full-stack language capable of server-side development, mobile apps, and desktop applications.

> [!info]
> Modern JavaScript (ES6+) includes powerful features like arrow functions, destructuring, modules, and async/await that make code more readable and maintainable.

## Core Philosophy

JavaScript follows the principle of **event-driven programming**—responding to user interactions, data changes, and system events to create dynamic experiences. The language emphasizes **flexibility** and **rapid development**, allowing multiple programming paradigms including procedural, object-oriented, and functional approaches.

**Dynamic typing** means variables can hold different types of values, and **first-class functions** enable powerful patterns like callbacks, closures, and higher-order functions.

## JavaScript Fundamentals

### Variables and Data Types

```javascript
// Variable declarations
let mutableVariable = 'can change';
const immutableVariable = 'cannot change';
var oldStyleVariable = 'function-scoped'; // Avoid in modern code

// Data types
const number = 42;
const string = 'Hello, world!';
const boolean = true;
const array = [1, 2, 3, 'mixed', true];
const object = { name: 'John', age: 30, isActive: true };

// Template literals
const greeting = `Hello, ${object.name}! You are ${object.age} years old.`;
```

### Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function (ES6+)
const greetArrow = (name) => `Hello, ${name}!`;

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Control Flow

```javascript
// Conditional statements
const age = 25;
const status = age >= 18 ? 'adult' : 'minor';

if (age >= 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const item of array) {
    console.log(item);
}

for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}
```

## DOM Manipulation

JavaScript's primary role in web development is manipulating the Document Object Model (DOM) to create interactive experiences:

### Selecting Elements

```javascript
// Select elements
const element = document.getElementById('myElement');
const elements = document.querySelectorAll('.my-class');
const firstMatch = document.querySelector('.my-class');

// Modern element selection
const button = document.querySelector('[data-action="submit"]');
const navItems = document.querySelectorAll('nav a');
```

### Modifying Content and Attributes

```javascript
// Change content
element.textContent = 'New text content';
element.innerHTML = '<strong>New HTML content</strong>';

// Modify attributes
element.setAttribute('data-status', 'active');
element.classList.add('highlighted');
element.classList.toggle('visible');
element.classList.remove('hidden');

// Style manipulation
element.style.backgroundColor = '#007bff';
element.style.transform = 'translateX(100px)';

// Data attributes
element.dataset.userId = '123';
const userId = element.dataset.userId;
```

### Event Handling

```javascript
// Event listeners
button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Button clicked!');
});

// Arrow function event handler
button.addEventListener('click', (event) => {
    event.target.classList.toggle('active');
});

// Event delegation
document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-button')) {
        deleteItem(event.target.closest('.item'));
    }
});
```

## Asynchronous JavaScript

### Promises and Async/Await

```javascript
// Promise-based API call
function fetchUserData(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log('User data:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}

// Async/await syntax (modern approach)
async function fetchUserDataModern(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        console.log('User data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Handling multiple async operations
async function loadMultipleUsers(userIds) {
    try {
        const promises = userIds.map(id => fetchUserDataModern(id));
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error('Error loading users:', error);
    }
}
```

### Timers and Delays

```javascript
// setTimeout and setInterval
setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

const intervalId = setInterval(() => {
    console.log('Executed every second');
}, 1000);

// Clear timers
clearInterval(intervalId);

// Modern delay utility
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function delayedAction() {
    console.log('Starting...');
    await delay(2000);
    console.log('2 seconds later...');
}
```

## Modern JavaScript Features (ES6+)

### Destructuring

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Object destructuring
const user = { name: 'Alice', age: 30, email: 'alice@example.com' };
const { name, age, email: userEmail } = user;

// Function parameter destructuring
function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}

displayUser(user);
```

### Spread Operator and Rest Parameters

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const originalObject = { a: 1, b: 2 };
const extendedObject = { ...originalObject, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Modules

```javascript
// Exporting from a module (utils.js)
export const API_URL = 'https://api.example.com';

export function formatDate(date) {
    return date.toLocaleDateString();
}

export default class UserService {
    async getUser(id) {
        const response = await fetch(`${API_URL}/users/${id}`);
        return response.json();
    }
}

// Importing in another file
import UserService, { API_URL, formatDate } from './utils.js';
import { specificFunction } from './helpers.js';

const userService = new UserService();
```

## Object-Oriented Programming

### Classes and Inheritance

```javascript
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    getInfo() {
        return `${super.getInfo()} (${this.doors} doors)`;
    }
}

const myCar = new Car('Toyota', 'Camry', 2022, 4);
```

### Prototypes and Closures

```javascript
// Prototype-based inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

// Closures for data privacy
function createCounter() {
    let count = 0;
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
```

## Error Handling

```javascript
// Try-catch for synchronous code
function parseJsonSafely(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Invalid JSON:', error.message);
        return null;
    }
}

// Error handling with async/await
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error:', error.message);
        } else {
            console.error('Fetch error:', error.message);
        }
        return null;
    }
}

// Custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
    return true;
}
```

## Working with APIs

### Fetch API and HTTP Requests

```javascript
// GET request
async function getUsers() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// POST request
async function createUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create user');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Using the functions
async function handleUserCreation() {
    const newUser = {
        name: 'John Doe',
        email: 'john@example.com'
    };
    
    try {
        const createdUser = await createUser(newUser);
        console.log('User created:', createdUser);
        
        // Refresh user list
        const allUsers = await getUsers();
        displayUsers(allUsers);
    } catch (error) {
        showErrorMessage('Failed to create user. Please try again.');
    }
}
```

## JavaScript Frameworks and Libraries

### Popular Frontend Frameworks

**React** - Component-based library for building user interfaces:
```javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserDataModern(userId)
            .then(setUser)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    return user ? <div>{user.name}</div> : <div>User not found</div>;
}
```

**Vue.js** and **[[svelte|Svelte]]** offer alternative approaches with reactive data binding and compile-time optimization respectively.

### Utility Libraries

**Lodash** - Utility functions for common programming tasks:
```javascript
import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const evens = _.filter(numbers, n => n % 2 === 0);
const grouped = _.groupBy(users, 'department');

// Function utilities
const debouncedSearch = _.debounce(searchFunction, 300);
const throttledScroll = _.throttle(handleScroll, 100);
```

## Browser APIs and Web Standards

### Local Storage and Session Storage

```javascript
// Local Storage (persists until manually cleared)
function saveUserPreferences(preferences) {
    localStorage.setItem('userPrefs', JSON.stringify(preferences));
}

function getUserPreferences() {
    const saved = localStorage.getItem('userPrefs');
    return saved ? JSON.parse(saved) : {};
}

// Session Storage (persists until tab is closed)
sessionStorage.setItem('tempData', JSON.stringify(data));
```

### Geolocation API

```javascript
// Get user's current location
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                });
            },
            (error) => {
                reject(new Error(`Geolocation error: ${error.message}`));
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    });
}

// Usage
async function showUserLocation() {
    try {
        const location = await getCurrentLocation();
        console.log(`User is at: ${location.latitude}, ${location.longitude}`);
    } catch (error) {
        console.error('Could not get location:', error.message);
    }
}
```

## Performance and Best Practices

### Code Optimization

```javascript
// Efficient DOM manipulation
function updateUserList(users) {
    const container = document.getElementById('user-list');
    const fragment = document.createDocumentFragment();
    
    users.forEach(user => {
        const div = document.createElement('div');
        div.textContent = user.name;
        fragment.appendChild(div);
    });
    
    container.appendChild(fragment); // Single DOM update
}

// Event delegation instead of multiple listeners
document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn')) {
        handleDelete(event.target.dataset.id);
    }
});
```

### Debugging and Development

```javascript
// Console debugging techniques
console.log('Simple log');
console.table(arrayOfObjects); // Display data in table format
console.time('operation');
// ... some operation
console.timeEnd('operation');

// Error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    reportError(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});
```

## Testing JavaScript Code

### Unit Testing Example

```javascript
// Simple testing framework usage (Jest-style)
function add(a, b) {
    return a + b;
}

// Test cases
describe('Math functions', () => {
    test('add function works correctly', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
});

// Async function testing
test('fetchUser returns user data', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ id: 1, name: 'John' })
        })
    );

    const user = await fetchUser(1);
    expect(user).toEqual({ id: 1, name: 'John' });
});
```

## Integration with Web Technologies

### JavaScript with HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Integration</title>
</head>
<body>
    <!-- HTML structure for JavaScript to manipulate -->
    <div id="app">
        <header class="header">
            <h1 class="title">My Application</h1>
            <nav class="navigation">
                <button class="nav-btn" data-page="home">Home</button>
                <button class="nav-btn" data-page="about">About</button>
            </nav>
        </header>
        <main class="content" id="main-content">
            <!-- Dynamic content loaded here -->
        </main>
    </div>

    <!-- JavaScript at end of body for performance -->
    <script src="scripts/main.js"></script>
</body>
</html>
```

### JavaScript with CSS

```javascript
// Dynamic styling with JavaScript
function toggleTheme() {
    document.documentElement.classList.toggle('dark-theme');
    
    // Update CSS custom properties
    const isDark = document.documentElement.classList.contains('dark-theme');
    document.documentElement.style.setProperty(
        '--primary-color', 
        isDark ? '#bb86fc' : '#6200ea'
    );
}

// Responsive behavior with JavaScript
function handleResize() {
    const width = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
    
    if (width < 768) {
        sidebar.classList.add('mobile');
    } else {
        sidebar.classList.remove('mobile');
    }
}

window.addEventListener('resize', handleResize);

// Animation with JavaScript
function animateElement(element, fromX, toX, duration = 300) {
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentX = fromX + (toX - fromX) * easeOut;
        
        element.style.transform = `translateX(${currentX}px)`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}
```

## Node.js and Server-Side JavaScript

### Basic Server Example

```javascript
// Express.js server setup
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await getUsersFromDatabase();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await createUserInDatabase(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create user' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

JavaScript has evolved from a simple scripting language to a comprehensive platform for building everything from interactive websites to full-stack applications. Its integration with [[html|HTML]] for structure and [[css|CSS]] for styling creates the foundation of modern web development, while frameworks and libraries extend its capabilities for complex applications. Whether used for client-side interactivity, server-side development with Node.js, or mobile app development, JavaScript remains central to contemporary software development.