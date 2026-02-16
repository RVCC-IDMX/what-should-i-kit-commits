# Copilot instructions

Instructions for GitHub Copilot when working on this project.

## Project context

This is a "What should I watch?" movie recommendation tool.

**Domain:** Movies

**Purpose:** Help users find the perfect movie based on their mood, available time, genre preferences, energy level, and era preference.

## Code style

- Use `const` and `let`, never `var`
- Use meaningful variable names
- Add JSDoc comments to functions
- Use strict equality (`===`) for comparisons

## Data structure

The data lives in `data.js` as a JavaScript object with movie entries:

```javascript
const data = {
  domain: "Movies",
  description: "Find the perfect movie for any mood or occasion!",
  options: [
    {
      title: "Movie title",
      category: "genre",
      mood: "emotional state",
      timeMinutes: 120,
      energy: "low/medium/high",
      era: "classic/modern"
    }
  ],
};
```

### Movie properties

Each movie object should have:
- `title` (string) - Movie name
- `category` (string) - Genre: "comedy", "drama", "action", "family", "horror", "thriller", "sci-fi", "romance"
- `mood` (string) - Emotional vibe: "happy", "sad", "inspiring", "tense", "romantic", "adventurous"
- `timeMinutes` (number) - Runtime in minutes
- `energy` (string) - Attention level: "low" (relaxing), "medium" (engaging), "high" (intense)
- `era` (string) - Time period: "classic" or "modern"

## Matching functions

Functions in `matching.js` should:

- Return `true` or `false` for matching functions
- Handle empty/null preferences (return `true` if no preference)
- Use descriptive parameter names
- Prefix movie-specific functions with context (e.g., `matchesCategory`, `meetsAllMovieCriteria`)

### Key functions:
- `matchesCategory(movie, desiredCategory)` - Single criteria check
- `matchesMood(movie, desiredMood)` - Single criteria check
- `matchesEnergy(movie, desiredEnergy)` - Single criteria check
- `matchesEra(movie, desiredEra)` - Single criteria check
- `fitsTimeRange(movie, minMinutes, maxMinutes)` - Range check
- `meetsAllMovieCriteria(movie, preferences)` - Multiple criteria using `&&`
- `calculateMatchScore(movie, preferences)` - Counts matching criteria
- `getMovieMatchMessage(score)` - Classification with if/else chain

## Naming conventions

- Use `movie` as the parameter name for individual movie objects (not `item`)
- Use `preferences` for the user's form input object
- Use descriptive names: `maxTime` not just `time`, `desiredCategory` not just `category`
- Match form field IDs to preference keys: `preferences.maxTime`, `preferences.category`, etc.

## Edge cases

- **Empty preferences:** All matching functions return `true` when preference is falsy (`!value` or `value === ""`)
- **Time handling:** Form returns strings, convert to numbers with `Number()`
- **No matches:** Display message when `recommendations.length === 0`
- **Match scoring:** Results are sorted by score (highest first) for best recommendations at the top
- **Generic options:** "Any" options should have empty string values (`""`) not `"any"`
