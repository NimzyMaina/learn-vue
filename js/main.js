// $(window).load(function() {
// 	//$("#loading").delay(2000).fadeOut(500);
// 	$("#loading-center").click(function() {
// 		$("#loading").fadeOut(500);
// 	})
// })

Vue.component('message',{
	props: ['title','body'],
	data() {
		return {
			isVisible: true
		}
	},
	template: `
	<article class="message" v-show="isVisible">
	<div class="message-header">
	<p>{{title}}</p>
	<button class="delete" @click="hideModal"></button>
	</div>
	<div class="message-body">
	{{ body }}
	</div>
	</article>
	`,
	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}
})

var loader = Vue.component('loader',{
	template: `
		<transition name="fade">
		<div id="loading" v-show="isLoading">
			<div id="loading-center" @click="toogleLoading">
				<div id="loading-center-absolute" >
					<div class="object" id="object_one"></div>
					<div class="object" id="object_two"></div>
					<div class="object" id="object_three"></div>
				</div>
			</div>
		</div>
		</transition>
	`,
	data() {
		return {
			isLoading: true
		}
	},
	methods: {
		toogleLoading () {		
			return this.isLoading = !this.isLoading;
		}
	}
})

Vue.component('task-list',{
	template : `
	<ul>
	<task v-for="task in tasks" :key="task.task">{{task.task}}</task>
	</ul>
	`,
	data() {
		return { 
			tasks: [
			{ task: 'Call Lolo', completed: true},
			{ task: 'Learn C#', completed: false},
			{ task: 'Learn Vuejs', completed: false},
			]
		}
	}
})

Vue.component('task',{
	template : '<li><slot></slot></li>'
})

var app = new Vue({

	el: "#app",
	data: {
		message : "hello nimzy",
		users: ['nimzy','ashley','lisa'],
		newUser: ''
	},
	methods:{
		addUser () {
			this.users.push(this.newUser);
			this.newUser = '';
		}
	},
	mounted() {
		this.$refs.load.toogleLoading()
		//this.$emit('loaded')
		//this.$children[0].toogleLoading()
	},
	computed: {
		reverseMessage(){
			return this.message.split('').reverse().join('')
		}
	},
	components: {
		'loader': loader 
	}

});