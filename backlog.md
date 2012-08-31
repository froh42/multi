# Backlog

## Open
* The user gets a nicley designed startup screen
* The user gets a nicley designed game screen

## In Progress
* After 10 exercises the user gets a statistic how often he solved each possible exercise
    * Progress exercise number when clicking on next exercise
    	* Handling of complete quiz and exercise are handled at distinct places.
    	* (/) Make javascript use require.js
    		* (/) Convert tests and relevant scripts to require.js
    		* (/) Convert page to require.js
    * Terminate after 10 exercises
    * Show statistics

## Done
* Each time the user enters the game screen a new, random exercise is created.
* On the game screen I see one excercise and have to enter the correct solution to proceed. The Page gives feedback whether the soulution is correct.
    * Exercise is correctly displayed, feedback is given. 
    * "next" button is always available.
* I can launch the game in the browser, click on the start game link on the home screen and proceed to the game screen
    * Manually Confirmed: 2012-06-19 A start screen is shown containing a menu link into the game screen. (Selenium candidate)

## Rejected

* *The state (are we at the start view or within the game) is maintained by a view model instead of html.* This is a technical issue and totally transparent to the user. The user doesn't care and so should we. However, *if* there is a technical reason to maintain state the described way, we should integrate it in a refactoring.

# Naming

* Exercise - One single multiplication exercise
* Quiz - A number of exercises (currently 10) asked in one session, one after another
* Stats - Statistic data gathered running several quizzes



