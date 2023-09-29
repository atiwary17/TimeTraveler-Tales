(()=>{
    "use strict";
    var e = {
        583: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0 
            }),
            t.Component = void 0,
            t.Component = class {
                constructor(e) {
                    this.el = e
                }
                removeChildren() {
                    if (this.el.childNodes.length > 0)
                        for (; this.el.firstChild; )
                            this.el.removeChild(this.el.firstChild)
                }
            }
        }
        ,
        983: (e,t,o)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ItemRemoval = void 0;
            const a = o(583);
            class n extends a.Component {
                constructor(e) {
                    const t = document.createElement("img");
                    t.src = "static/close.png",
                    t.alt = "delete",
                    t.className = "item-delete",
                    t.id = `${e}-delete`,
                    super(t)
                }
            }
            t.ItemRemoval = n
        }
        ,
        658: (e,t,o)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MenuItem = void 0;
            const a = o(583)
              , n = o(983);
            class l extends a.Component {
                constructor(e, t, o) {
                    const a = new n.ItemRemoval(e)
                      , l = document.createElement("li");
                    l.className = "menu-item",
                    l.id = `${e}-item`,
                    l.textContent = t,
                    l.style.backgroundColor = o,
                    l.appendChild(a.el),
                    super(l),
                    this.deleteItem = a,
                    this.appearAnimation()
                }
                appearAnimation() {
                    this.el.animate([{
                        transform: "scale(1.25)"
                    }, {
                        transform: "scale(1.00)"
                    }], {
                        duration: 500
                    })
                }
            }
            t.MenuItem = l
        }
        ,
        191: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ItemList = void 0,
            t.ItemList = class {
                constructor(e) {
                    this.items = [],
                    this.maximumSize = e
                }
                add(e) {
                    this.items.length < this.maximumSize && this.items.push(e)
                }
                removeById(e) {
                    const t = this.items.find((t=>t.id === e));
                    t && this.remove(t)
                }
                remove(e) {
                    this.items.splice(this.items.indexOf(e), 1)
                }
                clear() {
                    this.items = []
                }
            }
        }
        ,
        418: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Item = void 0,
            t.Item = class {
                constructor(e, t, o) {
                    this.id = e,
                    this.name = t,
                    this.color = o
                }
            }
        }
        ,
        497: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.IdPool = void 0;
            class o {
                static initializeIdsPool(e) {
                    for (let t = 1; t <= e; t++)
                        o.avaliableIds[t] = t
                }
                static getAnId() {
                    const e = this.avaliableIds.pop();
                    if (e)
                        return e;
                    alert("Maxiumum number of items!")
                }
                static addId(e) {
                    this.avaliableIds.push(e)
                }
            }
            t.IdPool = o,
            o.avaliableIds = []
        }
        ,
        617: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.LightDarkMode = void 0,
            t.LightDarkMode = class {
            }
        }
        ,
        974: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.avaliableRGBs = void 0,
            t.avaliableRGBs = ["rgba(255, 0, 0, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(0, 0, 255, 0.5)", "rgba(255, 255, 0, 0.5)", "rgba(0, 255, 255, 0.5)", "rgba(205, 127, 50, 0.5)", "rgba(115, 147, 179, 0.5)", "rgba(255, 117, 24, 0.5)", "rgba(255, 0, 255, 0.5)", "rgba(191, 64, 191, 0.5)", "rgba(47, 197, 114, 0.5)", "rgba(255, 222, 173, 0.5)", "rgba(204, 204, 255, 0.5)", "rgba(93, 63, 211, 0.5)", "rgba(250, 128, 114, 0.5)", "rgba(0, 255, 127, 0.5)"]
        }
    }
      , t = {};
    function openVideoFromFolder(videoName) {
    // Ask for user confirmation
    const userConfirmation = confirm(`Do you want to open the video "${videoName}"?`);

    if (userConfirmation) {
        // Define the URL to the video in your GitHub repository
        const baseURL = 'https://atiwary17.github.io/time-machine2/videos/';
        const videoURL = `${baseURL}${videoName}`;
        const videoURL1 = `https://www.youtube.com/watch?v=VAdGW7QDJiU`;

        // Open the video in a new tab
        window.open(videoURL1, '_blank');
    }
    }
    
    
    function openVideoFromFolder1(videoName, winnerCallback) {
    // Define the URL to the video in your GitHub repository
    const baseURL = 'https://atiwary17.github.io/time-machine2/videos/';
    const videoURL = `${baseURL}${videoName}`;
    const videoURL3 = `https://www.youtube.com/watch?v=rFOwpX7y-rw`;

    const videoPuzzleURLs = {
        video1: 'https://puzzel.org/quiz/play?p=-NfNljz4o-HKgJ6ULm8T',
        video2: 'https://example.com/puzzle2',
        // Add more video puzzle URLs as needed
    };

    // Open the video in a new tab
    const newTab = window.open('', '_blank');

    // Create an environment for the video in the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Elegant Video Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f5f5;
                    text-align: center;
                }
                
                iframe {
                    width: 95%;
                    max-width: 800px;
                    height: 450px; /* You can adjust the height as needed */
                    display: block;
                    margin: 2em auto;
                    border: 4px solid #333;
                    border-radius: 10px;
                }
                
                h1 {
                    font-size: 24px;
                    color: #333;
                    margin: 1em 0;
                }
                
                button {
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 18px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                
                button:hover {
                    background-color: #555;
                }
            </style>
        </head>
        <body>
            <h1>Enjoy the Video</h1>
            <!-- Embed the YouTube video using an iframe -->
            <iframe src="${videoURL3}" frameborder="0" allowfullscreen></iframe>
            <button id="readyButton">I'm Ready for the Challenge</button>

            <script>
                function openPuzzle() {
                    const puzzleURL = "${videoPuzzleURLs['video1']}"; // Adjust this to the appropriate video name
                    if (puzzleURL) {
                        // Open the puzzle URL in a new tab
                        window.open(puzzleURL, '_blank');
                    } else {
                        alert('Puzzle URL not found for the selected video.');
                    }
                }

                // Add an event listener to the button to open the puzzle URL
                const readyButton = document.getElementById('readyButton');
                if (readyButton) {
                    readyButton.addEventListener('click', openPuzzle);
                }
            </script>
        </body>
        </html>
    `);
}


function openVideoFromFolder2(videoName, winnerCallback) {
    /// Define the URL to the video in your GitHub repository
    const baseURL = 'https://atiwary17.github.io/time-machine2/videos/';
    const videoURL = `${baseURL}${videoName}`;
    const videoURL1 = `https://www.youtube.com/watch?v=VAdGW7QDJiU`;
    const videoURL2 = `https://atiwary17.github.io/time-machine2/videos/KT.mp4`;
    const videoURL3 = `https://www.youtube.com/watch?v=ZyiFeREyLYo`;

    const videoURLs = {
    video1: 'https://puzzel.org/quiz/play?p=-NfNljz4o-HKgJ6ULm8T',
    video2: 'https://example.com/video2',
    // Add more video URLs as needed
};

    const videoPuzzleURLs = {
    video1: 'https://puzzel.org/quiz/play?p=-NfNljz4o-HKgJ6ULm8T',
    video2: 'https://example.com/puzzle2',
    // Add more video puzzle URLs as needed
};

    // Open the video in a new tab
    const newTab = window.open('', '_blank');

    // Create an environment for the video in the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Elegant Video Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f5f5;
                    text-align: center;
                }
                
                video {
                    width: 95%;
                    max-width: 800px;
                    display: block;
                    margin: 2em auto;
                    border: 4px solid #333;
                    border-radius: 10px;
                }
                
                h1 {
                    font-size: 24px;
                    color: #333;
                    margin: 1em 0;
                }
                
                button {
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 18px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                
                button:hover {
                    background-color: #555;
                }
            </style>
        </head>
        <body>
            <h1>Enjoy the Video</h1>
            <video id="myVideo" controls autoplay>
                <source src="${videoURL3}" type="video/mp4">
            </video>
            <button id="readyButton">I'm Ready for the Challenge</button>

        
   <script>
    function handleWinner(videoName) {
        const userConfirmation = confirm('Are you ready for the final challenge?');

        if (userConfirmation) {
            const puzzleURL = videoPuzzleURLs[videoName];
            if (puzzleURL) {
                // Open the puzzle URL in a new tab
                window.open(puzzleURL, '_blank');
            } else {
                alert('Puzzle URL not found for the selected video.');
            }
        } else {
            // Handle the user's choice here
            alert('Okay, take your time!');
        }
    }
    
    // Add an event listener to the button to play the video
    const readyButton = document.getElementById('readyButton');
    if (readyButton) {
        readyButton.addEventListener('click', function() {
            const videoElement = document.getElementById('myVideo');
            if (videoElement) {
                videoElement.play();
            }
        });
    }
</script>


        </body>
        </html>
    `);

    // Play the video automatically (by setting the autoplay attribute)
    const videoElement = newTab.document.getElementById('myVideo');
    if (videoElement) {
        videoElement.play();
    }
}

function openVideoFromFolder3(videoName, winnerCallback) {
    // Define the URL to the video in your GitHub repository
    const baseURL = 'https://atiwary17.github.io/time-machine2/videos/';
    const videoURL = `${baseURL}${videoName}`;
    const videoURL1 = `https://www.youtube.com/watch?v=VAdGW7QDJiU`;
    const videoURL2 = `${baseURL}videoplayback.mp4`;

    // Open the video in a new tab
    const newTab = window.open('', '_blank');

    // Create an environment for the video in the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Elegant Video Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f5f5;
                    text-align: center;
                }
                
                video {
                    width: 95%;
                    max-width: 800px;
                    display: block;
                    margin: 2em auto;
                    border: 4px solid #333;
                    border-radius: 10px;
                }
                
                h1 {
                    font-size: 24px;
                    color: #333;
                    margin: 1em 0;
                }
                
                button {
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 18px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                
                button:hover {
                    background-color: #555;
                }
            </style>
        </head>
        <body>
            <h1>Enjoy the Video</h1>
            <video id="myVideo" controls autoplay>
                <source src="${videoURL2}" type="video/mp4">
            </video>
            <div id="questionDiv" style="display: none;">
                <h2>Answer the Question:</h2>
                <p id="question"></p>
                <ul id="choices"></ul>
                <button id="checkAnswer">Check Answer</button>
            </div>
            <script>
                const videoElement = document.getElementById('myVideo');
                const questionDiv = document.getElementById('questionDiv');
                const questionText = document.getElementById('question');
                const choicesList = document.getElementById('choices');
                const checkAnswerButton = document.getElementById('checkAnswer');
                
                let currentVideo = '${videoName}';
                
                videoElement.addEventListener('ended', () => {
                    questionText.textContent = questions[currentVideo];
                    const choices = getChoicesForVideo(currentVideo);
                    displayChoices(choices);
                    questionDiv.style.display = 'block';
                });
                
                checkAnswerButton.addEventListener('click', () => {
                    const selectedChoice = document.querySelector('input[name="choice"]:checked');
                    if (selectedChoice) {
                        const userAnswer = selectedChoice.value;
                        const correctAnswer = getCorrectAnswerForVideo(currentVideo);
                        if (userAnswer === correctAnswer) {
                            alert('Congratulations! You are the winner!');
                            ${winnerCallback && typeof winnerCallback === 'function' ? 'winnerCallback();' : ''}
                        } else {
                            alert('Sorry, that\'s not correct. Try again.');
                        }
                    }
                });
                
                function getChoicesForVideo(video) {
                    // Define choices for each video
                    const choicesMap = {
                        'video1.mp4': ['Choice A', 'Choice B', 'Choice C'],
                        'video2.mp4': ['Choice X', 'Choice Y', 'Choice Z'],
                        'videoplayback.mp4': ['Shahrukh Khan', 'Nayantara', 'Kajol'],
                        // Add choices for each video as needed
                    };
                    return choicesMap[video];
                }
                
                function getCorrectAnswerForVideo(video) {
                    // Define correct answers for each video
                    const answersMap = {
                        'video1.mp4': 'Choice A',
                        'video2.mp4': 'Choice Y',
                        'videoplayback.mp4': 'Nayantara',
                        // Add correct answers for each video as needed
                    };
                    return answersMap[video];
                }
                
                function displayChoices(choices) {
                    choicesList.innerHTML = '';
                    choices.forEach((choice, index) => {
                        const choiceLabel = document.createElement('label');
                        choiceLabel.innerHTML = '<input type="radio" name="choice" value="' + choice + '">' + choice;
                        choicesList.appendChild(choiceLabel);
                    });
                }
            </script>
        </body>
        </html>
    `);

    // Play the video automatically (by setting the autoplay attribute)
    const videoElement = newTab.document.getElementById('myVideo');
    if (videoElement) {
        videoElement.play();
    }
}


    function o(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var l = t[a] = {
            exports: {}
        };
        return e[a](l, l.exports, o),
        l.exports
    }
    (()=>{
        const e = o(658)
          , t = o(418)
          , a = o(191)
          , n = o(497)
          , l = o(617)
          , i = o(974)
          , s = document.getElementsByClassName("add-item-button")[0]
          , r = document.querySelector("input")
          , d = document.getElementsByClassName("menu-item-list")[0]
          , c = document.getElementsByClassName("counter")[0]
          , m = document.getElementsByClassName("remove-all-items-button")[0]
          , u = document.getElementsByClassName("light-dark-mode")[0]
          , h = document.querySelector("canvas")
          , g = document.querySelector("body")
          , v = u.querySelector("img")
          , b = document.getElementsByClassName("winner")[0]
          , f = document.querySelector("footer")
          , p = document.getElementsByClassName("icons-authors")[0]
          , y = new Audio("https://atiwary17.github.io/time-machine2/static/roulette-wheel.mp3")

          , I = h.getContext("2d")
          , M = h.width / 2
          , C = h.height / 2
          , k = h.height / 2 - 5
          , P = 1e3 / 60
          , max_participants = 50
          , x = new a.ItemList(max_participants)
          , E = [];
        let B = 0;
        function L() {
            c.textContent = `${x.items.length}/max_participants`,
            c.animate([{
                transform: "scale(1.5)"
            }, {
                transform: "scale(1.00)"
            }], {
                duration: 500
            })
        }
        function w(e) {
            const t = 360 / E.length;
            let o = t + e;
            I.clearRect(0, 0, h.width, h.height),
            I.beginPath(),
            I.save(),
            I.translate(M + k + 50, C),
            I.lineTo(0, -20),
            I.lineTo(0, 20),
            I.lineTo(-50, 0),
            I.fillStyle = "#C4B454",
            I.fill(),
            I.stroke(),
            I.restore(),
            I.arc(M, C, k, 0, 2 * Math.PI),
            I.stroke();
            for (let a = 0; a < E.length; a++) {
                I.beginPath(),
                I.lineTo(M, C),
                I.font = "bold 24px verdana, sans-serif",
                I.arc(M, C, k, e * Math.PI / 180, o * Math.PI / 180),
                I.lineTo(M, C),
                I.fillStyle = x.items[a].color,
                I.fill(),
                I.save(),
                I.fillStyle = "black";
                const n = x.items[a].name;
                if (E.length > 1) {
                    const o = (e + t / 2) * Math.PI / 180
                      , a = M + Math.cos(o) * k / 2
                      , l = C + Math.sin(o) * k / 2;
                    I.translate(a, l),
                    I.rotate(Math.PI / E.length + Math.PI / 180 * e),
                    I.fillText(n, -I.measureText(n).width / 2, 0)
                } else
                    I.fillText(n, M, C);
                I.restore(),
                1 !== E.length && I.stroke(),
                e += t,
                o += t
            }
        }
        c.textContent = "0/50",
        y.volume = .2,
        l.LightDarkMode.currentMode = "dark",
        n.IdPool.initializeIdsPool(max_participants),
        s.addEventListener("click", (()=>{
            if (!_) {
                A();
                const o = r.value;
                if (o) {
                    const a = n.IdPool.getAnId();
                    if (a) {
                        r.value = "";
                        const l = i.avaliableRGBs[a % i.avaliableRGBs.length]
                          , s = new t.Item(a,o,l)
                          , c = new e.MenuItem(a,o,l);
                        c.deleteItem.el.addEventListener("click", (()=>{
                            _ || (A(),
                            c.el.remove(),
                            E.splice(E.indexOf(c), 1),
                            x.remove(s),
                            n.IdPool.addId(s.id),
                            L(),
                            w(0))
                        }
                        )),
                        function(e, t) {
                            t.el.addEventListener("click", (()=>{
                                if (!_) {
                                    const o = i.avaliableRGBs.indexOf(t.el.style.backgroundColor);
                                    if (-1 !== o) {
                                        const a = i.avaliableRGBs[(o + 1) % i.avaliableRGBs.length];
                                        t.el.style.backgroundColor = a,
                                        e.color = a,
                                        w(0)
                                    }
                                }
                            }
                            ))
                        }(s, c),
                        x.add(s),
                        E.push(c),
                        d.appendChild(c.el),
                        L(),
                        N = Math.floor(Math.random() * E.length),
                        S = 360 / E.length,
                        T = 7200 + S * N,
                        w(0)
                    }
                }
            }
        }
        )),
        g.addEventListener("keyup", (e=>{
            "Enter" === e.key && s.click()
        }
        )),
        m.addEventListener("click", (()=>{
            _ || (A(),
            E.length > 0 && (E.forEach((e=>e.el.remove())),
            E.length = 0,
            x.clear(),
            n.IdPool.initializeIdsPool(max_participants),
            L(),
            w(0)))
        }
        )),
        u.addEventListener("click", (()=>{
            v.animate([{
                transform: "rotate(360deg)"
            }], {
                duration: 500
            }),
            "dark" === l.LightDarkMode.currentMode ? (v.src = "static/sun.png",
            g.style.backgroundColor = "#FAF9F6",
            g.style.color = "black",
            l.LightDarkMode.currentMode = "light") : (v.src = "static/moon.png",
            g.style.backgroundColor = "#121212",
            g.style.color = "white",
            l.LightDarkMode.currentMode = "dark")
        }
        )),
        w(0),
        h.addEventListener("click", (function() {
            E.length > 1 && !_ && (A() ? w(0) : (y.play(),
            s.style.background = "#C0C0C0",
            m.style.background = "#C0C0C0",
            N = Math.floor(Math.random() * E.length),
            O = x.items[N].name,
            S = 360 / E.length,
            B = 0,
            T = 7200 + (E.length - 1 - N) * S + Math.random() * S,
            R = T / 50 * P,
            j()))
        }
        )),
        f.addEventListener("click", (()=>{
            p.hidden = !p.hidden
        }
        ));
        let _, O, R, N = Math.floor(Math.random() * E.length), S = 360 / E.length, T = 7200 + S * N;
        function j() {
            const e = (0,
            o = T,
            (t = B) == (a = R) ? 0 + o : o * (1 - Math.pow(2, -10 * t / a)) + 0);
            var t, o, a;
            B < R || T - e > .1 ? setTimeout((()=>{
                w(e),
                B += P,
                _ = window.requestAnimationFrame(j)
            }
            ), P) : (window.cancelAnimationFrame(_),
            _ = null,
            //b.textContent = `Winner: ${O}`,
            // Inside the 'j' function or wherever you determine the winner
            b.textContent = `Winner: ${O}`,
           
             openVideoFromFolder1(`${O}.mp4`, () => {
                                // This is the callback function to be executed when the video ends and the user confirms
                            
                                // You can add your code for the final challenge here
                            
                                // Your winner callback function can be defined and called here
                                                function winnerCallback() {
                                // Define the question related to the video
                                const question = "What was the main theme of the video?";
                            
                                // Use the prompt function to ask the question
                                const userResponse = prompt(question);
                            
                                // Check the user's response (example: assuming the correct answer is "education")
                                if (userResponse && userResponse.toLowerCase() === "education") {
                                    alert("Congratulations! You answered correctly.");
                                    // You can add code here to proceed with the final challenge
                                } else {
                                    alert("That's not the correct answer. Please review the video and try again.");
                                    // You can handle incorrect answers here
                                }
                            }
                                            
                                                // Call the winner callback function
                                                winnerCallback();
             

                    
                                                        }),

            s.style.background = "#6082B6",
            m.style.background = "#6082B6",
            b.animate({
                opacity: [.5, 1],
                easing: ["ease-in", "ease-out"]
            }, 1e3))
        }
        function A() {
            return !!O && (O = "",
            b.textContent = "",
            !0)
        }
    }
    )()
}
)();
