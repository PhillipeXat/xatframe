class TopSection {
    constructor(){
        this.name = document.getElementById("my-name");
    }

    InitialState() { this.name.style.display = "none"; }
    FinalState() { this.name.style.display = "flex"; }
}

class BottomSection {
    constructor(){
        this.section = document.getElementById("bottom-section");
    }

    HideSection() { this.section.style.display = "none"; }
    ShowSection() { this.section.style.display = "flex"; }
}

function MyName(){
    const name = document.getElementById("my-name");
    name.style.display = "flex";
}

var topSection = new TopSection();
topSection.InitialState();
setTimeout(function(){topSection.FinalState();}, 1000);

var bottomSection = new BottomSection();
bottomSection.HideSection();
setTimeout(function(){bottomSection.ShowSection();}, 1500);