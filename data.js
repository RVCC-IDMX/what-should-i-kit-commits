/**
 * Your recommendation data goes here!
 *
 * Replace this example with your own domain (movies, restaurants, games, etc.)
 * Keep the same structure: an object with an "options" array.
 *
 * Each option should have properties that help you make recommendations.
 * Think about: What information do I need to match user preferences?
 */

const data = {
  // Describe your domain
  domain: "Movies",
  description: "Find the perfect movie for any mood or occasion!",

  // Your options array - aim for 15-25 items
  options: [
    // Example structure - replace with your own!
    {
      title: "The Grand Budapest Hotel",
      category: "comedy",
      mood: "happy",
      timeMinutes: 99,
      energy: "medium",
      era: "modern"
      // Add more properties relevant to your domain
    },
    {
      title: "Paddington 2",
      category: "family",
      mood: "happy",
      timeMinutes: 103,
      energy: "low",
      era: "modern"
    },
    {
      title: "The Pursuit of Happyness",
      category: "drama",
      mood: "sad",
      timeMinutes: 117,
      energy: "low",
      era: "modern"
    },
    {
      title: "Good Will Hunting",
      category: "drama",
      mood: "sad",
      timeMinutes: 126,
      energy: "low",
      era: "classic"
    },
    {
      title: "Mad Max: Fury Road",
      category: "action",
      mood: "adventurous",
      timeMinutes: 120,
      energy: "high",
      era: "modern"
    },
    {
      title: "Indiana Jones: Raiders of the Lost Ark",
      category: "adventure",
      mood: "adventurous",
      timeMinutes: 115,
      energy: "high",
      era: "classic"
    },
    {
      title: "The Notebook",
      category: "romance",
      mood: "romantic",
      timeMinutes: 123,
      energy: "low",
      era: "modern"
    },
    {
      title: "Pride & Prejudice",
      category: "romance",
      mood: "romantic",
      timeMinutes: 129,
      energy: "low",
      era: "classic"
    },
    {
      title: "Get Out",
      category: "horror",
      mood: "scared",
      timeMinutes: 104,
      energy: "medium",
      era: "modern"
    },
    {
      title: "The Conjuring",
      category: "horror",
      mood: "scared",
      timeMinutes: 112,
      energy: "high",
      era: "modern"
    },
    {
      title: "Rocky",
      category: "sports",
      mood: "motivated",
      timeMinutes: 120,
      energy: "medium",
      era: "classic"
    },
     {
      title: "Hidden Figures",
      category: "biography",
      mood: "motivated",
      timeMinutes: 127,
      energy: "medium",
      era: "modern"
    },
    {
      title: "La La Land",
      category: "musical",
      mood: "happy",
      timeMinutes: 128,
      energy: "medium",
      era: "modern"
    },
    {
      title: "Inside Out",
      category: "animation",
      mood: "sad",
      timeMinutes: 95,
      energy: "low",
      era: "modern"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      category: "fantasy",
      mood: "adventurous",
      timeMinutes: 178,
      energy: "high",
      era: "modern"
    },
    {
      title: "Before Sunrise",
      category: "romance",
      mood: "romantic",
      timeMinutes: 101,
      energy: "low",
      era: "classic"
    },
    {
      title: "A Quiet Place",
      category: "horror",
      mood: "scared",
      timeMinutes: 90,
      energy: "medium",
      era: "modern"
    },
     {
      title: "The Social Network",
      category: "drama",
      mood: "motivated",
      timeMinutes: 120,
      energy: "medium",
      era: "modern"
    },
    {
      title: "Ferris Bueller's Day Off",
      category: "comedy",
      mood: "happy",
      timeMinutes: 103,
      energy: "medium",
      era: "classic"
    },
    {
      title: "Jurassic Park",
      category: "adventure",
      mood: "adventurous",
      timeMinutes: 127,
      energy: "high",
      era: "classic"
    }
    // Add more options...
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
