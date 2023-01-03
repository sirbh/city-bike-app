# CITY BIKE APP FRONTEND
## About
This repository contains code for the front end for CITY BIKE app. With this we can view information about bike station and journey details in Espoo region. Moreover on staion route we can also view more detailes about a station by clicking or searching the station name.

## Features 

### Journey View

- List of journeys with departure stations, return stations, covered distance in kilometers and duration in minutes is shown.
- Pagination
- Ordering per column
- Searching

### Station View
- List of all the stations.
- Pagination
- Searching
-  Top 5 most popular return stations for journeys starting from the station
- Top 5 most popular departure stations for journeys ending at the station

### Single station view (by clicking on station name on station page)
- Station name
- Station address
- Total number of journeys starting from the station
- Total number of journeys ending at the station
- The average distance of a journey starting from the station
- The average distance of a journey ending at the station


> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.


## Tech

ReactJS
MaterialUI
Axios

## How to run?

BEFORE RUNNING FRONTEND MAKE SURE BACKEND IS RUNNING - https://github.com/sirbh/city-bike-backend

1. clone the repo using ``` git clone https://github.com/sirbh/city-bike-app.git```.
2. In the project directory run ```npm i```
3. Then run ```npm run dev```
4. Open the url which was generated as an output of above command

