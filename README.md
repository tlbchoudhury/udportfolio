## Website Performance Optimization portfolio project

This online portfolio has been optimized for speed. In particular, the critical rendering path has been optimized and this page renders as quickly as possible by applying the techniques I have picked up in the Critical Rendering Path course.

Check out the repository
To inspect the site on your phone, you can run a local server

$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
Open a browser and visit localhost:8080

Download and install ngrok to make your local server accessible remotely.

$> cd /path/to/your-project-folder
$> ngrok 8080
Copy the public URL ngrok gives you and try running it through PageSpeed Insights.


Optimizations Performed:

index.html (main page):
Inline CSS
Minimize pizzeria image size & made it png
async JS
Added media= "print" for print.css
commented out google font link

main.js for pizzaria: 
  changed pizza size values to percentage (line 457)
  used document.getElementsByClassName() Web Api instead of document.querySelectorAll (line 468)
  saved local variable randomPizzaContainer & randomPizzaContainersLength (line 468-469) outside the loop so the DOM is not touched in every iteration.

  Decleared pizzasDiv variable outside the loop so only DOM call is made (line 488)

  Reduced the number of background pizzas to 24 (line 544).

CSS for pizzaria (style.css)
Added transform:translateZ(0) under the class mover to increase site performance

Gulp Build Steps:

Check installation of node js by running: npm -v
  -v can be used to check if gulp is installed
Install Gulp
npm install --global --save-dev gulp

Then, install it in your project:
npm install --save-dev gulp

To minify js:
install gulp-uglify: npm install gulp-uglify --save-dev

To minify html & css:
run: npm install gulp-htmlmin --save-dev

Run gulp command from root directory of the project to get the project built



