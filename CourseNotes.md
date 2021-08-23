# React Course Notes

These notes should help me remember some of the more important concepts, or those I struggled to grasp.

## React State

State is an object where you can store property values that belong to a component or  class.
    Calling or pointing to useState "reloads" the component and applies the new data.
    To use it we import the { useState } hook.
    useState should be called inside of a function.
    useState allows us to update the data in a component or class.
    useState can have multiple instances even within a single component.
    useState needs a default state (so give it a default value)
    useState returns an array of 2 items -> First item is the value, second item is a function to update the value. Use array destructuring to access each one.

### Lifting the State

### Definition .
    Lifting the State up is the act of passing data from a child component up to a parent. The goal is to lift data high enough that it reaches a "common" file so to speak.
    For example, App.js can communicate with both Expenses and NewExpense, but these components cannot speak with each other.

### Concept .
    " We can create our own 'event props' if we want to call it like that, and we can expect functions as values and that will allow us to pass a function from a PARENT component TO a CHILD component, and then call that function inside the child component. When we call that [parent] function, we can pass data to that function as a parameter. That's how we can communicate UP. "

### In-depth example . 
    In our PARENT component where we want our child data to come to, we create a function that manipulates that data in some way (adds, removes, saves etc). While still in this parent component, we then create a custom listener in the child tag and point the previous method. 

    Once this is done we go to the child component and pass in props as a parameter if we hadn't already. 
      