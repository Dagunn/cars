
function car(name, model, owner, year, price, phone, image){

  return{
 
    name, model, owner, year, price, phone, image 

  }
}

const log =(text,type,date = new Date()) => ({text, type, date})


const cars = [
car('BMW','M8 blue','Dagun', 2020, '$ 12 million', '+7962 658 66 68', 'images/M8_blue.png'),
car('BMW','M2 black','Dagun', 2020, '$ 5.18 million', '+7962 658 66 68', 'images/M2 black.png'),
car('BMW','M4 blue','Dagun', 2020,  '$ 8 million', '+7962 658 66 68', 'images/M4 blue.png'),
car('BMW','M4 white','Dagun', 2020, '$ 7 million', '+7962 658 66 68', 'images/M4.png'),
car('BMW','M5 blue','Dagun', 2020, '$ 9 million','+7962 658 66 68', 'images/M5 blue.png'),

 
]


new Vue({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],  // что бы по умолчания стояла на главной с индексом 0
    logs: [],  
    selectedCarIndex: 0,
    phoneVisible: false,
    search: '',
    modalVisible: false,
  },
  methods: {
    selectCar: function(index){
      this.car = cars[index]
      this.selectedCarIndex = index
    },
    newOrder(){
     this.modalVisible = false
     this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}`), 'ok')
    },

    buy:function buy(){
      alert('you buy this car!')
    }

    
  },

  computed: {
    phoneBtnText(){
      return this.phoneVisible ? 'Hide phone' : 'Show phone'
    },
    filteredCars(){
     return this.cars.filter(car => {
       return car.model.indexOf(this.search) > -1
     })
     
    }
  },

})