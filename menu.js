javascript:(function(){
    var popup = window.open("", "_blank", "width=300,height=200");
    popup.document.write("
    <html>
    <head>
    <title>about:blank</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .fb0bf4c3-3429-473a-a303-e4dda50e1daa {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
    </style>
    </head>
    <body>
    <h2>Bookmarklet Menu</h1>
    <form id='form'>
        <input type='text' class='fb0bf4c3-3429-473a-a303-e4dda50e1daa' id='userInput' placeholder='Enter the number of the bookmarklet...'>
        <button type='submit'>Submit</button>
    </form>
    <p id='result'></p>
    <script>
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            var userInput = document.getElementById('userInput').value;
            document.getElementById('result').textContent = 'You entered: ' + userInput;
        });
    </script>
    </body>
    </html>");
    /*popup.document.close();
    window.onblur = function() {
        popup.close();
    };*/
})();
