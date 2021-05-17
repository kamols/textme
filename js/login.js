var state = {
    position: 'default',
    lookingPos: 0,
    lookingDirection: 'straight',
    passType: "hidden",
    passToggleClicked: false,
    validEmail: false,
    validPass: false
}

var headWrapper = document.getElementById('headWrapper'),
    leftEye = document.getElementById('leftEye'),
    rightEye = document.getElementById('rightEye'),
    hat = document.getElementById('hat'),
    mouthWrapper = document.getElementById('mouthWrapper'),
    mouth = document.getElementById('mouth'),
    teeth = document.getElementById('teeth'),
    hat = document.getElementById('hat'),
    hair = document.getElementById('hair'),
    leftArm = document.getElementById('leftArm')
    rightArm = document.getElementById('rightArm'),
    showPass = document.getElementById('show-pass'),
    password = document.getElementById('password'),
    email = document.getElementById('email'),
    passInputWrapper = document.getElementById('passInputWrapper'),
    emailInputWrapper = document.getElementById('emailInputWrapper'),
    submitWrapper = document.getElementById('submit-wrapper'),
    eightChar = document.getElementById('eightChar'),
    oneLetter = document.getElementById('oneLetter'),
    passErrorsWrapper = document.getElementById('passErrorsWrapper')

function calcSpread(spread, maxChar, length) {
  return (spread / maxChar) * length;
}

function animateDonnie(action) {
  var self = event.target,
  emailLength = self.value.length
  emailWidth = self.offsetWidth,
  maxChar = 26 - ((300 - emailWidth)/10)

  if (state.position == 'default' && action == 'looking') {
    // Set the new State
    state.position = 'looking'
    console.log('defalut')
    // Animate Donnie to face the input
    TweenMax.to(headWrapper, .6, { x:-4,y:4})
    TweenMax.to(leftEye, .6, { x:-2,y:1})
    TweenMax.to(rightEye, .6, { x:-4,y:1})
    TweenMax.to(mouth, .6, { x:-4, y:1})
    TweenMax.to(teeth, .6, { x:-4, y:1})
    TweenMax.to(hat, .6, { x:-1, y:3})
    TweenMax.to(hair, .6, { x:-1, y:1})
  }

  if (state.position == 'looking' && action == 'looking' && emailLength < 26) {
    console.log('looking')
    TweenMax.to(headWrapper, .6, { x:-4 + calcSpread(8,maxChar,emailLength),y:4})
    TweenMax.to(leftEye, .6, { x:-2 + calcSpread(8,maxChar,emailLength),y:1})
    TweenMax.to(rightEye, .6, { x:-4 + calcSpread(8,maxChar,emailLength),y:1})
    TweenMax.to(mouth, .6, { x:-4 + calcSpread(8,maxChar,emailLength), y:1})
    TweenMax.to(teeth, .6, { x:-4 + calcSpread(8,maxChar,emailLength), y:1})
    TweenMax.to(hat, .6, { x:-1 + calcSpread(4,maxChar,emailLength), y:3})
    TweenMax.to(hair, .6, { x:-1 + calcSpread(2,maxChar,emailLength), y:1})

    state.lookingPos = emailLength
  }

  if (action == 'eyesCovered') {
    console.log('covered')
    state.position = 'eyesCovered'
    TweenMax.to(leftArm, .4, {rotation: -144, transformOrigin:"70% 0"})
    TweenMax.to(rightArm, .4, {rotation: 150, transformOrigin:"30% 0"})
  }
}

function resetDonnie() {
  var self = event.target,
      lagTime = 1

  if (self.id == 'password') lagTime = 200

  setTimeout(function(){
    if (state.position == 'eyesCovered' && self.id == 'email') return
    if (state.passToggleClicked == true) return
    // Set the new State
    state.position = 'default'

    // Animate Donnie to face the input
    TweenMax.to(headWrapper, .6, { x:0,y:0})
    TweenMax.to(leftEye, .6, { x:0,y:0})
    TweenMax.to(rightEye, .6, { x:0,y:0})
    TweenMax.to(mouth, .6, { x:0, y:0})
    TweenMax.to(teeth, .6, { x:0, y:0})
    TweenMax.to(hat, .6, { x:0, y:0})
    TweenMax.to(hair, .6, { x:0, y:0})
    TweenMax.to(leftArm, .4, {rotation: 0, transformOrigin:"70% 0"})
    TweenMax.to(rightArm, .4, {rotation: 0, transformOrigin:"30% 0"})
  }, lagTime)
}

function toggleShowPass(self) {
  state.passToggleClicked = true

  self.classList.toggle("hide");
  password.focus()

  if (state.passType == "hidden") {
    TweenMax.to(leftArm, .4, {x: -4, y: 15})
    password.type = 'text'
    state.passType = "visible"
  } else {
    TweenMax.to(leftArm, .4, {x: 0, y: 0})
    password.type = 'password'
    state.passType = "hidden"
  }

  setTimeout(function(){
    state.passToggleClicked = false
  }, 300)
}

function validate() {
  var self = event.target,
      emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
      passValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if ( self.id == 'email' && emailValid.exec(self.value) ) {
    self.classList.add("valid")
    passInputWrapper.classList.add('emailIsValid')
    emailInputWrapper.classList.add('valid')
    password.disabled = false
  } else if ( self.id == 'email' && !emailValid.exec(self.value) ) {
    self.classList.remove("valid")
    passInputWrapper.classList.remove('emailIsValid')
    emailInputWrapper.classList.remove('valid')
    password.disabled = true
  }

  if ( self.id == 'password' && passValid.exec(self.value) ) {
    state.validPass = true
    self.classList.add("valid")
    submitWrapper.classList.add('valid')
    passErrorsWrapper.classList.remove('isActive')
    passInputWrapper.classList.add('valid')
    passInputWrapper.classList.remove('invalid')
  } else if ( self.id == 'password' && !passValid.exec(self.value) ) {
    state.validPass = false
    self.classList.remove("valid")
    submitWrapper.classList.remove('valid')
    passErrorsWrapper.classList.add('isActive')
    passInputWrapper.classList.remove('valid')
    passInputWrapper.classList.add('invalid')
  }

  if ( self.id == 'password') {
    var hasOneLetter = self.value.match(/[a-z]/i),
        hasOneNumber = self.value.match(/[0-9]/i),
        overEightChar = self.value.length > 7

    hasOneLetter ? oneLetter.classList.add('valid') : oneLetter.classList.remove('valid')
    hasOneNumber ? oneNumber.classList.add('valid') : oneNumber.classList.remove('valid')
    overEightChar ? eightChar.classList.add('valid') : eightChar.classList.remove('valid')
    self.value.length > 4 ?  '' : passErrorsWrapper.classList.remove('isActive')
  } else {

  }
}

// Event Listners
email.addEventListener('keyup', function() {animateDonnie('looking')}, true)
email.addEventListener('keyup', validate, true)
email.addEventListener('focus', function() {animateDonnie('looking')}, true)
email.addEventListener('blur', resetDonnie, true)

password.addEventListener('keyup', validate, true)
password.addEventListener('focus', function(){animateDonnie('eyesCovered')}, true)
password.addEventListener('blur', resetDonnie, true)