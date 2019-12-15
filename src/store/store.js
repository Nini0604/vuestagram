import Vue from 'vue' 
import Vuex from 'vuex'
Vue.use(Vuex);

export let store = new Vuex.Store({ 
   state : {
			name : 'John Doe',
			age : '28'
		},
		//데이터 꺼내쓰는법
    getters : {
			getName (state) {
				return state.name 
			}
		},
		//데이터 가공하는법
    mutations: {
			addAge ( state ) {
				state.age++; 
			},
			changeName(state,name){
				state.name = name;
			}
		},
    actions : {
			// changeName (context) {
			// 	axios.get().then(result=>{
			// 		context.commit( "이름바꿔라" , result);
			// 	})
			// }
		} 
})