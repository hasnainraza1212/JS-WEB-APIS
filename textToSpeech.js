const play = (text)=>{
    const mediaCreation = new SpeechSynthesisUtterance(text)
    const voices = speechSynthesis.getVoices()
    mediaCreation.voice = voices[10]
    speechSynthesis.speak(mediaCreation)
}
play("Hello its Hasnain")
