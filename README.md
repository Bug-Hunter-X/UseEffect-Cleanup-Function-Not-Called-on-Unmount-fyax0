# React useEffect Cleanup Function Issue

This repository demonstrates a common issue in React where the cleanup function within a `useEffect` hook is not called when the component is unmounted.

## Problem

The provided `MyComponent` utilizes a `useEffect` hook.  The cleanup function, intended to run before the component unmounts, is crucial for resource management (e.g., clearing intervals, unsubscribing from events). However, under certain conditions, this cleanup might not execute properly leading to potential issues.

## Solution

The solution file (`bugSolution.js`) addresses the problem by ensuring the cleanup function is always executed correctly before unmounting.