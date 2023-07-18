const app = Vue.createApp({
    // template: 'Hello World'
    data(){
        return{
            initialData: {
            name: 'Sylvester Ouma',
            title: 'IT Developer',
            salary: 40000
            },
            description: 'This is a sample app for the initial absolute beginner learning in Vue js',
            showDescription: true,
            showDetails: false,
            showEventBoxes: false,
            name: '',
            title: '',
            salary: 0,
            x: 0,
            y: 0,
            employee_information: 'employees.html',
            events: 'events.html',
            home: 'index.html',
            url: 'https://www.google.com',
            emp_info_summary: 'Employee Information Summary',
            show: 'Show',

            employees: [
                {name: 'Sylvester Ouma', title: 'IT Developer',salary: 40000, img: '/assets/sylvester.jpeg',isManager: false},
                {name: 'Maurice Otieno', title: 'Asst. Manager',salary: 150000, img: '/assets/maurice.jpeg',isManager: true},
                {name: 'Brian Muthura', title: 'IT Manager',salary: 350000, img: '/assets/brian.jpeg',isManager: true},
                {name: 'Joseph Njuguna', title: 'Tech Lead',salary: 25000, img: '/assets/joseph.jpeg',isManager: false},
                {name: 'Lydia Gathoni', title: 'Asst. Manager Robotics',salary: 150000, img: '/assets/lydia.jpeg',isManager: true},
                {name: 'Hussein Gari', title: 'Business Analyst',salary: 150000, img: '/assets/hussein.jpeg',isManager: false},
                {name: 'David Kirubi', title: 'System Analyst',salary: 250000, img: '/assets/david.jpeg',isManager: false},
                {name: 'Mathew Kimweli', title: 'Head of IT',salary: 450000, img: '/assets/mathew.jpg',isManager: true},
                {name: 'Bernedette Mutythia', title: 'Procurement Officer',salary: 100000, img: '/assets/bernadette.jpeg',isManager: false}
            ]
        }
    },
    methods: {
        changeDetails(){
            this.name = 'Maurice Owinyo',
            this.title = 'Ass. Manager- DevOpps',
            this.salary = 150000
        },
        changeThroughParams(name, title, salary){
            this.name = name;
            this.title = title;
            this.salary = salary
        },
        resetStaffDetails() {
            this.name = this.initialData.name;
            this.title = this.initialData.title;
            this.salary = this.initialData.salary;
        },
        toggleShowDetails(){
            this.showDetails = !this.showDetails
    
        },
        toggleShowDescription(){
            this.showDescription = !this.showDescription
            if(this.showDescription == true){
                this.show = 'Hide'
            }
        },
        handleevent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMoveEvent(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleShowEmployeeInformation(){
            this.showDetails = !this.showDetails
        },
        toggleShowBoxes(){
            this.showEventBoxes = !this.showEventBoxes
        },
        toglleIsManager(employee){
            employee.isManager = !employee.isManager
        }
    },
    computed: {
        managersOnly(){
            return this.employees.filter((employee) => employee.isManager)
        }
    }
})
app.mount('#app')