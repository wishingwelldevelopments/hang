import { createApp } from 'vue'
import App from './App.vue'
import Modal from './components/Modal.vue'
import Figure from './components/Figure.vue'

const app = createApp(App);

app.component('modal-component', Modal);
app.component('figure-component', Figure);

app.mount('#app')
