# Basic JS Timer

## Basic Usage

- Intialize the timer
    ```js
    /**
    * To initialize timer pass,
    * the target div, where you want to render the timer,
    * and pass the total time, you want timer to run
    */
    var timer = new Timer(targetDiv, totalTime);
    ```

- To start the timer
    ```js
    timer.startTimer();
    ```

- To stop the timer
    ```js
    timer.stopTimer();
    ``` 

- To reset the timer
    ```js
    timer.resetTimer();
    ``` 