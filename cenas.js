$(document).ready(function () {

    $("#project1").click(function () {

        console.log("Clicked project 1");

        
        $('.showing-project-image').empty().append("<img src=img/project1.png>")
        
        

        $('.showing-project-text').empty().append("<p>A simple Java game where the player controls a chicken in a road full of moving cars. The objective is to cross the road without being hit by any car. If the player reaches the end of the road, the score increases by one, and the chicken goes to it's starting position. The difficulty increases each level, by increasing the ammount and speed of cars in the road. When the chicken gets hit, the game is lost and the player needs to start over from level one. The objective is to get the maximum possible score.</p>")

        

    });



    $("#project2").click(function () {

        console.log("Clicked project 2");

        $('.showing-project-image').empty().append("<img src=img/project2.png>")
        

        $('.showing-project-text').empty().append("<p>A simple Java game I developed during my free time, to improve and train my recently learned programming skills. The game is a clone of the famous connect four board game: a two-player game, in which the players take turns dropping colored discs into a seven-column, six-row grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.</p>")

    });



    $("#project3").click(function () {

        console.log("Clicked project 3");

        $('.showing-project-image').empty().append("<img src=img/project3.png>")
        

        $('.showing-project-text').empty().append("<p>Hackathon project developed in 24 hours on the 13th week of the <Academia de Código_> #47 bootcamp. The idea is a Web application with the main goal of facilitating the access of investors to new and interesting products in need of capital investment to grow big.</p>")

    });



    $("#project4").click(function () {

        console.log("Clicked project 4");

        $('.showing-project-image').empty().append("<img src=img/project4.png>")
        

        $('.showing-project-text').empty().append("<p>My resume created in HTML and CSS, to train my skills.</p>")

    });


    $("#project5").click(function () {

        console.log("Clicked project 5");

        $('.showing-project-image').empty().append("<img src=img/project5.png>")
        

        $('.showing-project-text').empty().append("<p>A single web page that uses multiple free APIs to get information, and then display it to the user. Created mainly to train my JavaScript, jQuery and AJAX skills, and to learn more about how APIs work.</p>")

    });




})