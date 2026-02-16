/**
 * Matching functions for your recommendation system
 *
 * Write functions that check if an item matches user preferences.
 * You need at least 4 functions using different JS concepts:
 *
 * 1. Single criteria match (simple conditional)
 * 2. Range check (comparison operators)
 * 3. Multiple criteria match (logical operators: &&)
 * 4. Classification function (if/else chain)
 */

// ============================================================
// EXAMPLE FUNCTIONS - Replace these with your own!
// ============================================================

/**
 * Checks if an item matches the desired mood
 * @param {Object} item - An item from your data
 * @param {string} desiredMood - The mood the user wants
 * @returns {boolean} - True if the item matches the mood
 */
function matchesMood(item, desiredMood) {
  // If no mood preference, everything matches
  if (!desiredMood) {
    return true;
  }

  // Check if the item's mood matches the desired mood
  return item.mood === desiredMood;
}

/**
 * Checks if an item fits within the available time
 * @param {Object} item - An item from your data
 * @param {number} availableMinutes - Maximum time available
 * @returns {boolean} - True if the item fits in the time
 */
function fitsTimeAvailable(item, availableMinutes) {
  // If no time constraint, everything fits
  if (!availableMinutes) {
    return true;
  }

  // Check if item's duration is within available time
  return item.timeMinutes <= availableMinutes;
}

/**
 * Checks if an item matches multiple criteria at once
 * @param {Object} item - An item from your data
 * @param {Object} preferences - Object with user preferences
 * @returns {boolean} - True if item matches ALL criteria
 */
function meetsAllCriteria(item, preferences) {
  // Use && to combine multiple checks
  return (
    matchesMood(item, preferences.mood) &&
    fitsTimeAvailable(item, preferences.time)
    // Add more checks here as needed
  );
}

/**
 * Returns a message based on how well an item matches
 * @param {number} matchScore - How many criteria matched (0-3)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(matchScore) {
  if (matchScore === 3) {
    return "Perfect match!";
  } else if (matchScore === 2) {
    return "Great option";
  } else if (matchScore === 1) {
    return "Worth considering";
  } else {
    return "Might work";
  }
}

// ============================================================
// YOUR FUNCTIONS GO HERE
// ============================================================

/**
 * Checks if a movie matches the desired category/genre
 * @param {Object} movie - A movie from the data
 * @param {string} desiredCategory - The genre the user wants
 * @returns {boolean} - True if the movie matches the category
 */
function matchesCategory(movie, desiredCategory) {
  // If no category preference, everything matches
  if (!desiredCategory || desiredCategory === "any") {
    return true;
  }
  
  return movie.category === desiredCategory;
}

/**
 * Checks if a movie matches the desired energy level
 * @param {Object} movie - A movie from the data
 * @param {string} desiredEnergy - The energy level the user wants
 * @returns {boolean} - True if the movie matches the energy level
 */
function matchesEnergy(movie, desiredEnergy) {
  // If no energy preference, everything matches
  if (!desiredEnergy || desiredEnergy === "any") {
    return true;
  }
  
  return movie.energy === desiredEnergy;
}

/**
 * Checks if a movie matches the desired era preference
 * @param {Object} movie - A movie from the data
 * @param {string} desiredEra - The era preference ("classic" or "modern")
 * @returns {boolean} - True if the movie matches the era
 */
function matchesEra(movie, desiredEra) {
  // If no era preference, everything matches
  if (!desiredEra || desiredEra === "any") {
    return true;
  }
  
  return movie.era === desiredEra;
}

/**
 * Checks if a movie is within the desired time range
 * @param {Object} movie - A movie from the data
 * @param {number} minMinutes - Minimum acceptable runtime
 * @param {number} maxMinutes - Maximum acceptable runtime
 * @returns {boolean} - True if the movie is within the time range
 */
function fitsTimeRange(movie, minMinutes, maxMinutes) {
  // If no time constraints, everything fits
  if (!minMinutes && !maxMinutes) {
    return true;
  }
  
  // Check only max time if min is not specified
  if (!minMinutes && maxMinutes) {
    return movie.timeMinutes <= maxMinutes;
  }
  
  // Check only min time if max is not specified
  if (minMinutes && !maxMinutes) {
    return movie.timeMinutes >= minMinutes;
  }
  
  // Check if movie fits within the range
  return movie.timeMinutes >= minMinutes && movie.timeMinutes <= maxMinutes;
}

/**
 * Checks if a movie meets all the user's preferences
 * @param {Object} movie - A movie from the data
 * @param {Object} preferences - Object containing all user preferences
 * @returns {boolean} - True if movie matches ALL specified criteria
 */
function meetsAllMovieCriteria(movie, preferences) {
  return (
    matchesCategory(movie, preferences.category) &&
    matchesMood(movie, preferences.mood) &&
    matchesEnergy(movie, preferences.energy) &&
    matchesEra(movie, preferences.era) &&
    fitsTimeAvailable(movie, preferences.maxTime)
  );
}

/**
 * Calculates how many preferences a movie matches
 * @param {Object} movie - A movie from the data
 * @param {Object} preferences - Object containing user preferences
 * @returns {number} - Number of criteria matched (0-5)
 */
function calculateMatchScore(movie, preferences) {
  let score = 0;
  
  if (matchesCategory(movie, preferences.category)) score++;
  if (matchesMood(movie, preferences.mood)) score++;
  if (matchesEnergy(movie, preferences.energy)) score++;
  if (matchesEra(movie, preferences.era)) score++;
  if (fitsTimeAvailable(movie, preferences.maxTime)) score++;
  
  return score;
}

/**
 * Returns a personalized message based on match quality
 * @param {number} matchScore - How many criteria matched (0-5)
 * @returns {string} - A recommendation message
 */
function getMovieMatchMessage(matchScore) {
  if (matchScore === 5) {
    return "🎯 Perfect match!";
  } else if (matchScore === 4) {
    return "⭐ Excellent choice";
  } else if (matchScore === 3) {
    return "👍 Good option";
  } else if (matchScore === 2) {
    return "🤔 Worth considering";
  } else if (matchScore === 1) {
    return "💭 Possible option";
  } else {
    return "❓ Maybe";
  }
}
