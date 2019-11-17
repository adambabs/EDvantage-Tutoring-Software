import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function PersonDto (name, id, email, availability, password) {
    this.name = name
    this.id = id
    this.email = email
    this.availability = availability
    this.password = password
    this.events = []
  }

  function SessionDto (id, isRejected, date, startTime, endTime) {
    this.id = id
    this.isRejected = isRejected
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
  }
  function TutorReviewDto (id, isRejected, date, startTime, endTime) {
    this.id = id
    this.isRejected = isRejected
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
  }

  function SchoolDto (name) {
    this.name = name
  }
  function SubjectDto (name, id) {
    this.name = name
    this.id = id
  }

  function CourseDto (number) {
    this.number = number
  }

  export default {
    name: 'eventregistration',
    data () {
      return {
        tutors: [],
        newPerson: '',
        errorPerson: '',
        response: []
      }
    },
    created: function () {
      // Initializing people from backend
        AXIOS.get(`/tutors`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tutors = response.data
        })
        .catch(e => {
          this.errorPerson = e;
        });
    },
      methods: {
        createPerson: function (personName) {
          AXIOS.post(`/tutors/`+personName, {}, {})
          .then(response => {
            // JSON responses are automatically parsed.
            this.tutors.push(response.data)
            this.newPerson = ''
            this.errorPerson = ''
          })
          .catch(e => {
            var errorMsg = e.message
            console.log(errorMsg)
            this.errorPerson = errorMsg
          });
        },
        log() {
          if(document.getElementById('name') != "" && document.getElementById('pass') != "") {
            console.log(document.getElementById('name').value);
            console.log(document.getElementById('personName').value);
              //if(document.getElementById('name').value == document.getElementById('personName').value && document.getElementById('pass').value == document.getElementById('personPassword').value) {
                  window.location.href = "/#/tutorportal/";
              //} else {
                //  alert("The username and / or password is incorrect");
              //}
          } else {
              console.log("A username and password must be present");
          }
      }
      }
      
  }

