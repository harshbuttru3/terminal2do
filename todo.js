#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');
// import { red } from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function addTodo() {
  rl.question('Enter the todo: ', (todo) => {
    todos.push(todo);
    saveTodos();
    console.log('Todo added!');
    showMenu();
  });
}

function removeTodo() {
  rl.question('Enter the index of the todo to remove: ', (index) => {
    if (index-1 >= 0 && index-1 < todos.length) {
      todos.splice(index-1, 1);
      saveTodos();
      console.log('Todo removed!');
    } else {
      console.log('Invalid index!');
    }
    showMenu();
  });
}

function listTodos() {
  if (todos.length === 0) {
    console.log('No todos yet!');
  } else {
    console.log('Your todos:');
    todos.forEach((todo, index) => {
      console.log(`${index+1}: ${todo}`);
    });
  }
  
}

function showMenu() {
  console.log('\n1.  Add todo\n2.  Remove todo\n3.  List todos\n99. Quit');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
        addTodo();
        break;
      case '2':
        process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
        listTodos();
        removeTodo();
        break;
      case '3':
        process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
        listTodos();
        showMenu();
        break;
      case '99':
        process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
        rl.close();
        break;
      default:
        console.log('Invalid option!');
        showMenu();
    }
  });
}

function saveTodos() {
  fs.writeFile('todos.txt', todos.join('\n'), (err) => {
    if (err) {
      console.error('Error saving todos:', err);
    }
  });
}

function loadTodos() {
  fs.readFile('todos.txt', 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log('No todos yet!');
      } else {
        console.error('Error loading todos:', err);
      }
    } else {
      todos = data.split('\n').filter(todo => todo.trim() !== '');
    }
    showMenu();
  });
}

// function showLoader() {
//     process.stdout.write('Loading');
//     let count = 3;
//     let loader = setInterval(() => {
//       process.stdout.write('.');
//       count--;
//       if (count === 0) {
//         clearInterval(loader);
//         process.stdout.write('\n\n');
//         showBanner();
//         // Start the todo app after the loader
//         showMenu();
//       }
//     }, 1000);
//   }
  
//   function showBanner() {
//     console.log('==============================');
//     console.log(' Welcome to the Todo App');
//     console.log('==============================\n');
//   }
  
//   // Call the showLoader function to start the loader
//   showLoader();

function showBanner() {
    console.log("Made with blood😂 by");
    console.log('\x1b[31m'); // Set color to red
    console.log(`
  ██░ ██  ▄▄▄       ██▀███    ██████  ██░ ██      
  ▓██░ ██▒▒████▄    ▓██ ▒ ██▒▒██    ▒ ▓██░ ██▒     
  ▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒░ ▓██▄   ▒██▀▀██░     
  ░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄    ▒   ██▒░▓█ ░██      
  ░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒▒██████▒▒░▓█▒░██▓ ██▓ 
   ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒▓▒ 
   ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░░ ░▒  ░ ░ ▒ ░▒░ ░ ░▒  
   ░  ░░ ░  ░   ▒     ░░   ░ ░  ░  ░   ░  ░░ ░ ░   
   ░  ░  ░      ░  ░   ░           ░   ░  ░  ░  ░  
                                                ░  
  `);
    console.log('\x1b[0m'); // Reset color
  }
  
    showBanner();
    showMenu();