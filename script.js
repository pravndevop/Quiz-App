// Data created for the Quizz from API
const quizzData = [
    {
        id: 1,
        answer: 3,
        question: "Which was not one of Voldemort's Horcruxes?",
        options: [
            "Harry",
            "Nagini",
            "Helga's Diadem",
            "Tom Riddle's Diary"
        ]
    },
    {
        id: 2,
        answer: 1,
        question: "Which of these are not one of Hagrid's many pets?",
        options: [
            "Grawp",
            "Fluffy",
            "Aragog",
            "Noberta"
        ]
    },
    {
        id: 3,
        answer: 3,
        question: "Which class did Severus Snape always want to teach?",
        options: [
            "Potions",
            "Charms",
            "Defense Against Dark Arts",
            "Transfiguration"
        ]
    },
    {
        id: 4,
        answer: 3,
        question: "Which Hogwarts house did Moaning Myrtle belong in?",
        options: [
            "Gryffindor",
            "Slytherin",
            "Ravenclaw",
            "Hufflepuff"
        ]
    },
    {
        id: 5,
        answer: 2,
        question: "What class did Neville end up teaching at Hogwarts?",
        options: [
            "Astronomy",
            "Herbology",
            "Charms",
            "Muggle Studies"
        ]
    }
]

// Dynamically rendered html elements from JS
function dynamicRender() {
    let data = "";
    let index = 0;
    let i = 0;
    for (x of quizzData) {
        data += `Q.${index + 1} ${x.question}<br><ul id="ul${index + 1}" class="ulQ">`;

        for (let y of x.options) {
            data += ` <li>
            <input type="radio" name="answer${index + 1}" id="${i}" class=answer>
            <label for="${i}" class="labels" id="a${i}-text">${y}</label>
        </li>`
            i++;
        }
        data += `</ul><hr class="hr">`
        index++;
    }
    document.getElementById("questions").innerHTML = data;
}
dynamicRender();

// addEventListener event is used to display result.
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", calculateMarks);

function calculateMarks() {
    let correctedAnswers = 0;
    let j = 0;
    let inp = document.getElementsByClassName("answer");
    Array.from(inp).forEach((element) => {
        if (element.checked === true) {

            if ((((element.id) % 4) + 1) == quizzData[j].answer) {
                correctedAnswers++;
                j++;
                //31332
            } else if ((((element.id) % 4) + 1) > quizzData[j].answer) {
                j++;
            } else if ((((element.id) % 4) + 1) < quizzData[j].answer) {
                j++;
            }

        }x
    })
    console.log(j);
    console.log(correctedAnswers);
    // return correctedAnswers;
    let obtainedMarks = document.getElementById("marks");
    obtainedMarks.innerHTML = `${correctedAnswers}/${quizzData.length}`;
}


