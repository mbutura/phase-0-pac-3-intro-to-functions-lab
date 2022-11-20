function shout(arg){
    return arg.toUpperCase();
}

function whisper(arg){
    return arg.toLowerCase();
}

function logShout(arg){
    console.log(arg.toUpperCase());
}

function logWhisper(arg){
    console.log(arg.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string === "Let's have dinner together!"){
        return 'I would love to!';
    }

    if(string === string.toUpperCase()){
        return 'YES INDEED!';
    }
    
    if(string === string.toLowerCase()){
        return "I can't hear you!";
    }
}