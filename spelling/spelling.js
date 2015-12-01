

function WordList(source, delimeter) {
    this.delimeter = delimeter || " ";
<<<<<<< HEAD
    this.words = source.split(this.delimeter);
    this.size = function() {
        return this.words.length
    };
    this.get = function(i) {
        return new Word(this.words[i]);
    };
    this.sort = function() {
        this.words.sort();
    }
=======
    this.words = source.split(this.delimeter);;
    this.size = function(){
        return this.words.length;
    }
    this.get= function (i) {
        return new Word(this.words[i]);
    }
    this.sort = function(){
        this.words.sort()
    }

>>>>>>> 6302dc05d626f005b89f58d9c8679d8145351faa
}

function Word(src, language) {
    this.src = src;
    this.voice = window.speechSynthesis.getVoices()[1];
    this.language = language || "en" ;
<<<<<<< HEAD
    this.translation = (this.language == 'en') ? new Word('word', 'fr') : null;
=======
    this.translation = (this.language == 'en') ? new Word('word','fr') : null;
>>>>>>> 6302dc05d626f005b89f58d9c8679d8145351faa
    this.say = function() {
        var msg = new SpeechSynthesisUtterance(this.src);
        msg.voice = this.voice;
        window.speechSynthesis.speak(msg);
<<<<<<< HEAD
    };
    this.spelledRight = function(word) {
        return word.toUpperCase() == src.toUpperCase();
    };
}

=======
    }
    this.spelledRight = function(word) {
        return word.toUpperCase() == src.toUpperCase();
    }

}
>>>>>>> 6302dc05d626f005b89f58d9c8679d8145351faa
