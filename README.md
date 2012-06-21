# Javascript development prototype 

This is a very simple (serverless) Javascript application to experiment with JavaScript development.

* Have the complete build, testing & deployment path ready right from the start
* Showcase development driven by small stories with user value only
* Showcase testing
  * Unit testing of the application logic
  * Unit testing of the UI logic (probably by using MVVC and unit test there as well)
  * Automated UI-Testing
* Conitnous integration

# What it does

*multi* is a simple multiplication trainer (1x1) for students to speed up their multiplication skills. A typical user might do this:

* Launch the multi start.html page from the local filesystem of his computer. (Look ma, no servers!)
* See a friendly welcome page and click on "start exercise"
* multi will select 10 multiplication exercises (4*6, 3*9, 7*7, …) which the user has to answer correctly.
* For scoring it will measure the time the user takes to enter a correct answer
* For each of the 100 available exercies multi will keep a weighted store (more recent exercies count more than older ones) of results and present them to the user by color code.

# Further info

See [Blog](blog.md) for my developments notes

See [Backlog](backlog.md) for the current backlog