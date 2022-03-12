#UFO Sightings#

##Project Overview##
My client requested that I use their provided dataset to build a webpage that could filter a table of UFO sightings and narrow the results to the user’s search filter. I used JavaScript to format the data into an HTML webpage in an easy-to-read table, with a related article, and banner. Initially the code I wrote allowed for one search parameter. A user could filter by a sighting date and the table would adjust to show only sightings that occurred on that date.
###Purpose###
After showing the results to my client, they asked that I modify the webpage to allow users to filter by more criteria. In addition to date, users can now search by city, state, country, and shape. This allows for greater search options for users. I chose these parameters as they were in the event information provided in the dataset.
One event example:
{
   datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
##Results##
###How to perform a search###
To perform a search, a user will type their text into one of the five provided search filters. When the user inputs a text, the table will show only rows where the column data matches the user input. The table will refresh to show the search results. If no rows match the user’s filter criteria the table will refresh and appear blank.

##Summary##

###Drawbacks of this webpage###

The webpage has opportunities for improvements:
Search filters are exact so a user must enter text that is identical to the data to get a result. For example, in the country field a search for "us” filters the table to show only sightings that happened in the United States, while a search for "US" returns an empty table. Similarly, searches for “United States” and “usa” also return an empty table. Search filters must be complete as well; no partial text is recognized by the code.
There is no way for the user to input more than one value in a search field. For example, if a user wants to look up sightings in Arizona and New Mexico they cannot filter state by “ar” and “nm” in one go. They must filter each state separately. 
Search parameters are too narrow in general. Users cannot search by region, year, time of day, or any other key phrases. We could expand these parameters with additional parsing of the data.
###Additional Recommendations###
While the search function does not require it, I recommend the addition of a search button next to the filters. This will make it more obvious that users can filter the table.
I also recommend that instead of returning an empty table when user input yields no results, a message appears in the table indicating that no matches were found. This would be more user-friendly than the current interface.
