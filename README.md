# True AI Technical Test

Congratulations for getting to this stage! The next step is to evaluate you on a small coding task to test your development and design skills.

At True AI, our mission is to use cutting edge Artificial Intelligence to help customer service agents be more productive by automating (fully or partially) laborious tasks, improving quality of life for the agents while enabling our clients to provide faster, better and affordable customer service.

Please note this test is split into 3 sections.  Please only complete the task(s) for the role you are applying for!


## (Task 1)  Full Stack or Frontend Developer

This repo contains the boilerplate for a simple Chrome plugin, and a test harness for this code.  Your task is to extend the plugin to add a badge to each text `<input>`, `<textarea>` or `<div contentEditable="true">` tag found on a webpage showing the current word count within the input.

An example of how this might look is shown below:

![example](./example.png)


## (Task 2)  Full Stack or Backend Developer

Extend the code developed in part 1 with a simple backend.  

The plugin is to make an HTTP request to the backend, and the backend is required to:
- Store the text in a database
- Return a colour for the badge for a range of 0-100 words.
  If applying for Full stack position please apply this colour to the badge in the plugin.

In addition, the backend shall also:
- Provide an endpoint to allow fetching a numbered text entry from the database.
- Provide an endpoint to allow deleting of a numbered text entry from the database.

The backend must be written in Python.  You are free to use any database you wish, however please justify your decision!


## (Task 3) Full Stack or Backend Developer

Write necessary deployment scripts to run your backend on local Kubernetes minikube cluster.

## Assessment

You will be assessed on following criteria:
- Quality of code (including legibility and comments)
- Quality of unit and other tests

Please make sure that you provide clear instructions to run your web app. 

Note: Please do not make this task or your solution to this task public (including Github), failing which, you will be disqualified.
