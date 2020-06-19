# Password Generator

The goal of this project was to create a random password based on user-selected criteria, between 8 and 128 characters.

## Getting Started

1. Log into GitLab > UCB-Coding-Bootcamp > UCB-BER-FSF-FT-06-2020-U-C
2. Navigate to Javascript Homework (click) 
3. Open VS Code or similar program and follow provided instructions.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/
* Bootstrap https://getbootstrap.com/

### Execution

* Created site using Bootstrap
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    <title>Password Generator</title>
</head>
<body></br></br>
    <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="mx-auto" style="width: 300px;">
```
* Generate Password button created and functional
```
                <div class="row">
                    <div class="col-lg-6">
                        
                        <div class="input-group">
                            <div class="input-group-prepend"></div>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                          </div>
                    </div>   
                </div></br>
                <button onclick="char()" type="button" class="btn btn-danger">Generate Password</button>
            </div>
```            
* Created variables for acceptable characters
```
var capARR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerARR = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "0123456789";
        var spChar = "#,$,%,&,,(,),*,+,,,-,.,/,:,;<,=,>,?,@,[,\,],^,_,,{,|,},~,";
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* https://jdavis3333.github.io/Password-Generator/


## Authors

* Joe Davis

- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

